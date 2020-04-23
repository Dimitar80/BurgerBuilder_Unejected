import React from "react";
import "./Navigationitem.css";

const navigationItem = (props) => (
  <li className="Navigationitem">
    <a href={props.link} className={props.active ? "NavigationAlt" : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
