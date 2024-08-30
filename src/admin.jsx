export const Admin=()=>{
    return(<>
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
                    required
                />
            </div>
             <button type="submit" className="btn btn-primary w-100" onClick={handleSignIn}>Login</button>
            <p className='w-100'>Don't have an acoount? <Link to={'/register'}>Register</Link></p>
        </form>
    </div>
</div>


    </>)
}  