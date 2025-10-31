import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>Name: {props.order.address.name}</p>
      <p>City: {props.order.address.city}</p>
      <p>District: {props.order.address.district}</p>
      <p>street: {props.order.address.street}</p>
      <p>Bacon: {props.order.ingredients.Bacon}</p>
      <p>Meat: {props.order.ingredients.Meat}</p>
      <p>Salad: {props.order.ingredients.Salad}</p>
      <p>Cheese: {props.order.ingredients.Cheese}</p>
      <p>Price: {props.order.price}</p>
    </div>
  );
};

export default Order;
