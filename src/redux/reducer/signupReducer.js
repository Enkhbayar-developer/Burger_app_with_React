const initialState = {
  saving: false,
  loggingIn: false,
  error: null,
  token: null,
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.result.idToken,
        userId: action.result.localId,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        error: action.error.response.data.error.message,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        loggingIn: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loggingIn: false,
        token: action.result.idToken,
        userId: action.result.localId,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loggingIn: false,
        error: action.error.response.data.error.message,
      };

    default:
      return state;
  }
};

export default reducer;
