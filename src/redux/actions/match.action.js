import * as types from "redux/constants/match.constants";
import api from "redux/api";

const getMatches = (currentPage, filter) => async (dispatch) => {
  dispatch({ type: types.GET_MATCH_REQUEST, payload: null });
  try {
    const res = await api.get(
      `/match?form=${filter.form}&gender=${filter.gender}&division=${filter.division}&status=${filter.status}&location=${filter.location}&page=${currentPage}`
    );
    dispatch({ type: types.GET_MATCH_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.GET_MATCH_FAILURE, payload: err.message });
  }
};
const createMatch = (matchInfo) => async (dispatch) => {
  dispatch({ type: types.CREATE_MATCH_REQUEST, payload: null });
  try {
    const res = await api.post(
      `/match/`, matchInfo
    );
    console.log("data fetched match created", res.data)
    dispatch({ type: types.CREATE_MATCH_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.CREATE_MATCH_FAILURE, payload: err.message });
  }
};

const updatePage = (pageNumber) => (dispatch) => {
  dispatch({ type: types.UPDATE_CURRENT_PAGE, payload: pageNumber });
};

export const matchAction = {
  getMatches,
  createMatch,
  updatePage,
};
