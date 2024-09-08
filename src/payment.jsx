import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globlValue } from "./context";

export const Payment = () => {
    const navig = useNavigate();
    const { cartSectn, payNow } = useContext(globlValue);
    const [state, setState] = useState(
        {

        }
    )
    const [payment, setPayment] = useState({
        cardName: '',
        cardNumber: '',
        cvv: '',
    });

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPayment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
            price:cartSectn.reduce((acc, item) => acc + item.price, 0),
            orderno:Math.trunc(10000000000*(Math.random(5)))

        }));
    };
    console.log(state)
    return (
        <>
            <div className="container mt-5">

                <div className="row mb-4">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="text-center">
                                <i className="fas fa-3x fa-shipping-fast text-primary mb-3"></i>
                                <h3 className="mb-3">Welcome</h3>
                                <p className="text-muted">
                                    You are 30 seconds away from completing your order!
                                </p>
                                <button
                                    className="btn btn-outline-primary btn-rounded"
                                    onClick={() => navig("/cart")}
                                >
                                    Go back to Cart
                                </button>
                            </div>

                            <div className="card p-4 shadow flex-grow-1 ms-4">
                                <h4 className="text-center mb-4">Delivery Address</h4>
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                name="name"
                                                value={state.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="City"
                                                name="city"
                                                value={state.city}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Zip Code"
                                                name="code"
                                                value={state.code}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Address"
                                                name="address"
                                                value={state.address}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">

                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={state.email}
                                                name="email"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row col-8">
                    <div className="col-md-12 offset-md-3">
                        <h5 className="mb-3">Payment Summary</h5>
                        <div className="card p-4 shadow col-12 w-100">
                            <h6 className="mb-4">
                                You have to pay:{" "}
                                <strong>
                                    ${cartSectn.reduce((acc, item) => acc + item.price, 0)}
                                </strong>
                            </h6>

                            <h5 className="mb-4">Credit Card Information</h5>

                            <form>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name on Card"
                                    name="cardName"
                                    value={payment.cardName}
                                    onChange={handlePaymentChange}
                                />

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Card Number (0000 0000 0000 0000)"
                                    name="cardNumber"
                                    value={payment.cardNumber}
                                    onChange={handlePaymentChange}
                                />

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="CVV"
                                    name="cvv"
                                    value={payment.cvv}
                                    onChange={handlePaymentChange}
                                />


                                <div className="text-end">
                                    <button className="btn btn-success me-2" onClick={(e) =>{e.preventDefault()
                                     payNow(state, payment)}}>Continue</button>
                                    <button className="btn btn-danger" type="reset">
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
