import React from "react";
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchaseable: false,
    purchasing: false,
  };

  //updatePurchaseState is Helper Method
  updatePurchaseState(ingredients) {
    //These "ingredience" argument is are updated inredients from:
    //addIngredientHandler and removeIngredientHandler!!!

    //This ingredients that i'm analyzing is an old state here!
    //Copy of original state ingridients to check them
    // const ingredients = {
    //   ...this.state.ingredients,
    // };

    // const bum = Object.keys(ingredients);
    // console.log(bum);
    //Converting ingredients object to an Array
    //This will create an array of string entries
    //The sum represents the TOTAL AMOUNT od ingredients

    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        // console.log("ingredients", ingredients[ingKey]);
        return ingredients[ingKey];
        //This returns new value and replace old  value which was teh property name-salad and so on...
        //Here I simply return ingredients and the value for the given key
        //and this will be the amount "ingredients[ingKey]"", with this notation[ingKey]
        //im accessing the certain property of the ingredients object, ingKey is salad, bacon...
        //and im basically getting their values-numbers, that is what i return for each key!
        //Now i have an array of values!!!
        //Now all i need to do is to call reduce method, not to flatten but
        //To turn this array into a single number THE SUM OF ALL INGREDIENTS!
        //For that i will have the starting number of 0 than we have a function which is executed
        // on each element in this mapped array.
        //In this function i get the new sum and the individual element.
        //Keep in mind sum is constantly updated current sum up until the current iteration
        //where this function is executed and once this function is executed on all array elements
        //sum is the final result!!!
      })
      .reduce((sum, el) => {
        // returns current sum + element, el is the value we accessed in ingredients["ingKey"]!
        // console.log(el);
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 }); //This is true or false
    // console.log(sum);
  }

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
    // console.log(priceAddition);
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients); //call for method
  };

  removeIngredientHandler = (type) => {
    ///// EXPLICIT LOGIC!!! (Nevertheless it can be done in few lines!)
    //to add ingredient we must first to know what an old ingredient count is.
    // Access firts this.state.ingredinets for the given "type"!
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      // return <p>Burger is empty, there is nothing to be removed!</p>;
      return;
    }
    //Than calculate the updatedCount -deduction
    const updatedCount = oldCount - 1;
    //Than update the ingredients - state should be updated in a unmutable way!
    const updatedIngredients = {
      //spread operator to distribute the properties of the old ingredients state into
      //the new object
      ...this.state.ingredients,
    };
    //Taking the updatedIngredints object, access the type for which i have to update the ingr.
    //and set the count(the value) which is just the amount of the ingredients = to updated
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type]; //for a given type
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  //New Handler/Method for:
  //This Method will only work with "this" only if i attach as an arrow function to a property!
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    //"this" refers to the class, not to the something else!
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You continue!");
  };

  render() {
    const disabledInfo = {
      // First with the rest operator we should distribute (copy in an  Immutable way) the ingredients
      ...this.state.ingredients,
    };
    // console.log(disabledInfo);

    //Loop through all the keys in disabledInfo
    for (let key in disabledInfo) {
      //key = salad, meat, bacon  and so on...
      //And i will simply check if it is <=0?
      //And i will update disabledInfo
      disabledInfo[key] = disabledInfo[key] <= 0;
      //the rigth side of equation will check if it's true or false(value of that key)
      //and will update in our copied object-above(disabledInfo)
      //with that we can pass the disabledInfo to the BuildControls component below!
      // console.log(disabledInfo[key]);
    }
    //This is what happens in this restructured object
    //The structure of disabledInfo is basically of that form: {salad: true, bacon: false, ...}
    //If its true it should be disabled and conversely(the other way round)
    //We need to access the information for a given type of ctrl
    //and thanfully we know that "type" in <BuildControls/> component because we are looping
    //through "controls" wher we are storing that "type" and using it(type) for
    //adding and removing elements and Here also to access the dissabledInfo!!!
    // let a = 0;

    //////TESTTISSSS//////
    // for (let i = 0; i < INGREDIENT_PRICES.length; i++) {
    //   console.log(INGREDIENT_PRICES.length);
    // }
    // console.log(INGREDIENT_PRICES.salad);

    ///////TESTIS//////
    // for (let key in INGREDIENT_PRICES) {
    //   console.log(INGREDIENT_PRICES[key]);
    // }
    ///////TESTIS//////

    return (
      <AuxWrap>
        {/* <div>Burger component</div> */}
        {/* WRAPPING ELEMENT-IN THIS CASE "MODAL" CONTROLS THE UPDATING OF THE
        WRAPED ELEMENT-"OrderSummary" !!! */}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {/* show property here binds Modal to "purchasing" for condition
          If only purchasing is true The Modal should be visible!  */}
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        {/* <div>Build controls</div> */}
        {/* refference to this.addIngredientHandler where is being executed than
        i expect to get type as an argument! which is why i'm passing it
        as an argument in BuildControls on => BuildControl component in inline fn */}
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ingPrices={INGREDIENT_PRICES}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </AuxWrap>
    );
  }
}

export default BurgerBuilder;
