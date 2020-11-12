import * as types from "redux/constants/fighter.constant";
const initialState = {
  fighter: null,
  loading: false,
  currentPage: null,
  totalPages: null,
  totalFighters: null,
  fighterList: null,
  error: null,
  otherSingleFighter: null,
  meFighter: null,
};

const fighterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_FIGHTER_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_FIGHTER_SUCCESS:
      return { ...state, loading: false, fighter: payload };
    case types.CREATE_FIGHTER_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: payload };

    case types.GET_FIGHTER_REQUEST:
      return { ...state, loading: true };
    case types.GET_FIGHTER_SUCCESS:
      return {
        ...state,
        loading: false,
        fighterList: payload.fighters,
        totalPages: payload.totalPages,
        totalFighters: payload.totalFighters,
      };
    case types.GET_FIGHTER_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.EDIT_ME_FIGHTER_REQUEST:
      return { ...state, loading: true };
    case types.EDIT_ME_FIGHTER_SUCCESS:
      return { ...state, loading: false, fighter: payload };
    case types.EDIT_ME_FIGHTER_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.GET_ME_FIGHTER_REQUEST:
      return { ...state, loading: true };
    case types.GET_ME_FIGHTER_SUCCESS:
      return { ...state, loading: false, meFighter: payload };
    case types.GET_ME_FIGHTER_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.GET_SINGLE_FIGHTER_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_FIGHTER_SUCCESS:
      return { ...state, loading: false, otherSingleFighter: payload };
    case types.EDIT_ME_FIGHTER_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};

export default fighterReducer;
