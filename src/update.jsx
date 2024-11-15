import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById, updateProduct } from "./Slices/ProductSlice";

export const Update = () => {
    const { Id } = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { productById, status } = useSelector(state => state.product);

    const [product, setProduct] = useState({
        ProductName: "",
        Price: "",
        IsAvailable: true,
        ProductDescription: "",
        ProductCategoryId: "",
        ProductId: "",
        Quandity: "",
        Image: null,
        img: "",  
    });

    useEffect(() => {
      
        dispatch(fetchProductById(Id));
    }, [dispatch, Id]);

    useEffect(() => {
        if (status === "succeeded" && productById) {
            setProduct({
                ProductName: productById.productName,
                Price: productById.price,
                IsAvailable: true, 
                ProductDescription: productById.productDescription || "",
                ProductCategoryId: productById.productCategoryId,
                ProductId: productById.productId,
                Quandity: productById.quandity,
                Image: null,  
                img: productById.image || "", 
            });
        }
    }, [status, productById]);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(Id, product));
        nav('/adminProduct'); 
    };

  
    if (status === "loading") {
        return <h1>Loading...</h1>;
    }

    if (status === "failed" || !productById) {
        return <h1>Product not found</h1>;
    }

    return (
        <section className="d-flex justify-content-center align-center mt-5">
            <form
                className="d-flex justify-content-center flex-column col-4 p-5 bg-dark text-white"
                onSubmit={handleSubmit}
            >
                <h3>Update Product</h3>
                <label htmlFor="title">Product Title</label>
                <input
                    type="text"
                    value={product.ProductName}
                    onChange={(e) => setProduct({ ...product, ProductName: e.target.value })}
                    placeholder="Product Title"
                    required
                />
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    value={product.Price}
                    onChange={(e) => setProduct({ ...product, Price: e.target.value })}
                    placeholder="Price"
                    required
                />
                <label htmlFor="imgSrc">Image</label>
                <input
                    type="file"
                    onChange={(e) => setProduct({ ...product, img: e.target.files[0] })}
                    required
                />
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    value={product.ProductCategoryId}
                    onChange={(e) => setProduct({ ...product, ProductCategoryId: e.target.value })}
                    placeholder="Category"
                    required
                />
                <button className="btn btn-success mt-5 rounded" type="submit">Submit</button>
            </form>
        </section>
    );
};
