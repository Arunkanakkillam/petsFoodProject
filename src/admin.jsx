import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Slices/adminSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
const {customers}=useSelector(state=>state.admin);
const nav=useNavigate();
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchUsers());
},[dispatch]); 
console.log(customers);
    return (
        <>
            <header className="d-flex justify-content-center align-items-center bg-dark text-light py-4 shadow-sm">
                <h1 className="m-0">Welcome to User Credentials</h1>
            </header>

            <section className="mt-5 container">
                <div className="row align-items-center admincs">
                

                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-primary text-light shadow-sm rounded">
                            <h2>Manage User Details</h2>
                            <p>Click below to view and manage user information.</p>
                            <button className="btn btn-outline-light mt-3"onClick={()=>nav('/userManagement')}>Go to User Details</button>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="d-flex align-items-center p-4 bg-light shadow-sm rounded">
                            <img src="/useradmin.png" alt="Admin Icon" className="me-3" style={{ width: '70px' }} />
                            <div>
                                <h2 className="mb-0">Total no: of users</h2>
                                <p className="fs-4 fw-bold">{customers.length-1}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="p-4 bg-primary text-light shadow-sm rounded">
                            <h2>Manage products Details</h2>
                            <p>Click below to view and manage product information.</p>
                            <button className="btn btn-outline-light mt-3n"onClick={()=>nav('/adminProduct')}>Go to product Details</button>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};
