import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteCart, getCart, increment } from "./Slices/CartSlice";
import { motion } from "framer-motion"; 
import "bootstrap-icons/font/bootstrap-icons.css";

export const Caart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, status } = useSelector((state) => state.carts);

  useEffect(() => {
    console.log("Cart Status:", status);
    dispatch(getCart());
  }, [dispatch]);


  if (status === "idle") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  if (!cart || cart.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1 className="text-muted">YOUR CART IS EMPTY</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <section className="row">
        {cart.map((carrt, i) => (
          <motion.div
            key={i}
            className="col-md-4 col-6 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card h-100 shadow-sm product-card">
              <img
                src={carrt.image}
                alt={carrt.title}
                className="card-img-top product-image"
                loading="lazy" 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{carrt.title}</h5>
                <p className="text-secondary">
                  Rs-{carrt.total * carrt.quantity} for {carrt.quantity}
                </p>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="btn btn-outline-danger me-2"
                    onClick={() => dispatch(deleteCart(carrt.id))}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                    onClick={() => dispatch(increment(carrt.id))}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => dispatch(decrement(carrt.id))}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="text-center mt-5">
        <h4 className="text-primary">
          Total Price: Rs.
          {cart.reduce((accumulator, value) => value.total + accumulator, 0)}
        </h4>
        <button
          className="btn btn-success mt-3 btn-lg px-5"
          onClick={() => navigate("/orderredux")}
        >
          Buy Now
        </button>
      </section>
    </div>
  );
};
