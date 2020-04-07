import React from "react";
import "./Burger.css";
import BurgerIngredient from "./Burgeringridient/Burgeringredient";

const burger = (props) => {
  //Some JS Logic before returning JSX
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" />
      {/* <BurgerIngredient type="salad" />
      <BurgerIngredient type="bacon" /> */}
    </div>
  );
};

export default burger;
