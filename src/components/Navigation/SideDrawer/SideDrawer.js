import React from "react"; //Import React For JSX code can get compiled!!!
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import AuxWrap from "../../../hoc/AuxWrap";

const sideDrawer = (props) => {
  //Using of curly braces - Real function body: when not immidiately returning JSX code!
  //First i want to do something here...
  //I want To conditionally attach different CSS classes to make sure we place animation
  //when the drawer is shown!, Open Class for slides it IN and Close Class for slides it out!
  // const attachedClasses = ["SideDrawer", "Close"];
  let attachedClasses = ["SideDrawer", "Close"];
  //Using let for resetting!
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <AuxWrap>
      {/* <Modal /> */}
      <Backdrop
        // show /*since it is a boolean property we dont need to asign a value*/
        //Here we will bind show dinamically!
        show={props.open}
        clickClosed={props.closed}
      />
      {/* Setting Up the sideDrawer First */}
      <div /*className="SideDrawer"*/ className={attachedClasses.join(" ")}>
        {/* And since we can't pass array of strings we should pass
        a single string i will join into a single string - Joins classes with single white space
        in between the items */}
        {/* <div className="Logo"> */}
        <Logo height="11%" marginBottom="32px" />
        {/* </div> */}
        <nav>
          <Navigationitems />
        </nav>
      </div>
    </AuxWrap>
  );
};

export default sideDrawer;
