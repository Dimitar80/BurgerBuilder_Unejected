import React from "react";
import "./Toolbar.css"; /* This always imports strings-dynamically created CSS classNames!*/
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

//We will also triger the SideDrawer from the Toolbar(here) in the end!
const toolbar = (props) => (
  //Toolbar is the header of my web application
  <header className="Toolbar">
    {/* Here we will have MENU button */}
    {/* In Layout component is created connection from Toolbar TO SideDrawer */}
    {/* aka MENU - Hamburger Menu! */}
    <DrawerToggle clicked={props.drawerToggleClicked} />
    {/* I'm gonna outsource Menu in its own component */}
    {/* <div className="Logo"> */}
    <Logo height="80%" />
    {/* </div> */}
    <nav className="DesktopOnly">
      {/* <ul>...</ul> */}
      <Navigationitems />
    </nav>
  </header>
);

export default toolbar;
