import React from "react";
import "./style.scss";

export default function index(props) {
  console.log("ACTIVE: ", props.active && props.active.title);

  return (
    <div className="sidebar">
      <div className="sidebar-top">Enalitica</div>
      <input type="text" placeholder="Search..." />
      <div className="sidebar-searchbtn">
        <button type="button">Search</button>
      </div>
      <ul className="data-list">
        {props.dataNames.map((v, i) => (
          <li
            onClick={() => props.updateActive(v)}
            className={
              props.active && props.active.title === v ? "active-li" : ""
            }
          >
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

index.defaultProps = {
  dataNames: [],
  updateActive: () => {}
};
