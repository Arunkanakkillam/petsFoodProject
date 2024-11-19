import { Navbar } from "./navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./Slices/ProductSlice";
import { addToCart } from "./Slices/CartSlice";
import { addWishlist } from "./Slices/WishlistSlice";

export const Product=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Products, status,isSearchClicked,search } = useSelector((state) => state.product)
    
  console.log(search)
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
    
    return(
        <>
         <Navbar />
         <section className="mt-5 p-5">
        <h1 className="top-products-title" data-aos="fade-left">Top Products</h1>
      </section>

      <section className="d-flex flex-wrap justify-content-center" id="products" data-aos="fade-up">
  {isSearchClicked === false ? (
    Products && Products.length > 0 && Products.map((prod, ind) =>
      prod.productCategoryId !== 4 ? (
        <div key={ind} className="product-card position-relative">
          <button className="wishlist-icon btn btn-light position-absolute top-0 end-0 m-2" onClick={()=>{dispatch(addWishlist(prod.productId))
          toast.success("item added to wishlist")
            navigate('/userWishlist')
          }}>
            <i className="bi bi-heart"></i>
          </button>

          <img src={prod.image} alt={prod.productName} className="product-image" />
          <div className="product-details flex-grow-1">
            <h4>{prod.productName}</h4>
            <p>Rs-{prod.price}</p>
          </div>
          <button
            className="btn btn-dark btn-add mt-auto"
            onClick={(e) => {
              e.preventDefault();
              cartmng(prod.productId);
            }}
          >
            Add to cart
          </button>
        </div>
      ) : null
    )
  ) : search.map((prod, ind) =>
    prod.productCategoryId !== 4 && prod.productName && prod.price && prod.image ? (
      <div key={ind} className="product-card position-relative">
       
        <button className="wishlist-icon btn btn-light position-absolute top-0 end-0 m-2" onClick={()=>{dispatch(addWishlist(prod.productId))
          toast.success("item added to wishlist")
            navigate('/userWishlist')
          }}>
          <i className="bi bi-heart"></i>
        </button>

        <img src={prod.image} alt={prod.productName} className="product-image" />
        <div className="product-details flex-grow-1">
          <h4>{prod.productName}</h4>
          <p>Rs-{prod.price}</p>
        </div>
        <button
          className="btn btn-dark btn-add mt-auto"
          onClick={(e) => {
            e.preventDefault();
            cartmng(prod.productId);
          }}
        >
          Add to cart
        </button>
      </div>
    ) : null
  )}
</section>



      <section className="pt-5 bg-dark">
        <Footer />
      </section>
        </>
    )
}