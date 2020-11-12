import * as types from "redux/constants/fighter.constant";
import api from "redux/api";
import { useSelector } from "react-redux";

const createFighter = (fighter) => async (dispatch) => {
  dispatch({ type: types.CREATE_FIGHTER_REQUEST, payload: null });
  try {
    const res = await api.post("/fighter/", fighter);
    console.log(res.data.data);
    dispatch({ type: types.CREATE_FIGHTER_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.CREATE_FIGHTER_FAILURE, payload: err.message });
  }
};

const getOwnFighter = () => async (dispatch) => {
  dispatch({ type: types.GET_ME_FIGHTER_REQUEST, payload: null });
  try {
    const res = await api.get("/fighter/me");
    dispatch({
      type: types.GET_ME_FIGHTER_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: types.GET_ME_FIGHTER_FAILURE, payload: err.message });
  }
};

const getFighters = (filter, currentPage, fighterId) => async (dispatch) => {
  console.log(fighterId, "HAOEKOOKOAKOGOKEO");
  dispatch({ type: types.GET_FIGHTER_REQUEST, payload: null });
  try {
    const res = await api.get(
      `/fighter?location=${filter.location}&division=${filter.division}&gender=${filter.gender}&page=${currentPage}`
    );
    let newArray = res.data.data;

    for (let i = 0; i < newArray.fighters.length; i++) {
      const response = await api.post(
        `/partner/status/${newArray.fighters[i]._id}`,
        { fighterId: fighterId }
      );
      console.log("HAHAHAHAHAHAHAHAHA", response);
      newArray.fighters[i].relationship = response.data.data.type;
    }
    console.log("in action got res", newArray);
    dispatch({
      type: types.GET_FIGHTER_SUCCESS,
      payload: newArray,
    });
  } catch (err) {
    dispatch({ type: types.GET_FIGHTER_FAILURE, payload: err.message });
  }
};

const updatePage = (pageNumber) => (dispatch) => {
  dispatch({ type: types.UPDATE_CURRENT_PAGE, payload: pageNumber });
};

export const fighterAction = {
  createFighter,
  getOwnFighter,
  getFighters,
  updatePage,
};
