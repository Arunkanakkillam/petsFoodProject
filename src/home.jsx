import { Navbar } from "./navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slices/ProductSlice";
import { addToCart } from "./Slices/CartSlice";

export const Home = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Products, status } = useSelector((state) => state.product)

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const fetchData = async () => {
      if (status === 'idle') {
        dispatch(fetchProduct());
      }
    };
    fetchData();
  }, [status, dispatch]);
  const cartmng=(id)=>{
    dispatch(addToCart(id));
    navigate("/cart");
  }

  return (
    <>
      <Navbar />
      <section className="d-flex justify-content-center align-items-center section-intro bg-gradient">
        <h1 className="title-text">SHOP FOR</h1>
      </section>

      <section className="d-flex justify-content-center mt-3 flex-wrap">
        <div className="card-category" onClick={() => navigate('/dog')} data-aos="zoom-in">
          <img className="category-image" src="/dog.png" alt="Dogs" />
          <h5>Dogs</h5>
          {console.log(Products)}
        </div>
        <div className="card-category" onClick={() => navigate('/cats')} data-aos="zoom-in">
          <img className="category-image" src="/cat.png" alt="Cats" />
          <h5>Cats</h5>
        </div>
      </section>

      <section className="p-5">
        <h1 className="featured-text" data-aos="fade-right">New and Featured</h1>
      </section>

      <section className="d-flex overflow-auto flex-nowrap" data-aos="fade-up">
        {Products && Products.length > 0 && Products.map((prod, index) => (
          prod.productCategoryId == 4 ? (
            <div key={index} className="featured-card">
              <img src={prod.image} alt={prod.productName} className="featured-image" />
            </div>
          ) : null
        ))}
      </section>

      <section className="mt-5 p-5">
        <h1 className="top-products-title" data-aos="fade-left">Top Products</h1>
      </section>

      <section className="d-flex flex-wrap justify-content-center" id="products" data-aos="fade-up">
        {Products && Products.length > 0 && Products.map((prod, ind) => (

          prod.productCategoryId != 4 ? (
            <div key={ind} className="product-card d-flex flex-column">
              <img src={prod.image} alt={prod.productName} className="product-image" />
              <div className="product-details flex-grow-1">
                <h4>{prod.productName}</h4>
                <p>Rs-{prod.price}</p>
              </div>
              <button className="btn btn-dark btn-add mt-auto" onClick={(e)=>{e.preventDefault() 
                cartmng(prod.productId)}}>
                Add to cart
              </button>
            </div>
          ) : null
        ))}
      </section>


      <section className="pt-5 bg-dark">
        <Footer />
      </section>
    </>
  );
};
