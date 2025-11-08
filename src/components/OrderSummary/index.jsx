import React from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд:</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн : {props.price}₮</strong>
      </p>
      <p>Та цаашаа үргэлжлүүлэх үү?</p>
      <Button clicked={props.onCancel} btnType="Danger" text="Discard" />
      <Button clicked={props.onContinue} btnType="Success" text="Continue" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    ingredientsNames: state.burgerReducer.ingredientsNames,
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(OrderSummary);
