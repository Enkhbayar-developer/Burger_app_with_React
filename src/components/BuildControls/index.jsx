import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  let disabledInfo = true;
  {
    for (let key in props.disabledingredients) {
      if (!props.disabledingredients[key]) {
        disabledInfo = false;
        break;
      }
    }
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Нийт үнэ: <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          removeIngredient={props.RemoveIngredient}
          addIngredient={props.AddIngredient}
          disabled={props.disabledingredients}
          type={el}
          ingredient={props.ingredientsNames[el]}
        />
      ))}

      <button disabled={disabledInfo} className={css.OrderButton}>
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
