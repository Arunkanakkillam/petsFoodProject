import { useEffect } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategoryId } from "./Slices/ProductSlice";
import { addToCart } from "./Slices/CartSlice";

export const Cats = () => {
  const { category } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByCategoryId({ CategoryId: 3, pageno: 1, pagesize: 2 }));
  }, [dispatch]);

  const cartmng = (id) => {
    dispatch(addToCart(id));
    navigate("/cart");
  };

  const goNext = () => {
    dispatch(fetchByCategoryId({ CategoryId: 3, pageno: 2, pagesize: 2 }));
  };

  return (
    <>
      <Navbar />
      <section className="product-section py-5">
        <h1 className="text-center text-gradient mb-5">Explore Cat Products</h1>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {category.map((product, ind) => (
            <div key={ind} className="card product-card">
              <img
                src={product.image}
                className="product-image"
                alt={product.productName}
              />
              <h4 className="product-title">{product.productName}</h4>
              <p className="product-price">Rs-{product.price}</p>
              <button
                className="btn btn-custom"
                onClick={() => cartmng(product.productId)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center my-4">
        <button className="btn btn-next" onClick={goNext}>
          Next
        </button>
      </div>
      <section className="pt-5 bg-dark">
        <Footer />
      </section>
    </>
  );
};
