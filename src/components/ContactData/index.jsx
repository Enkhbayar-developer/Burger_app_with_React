import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";

class ContactData extends React.Component {
  state = {
    name: null,
    city: null,
    district: null,
    street: null,
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

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }

  ConfirmOrder = () => {
    const newOrder = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      address: {
        name: this.state.name,
        city: this.state.city,
        district: this.state.district,
        street: this.state.street,
      },
    };
    this.props.saveOrderAction(newOrder);
    // this.setState({ loading: true });
  };

  render() {
    return (
      <div className={css.ContactData}>
        <div>
          {this.props.newOrderStatus.error &&
            `Захиалгыг хадгалах явцад алдаа гарлаа : ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
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
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
