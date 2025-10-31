import React from "react";
import axios from "../../axios_order";
import Loading from "../../components/General/Spinner";
import Order from "../../components/Order";
import css from "./style.module.css";

class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        let arr = Object.entries(response.data);
        arr = arr.reverse();
        this.setState({ orders: arr });
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loading />
        ) : (
          this.state.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

export default OrderPage;
