import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="pt-5 pb-3 mt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row mx-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <br></br>
          <input placeholder="Eg. How do I activate F&O, why is my order getting rejected."></input>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li>
              <a href="#" style={{ color: "white" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              {" "}
              <a href="#" style={{ color: "white" }}>
                Track segment activation
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
