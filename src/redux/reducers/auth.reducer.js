import * as types from "redux/constants/auth.constant";
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.AUTH_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case types.AUTH_LOGIN_SUCCESS:
      localStorage.setItem("accessToken", payload.data.accessToken);
      return {
        ...state,
        loading: false,
        user: payload.data.user,
        isAuthenticated: true,
      };
    case types.AUTH_LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.AUTH_GIVE_AUTHENTICATION:
      return { ...state, user: payload.data.user, isAuthenticated: true };

    case types.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    case types.GET_CURRENT_USER_REQUEST:
      return { ...state, loading: true };
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    default:
      return state;
  }
};

export default authReducer;
