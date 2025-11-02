import React from "react";
import { Route } from "react-router-dom";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";

export class ShippingPage extends React.Component {
  state = {
    ingredients: {
      Salad: 1,
      Bacon: 1,
      Cheese: 1,
      Meat: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }
    this.setState({ ingredients });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  showContactdata = () => {
    this.props.history.push("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p>Таны захиалга:</p>
        <Burger ingredients={this.state.ingredients} />
        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="Захиалгыг цуцлах"
        />
        <Button
          clicked={this.showContactdata}
          btnType="Success"
          text="Хүргэлтийн мэдээлэлээ оруулах"
        />

        <Route path="/ship/contact" component={ContactData} />
      </div>
    );
  }
}
