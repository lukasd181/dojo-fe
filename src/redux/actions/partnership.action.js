import * as types from "redux/constants/partnership.constant";
import api from "redux/api";

const createSparringRequest = (request) => async (dispatch) => {
  dispatch({ type: types.CREATE_SPARREQUEST_REQUEST, payload: null });
  try {
    const res = await api.post("/partner/request", request);
    dispatch({
      type: types.CREATE_SPARREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: types.CREATE_SPARREQUEST_FAILURE, payload: err.message });
  }
};
const getStatus = (fighterId, meFighterId, index) => async (dispatch) => {
  dispatch({ type: types.GET_STATUS_SPARREQUEST_REQUEST, payload: index });
  try {
    const meId = { fighterId: meFighterId };
    const res = await api.post(`/partner/status/${fighterId}`, meId);

    // console.log("status result", res.data.data.status);
    dispatch({
      type: types.GET_STATUS_SPARREQUEST_SUCCESS,
      payload: [res.data.data,index],
    });
  } catch (err) {
    dispatch({
      type: types.GET_STATUS_SPARREQUEST_FAILURE,
      payload: err.message,
    });
  }
};

const getReceivedSparRequest = (fighterId, currentPage) => async (dispatch) => {
  dispatch({ type: types.GET_RECEIVED_SPARREQUEST_REQUEST, payload: null });
  try {
    const meId = { fighterId };
    const res = await api.post(`/partner/received?page=${currentPage}`, meId);

    // console.log("status result", res.data.data.status);
    dispatch({
      type: types.GET_RECEIVED_SPARREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_RECEIVED_SPARREQUEST_FAILURE,
      payload: err.message,
    });
  }
};

const acceptSparRequest = (fighterId, toFighterId) => async (dispatch) => {
  dispatch({ type: types.ACCEPT_SPARREQUEST_REQUEST, payload: null });
  try {
    const meId = { fighterId: fighterId };
    const res = await api.put(`/partner/accept/${toFighterId}`, meId);

    // console.log("status result", res.data.data.status);
    dispatch({
      type: types.ACCEPT_SPARREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.ACCEPT_SPARREQUEST_FAILURE,
      payload: err.message,
    });
  }
};

const declineSparRequest = (fighterId, toFighterId) => async (dispatch) => {
  dispatch({ type: types.DECLINE_SPARREQUEST_REQUEST, payload: null });
  try {
    const meId = { fighterId };
    const res = await api.put(`/partner/decline/${toFighterId}`, meId);
    dispatch({
      type: types.DECLINE_SPARREQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.DECLINE_SPARREQUEST_FAILURE,
      payload: err.message,
    });
  }
};

const removePartner = (fighterId, toFighterId) => async (dispatch) => {
    dispatch({ type: types.REMOVE_SPARREQUEST_REQUEST, payload: null });
    try {
      const meId = { fighterId };
      const res = await api.post(`/partner/remove/${toFighterId}`, meId);
      dispatch({
        type: types.REMOVE_SPARREQUEST_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: types.REMOVE_SPARREQUEST_FAILURE,
        payload: err.message,
      });
    }
  };

const cancelSparRequest = (fighterId, toFighterId) => async (dispatch) => {
    dispatch({ type: types.CANCEL_SPARREQUEST_REQUEST, payload: null });
    try {
      const meId = { fighterId };
      const res = await api.post(`/partner/cancel/${toFighterId}`, meId);
      dispatch({
        type: types.CANCEL_SPARREQUEST_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: types.CANCEL_SPARREQUEST_FAILURE,
        payload: err.message,
      });
    }
  };

export const partnershipAction = {
  createSparringRequest,
  getStatus,
  getReceivedSparRequest,
  acceptSparRequest,
  declineSparRequest,
  cancelSparRequest,
  removePartner
  
};
