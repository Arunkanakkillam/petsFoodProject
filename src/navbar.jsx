import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useContext } from "react";
import { globlValue } from "./context";




export const Navbar = () => {  
  const {search}=useContext(globlValue)
  const navigate=useNavigate()
let log=localStorage.getItem('user')
const hndlLgout=()=>{
  localStorage.removeItem('user')
  navigate('/')
}
const hndlLogin=()=>{
navigate('/signIn')
}

  return (
    <>
      <header className="z-2">
        <nav className="navbar navbar-light bg-white col-12">
          <div className="container-fluid border-bottom">
            <div className="col-1">
              <img className="navbar-brand mb-0 col-6 " src="/petcy.png" />
            </div>

            <form className="d-flex mb-0 mx-auto col-md-5 col-12" onSubmit={(e)=>{e.preventDefault()
            search(e.target.elements.search.value)}}>
            <input className="form-control me-2 mb-0" type="search" placeholder="Search" name="search" />
            <button className="btn btn-secondary rounded" type="submit">search</button>
            </form>
            <div className="col-1">
  <div className="mb-0 mx-auto col-12 d-flex justify-content-center">
    <div className="dropdown col-sm-12">
      <div
        className="dropdown-toggle"
        id="userDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ cursor: 'pointer' }}
      >
        {log ? (
          <h6>{JSON.parse(localStorage.getItem('user')).name}</h6>
        ) : (
          <h6 className="col-sm-6 col-md-12">Login</h6>
        )}
        <img src="/user-login.png" className="col-3 col-md-3" alt="User" />
      </div>
      <ul className="dropdown-menu" aria-labelledby="userDropdown">
        {log ? (
          <>
            
            <li><a className="dropdown-item" href="/settings">Admin</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#" onClick={hndlLgout}>Logout</a></li>
          </>
        ) : (<>
           <li><a className="dropdown-item" href="#" onClick={hndlLogin}>Login</a></li>
           <li><Link to={"/adminLogin"} className="dropdown-item" href="/settings">Admin</Link></li>
        </>
        )}
      </ul>
    </div>
  </div>
</div>

            <div className="col-1" >
              <div className="mb-0 mx-auto col-11 d-flex justify-content-center">
                <div className="col-sm-10" onClick={() => log ? navigate('/cart') : 
            (alert('you need to login'),navigate('/signIn'))}>
                <h6 className="col-sm-6">Basket</h6>

                  <img src="/customer.png" className="col-8 col-md-4" />
                </div>

              </div>
            </div>
          </div>
  <section className="d-flex justify-content-center">
  <div className="d-flex justify-content-center col-6">
  <a href="#products" className="text-decoration-none">
  <img src="icons-shop.gif" className="col-6 ms-4" alt="Shop" title="Shop" />
</a>
<a href="#foot" className="text-decoration-none">              
    <img src="icons-call.gif" className="ms-3" alt="Call" title="Contact us"/>
  </a>
  <a href="/map" className="text-decoration-none">
  <img src="geography.gif" className="ms-3" alt="Map" title="Locate us"/>
</a>
 
  </div>
</section>


        </nav>
        <div className="container-fluid bg-danger-subtle d-flex justify-content-center">
                <h1>Get upto 25% cashback for your first order </h1>
            </div>
      </header>

    </>
  )


} 