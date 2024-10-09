import { Navbar } from "./Navbar";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { globlValue } from "./context";
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";
import AOS from 'aos';  // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS CSS

export const Home = () => {
  const [data, setData] = useState([]);
  const [sttc, setSttc] = useState([]);
  const { addtoCrt } = useContext(globlValue);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products');
        const res = await axios.get('http://localhost:8000/sttcProducts');
        setData(response.data);
        setSttc(res.data);
      } catch (error) {
        console.error("error in fetching data");
      }
    };
    fetchData();
  }, []);

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
        {sttc.map((product) => (
          <div key={product.id} className="featured-card">
            <img src={product.img} alt={product.title} className="featured-image" />
          </div>
        ))}
      </section>

      <section className="mt-5 p-5">
        <h1 className="top-products-title" data-aos="fade-left">Top Products</h1>
      </section>

      <section className="d-flex flex-wrap justify-content-center" id="products" data-aos="fade-up">
  {data.map((product) => (
    <div key={product.id} className="product-card d-flex flex-column">
      <img src={product.imgSrc} alt={product.title} className="product-image" />
      <div className="product-details flex-grow-1">
        <h4>{product.title}</h4>
        <p>Rs-{product.price}</p>
      </div>
      <button className="btn btn-dark btn-add mt-auto" onClick={() => addtoCrt(product)}>
        Add to cart
      </button>
    </div>
  ))}
</section>


      <section className="pt-5 bg-dark">
        <Footer />
      </section>
    </>
  );
};
