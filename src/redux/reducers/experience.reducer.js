import * as types from "../constants/experience.constant";
const initialState = {
  expList: [],
  loading: false,
  error: "",
  currentPage: "",
  totalPages: ""

};

const experienceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EXP_REQUEST:
      return {...state, loading: true}
    case types.GET_EXP_SUCCESS:
      return {...state, loading: false, expList: payload.experiences, totalPages: payload.totalPages}
    case types.GET_EXP_FAILURE:
      return {...state, loading: false, error: payload}
    case types.UPDATE_CURRENT_PAGE:
      return {...state, currentPage: payload}
    default:
      return state;
  }
};

export default experienceReducer;
