import React from "react";

import Burger from "../../components/Burger";

import BuildControls from "../../components/BuildControls";

import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends React.Component {
  state = {
    confirmOrder: false,
  };

  componentDidMount = () => {};

  continueOrder = () => {
    this.props.history.push("/ship");
    this.hideOrderSummary();
  };

  showOrderSummary = () => {
    this.setState({ confirmOrder: true });
  };

  hideOrderSummary = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
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
            />
          )}
        </Modal>
        <Burger />
        <BuildControls
          hideOrderSummary={this.hideOrderSummary}
          showOrderSummary={this.showOrderSummary}
        />
      </div>
    );
  }
}

export default BurgerPage;
