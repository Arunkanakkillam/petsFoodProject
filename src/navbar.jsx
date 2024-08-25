import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Navbar=()=>{
 
    return (
        <>
<header>
  <nav className="navbar navbar-light bg-light col-12">
    <div className="container-fluid">
        <div className="col-1">
        <img className="navbar-brand mb-0 col-6" src="/petcy.png"></img>
        </div>
     
      <form className="d-flex mb-0 mx-auto col-md-5 col-12">
        <input className="form-control me-2 mb-0" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <Link to={'/signIn'} className="col-3">
        <div className="mb-0 d-flex mx-auto col-12">
          <div className="col-sm-6">
          <h6 className="col-sm-6 col-md-12">sign in</h6>
          <img src="/signin.png" className="col-sm-2 col-md-0"></img>
          </div>
      
      </div>
      </Link>
      <Link className="col-3">
      <div  className="mb-0 d-flex mx-auto col-12">
        <div className="col-sm-4">
        <h6 className="col-sm-6">Basket</h6>
        <img src="/cart.png" className="col-8 col-md-4"></img>
        </div>
      
      </div>
      </Link>
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