import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register=()=>{
const navigate=useNavigate()
const[mail,setMail]=useState('')
const[pass,setPass]=useState('')
const [confirmPass,setConfirmPass]=useState('')


let isValid=false
const validate=(e)=>{
    const a=mail.split('')
if(a.filter((v)=>v=='@')!=[]&&pass.length>=6 && pass==confirmPass){
    isValid=true
}
    e.preventDefault()
    if(mail&&pass&&isValid==true){

        localStorage.setItem(pass,JSON.stringify({mail,pass}))
        
        navigate('/signIn')
    }
    else{
        alert('enter valid mail-id or password')
    }
}

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
            <h3 className="card-title text-center mb-4">REGISTER</h3>
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
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwrd"
                        placeholder="Enter your password"
                        value={confirmPass}
                        onChange={(e)=>setConfirmPass(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={validate}>Submit</button>
            </form>
        </div>
    </div>
    )
}