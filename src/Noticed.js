import React from "react";

function Noticed() {
  return (
    <div>
      <section
        className="px-5 py-5"
        style={{ backgroundColor: "rgb(247,246,244)" }}
      >
        <div className=" pt-5 ps-0 ms-0 pb-4">
          <h1 className="fs-3 fs-lg-3 ps-1 ps-lg-1">
            Our amazing work got noticed by:
          </h1>
        </div>
        <div className="container px-0 overflow-hidden text-left">
          <div className="row pt-0 mt-0 gy-sm-5  gx-5 row-cols-2 row-cols-lg-5  row-cols-md-3">
            <div className="col-6 pt-0 pb-5  mt-0">
              {" "}
              <img
                className="pb-2  pe-sm-5"
                src="./tech-crunch.svg"
                alt=""
              />{" "}
              <br />
              <a
                className="fw-semibold pb-5 "
                style={{ color: "rgb(83,95,112)" }}
                href=""
              >
                Read the article here
              </a>
            </div>
            <div className="col-6 pt-0 ps-sm-5 pb-5    mt-0">
              {" "}
              <img className="pb-2" src="./forbes.svg" alt="" /> <br />
              <a
                className="fw-semibold pb-5 "
                style={{ color: "rgb(83,95,112)" }}
                href=""
              >
                Read the article here
              </a>
            </div>
            <div className="col-6 pt-0 pb-5   mt-0">
              {" "}
              <img className="pb-2" src="./Techpoint.png" alt="" /> <br />
              <a
                className="fw-semibold pb-5 "
                style={{ color: "rgb(83,95,112)" }}
                href=""
              >
                Read the article here
              </a>
            </div>
            <div className="col-6 pt-0 pb-5   mt-0">
              {" "}
              <img className="pb-2" src="./techcabal.svg" alt="" /> <br />
              <a
                className="fw-semibold pb-5 "
                style={{ color: "rgb(83,95,112)" }}
                href=""
              >
                Read the article here
              </a>
            </div>
            <div className="col-6 pt-0  pb-5  mt-0">
              {" "}
              <img className="pb-2" src="./cnn.svg" alt="" /> <br />
              <a
                className="fw-semibold pb-5 "
                style={{ color: "rgb(83,95,112)" }}
                href=""
              >
                Read the article here
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Noticed;
