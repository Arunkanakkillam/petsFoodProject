import React, {  useState } from 'react';
import { json, Link,useNavigate } from 'react-router-dom';



export const Signin = () => {
const[mail,setMail]=useState('')
const[passs,setPass]=useState('')


const navigate = useNavigate();

let isValid = false;

const handleSignIn = async (e) => {
    e.preventDefault()
    try{
const Valid=await fetch(`http://localhost:8000/users`)
const users=await Valid.json()
const user=users.find(user=>user.email===mail&&user.password===passs)
if(user){   
    localStorage.setItem('user',user.id) 
    navigate('/')
}
else{
    alert('please register or enter valid details')
}
    }
    catch{
        console.error("Error:", error);
        alert("Failed to login. Please try again.");
    }

}

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
