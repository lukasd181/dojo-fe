import api from "redux/api";
import { toast } from "react-toastify";
import * as types from "../constants/user.constant";
import { routeAction } from "./route.action";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as authTypes from "redux/constants/auth.constant";

// const redirectTo = useSelector((state) => state.route.redirectTo);

// const history = useHistory();

const createUser = (userInfo) => async (dispatch) => {
  dispatch({ type: types.CREATE_USER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", userInfo);
    if (res.data.errors) {
      throw res.data.errors;
    }

    dispatch({ type: types.CREATE_USER_SUCCESS, payload: res.data });
    dispatch({ type: authTypes.AUTH_GIVE_AUTHENTICATION, payload: res.data });
  } catch (err) {
    dispatch({
      type: types.CREATE_USER_FAILURE,
      payload: err.message,
    });
  }
};


export const userAction = {
  createUser,
  
};
