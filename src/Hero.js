import React from "react";

function Hero() {
  return (
    <div>
      <section className="hero">
        <section className="hero2 d-md-flex">
          <div className="container pt-5 ms-lg-5">
            <h1 className="mt-4 quality">Quality Prints</h1>
            <h3
              className="mt-2 fs-4 fw-bold"
              style={{ color: "rgb(112, 128, 149)", fontFamily: "sans-serif" }}
            >
              Shipped to your doorstep
            </h3>

            <form className="mt-4 pt-1 form1" action="">
              <label
                className="pb-2 fw-bold"
                style={{ color: "rgb(56, 74, 98)" }}
                htmlFor="search"
              >
                What would you like to print today?
              </label>
              <div
                className="container px-2 w-100 py-3 mb-5"
                style={{ backgroundColor: "#ffff", width: "auto" }}
              >
                <input
                  className="p5 w-75 search-input fw-semibold fs-6"
                  style={{ opacity: 0.5 }}
                  type="text"
                  placeholder="Search for Business cards, T-shirts, Mugs, etc"
                />
                <a href="">
                  <button type="button" className="btn search ms-5 pe-0">
                    <i className="bi bi-search fs-4 ms-lg-5 ps-lg-3"> </i>
                  </button>
                </a>
              </div>
            </form>
          </div>
          <div className="container hand w-75 ms-2 pt-5 position-relative d-sm-none d-md-flex">
            <img
              className="w-75 mt-5 pt-5 position-absolute bottom-0 end-0"
              src="./printivo-hand.png"
              alt=""
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Hero;
