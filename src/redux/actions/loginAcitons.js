import axios from "axios";

export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjrmCsbq-AoOqH9QXqpwM25QZ2WdT69js",
        data
      )
      .then((result) => {
        dispatch(loginUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(loginUserError(error));
      });
  };
};

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START",
  };
};

export const loginUserSuccess = (result) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    result,
  };
};

export const loginUserError = (error) => {
  return {
    type: "LOGIN_USER_ERROR",
    error,
  };
};
