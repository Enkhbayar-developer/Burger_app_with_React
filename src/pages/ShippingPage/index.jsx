import React from "react";
import { Route } from "react-router-dom";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";

export class ShippingPage extends React.Component {
  state = {
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    price: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] !== "dun") ingredients[param[0]] = param[1];
      else price = param[1];
    }
    this.setState({ ingredients, price });
  }

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
        <p>Нийт дүн: {this.state.price}</p>
        <Burger ingredients={this.state.ingredients} />
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
          <ContactData
            ingredients={this.state.ingredients}
            price={this.state.price}
          />
        </Route>
      </div>
    );
  }
}
