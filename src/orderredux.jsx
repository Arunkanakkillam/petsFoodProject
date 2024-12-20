
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder, razordata } from "./Slices/orderSlice";
import { toast } from "react-toastify";
import { getCart } from "./Slices/CartSlice";

export const OrderRedux = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { cart } = useSelector((state) => state.carts);
  const { status, orderid } = useSelector((state) => state.orderslice);

  const [userDetails, setUserDetails] = useState({
    User_Id:parseInt(localStorage.getItem("userid")),
    Name: "",
    Phone: 0,
    DeliveryAddres: "",
    Email:"example@gmail.com"
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
    dispatch(getCart());
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
    setUserDetails((prev) => ({ ...prev, [name]: name === "Phone" ? Number(value) : value }));
  };

  // Handle payment
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!orderid) {
      toast.error("Order ID not generated. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_bFxRHTYHAmMqLK", // Razorpay test key
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
        console.log(userDetails)
        dispatch(placeOrder(userDetails))
        nav("/order")

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
          type="text"
          name="Phone"
          value={userDetails.Phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          className="input-field"
        />
        <input
          type="text"
          name="DeliveryAddres"
          value={userDetails.DeliveryAddres}
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
