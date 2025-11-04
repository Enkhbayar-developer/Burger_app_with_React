import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import axios from "../../axios_order";
import { withRouter } from "react-router-dom";

class ContactData extends React.Component {
  state = {
    name: null,
    city: null,
    district: null,
    street: null,
    loading: false,
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  changeDistrict = (e) => {
    this.setState({ district: e.target.value });
  };

  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  ConfirmOrder = () => {
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      address: {
        name: this.state.name,
        city: this.state.city,
        district: this.state.district,
        street: this.state.street,
      },
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log("Таны захиалга амжилттай хийгдлээ!");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
        this.props.history.replace("/orders");
      });
  };

  render() {
    return (
      <div className={css.ContactData}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <input
              onChange={this.changeName}
              type="text"
              name=""
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name=""
              placeholder="Таны хот"
            />
            <input
              onChange={this.changeDistrict}
              type="text"
              name=""
              placeholder="Таны дүүрэг"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name=""
              placeholder="Таны хаяг"
            />
            <Button
              text="Илгээх"
              btnType="Success"
              clicked={this.ConfirmOrder}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.totalPrice,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps)(withRouter(ContactData));
