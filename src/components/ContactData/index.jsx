import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/actions/orderActions";

const ContactData = (props) => {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  const [street, setStreet] = useState(null);

  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      props.history.replace("/orders");
    }
  });

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const changeDistrict = (e) => {
    setDistrict(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const ConfirmOrder = () => {
    const newOrder = {
      userId: props.userId,
      ingredients: props.ingredients,
      price: props.price,
      address: {
        name: name,
        city: city,
        district: district,
        street: street,
      },
    };
    props.saveOrderAction(newOrder);
    // setState({ loading: true });
  };

  return (
    <div className={css.ContactData}>
      <div>
        {props.newOrderStatus.error &&
          `Захиалгыг хадгалах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <>
          <input
            onChange={changeName}
            type="text"
            name=""
            placeholder="Таны нэр"
          />
          <input
            onChange={changeCity}
            type="text"
            name=""
            placeholder="Таны хот"
          />
          <input
            onChange={changeDistrict}
            type="text"
            name=""
            placeholder="Таны дүүрэг"
          />
          <input
            onChange={changeStreet}
            type="text"
            name=""
            placeholder="Таны хаяг"
          />
          <Button text="Илгээх" btnType="Success" clicked={ConfirmOrder} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupReducer.userId,
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
