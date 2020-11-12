import * as types from "redux/constants/host.constant";
import api from "redux/api";

const createHost = (host) => async (dispatch) => {
  dispatch({ type: types.CREATE_HOST_REQUEST, payload: null });
  try {
    const res = await api.post("/host/", host);
    dispatch({ type: types.CREATE_HOST_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.CREATE_HOST_FAILURE, payload: err.message });
  }
};

const getMeHost = () => async (dispatch) => {
  dispatch({ type: types.GET_ME_HOST_REQUEST, payload: null });
  try {
    console.log("Here to fetch me");
    const res = await api.get("/host/me");
    console.log("Fetch data success", res.data.data);
    dispatch({ type: types.GET_ME_HOST_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.GET_ME_HOST_FAILURE, payload: err.message });
  }
};

export const hostAction = {
  createHost,
  getMeHost
};
