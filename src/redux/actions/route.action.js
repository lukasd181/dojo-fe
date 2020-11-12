import api from "redux/api";
import { toast } from "react-toastify";
import * as types from "redux/constants/route.constant";

const updateRedirectTo = (path) => (dispatch) => {
  dispatch({ type: types.ROUTE_UPDATE_REDIRECT_TO, payload: path });
};

const clearRedirectTo = () => (dispatch) => {
  dispatch({ type: types.ROUTE_UPDATE_REDIRECT_TO, payload: "" });
};



export const routeAction = {
  updateRedirectTo,
  clearRedirectTo,

};
