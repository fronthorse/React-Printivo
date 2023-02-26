import React from "react";

function Cooments() {
  return (
    <div>
      <section
        className=" pt-4 pb-5 mt-5 w-100"
        style={{ backgroundColor: "rgb(237,246,253)" }}
      >
        <div className=" pt-5 ps-5 ms-0 pb-2">
          <h1 className=" fs-5 fs-lg-3 ps-3  ps-lg-1 ms-3" id="wts">
            What Customers Say About Us 🙌🏾
          </h1>
        </div>
        <div className="container px-2 px-lg-0 overflow-hidden text-left">
          <div className="row gy-5 gx-4 row-cols-sm-1 row-cols-lg-3  row-cols-md-2">
            <div className="col-6">
              <div className="p-3 shadow-md border bg-light">
                <i className=" fs-6 border rounded-circle mx-2 bi bi-twitter p-1 text-primary "></i>
                <span className="d-inline-block">
                  <p
                    className=" fw-semibold amina "
                    style={{ color: "rgb(83,95,112)" }}
                  >
                    Amina Ebele
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      className="ms-1"
                    >
                      @DeliciousAmina
                    </a>
                  </p>
                </span>
                <div className="container">
                  <p className="ps-4 pe-2 fw-light amba">
                    I am now the unofficial
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      className="mx-1"
                    >
                      @Printivo
                    </a>
                    ambassador. What these guys just pulled to ensure I got my
                    menu cards today is stunning!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 pb- shadow-md border bg-light">
                <i className=" fs-6  bi bi-twitter p-1 text-primary mx-2 border rounded-circle "></i>
                <span className="d-inline-block">
                  <p
                    className=" fw-semibold amina "
                    style={{ color: "rgb(83,95,112)" }}
                  >
                    Oluwatosin
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      className="ms-1"
                    >
                      @tosingirlfx
                    </a>
                  </p>
                </span>
                <div className="container">
                  <p className="ps-4 pe-2 fw-light amba">
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      className="me-1"
                    >
                      @Printivo
                    </a>
                    delivered my mugs in 24hrs. Thank you so much! It's nice
                    doing business with you. More to come.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 shadow-md border bg-light">
                <i className=" fs-6  bi bi-twitter p-1 border mx-2 rounded-circle text-primary "></i>
                <span className="d-inline-block">
                  <p
                    className=" fw-semibold amina "
                    style={{ color: "rgb(83,95,112)" }}
                  >
                    Oluwatosin
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      className="ms-1"
                    >
                      @olgablark
                    </a>
                  </p>
                </span>
                <div className="container">
                  <p className="ps-4 pe-2 fw-light amba">
                    These guys
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      className="mx-1"
                    >
                      @Printivo
                    </a>
                    are really awesome and affordable. Excellent customer
                    service and delivery too. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cooments;
