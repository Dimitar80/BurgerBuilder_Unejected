import React from "react";
import AuxWrap from "../AuxWrap";
// import classes from "./Layout.css";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// const layout = (props) => (
//   // Aux-iliary - Wrapping root element
//   //   (We are fulfilling the requirement of wrapping with root element)
//   <AuxWrap>
//     {/* <div className="Content">
//       Placeholder for: Toolbar, SideDrawer, Backdrop
//     </div> */}
//     <Toolbar />
//     <SideDrawer />
//     <main /*className={classes.Content}*/ className="Content">
//       {props.children}
//     </main>
//   </AuxWrap>
// );

//Turning the layout component to class in order to create connection
//from Toolbar to SideDrawer in the end, because here in the Layout we are
//using both components!
//Here (in Layout) we can implement the method, so that we can listen to both,
//The SideDrawer can closing it self by clickiing on the Backdrop as well
//Toolbar opening the SideDrawer by clicking on that toggle button!

// class and extends - are the keywords by the way!
class Layout extends React.Component {
  state = {
    //should contain the information if the SideDrawer is visible or not - boolean!
    showSideDrawer: true,
    // show: true,
  };
  // Implementing method with using syntax where Assigning ES6 Arrow function to a property,
  //So the 'this' keyword inside this method will refer to the class at all times
  sideDrawerClosedHandler = () => {
    // this.setState({ show: false });
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    // Here i will write logic to Toggle the displaying state of the SideDrawer
    // Because setState has asynchronuous nature, using 'state' in setState
    // I WILL USE FUNCTION  for setting the "state" when it depends on the old state-clear way!
    this.setState((previousState) => {
      return { showSideDrawer: !previousState.showSideDrawer };
    });
  };

  render() {
    //in "return we are returning JSX"
    return (
      // Aux-iliary - Wrapping root element
      //   (We are fulfilling the requirement of wrapping with root element)
      <AuxWrap>
        {/* <div className="Content">
      Placeholder for: Toolbar, SideDrawer, Backdrop
    </div> */}
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          /*Just passing reference of this method, never execute-()!*/
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main /*className={classes.Content}*/ className="Content">
          {this.props.children}
        </main>
      </AuxWrap>
    );
  }
}
//Due to naming convetion for class-es starts with "capital"
export default Layout;
