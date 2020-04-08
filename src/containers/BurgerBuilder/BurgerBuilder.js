import React from "react";
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // "this" - because i'm in method!
  //     this.state = {...};
  //   }
  //   Only using "state" is a bit modern and shorter syntax!
  //List of ingredients which starts as an object than we transforms it as an array!
  state = {
    ingredients: {
      // these keys should be identical with case names from Burgeringreedient Switch
      //Thay have to have same name and same casing
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  //Methods
  addIngredientHandler = (type) => {
    ///// EXPLICIT LOGIC!!!
    //to add ingredient we must first to know what an old ingredient count is.
    // Access firts this.state.ingredinets for the given "type"!
    const oldCount = this.state.ingredients[type];
    //Than calculate the updatedCount
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
  };

  removeIngredientHandler = (type) => {};

  render() {
    return (
      <AuxWrap>
        {/* <div>Burger component</div> */}
        <Burger ingredients={this.state.ingredients} />
        {/* <div>Build controls</div> */}
        <BuildControls />
      </AuxWrap>
    );
  }
}

export default BurgerBuilder;
