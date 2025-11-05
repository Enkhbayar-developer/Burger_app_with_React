import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";

class ShippingPage extends React.Component {
  CancelOrder = () => {
    this.props.history.goBack();
  };

  showContactdata = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p>Таны захиалга:</p>
        <p>Нийт дүн: {this.props.price}</p>
        <Burger />
        <Button
          clicked={this.CancelOrder}
          btnType="Danger"
          text="Захиалгыг цуцлах"
        />
        <Button
          clicked={this.showContactdata}
          btnType="Success"
          text="Хүргэлтийн мэдээлэлээ оруулах"
        />

        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
