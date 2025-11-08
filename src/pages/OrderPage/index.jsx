import React, { useEffect } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order";
import Loading from "../../components/General/Spinner";
import * as actions from "../../redux/actions/orderActions";
import css from "./style.module.css";

const OrderPage = (props) => {
  useEffect(() => {
    props.loadOrders();
  }, []);

  return (
    <div>
      {props.loading ? (
        <Loading />
      ) : (
        props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
