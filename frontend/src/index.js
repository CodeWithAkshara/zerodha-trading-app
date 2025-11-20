import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/about" element={<AboutPage></AboutPage>} />
      <Route path="/product" element={<ProductPage></ProductPage>} />
      <Route path="/pricing" element={<PricingPage></PricingPage>} />
      <Route path="/support" element={<SupportPage></SupportPage>} />
      <Route path="/*" element={<NotFound></NotFound>} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);
