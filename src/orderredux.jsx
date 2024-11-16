// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom";
// import { razordata } from "./Slices/orderSlice";
// import { toast } from "react-toastify";

// export const OrderRedux=()=>{
// const dispatch=useDispatch();
// const nav=useNavigate();    
// const {cart}=useSelector((state)=>state.carts);
// const {status,paymentverify,orderid}=useSelector((state)=>state.orderslice);
// const [userDetails, setUserDetails] = useState({
//     user_Id: 0,
//     phone: 0,
//     deliveryAddres: "",
//     name:"",
//     email:"",
//   });
// const total=cart.reduce((accum,item)=>accum+item.price*item.quantity,0);
// // useEffect(() => {
// //     const script = document.createElement("script");
// //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //     script.onerror = () => toast.error("Failed to load Razorpay script");
// //     document.body.appendChild(script);
// //     return () => document.body.removeChild(script);
// //   }, []);
// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => reject(new Error("Failed to load script"));
//       document.body.appendChild(script);
//     });
//   };
  
//   useEffect(() => {
//     loadScript("https://checkout.razorpay.com/v1/checkout.js")
//       .then(() => console.log("Razorpay script loaded"))
//       .catch(() => toast.error("Failed to load Razorpay script"));
  
//     return () => {
//       const script = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
//       if (script) document.body.removeChild(script);
//     };
//   }, []);
  

//   useEffect(() => {
//       dispatch(razordata(100));
//   }, [dispatch]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!orderid) {
//       toast.error("Order ID not generated. Please try again.");
//       return;
//     }

//     const razorpayOptions = {
//       key: "rzp_test_kSV9WHQQjaz9KF", // Razorpay test key
//       amount: total * 100,
//       currency: "INR",
//       name: "Petcy",
//       description: "Order Payment",
//       order_id: orderid,
//       prefill: { name: userDetails.name, phone: userDetails.phone },
//       theme: { color: "#000" },
//       handler: async (response) => {
//         const paymentData = {
//           razorpay_payment_id: response.razorpay_payment_id,
//           razorpay_order_id: response.razorpay_order_id,
//           razorpay_signature: response.razorpay_signature,
//         };

//         const verified = await dispatch(payment(paymentData)).unwrap();
//         if (verified) {
//           await finalizeOrder(paymentData);
//         } else {
//           toast.error("Payment verification failed.");
//         }
//       },
//     };

//     const razorpay = new window.Razorpay(razorpayOptions);
//     razorpay.open();
//   };

//   // Finalize the order
//   const finalizeOrder = async (paymentData) => {
//     const orderData = {
//       ...userDetails,
//       total,
//       orderstring: orderid,
//       transactionId: paymentData.razorpay_payment_id,
//     };

//     const response = await dispatch(placeOrder(orderData)).unwrap();
//     if (response) {
//       toast.success("Order placed successfully!");
//       navigate("/");
//     } else {
//       toast.error("Failed to place the order.");
//     }
//   };

//     return(
//         <>
//             <div className="payment-container">
//       <p className="text-center text-xl pt-10">
//       </p>
//       <form onSubmit={handlePayment} className="payment-form flex flex-col items-center gap-4 mt-10">
//         <input
//           type="text"
//           name="name"
//           value={userDetails.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required
//           className="input-field"
//         />
//         <input
//           type="number"
//           name="phone"
//           value={userDetails.phone}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//           required
//           className="input-field"
//         />
//         <input
//           type="text"
//           name="deliveryAddres"
//           value={userDetails.deliveryAddres}
//           onChange={handleChange}
//           placeholder="Enter your address"
//           required
//           className="input-field"
//         />
//         <button
//           type="submit"
//           className={`submit-button ${
//             status === "orderidgenerationpending" || status === "pwndingorderplacing" ? "disabled" : ""
//           }`}
//           disabled={status === "orderidgenerationpending" || status === "pwndingorderplacing"}
//         >
//           {status === "orderidgenerationpending" ? "Generating Order ID..." : "Proceed to Payment"}
//         </button>
//       </form>
//     </div>
//         </>
//     )
// }

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder, razordata } from "./Slices/orderSlice";
import { toast } from "react-toastify";

export const OrderRedux = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { cart } = useSelector((state) => state.carts);
  const { status, orderid } = useSelector((state) => state.orderslice);

  const [userDetails, setUserDetails] = useState({
    User_Id:localStorage.getItem("userid"),
    Name: "",
    Phone: "",
    DeliveryAddress: "",
  });

  const total = cart.reduce((accum, item) => accum + item.price * item.quantity, 0);

  // Load Razorpay script
  const loadScript = () => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="https://checkout.razorpay.com/v1/checkout.js"]`)) {
        resolve(true); // Script already loaded
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error("Failed to load Razorpay script"));
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript()
      .then(() => console.log("Razorpay script loaded successfully"))
      .catch((error) => toast.error(error.message));
  }, []);

  // Generate Order ID
  useEffect(() => {
    const generateOrder = async () => {
      try {
        const response = await dispatch(razordata(total)).unwrap();
        console.log("Order ID generated:", response);
      } catch (error) {
        toast.error("Failed to generate Order ID.");
      }
    };

    generateOrder();
  }, [dispatch, total]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle payment
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!orderid) {
      toast.error("Order ID not generated. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_kSV9WHQQjaz9KF", // Razorpay test key
      amount: total * 100,
      currency: "INR",
      name: "Petcy",
      description: "Order Payment",
      order_id: orderid,
      prefill: { name: userDetails.Name, phone: userDetails.Phone },
      theme: { color: "#000" },
      handler: async (response) => {
        console.log("Payment Response:", response);
        // Call your payment verification and order finalization logic here
        toast.success("Payment successful!");
        dispatch(placeOrder(userDetails))
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-container">
      <form onSubmit={handlePayment} className="payment-form flex flex-col items-center gap-4 mt-10">
        <input
          type="text"
          name="Name"
          value={userDetails.Name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="input-field"
        />
        <input
          type="number"
          name="Phone"
          value={userDetails.Phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          className="input-field"
        />
        <input
          type="text"
          name="DeliveryAddress"
          value={userDetails.DeliveryAddress}
          onChange={handleChange}
          placeholder="Enter your address"
          required
          className="input-field"
        />
        <button
          type="submit"
          className="submit-button"
          disabled={!orderid || status === "orderidgenerationpending"}
        >
          {status === "orderidgenerationpending" ? "Generating Order ID..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
};
