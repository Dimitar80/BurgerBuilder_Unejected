import React from "react";
import AuxWrap from "../../../hoc/AuxWrap";
import Button from "../../UI/Button/Button";

// const orderSummary = (props) => {
//   // To convert/transform in an array of keys!
//   const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
//     return (
//       <li key={igKey}>
//         {/* In inline style={{}} - The outer pair of curly braces is to mark the dynamic entry!
//           The inner pair of curly braces is simply a JS object! */}
//         <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
//         {props.ingredients[igKey]}
//       </li>
//     );
//   });
//   return (
//     <AuxWrap>
//       <h3>Your Order</h3>
//       <p>A delicious burger with the following ingredients:</p>
//       <ul>{ingredientSummary}</ul>
//       <p>
//         <strong>Total Price: {props.price.toFixed(2)}</strong>
//       </p>
//       <p>Continue to Checkout?</p>
//       <Button btnType="Danger" clicked={props.purchaseCancelled}>
//         CANCEL
//       </Button>
//       <Button btnType="Success" clicked={props.purchaseContinued}>
//         CONTINUE
//       </Button>
//     </AuxWrap>
//   );
// };

// export default orderSummary;

class OrderSummary extends React.Component {
  // I will add LifeCycle method/Hook in order to see when this actually updates
  // And also converted in class component!
  //This could be a functional component, doesn't have to be a class
  componentDidUpdate() {
    console.log("[Order Summary] Will/DidUpdate");
  }
  //This always should be updated if the Modal is shown
  render() {
    // To convert/transform in an array of keys!
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            {/* In inline style={{}} - The outer pair of curly braces is to mark the dynamic entry!
          The inner pair of curly braces is simply a JS object! */}
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <AuxWrap>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </AuxWrap>
    );
  }
}

export default OrderSummary;
