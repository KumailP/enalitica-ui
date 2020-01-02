import React from "react";

import "./style.scss";

export default () => {
  return (
    <div className="navbar">
      <div className="navbar-left">E</div>
      <ul className="navbar-center">
        <li>Home</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Team</li>
      </ul>
      <button className="navbar-right">Try Now</button>
    </div>
  );
};
