import React from "react";

import Burger from "../../components/Burger";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      Salad: 1,
      Bacon: 2,
      Cheese: 3,
      Meat: 2,
    },
  };

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <div>Ingredients control</div>
      </div>
    );
  }
}

export default BurgerBuilder;
