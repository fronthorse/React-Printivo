import React from "react";

function Brands() {
  return (
    <div>
      {" "}
      <section className="container pt-5 " style={{ backgroundColor: "#ffff" }}>
        <div className=" pt-5 ps-0 ms-0 pb-5">
          <h1 className="fs-3 fs-lg-3 ps-3 ps-lg-1">
            Nigeria’s No. 1 online print shop 👑
          </h1>
        </div>
        <h3
          className="mt-2 fs-5 fw-bold"
          style={{ color: "rgb(112, 128, 149)", fontFamily: "sanSerif" }}
        >
          Our print services and solutions are trusted by these brands and{" "}
          <br /> over 15,000 other businesses in Nigeria.
        </h3>
        <img className="pe-5 pt-3 pb-5 w-100 " src="./brands.png" alt="" />
      </section>
    </div>
  );
}

export default Brands;
