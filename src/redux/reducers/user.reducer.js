import * as types from "../constants/user.constant";
const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case types.CREATE_USER_SUCCESS:
      localStorage.setItem("accessToken", payload.data.accessToken);
      return { ...state, loading: false, currentUser: payload.data.user };
    case types.CREATE_USER_FAILURE:
      return { ...state, loading: false, error: payload };

      
    default:
      return state;
  }
};

export default userReducer;
