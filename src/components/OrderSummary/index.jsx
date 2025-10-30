import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";

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

export default OrderSummary;
