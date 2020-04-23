import React from "react";
import "./Modal.css";
import AuxWrap from "../../../hoc/AuxWrap";
import Backdrop from "../Backdrop/Backdrop";
// it's gonna be functional component
// will receive props
// without State
// and will return JSX

// const modal = (props) => (
//   // Modal will be div it which wraps it self around any content
//   //props.childre can be anything!
//   //-Our own components, text, paragraph... It's totally up to us how we use the Modal
//   //We can pass anything there!
//   <AuxWrap>
//     <Backdrop show={props.show} clicked={props.modalClosed} />
//     <div
//       className="Modal"
//       style={{
//         transform: props.show ? "translateY(0)" : "translateY(-100vh)",
//         opacity: props.show ? "1" : "0",
//       }}
//       // vh-is special unit which means viewport height
//     >
//       {props.children}
//     </div>
//   </AuxWrap>
// );

// export default modal;

class Modal extends React.Component {
  // THIS WILL ONLY UPDATES IF SHOW CHANGES!
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show) {
    //   //this.props.show is previous state!
    //   return true;
    //Or simply:
    return nextProps.show !== this.props.show;
  }

  componentDidMount() {
    console.log("[Modal] Will/DidUpdate");
  }
  render() {
    return (
      <AuxWrap>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          // vh-is special unit which means viewport height
        >
          {this.props.children}
        </div>
      </AuxWrap>
    );
  }
  // Modal will be div it which wraps it self around any content
  //props.children can be anything!
  //-Our own components, text, paragraph... It's totally up to us how we use the Modal
  //We can pass anything there!
}

export default Modal;
