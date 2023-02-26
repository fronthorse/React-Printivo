import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="top-nav  pt-3 ps-0 pe-0">
        <div className="container ps-1">
          <div className="row justify-content-between">
            <div className="col-auto track pe-5 me-5">
              <p className="fw-semibold top-p mb-0 d-inline-block ms-0">
                Corporate Pricing
              </p>
              <p className="fw-semibold top-p mb-0 d-inline-block ms-5">
                Discover stores
              </p>
              <p className="fw-semibold top-p mb-0 d-inline-block ms-5">
                Track Orders
              </p>
            </div>
            <div className="col-auto need">
              <div className="social-links">
                <p className="fw-semibold need top-p ms-lg-5 ms-md-2 drag">
                  <span className="help"> Need help? Call: </span>
                  <a
                    style={{
                      color: "rgb(59, 166, 242)",
                      textDecoration: "none",
                    }}
                    className="top-p"
                    href=""
                  >
                    +2348091084333,
                  </a>
                  <a
                    style={{
                      color: "rgb(59, 166, 242)",
                      textDecoration: "none",
                    }}
                    className="top-p ps-1"
                    href=""
                  >
                    +2348091085333
                  </a>
                  <span className="whatsapp">
                    <a href="">
                      <img className="px-5" src="../whatsapp.svg" alt="" />
                    </a>
                  </span>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "rgb(112, 128, 149)",
                    }}
                    href=""
                  >
                    <span className="rounded-pill pill-span px-2 py-2">
                      <img className="ps-1 pe-1" src="../Nigeria.svg" alt="" />
                      Nigeria
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
