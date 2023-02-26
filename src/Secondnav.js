import React from "react";

function Secondnav() {
  return (
    <div>
      <nav className="navbar top2 navbar-expand-lg sticky-top  pt-4">
        <div className="container">
          <a className="navbar-brand logo" href="#">
            <img src="./site-logo.svg" alt="" />
          </a>
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
            <ul className="navbar-nav ms-auto top-p top-p2 fw-bold">
              <li className="nav-item">
                <a
                  style={{ color: "rgb(112, 128, 149)" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  style={{ color: "rgb(112, 128, 149)" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  All Products
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  style={{ color: "rgb(112, 128, 149)" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Become a Reseller
                </a>
              </li>
              <li className="nav-item me-4 ms-2">
                <a
                  style={{ color: "rgb(112, 128, 149)" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Cost Calculator
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "rgb(217, 147, 140)" }}
                >
                  Sign in
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  style={{ color: "rgb(112, 128, 149)" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Create Account
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#">
                  <img src="./cart.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Secondnav;
