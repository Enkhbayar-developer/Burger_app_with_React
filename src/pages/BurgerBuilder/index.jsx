import React from "react";

import Burger from "../../components/Burger";

import BuildControls from "../../components/BuildControls";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
  };

  AddIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };

  RemoveIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;
    this.setState({ ingredients: newIngredients });
  };

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          AddIngredient={this.AddIngredient}
          RemoveIngredient={this.RemoveIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
