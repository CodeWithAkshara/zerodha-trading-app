import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-4">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero Image" className="mb-5"></img>
        <h1 className="mt-4 fs-2 mb-3">Invest in everything</h1>
        <p className="mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-1 btn btn-primary fs-5"
          style={{ width: "17%", height: "40px", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
