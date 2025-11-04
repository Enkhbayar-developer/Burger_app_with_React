import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const disabledingredients = { ...props.burgeringredient };
  for (let key in disabledingredients) {
    disabledingredients[key] = disabledingredients[key] <= 0;
  }

  let disabledInfo = true;
  {
    for (let key in disabledingredients) {
      if (!disabledingredients[key]) {
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
          removeIngredient={props.rmvIng}
          addIngredient={props.addIng}
          disabled={disabledingredients}
          type={el}
          ingredient={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showOrderSummary}
        disabled={disabledInfo}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    burgeringredient: state.ingredients,
    price: state.totalPrice,
    ingredientsNames: state.ingredientsNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIng: (Ingname) => dispatch(actions.addIngredient(Ingname)),
    rmvIng: (Ingname) => dispatch(actions.rmvIngredient(Ingname)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
