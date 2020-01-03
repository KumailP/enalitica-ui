import React from "react";
import "./style.scss";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import About from "../../components/About";

export default () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};
