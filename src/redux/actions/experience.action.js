import * as types from "redux/constants/experience.constant";
import api from "redux/api";
import { toast } from "react-toastify";
import { routeAction } from "redux/actions/route.action";

const getExperienceWithPagination = (pageNum, minPrice, maxPrice) => async (
  dispatch
) => {
  dispatch({ type: types.GET_EXP_REQUEST, payload: null });
  try {
    const res = await api.get(
      `/experiences?page=${pageNum}&limit=10&min=${minPrice}&max=${maxPrice}`
    );
    dispatch({ type: types.GET_EXP_SUCCESS, payload: res.data.data });
    dispatch(routeAction.updateRedirectTo("/"));
  } catch (err) {
    dispatch({ type: types.GET_EXP_FAILURE, payload: err.message });
  }
};

const updateCurrentPage = (pageNum) => async (dispatch) => {
  dispatch({ type: types.UPDATE_CURRENT_PAGE, payload: pageNum });
};

export const experienceAction = {
  getExperienceWithPagination,
  updateCurrentPage,
};
