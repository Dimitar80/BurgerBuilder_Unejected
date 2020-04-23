import React from "react";
import "./Navigationitems.css";
import Navigationitem from "../Navigationitems/Navigationitem/Navigationitem";

const navigationItems = () => (
  <ul className="Navigationitems">
    <Navigationitem link="/" active /*active={true}*/>
      Burger Builder
    </Navigationitem>
    <Navigationitem link="/">Checkout page</Navigationitem>
  </ul>
);

export default navigationItems;
