import { useState } from "react"
// import { globlValue } from "./context"




export const AdminLogin=()=>{

    // const{hndlAdmin}=useContext(globlValue)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    return(<>
          <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="card-title text-center mb-4 bg-dark text-warning">Admin</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
            </div>
             <button type="submit" className="btn btn-danger w-100" onClick={(e)=>{e.preventDefault()}} >Login</button>
        </form>
    </div>
</div>


    </>)
}  