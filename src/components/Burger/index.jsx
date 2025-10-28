import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = (props) => {
  const transformedIngredients = Object.entries(props.ingredients);

  // console.log(transformedIngredients);

  let content = [];

  transformedIngredients.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient type={el[0]} key={`${el[0]}${i + 1}`} />);
  });

  if (content.length === 0) content = <p>Бургерийн орцоо оруулна уу!</p>;

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="BreadTop" />
      {content}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default Burger;
