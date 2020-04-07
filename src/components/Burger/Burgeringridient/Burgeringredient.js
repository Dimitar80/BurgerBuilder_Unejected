import React from "react";
// I'm importing React because i'm gonna write JSX code
// Using Curly Braces because i'm gonna return some logic before reuturn some JSX
import "./Burgeringredient.css";
import PropTypes from "prop-types";
// import { render } from "react-dom";

class BurgerIngredient extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className=".Seeds1"></div>
            <div className=".Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      //default case is in case something incorrect is passed in!!!
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

// propTypes Validation
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;

// const burgerIngredient = (props) => {
//   let ingredient = null;

//   switch (props.type) {
//     case "bread-bottom":
//       ingredient = <div className="BreadBottom"></div>;
//       break;
//     case "bread-top":
//       ingredient = (
//         <div className="BreadTop">
//           <div className=".Seeds1"></div>
//           <div className=".Seeds2"></div>
//         </div>
//       );
//       break;
//     case "meat":
//       ingredient = <div className="Meat"></div>;
//       break;
//     case "cheese":
//       ingredient = <div className="Cheese"></div>;
//       break;
//     case "salad":
//       ingredient = <div className="Salad"></div>;
//       break;
//     case "bacon":
//       ingredient = <div className="Bacon"></div>;
//       break;
//     //default case is in case something incorrect is passed in!!!
//     default:
//       ingredient = null;
//   }
//   return ingredient;
// };

// export default burgerIngredient;
