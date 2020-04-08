import React from "react";
import "./Burger.css";
import BurgerIngredient from "./Burgeringridient/Burgeringredient";
// import { array } from "prop-types";

const burger = (props) => {
  //Some JS Logic before returning JSX
  //   Object Object is default JS object not provided by React!!
  //   It has a keys() - method which extract keys of a given object and turns that into an Array!
  //Gives you an Array of the keys (Strings(keys), without values)
  //Object.keys() - call!
  //Elements in this newly created Array are properties!
  //map()execute a function in every element of the array
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingKey) => {
      //   in this function i want to transform this string value into an array
      //   with as many elements as we ingedients for a given ingredient!
      //For example if we have 2 cheese ingredients i want to transform that cheese string(ingKey)
      //into an array which simply contains 2 elements. Does not metter which elements
      // if thay are two-A, two-1... but should have a lenght of TWO!

      //Spread new Array i have to construct with Array() JS method!
      //Example Arra(3) will give you array with 3 empty spaces
      //In this case will be with the amount of the given ingredient
      //   access teh given ingredient[ingKey] element
      //Than i will execute map on that array and gonna map the elements, i dont care about
      //the element it self so that is why i will use an underscore as an argument name
      //to indicate that is a blanc, The INDEX of that element is important to me
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      //adjust the reduced value by returning something...
      // loop through all the elements and simply add them to the initial value step by step
      //I'm gonna return the updated value starting with the initial one - stands stored in
      //the first argument (arr) which we will receive an each loop here.
      //arr - is always updated root array which i want to return in the end!
      return arr.concat(el);
      //arr.concat(el) takes the given element for which we are looping and add to the arr-ay
    }, []);
  //We will flatten this array to make sure we pull out the values of these inner arrays
  // and to create one array only which contains all these values.
  //reduce() is build in array function which allows us to transform an array into something else.
  //reduce- it takes function as an input, this function receives 2 arguments, passed in
  //automatically by JS! arr is previous value, el is current value!
  //This reduce method not just executes callback on this array of above logic it also
  //accepts an initial value of the reduced value - []!
  //So with that we got an Array which is empty or contains the JSX elements
  //And since it might be empty we can simply check -
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className="Burger">
      {/* Outputing list of burger ingredients */}
      <BurgerIngredient type="bread-top" />
      {/* <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" /> */}
      {transformedIngredients}
      {/* Dynamicly outputs the list of burger ingregients */}
      <BurgerIngredient type="bread-bottom" />
      {/* <BurgerIngredient type="salad" />
      <BurgerIngredient type="bacon" /> */}
    </div>
  );
};

export default burger;
