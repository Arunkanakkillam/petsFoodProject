import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteWishlist, getWishlist } from "./Slices/WishlistSlice";

export const Wishlist=()=>{
const dispatch=useDispatch();
console.log(useSelector((state)=>state.wishlists));
const {wishlist}=useSelector((state)=>state.wishlists)

useEffect(()=>{
    dispatch(getWishlist());
},[dispatch]);



    return (
        <div>
            {wishlist == null || wishlist.length == 0 ? <div className="d-flex justify-content-center"><h1>YOUR WISHLIST IS EMPTY</h1></div> :
                (<>
                    <section className="d-flex overflow-auto flex-nowrap">
                        {wishlist.map((item, i) => (
                            <div key={i} className="card col-md-4 col-6 m-3 mt-3" id="products1">
                                <img src={item.image}className="col-12 card" />
                                <h6>{item.title}</h6>
                               
                                { <p>Rs-{item.price}</p>}
                                <div>
                                    {console.log(item.productId)}
                                    <button type="button" className="btn btn-danger m-3" onClick={() => dispatch(deleteWishlist(item.productId))}>
                                        <i className="bi-trash"></i> Delete
                                    </button>
                                    
                                </div>
                            </div>
                        ))}
                    </section>
                </>
                )
            }

        </div>
    )

}