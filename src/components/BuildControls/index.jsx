import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl
      removeIngredient={props.RemoveIngredient}
      addIngredient={props.AddIngredient}
      type="Salad"
      ingredient="Салад"
    />
    <BuildControl
      removeIngredient={props.RemoveIngredient}
      addIngredient={props.AddIngredient}
      type="Meat"
      ingredient="Мах"
    />
    <BuildControl
      removeIngredient={props.RemoveIngredient}
      addIngredient={props.AddIngredient}
      type="Cheese"
      ingredient="Бяслаг"
    />
    <BuildControl
      removeIngredient={props.RemoveIngredient}
      addIngredient={props.AddIngredient}
      type="Bacon"
      ingredient="Гахайн мах"
    />
  </div>
);

export default BuildControls;
