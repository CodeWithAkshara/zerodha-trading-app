import React from "react";

function RightSection({ imageURL, productName, productDescription, link }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="p-2 mt-5">{productName}</h1>
          <p className="fs-5 p-2">{productDescription}</p>
          <a className="p-2" href={link}>
            {link} →
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
