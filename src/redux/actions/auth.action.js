import api from "redux/api";
import { toast } from "react-toastify";
import * as types from "redux/constants/auth.constant";
import { routeAction } from "redux/actions/route.action";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { modalAction } from "redux/actions/modal.action";
// const history = useHistory();
// const redirectTo = useSelector((state) => state.route.redirectTo);

const login = (user) => async (dispatch) => {
  dispatch({ type: types.AUTH_LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", user);
    if (res.data.errors) {
      throw res.data.errors;
    }
    dispatch({ type: types.AUTH_LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.AUTH_LOGIN_FAILURE, payload: err.message });
  }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

const logout = () => async (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.setItem("accessToken", "");
  dispatch({ type: types.LOGOUT, payload: null });
  dispatch(modalAction.handleCloseModal());
};

export const authAction = {
  login,
  getCurrentUser,
  logout,
};
