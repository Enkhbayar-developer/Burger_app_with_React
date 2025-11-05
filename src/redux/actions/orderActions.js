import axios from "../../axios_order";

export const loadOrders = () => {
  return function (dispatch) {
    dispatch(loadOrdersStart());
    axios
      .get("/orders.json")
      .then((response) => {
        dispatch(loadOrdersSuccess(Object.entries(response.data).reverse()));
      })
      .catch((error) => {
        dispatch(loadOrdersError(error));
      });
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDER_START",
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDER_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDER_ERROR",
    error,
  };
};
