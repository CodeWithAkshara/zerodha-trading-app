import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-4">
      <div className="row text-center">
        <h1 className="mt-4 fs-2 mb-3">Open a Zerodha account</h1>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
