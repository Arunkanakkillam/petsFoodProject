import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { globlValue } from "./context";

export const Payment = () => {

    const navig = useNavigate()
    const { cartSectn, deleteItem } = useContext(globlValue)

    return (
        <>
            <div className="row mt-3 mx-3" style={{ marginTop: '25px' }}>
                <div className="col-md-3">
                    <div style={{ marginTop: '50px', marginLeft: '10px' }} className="text-center">
                        <i
                            id="animationDemo"
                            data-mdb-animation="slide-right"
                            data-mdb-toggle="animation"
                            data-mdb-animation-reset="true"
                            data-mdb-animation-start="onScroll"
                            data-mdb-animation-on-scroll="repeat"
                            className="fas fa-3x fa-shipping-fast text-white"
                        ></i>
                        <h3 className="mt-3 text-white">Welcome</h3>
                        <p className="white-text">You are 30 seconds away from completing your order!</p>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-white btn-rounded back-button"
                            onClick={() => navig('/cart')}
                        >
                            Go back
                        </button>
                    </div>
                </div>
                <div className="col-md-9 justify-content-center">
                    <div className="card card-custom pb-4">
                        <div className="card-body mt-0 mx-5">
                            <div className="text-center mb-3 pb-2 mt-3">
                                <h4>Delivery Details</h4>
                            </div>

                            <form className="mb-0">
                                <div className="row mb-4">
                                    <div className="col">
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="text" id="form9Example1" className="form-control input-custom" />
                                            <label className="form-label" htmlFor="form9Example1">
                                                First name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="text" id="form9Example2" className="form-control input-custom" />
                                            <label className="form-label" htmlFor="form9Example2">
                                                Last name
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="text" id="form9Example3" className="form-control input-custom" />
                                            <label className="form-label" htmlFor="form9Example3">
                                                City
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="text" id="form9Example4" className="form-control input-custom" />
                                            <label className="form-label" htmlFor="form9Example4">
                                                Zip
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="text" id="form9Example6" className="form-control input-custom" />
                                            <label className="form-label" htmlFor="form9Example6">
                                                Address
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div data-mdb-input-init className="form-outline">
                                            <input type="email" id="typeEmail" className="form-control input-custom" />
                                            <label className="form-label" htmlFor="typeEmail">
                                                Email
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="float-end">
                                    <button
                                        type="submit"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-primary btn-rounded"
                                    >
                                        Place order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center">
                <h1 className="col-sm-4">You have to pay: {cartSectn.reduce((accumulator, value) => (value.price + accumulator), 0)}</h1>
                <div className="row col-sm-8">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <strong>Credit Card</strong>
                                <small>Enter your card details</small>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input className="form-control" id="name" type="text" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="ccnumber">Credit Card Number</label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="0000 0000 0000 0000"
                                                    autoComplete="email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="ccmonth">Month</label>
                                        <select className="form-control" id="ccmonth">
                                            {[...Array(12).keys()].map((m) => (
                                                <option key={m + 1}>{m + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="ccyear">Year</label>
                                        <select className="form-control" id="ccyear">
                                            {[...Array(12).keys()].map((y) => (
                                                <option key={2014 + y}>{2014 + y}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-sm-1">
                                        <div className="form-group">
                                            <label htmlFor="cvv">CVV/CVC</label>
                                            <input className="form-control" id="cvv" type="text" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-sm btn-success float-right" type="submit">
                                    <i className="mdi mdi-gamepad-circle"></i> Continue
                                </button>
                                <button className="btn btn-sm btn-danger" type="reset">
                                    <i className="mdi mdi-lock-reset"></i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
