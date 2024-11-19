import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Slices/AdminSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders, Revenue } from "./Slices/orderSlice";

export const Admin = () => {
    const { customers } = useSelector((state) => state.admin);
    const { totalRevenue,order } = useSelector((state) => state.orderslice);

    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(Revenue());
        dispatch(fetchAllOrders());
    }, [dispatch]);
    return (
        <>
            <header className="d-flex justify-content-center align-items-center bg-dark text-light py-4 shadow">
                <h1 className="m-0 display-5 fw-bold">Welcome, Admin</h1>
            </header>

            <section className="mt-5 container">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 bg-primary text-light shadow rounded text-center">
                            <h2 className="fw-bold">Manage User Details</h2>
                            <p>View and manage all user information with ease.</p>
                            <button
                                className="btn btn-outline-light mt-3 fw-bold px-4 py-2"
                                onClick={() => nav('/userManagement')}
                                style={{ transition: "0.3s" }}
                            >
                                View User Details
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center p-4 bg-light shadow rounded">
                            <img
                                src="/useradmin.png"
                                alt="Admin Icon"
                                className="me-3"
                                style={{ width: "70px" }}
                            />
                            <div>
                                <h3 className="fw-bold text-dark mb-1">Total Users</h3>
                                <p className="fs-4 text-primary fw-bold">{customers.length - 1}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 bg-success text-light shadow rounded text-center">
                            <h2 className="fw-bold">Manage Product Details</h2>
                            <p>View and manage all product-related information.</p>
                            <button
                                className="btn btn-outline-light mt-3 fw-bold px-4 py-2"
                                onClick={() => nav('/adminProduct')}
                                style={{ transition: "0.3s" }}
                            >
                                View Product Details
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center p-4 bg-light shadow rounded">
                            <img
                                src="/useradmin.png"
                                alt="Revenue Icon"
                                className="me-3"
                                style={{ width: "70px" }}
                            />
                            <div>
                                <h3 className="fw-bold text-dark mb-1">Total Revenue</h3>
                                <p className="fs-4 text-success fw-bold">{totalRevenue.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-success text-light shadow rounded text-center">
                            <h2 className="fw-bold">All orders Details</h2>
                            <p>View All Orders.</p>
                            <button
                                className="btn btn-outline-light mt-3 fw-bold px-4 py-2"
                                onClick={() => nav('/allOrder')}
                                style={{ transition: "0.3s" }}
                            >
                                View order Details
                            </button>
                        </div>

                </div>
             
            </section>
        </>
    );
};
