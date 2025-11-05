const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOAD_ORDER_START") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "LOAD_ORDER_SUCCESS") {
    return {
      ...state,
      loading: false,
      orders: action.orders,
    };
  } else if (action.type === "LOAD_ORDER_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  return state;
};

export default reducer;
