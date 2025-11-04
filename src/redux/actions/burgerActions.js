export const addIngredient = (Ingname) => {
  return {
    type: "ADD_INGREDIENT",
    incIng: Ingname,
  };
};

export const rmvIngredient = (Ingname) => {
  return {
    type: "REMOVE_INGREDIENT",
    decIng: Ingname,
  };
};
