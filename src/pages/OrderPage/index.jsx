import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";
import Loading from "../../components/General/Spinner";
import Order from "../../components/Order";
import css from "./style.module.css";

class OrderPage extends React.Component {
  componentDidMount() {
    this.props.loadOrders();
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Loading />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

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
