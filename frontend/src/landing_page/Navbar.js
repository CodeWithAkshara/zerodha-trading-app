import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#FFF",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            src="media/logo.svg"
            alt="logo"
            style={{ width: "25%", marginLeft: "25px" }}
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#666666" }}
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#666666" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#666666" }}
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#666666" }}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#666666" }}
                  to="/support"
                >
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  style={{ color: "#666666" }}
                  to="/"
                >
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
