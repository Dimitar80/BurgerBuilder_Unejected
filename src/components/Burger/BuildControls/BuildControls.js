import React from "react";
// importing React because it will return JSX code!
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

// const controls = [
//   { label: "Salad", type: "salad" },
//   { label: "Bacon", type: "bacon" },
//   { label: "Cheese", type: "cheese" },
//   { label: "Meat", type: "meat" },
// ];

const buildControls = (props) => {
  //I will use div to give this area some styling
  //and in there i want to have my various build controls.
  //   console.log([props.ingPrices]);

  let itemPrice = [];
  for (let key in props.ingPrices) {
    itemPrice.push(props.ingPrices[key]);
    // console.log(itemPrice);
  }

  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];
  return (
    <div className="BuildControls">
      <p /*id="uniSt"*/>
        {/* //We can call toFixed() to fix it to 2 decimal places Total Current */}
        Price: <strong>{props.price.toFixed(2)} $</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            // ceni={props.ingPrices.map((cena) => cena)}

            // type={ctrl.type} - It is unnecessary extra loop!
            // added={props.ingredientAdded}
            //  We can omit that and Instead i'll pass it as ES6 inline arrow function,
            // execute props.ingredientsAdded and than simply pass back ctrl.type!
            //I have an access to ctrl.type because we are looping through controls with
            //controls.map!
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} //i now want to access to "disabled" information
            //for a given ctrl.type!
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {/* with ! - disabled is set to true */}
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
