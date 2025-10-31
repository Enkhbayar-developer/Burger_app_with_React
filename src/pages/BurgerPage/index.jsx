import React from "react";

import Burger from "../../components/Burger";

import BuildControls from "../../components/BuildControls";

import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios_order";

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
    latestCustomer: null,
  };

  componentDidMount = () => {
    axios.get("/orders.json").then((response) => {
      let arr = Object.entries(response.data);
      arr = arr.reverse();
      arr.forEach((item) => {
        console.log(item[1].address.name + ": " + item[1].price + "₮");
      });
      const lastorder = arr[arr.length - 1];
      // console.log("Сүүлийн захиалга: ");
      // console.log(lastorder[1]);
      this.setState({
        ingredients: lastorder[1].ingredients,
        totalPrice: lastorder[1].price,
        latestCustomer: lastorder[1].address.name,
      });
    });
  };

  continueOrder = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      address: {
        name: "John Doe",
        city: "Ulaanbaatar",
        district: "Bayangol",
        street: "Peace avenue 123",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        alert("Таны захиалга амжилттай хийгдлээ!");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <p>Latest Customer: {this.state.latestCustomer}</p>
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
