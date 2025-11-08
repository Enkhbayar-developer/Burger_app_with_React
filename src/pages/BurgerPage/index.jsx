import React, { useState } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const continueOrder = () => {
    props.history.push("/ship");
    hideOrderSummary();
  };

  const showOrderSummary = () => {
    setConfirmOrder(true);
  };

  const hideOrderSummary = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal hideOrderSummary={hideOrderSummary} show={confirmOrder}>
        <OrderSummary onCancel={hideOrderSummary} onContinue={continueOrder} />
      </Modal>
      <Burger />
      <BuildControls
        hideOrderSummary={hideOrderSummary}
        showOrderSummary={showOrderSummary}
      />
    </div>
  );
};

export default BurgerPage;
