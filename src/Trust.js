import React from "react";

function Trust() {
  return (
    <div>
      <section className=" pt-4 pb-5 mt-5 w-100">
        <div className=" pt-5 ps-5">
          <h1 className=" fs-5 fs-lg-3 ps-3   ps-lg-1 ms-3 wts">
            You can count on us for:
          </h1>
        </div>
        <div className="   ms-0 px-5 py-0 overflow-hidden text-left">
          <div className="row gy-5 gx-4 pt-0 row-cols-sm-1 row-cols-lg-3  row-cols-md-2">
            <div className="col-6 pt-1 mt-0">
              <div className="p-3  pt-0">
                <div
                  className="  d-inline-block ps-0"
                  style={{ width: "maxContent" }}
                >
                  <img className="mb-5 pb-5" src="./clock.svg" alt="" />{" "}
                  <span className="d-inline-block">
                    <p
                      className=" fw-semibold amina pt-0 ps-0 mt-5 pb-0"
                      style={{ color: "rgb(83,95,112)" }}
                    >
                      Fast Turnaround Within Days
                    </p>
                    <p
                      className="mt-0 pt-o"
                      style={{ marginTop: -20, color: "rgb(83,95,112)" }}
                    >
                      Your order gets to you within 3-
                      <br /> 7 working days via DHL or our <br /> very own
                      Printivo Direct.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 pt-1 mt-0">
              <div className="p-3  pt-0">
                <div
                  className="  d-inline-block ps-0"
                  style={{ width: "maxContent" }}
                >
                  <img className="mb-5 pb-5" src="./shield.svg" alt="" />{" "}
                  <span className="d-inline-block">
                    <p
                      className=" fw-semibold amina pt-0 ps-0 mt-5 pb-0"
                      style={{ color: "rgb(83,95,112)" }}
                    >
                      100% Top Quality
                    </p>
                    <p
                      className="mt-0 pt-o"
                      style={{ marginTop: -20, color: "rgb(83,95,112)" }}
                    >
                      Only the finest materials, <br />
                      machines and people will be
                      <br /> involved in fulfilling your order.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 pt-1 mt-0">
              <div className="p-3  pt-0">
                <div
                  className="  d-inline-block ps-0"
                  style={{ width: "maxContent" }}
                >
                  <img className="mb-5 pb-5" src="./wallet.svg" alt="" />{" "}
                  <span className="d-inline-block">
                    <p
                      className=" fw-semibold amina pt-0 ps-0 mt-5 pb-0"
                      style={{ color: "rgb(83,95,112)" }}
                    >
                      Affordable Services
                    </p>
                    <p
                      className="mt-0 pt-o"
                      style={{ marginTop: -20, color: "rgb(83,95,112)" }}
                    >
                      All products are adequately <br />
                      priced to ensure you get value <br /> priced to ensure you
                      get value
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trust;
