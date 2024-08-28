import { useContext } from "react"
import { globlValue } from "./context"
import { useNavigate } from "react-router-dom"



export const Caart = () => {

    const { cartSectn, deleteItem } = useContext(globlValue)
    const navigate = useNavigate()

    return (
        <>
            {cartSectn == null || cartSectn.length == 0 ? <h1>YOUR CART IS EMPTY</h1> :
                (<>
                    <section className="d-flex overflow-auto flex-nowrap">
                        {cartSectn.map((carrt, i) => (
                            <div key={i} className="card col-md-4 col-6 m-3 mt-3">
                                <div className="card-body">
                                    <h6>{carrt.title}</h6>
                                    <img src={carrt.imgSrc} className="col-11" />
                                    <p>Rs-{carrt.price}</p>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteItem(i)}>
                                        <i className="bi-trash"></i> Delete
                                    </button>
                                </div>
                            </div>

                        ))}

                    </section>
                    <section>
                        <div className="m-3">
                            <h4>total price:{cartSectn.reduce((accumulator, value) => (value.price + accumulator), 0)}</h4>
                            <button onClick={() => navigate('/payment')}>
                                Buy now
                            </button>
                        </div>
                    </section>
                </>
                )
            }

        </>
    )
}