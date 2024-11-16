import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { decrement, deleteCart, getCart, increment } from "./Slices/CartSlice";



export const Caart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart, status } = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    if (status === "loading") {
        return <div className="d-flex justify-content-center"><h1>Loading cart...</h1></div>;
    }


    return (
        <div>
            {cart == null || cart.length == 0 ? <div className="d-flex justify-content-center"><h1>YOUR CART IS EMPTY</h1></div> :
                (<>
                    <section className="d-flex overflow-auto flex-nowrap">
                        {cart.map((carrt, i) => (
                            <div key={i} className="card col-md-4 col-6 m-3 mt-3" id="products1">
                                <img src={carrt.image}className="col-12 card" />
                                <h6>{carrt.title}</h6>
                               
                                { <p>Rs-{carrt.total*carrt.quantity} for {carrt.quantity}</p>}
                                <div>

                                    <button type="button" className="btn btn-danger m-3" onClick={() => dispatch(deleteCart(carrt.id))}>
                                        <i className="bi-trash"></i> Delete
                                    </button>
                                    <button type="button" className="btn btn-danger m-3" onClick={() => dispatch(increment(carrt.id))}>
                                        <i className="bi-trash"></i> +
                                    </button>
                                    <button type="button" className="btn btn-danger m-3" onClick={() => dispatch(decrement(carrt.id))}>
                                        <i className="bi-trash"></i> -
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section>
                        <div className="m-3">
                            <h4>total price:{cart.reduce((accumulator, value) => (value.total + accumulator), 0)}</h4>
                            <button onClick={() => navigate('/orderredux')}>
                                Buy now
                            </button>
                        </div>
                    </section>
                </>
                )
            }

        </div>
    )
}