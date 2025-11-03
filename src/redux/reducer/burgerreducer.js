const initialState = {
  ingredients: {
    Salad: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0,
  },
  totalPrice: 1000,
};

const ingredientsPrices = {
  Salad: 500,
  Bacon: 700,
  Cheese: 600,
  Meat: 1500,
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.incIng]: state.ingredients[action.incIng] + 1,
      },
      totalPrice: (state.totalPrice += ingredientsPrices[action.incIng]),
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.decIng]: state.ingredients[action.decIng] - 1,
      },
      totalPrice: (state.totalPrice -= ingredientsPrices[action.decIng]),
    };
  }
  return state;
};

export default reducer;
