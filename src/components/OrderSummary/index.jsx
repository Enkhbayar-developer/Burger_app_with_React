import React from "react";
import css from "./style.module.css";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>ingredients</h3>
      <p>Ingredient1</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>Continue for checkout?</p>
    </div>
  );
};

export default OrderSummary;
