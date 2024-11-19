import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useDispatch } from "react-redux";
import { searchProduct } from "./Slices/ProductSlice";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const log = localStorage.getItem("name");

  const hndlLgout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    toast.success("Logout successful!");
    navigate("/");
  };

  const hndlLogin = () => {
    navigate("/signIn");
  };

  const nm = localStorage.getItem("name");

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient shadow-sm">
        <div className="container-fluid py-2">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img className="logo me-2" src="/petcy.png" alt="Logo" />
            <span className="text-light fs-4 fw-bold">Petcy</span>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link text-light" to="/map">
                <img src="/geography.gif" className="icon-img" alt="Map" title="Locate us" />                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/product">
                    <img src="/icons-shop.gif" className="icon-img" alt="Shop" title="Shop" />
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#foot">
                 <img src="/icons-call.gif" className="icon-img" alt="Call" title="Contact us" />
                </a>
              </li>
            </ul>

            <form
              className="d-flex mx-auto col-md-6 col-12"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(searchProduct(e.target.elements.search.value));
                navigate("/product");
              }}
            >
              <input
                className="form-control rounded-pill px-3"
                type="search"
                placeholder="Search for products"
                name="search"
              />
              <button className="btn btn-primary rounded-pill ms-2" type="submit">
                Search
              </button>
            </form>

            <div className="d-flex align-items-center">
              <div className="dropdown me-3">
                <div
                  className="dropdown-toggle d-flex align-items-center text-light"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  {log ? (
                    <span className="me-2">{nm}</span>
                  ) : (
                    <span className="me-2">Login</span>
                  )}
                  <img src="/user-login.png" className="icon-img" alt="User" />
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  {log ? (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/settings">
                          {nm}
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-danger"
                          href="#"
                          onClick={hndlLgout}
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <a className="dropdown-item" href="#" onClick={hndlLogin}>
                        Login
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div
                className="basket-icon me-3"
                onClick={() =>
                  log
                    ? navigate("/cart")
                    : (alert("You need to login"), navigate("/signIn"))
                }
                style={{ cursor: "pointer" }}
              >
                <img src="/customer.png" className="icon-img" alt="Basket" />
              </div>

              <div>
                {log ? (
                  <div
                    className="fas fa-heart text-danger fs-4"
                    onClick={() => navigate("/userWishlist")}
                    style={{ cursor: "pointer" }}
                  ></div>
                ) : (
                  <i
                    className="fas fa-heart text-muted fs-4"
                    style={{ cursor: "pointer" }}
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Offer Section */}
      <div className="container-fluid text-center bg-warning py-2">
        <h1 className="fs-5 fw-bold text-dark">
          🎉 Get up to <span className="text-danger">25%</span> cashback on your first order!
        </h1>
      </div>
    </header>
  );
};
