import React from "react";

import Burger from "../../components/Burger";

import BuildControls from "../../components/BuildControls";

import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const ingredientsPrices = {
  Salad: 500,
  Bacon: 700,
  Cheese: 600,
  Meat: 1500,
};

const ingredientsNames = {
  Bacon: "Гахайн мах",
  Cheese: "Бяслаг",
  Meat: "Мах",
  Salad: "Салад",
};

class BurgerPage extends React.Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 1000,
    confirmOrder: false,
  };

  continueOrder = () => {
    alert("You continue!");
  };

  showOrderSummary = () => {
    this.setState({ confirmOrder: true });
  };

  hideOrderSummary = () => {
    this.setState({ confirmOrder: false });
  };

  AddIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const priceAddition = ingredientsPrices[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ totalPrice: newPrice });
    this.setState({ ingredients: newIngredients });
  };

  RemoveIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;
    const priceDeduction = ingredientsPrices[type];
    const newPrice = this.state.totalPrice - priceDeduction;
    this.setState({ totalPrice: newPrice });
    this.setState({ ingredients: newIngredients });
  };

  render() {
    const disabledingredients = { ...this.state.ingredients };
    for (let key in disabledingredients) {
      disabledingredients[key] = disabledingredients[key] <= 0;
    }
    return (
      <div>
        <Modal
          hideOrderSummary={this.hideOrderSummary}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onCancel={this.hideOrderSummary}
            onContinue={this.continueOrder}
            price={this.state.totalPrice}
            ingredientsNames={ingredientsNames}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          hideOrderSummary={this.hideOrderSummary}
          showOrderSummary={this.showOrderSummary}
          ingredientsNames={ingredientsNames}
          price={this.state.totalPrice}
          disabledingredients={disabledingredients}
          AddIngredient={this.AddIngredient}
          RemoveIngredient={this.RemoveIngredient}
        />
      </div>
    );
  }
}

export default BurgerPage;
