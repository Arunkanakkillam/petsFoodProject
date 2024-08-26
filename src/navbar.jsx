import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




export const Navbar = () => {
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
      <header>
        <nav className="navbar navbar-light bg-light col-12">
          <div className="container-fluid">
            <div className="col-1">
              <img className="navbar-brand mb-0 col-6" src="/petcy.png" />
            </div>

            <form className="d-flex mb-0 mx-auto col-md-5 col-12">
              <input className="form-control me-2 mb-0" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div  className="col-3">
              <div className="mb-0 d-flex mx-auto col-12">
                <div className="col-sm-6">
                  {log?<h6 className="col-sm-6 col-md-12"onClick={hndlLgout}>Logout</h6>:<h6 className="col-sm-6 col-md-12" onClick={hndlLogin}>Login</h6>}
                  <img src="/signin.png" className="col-sm-2 col-md-0" />
                </div>

              </div>
            </div>
            <div className="col-3" >
              <div className="mb-0 d-flex mx-auto col-12">
                <div className="col-sm-4">
                  <h6 className="col-sm-6">Basket</h6>
                  <img src="/cart.png" className="col-8 col-md-4" />
                </div>

              </div>
            </div>
          </div>
          <section>
            <div className="row">

            </div>
          </section>
        </nav>
      </header>

    </>
  )


} 