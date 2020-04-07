import React from "react";
import Aux from "../../hoc/AuxWrap";
// import classes from "./Layout.css";
import "./Layout.css";

const layout = (props) => (
  // Aux-iliary - Wrapping root element
  //   (We are fulfilling the requirement of wrapping with root element)
  <AuxWrap>
    <div /*className="Content"*/>
      Placeholder for: Toolbar, SideDrawer, Backdrop
    </div>
    <main /*className={classes.Content}*/ className="Content">
      {props.children}
    </main>
  </AuxWrap>
);

export default layout;
