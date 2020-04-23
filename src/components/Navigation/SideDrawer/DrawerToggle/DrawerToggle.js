import React from "react";
import "./DrawerToggle.css";

const drawerToggle = (props) => (
  <div className="DrawerToggle" onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
// clicked binded to properties holds a reference to the method which
// should get executed on a onClick!

export default drawerToggle;
