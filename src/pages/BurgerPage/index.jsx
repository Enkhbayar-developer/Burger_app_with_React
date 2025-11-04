import React from "react";
import { connect } from "react-redux";

import Burger from "../../components/Burger";

import BuildControls from "../../components/BuildControls";

import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";
import axios from "../../axios_order";
import * as actions from "../../redux/actions/burgerActions";

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
    confirmOrder: false,
  };

  componentDidMount = () => {};

  continueOrder = () => {
    const params = [];

    for (let ing in this.props.burgeringredient) {
      params.push(ing + "=" + this.props.burgeringredient[ing]);
    }

    params.push("dun=" + this.props.total);

    const query = params.join("&");

    this.props.history.push({
      pathname: "/ship",
      search: query,
    });
    this.hideOrderSummary();
  };

  showOrderSummary = () => {
    this.setState({ confirmOrder: true });
  };

  hideOrderSummary = () => {
    this.setState({ confirmOrder: false });
  };

  AddIngredient = (type) => {
    const newIngredients = { ...this.props.burgeringredient };
    newIngredients[type]++;
    const priceAddition = ingredientsPrices[type];
    const newPrice = this.props.total + priceAddition;
    this.setState({ totalPrice: newPrice });
    this.setState({ ingredients: newIngredients });
  };

  RemoveIngredient = (type) => {
    const newIngredients = { ...this.props.burgeringredient };
    newIngredients[type]--;
    const priceDeduction = ingredientsPrices[type];
    const newPrice = this.props.total - priceDeduction;
    this.setState({ totalPrice: newPrice });
    this.setState({ ingredients: newIngredients });
  };

  render() {
    const disabledingredients = { ...this.props.burgeringredient };
    for (let key in disabledingredients) {
      disabledingredients[key] = disabledingredients[key] <= 0;
    }
    return (
      <div>
        <Modal
          hideOrderSummary={this.hideOrderSummary}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.hideOrderSummary}
              onContinue={this.continueOrder}
              price={this.props.total}
              ingredientsNames={ingredientsNames}
              ingredients={this.props.burgeringredient}
            />
          )}
        </Modal>
        <Burger ingredients={this.props.burgeringredient} />
        <BuildControls
          hideOrderSummary={this.hideOrderSummary}
          showOrderSummary={this.showOrderSummary}
          ingredientsNames={ingredientsNames}
          price={this.props.total}
          disabledingredients={disabledingredients}
          AddIngredient={this.props.addIng}
          RemoveIngredient={this.props.rmvIng}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burgeringredient: state.ingredients,
    total: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIng: (Ingname) => dispatch(actions.addIngredient(Ingname)),
    rmvIng: (Ingname) => dispatch(actions.rmvIngredient(Ingname)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);
