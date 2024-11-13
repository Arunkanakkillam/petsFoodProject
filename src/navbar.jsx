import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { useContext } from "react";
// import { globlValue } from "./context";

export const Navbar = () => {
  // const { search } = useContext(globlValue);
  const navigate = useNavigate();
  let log = localStorage.getItem('name');

  const hndlLgout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    navigate('/');
  };

  const hndlLogin = () => {
    navigate('/signIn');
  };
  const nm=localStorage.getItem("name");
  return (
    <>
      <header className="z-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient text-white col-12 p-2">
          <div className="container-fluid border-bottom">
            <Link className="navbar-brand" to="/">
              <img className="logo" src="/petcy.png" alt="Logo" />
            </Link>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <form
                className="d-flex mx-auto col-md-5 col-12"
                onSubmit={(e) => {
                  e.preventDefault();
                  search(e.target.elements.search.value);
                }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  name="search"
                />
                <button className="btn btn-primary" type="submit">Search</button>
              </form>

              <div className="col-auto">
                <div className="dropdown">
                  <div
                    className="dropdown-toggle d-flex align-items-center"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ cursor: 'pointer' }}
                  >
                    {log ? (
                      <span className="me-2">{nm}</span>
                    ) : (
                      <span className="me-2">Login</span>
                    )}
                    <img src="/user-login.png" className="icon-img" alt="User" />
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    {log ? (
                      <>
                        <li><Link className="dropdown-item" to="/settings">{nm}</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#" onClick={hndlLgout}>Logout</a></li>
                      </>
                    ) : (
                      <>
                        <li><a className="dropdown-item" href="#" onClick={hndlLogin}>Login</a></li>
                        <li><Link className="dropdown-item" to="/adminLogin">Admin</Link></li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className="basket-icon d-flex align-items-center"
                  onClick={() =>
                    log ? navigate('/cart') : (alert('You need to login'), navigate('/signIn'))
                  }
                >
                  <span className="d-none d-md-inline">Basket</span>
                  <img src="/customer.png" className="icon-img" alt="Basket" />
                </div>
              </div>
            </div>
          </div>

        
          <div className="container-fluid d-flex justify-content-center mt-2">
            <Link to="#products" className="mx-3">
              <img src="icons-shop.gif" className="icon-img" alt="Shop" title="Shop" />
            </Link>
            <Link to="#foot" className="mx-3">
              <img src="icons-call.gif" className="icon-img" alt="Call" title="Contact us" />
            </Link>
            <Link to="/map" className="mx-3">
              <img src="geography.gif" className="icon-img" alt="Map" title="Locate us" />
            </Link>
          </div>

          <div className="container-fluid bg-warning d-flex justify-content-center animated-section">
            <h1>Get up to 25% cashback on your first order!</h1>
          </div>
        </nav>
      </header>
    </>
  );
};
