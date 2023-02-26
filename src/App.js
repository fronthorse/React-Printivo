import logo from "./logo.svg";
import React from "react";
import Navbar from "./Navbar";
import Secondnav from "./Secondnav";
import Hero from "./Hero";
import Products from "./Products";
import Cartegories from "./Cartegories";
import Brands from "./Brands";
import Cooments from "./Cooments";
import Trust from "./Trust";
import Noticed from "./Noticed";
import Resources from "./Resources";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Secondnav />
      <Hero />
      <Products />
      <Cartegories />
      <Brands />
      <Cooments />
      <Trust />
      <Noticed />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
