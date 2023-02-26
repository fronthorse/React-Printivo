import React from "react";

function Cartegories() {
  return (
    <div>
      <section className="container pt-5" style={{ backgroundColor: "#ffff" }}>
        <div className="d-flex container justify-content-between pt-5 ps-0 ms-0">
          <h1 className="fs-4 fs-lg-3 ps-3 ps-lg-1">Popular Categories</h1>
          <a style={{ textDecoration: "none" }} href="">
            <h3
              className="fs-6 fw-semibold mt-2"
              style={{ color: "rgb(221, 127, 129)", fontFamily: "sanSerif" }}
            >
              See All Categories
            </h3>
          </a>
        </div>

        <div className="container text-left ps-0">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-5 g-md-3">
            <div className="col">
              <a style={{ textDecoration: "none" }} className="" href="">
                <div className="card pb-2 shadow-lg">
                  <img
                    src="./christmas.png"
                    className="w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-semibold pb-3 fs-6"
                      style={{ color: "rgb(56, 74, 98)" }}
                    >
                      Greeting Cards
                    </h5>
                    <p
                      className="card-text starting fw-semibold lh-lg pb-4"
                      style={{ color: "rgb(112, 128, 149)" }}
                    >
                      STARTING AT <br />
                      <strong
                        style={{ color: "rgb(56, 74, 98)" }}
                        className="fs-5 fw-semibold"
                      >
                        ₦15,000
                      </strong>
                      per 50
                    </p>
                    <div className="container p-0">
                      <a
                        href="#"
                        className="button btn px-3 fw-semibold fs-6 py-0 text-light"
                      >
                        Browse Greeting Car...{" "}
                        <span className="fs-4 arrow"> ›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a style={{ textDecoration: "none" }} className="" href="">
                <div className="card pb-2 shadow-lg">
                  <img
                    src="./mariam.png"
                    className="w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-semibold pb-3 fs-6"
                      style={{ color: "rgb(56, 74, 98)" }}
                    >
                      Stickers
                    </h5>
                    <p
                      className="card-text starting fw-semibold lh-lg pb-4"
                      style={{ color: "rgb(112, 128, 149)" }}
                    >
                      STARTING AT <br />
                      <strong
                        style={{ color: "rgb(56, 74, 98)" }}
                        className="fs-5 fw-semibold"
                      >
                        ₦4,949
                      </strong>
                      per 75
                    </p>
                    <div className="container p-0">
                      <a
                        href="#"
                        className="button btn px-3 fw-semibold fs-6 py-0 text-light"
                      >
                        Browse Stickers <span className="fs-4 arrow"> ›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a style={{ textDecoration: "none" }} className="" href="">
                <div className="card pb-2 shadow-lg">
                  <img
                    src="./crystal.png"
                    className="w-100 card-image"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-semibold pb-1 fs-6"
                      style={{ color: "rgb(56, 74, 98)" }}
                    >
                      Round Stickers (3.5" Diameter)
                    </h5>
                    <p
                      className="card-text starting fw-semibold lh-lg pb-4"
                      style={{ color: "rgb(112, 128, 149)" }}
                    >
                      STARTING AT <br />
                      <strong
                        style={{ color: "rgb(56, 74, 98)" }}
                        className="fs-5 fw-semibold"
                      >
                        ₦9,900
                      </strong>
                      per 100
                    </p>
                    <div className="container p-0">
                      <a
                        href="#"
                        className="button btn px-3 fw-semibold fs-6 py-0 text-light"
                      >
                        Browse Round Sticke...{" "}
                        <span className="fs-4 arrow"> ›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div />
        </div>
      </section>
    </div>
  );
}

export default Cartegories;
