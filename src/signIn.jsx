import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginCustomer } from './Slices/LoginSlice';



export const Signin = () => {
const[mail,setMail]=useState('')
const[passs,setPass]=useState('')

const dispatch=useDispatch();
const{login,status}=useSelector((state)=>state.logins);
const navigate = useNavigate();

const handleSignIn = async (e) => {
    e.preventDefault()
   dispatch(loginCustomer({email:mail,password:passs}));
//    console.log(login);
    // if(loginCustomer.fulfilled.match(rsp)){
    //     const{token,name}=rsp.payload;
    //     localStorage.setItem("token",token)
    //     localStorage.setItem("name",name)
    //     toast.success("login successfull");
    //     navigate("/");
    // }
    
}
if(login)
    {
        localStorage.setItem("token",login.token);
        localStorage.setItem("name",login.name);
        localStorage.setItem("userid",login.user_Id);
        toast.success("login successfull");
        if(localStorage.getItem("name")=="Admin User"){
            navigate("/admin");
        }
        else{
            navigate("/");
        }
        
    }
    console.log(login)

    return (

        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="card-title text-center mb-4">Login</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={passs}
                            onChange={(e)=>setPass(e.target.value)}
                            required
                        />
                    </div>
                     <button type="submit" className="btn btn-primary w-100" onClick={handleSignIn}>Login</button>
                    <p className='w-100'>Don't have an acoount? <Link to={'/register'}>Register</Link></p>
                </form>
            </div>
        </div>
       
    )
}
