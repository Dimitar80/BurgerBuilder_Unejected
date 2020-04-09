import React from "react";
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

//Global constant/let(var) is tipically written with ALL Capital Letters!!!
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};
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
    totalPrice: 4, // Base price - arbitrary
  };

  //Methods
  addIngredientHandler = (type) => {
    ///// EXPLICIT LOGIC!!! (Nevertheless it can be done in few lines!)
    //to add ingredient we must first to know what an old ingredient count is.
    // Access firts this.state.ingredinets for the given "type"!
    const oldCount = this.state.ingredients[type];
    //Than calculate the updatedCount
    const updatedCount = oldCount + 1;
    //Than update the ingredients - state should be updated in a unmutable way!
    const updatedIngredients = {
      //spread operator to distribute the properties of the old ingredients state into
      //the new object
      ...this.state.ingredients,
    };
    //Taking the updatedIngredints object, access the type for which i have to update the ingr.
    //and set the count(the value) which is just the amount of the ingredients = to updated
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]; //for a given type
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
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
