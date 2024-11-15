import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, fetchProduct } from "./Slices/ProductSlice";
import { useNavigate } from "react-router-dom";

export const AdminProducts = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { Products } = useSelector(state => state.product);
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);
    function handleClick(productId) {
        console.log("dfdshfvsd")
        nav(`/update/${productId}`)
    }
    return (
        <>
            <section className="p-5">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th><h3>Product name</h3></th>
                            <th><h3>Price</h3></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Products.map((value, index) => (
                            value.productCategoryId != 4 ?
                                <tr key={index}>
                                    <td>
                                        <img className="col-2 " src={value.image} />
                                    </td>
                                    <td className="col-8">
                                        {value.productName}
                                    </td>
                                    <td>
                                        {value.price}
                                    </td>
                                    <td><button className="btn btn-danger" onClick={() => dispatch(deleteProduct(value.productId))}>Delete</button></td>
                                    <td><button className="btn btn-info" onClick={()=>handleClick(value.productId)} >Update</button></td>
                                </tr>
                                : null

                        )
                        )}
                    </tbody>

                </table>
            </section>
        </>
    )
}