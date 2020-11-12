import * as types from "redux/constants/match.constants";
const initialState = {
  match: null,
  loading: false,
  currentPage: 1,
  totalPages: null,
  totalMatches: null,
  matchList: null,
  error: null,
};

const matchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_MATCH_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_MATCH_SUCCESS:
      return { ...state, loading: false, match: payload };
    case types.CREATE_MATCH_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: payload };

    case types.GET_MATCH_REQUEST:
      return { ...state, loading: true };
    case types.GET_MATCH_SUCCESS:
      console.log("totalPagesREducer", payload)
      return {
        ...state,
        loading: false,
        matchList: payload.matches,
        totalPages: payload.totalPages,
        totalMatches: payload.totalMatches,
      };
    case types.GET_MATCH_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.EDIT_SINGLE_MATCH_REQUEST:
      return { ...state, loading: true };
    case types.EDIT_SINGLE_MATCH_SUCCESS:
      return { ...state, loading: false, match: payload };
    case types.EDIT_SINGLE_MATCH_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.GET_SINGLE_MATCH_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_MATCH_SUCCESS:
      return { ...state, loading: false, otherSingleMatch: payload };
    case types.EDIT_SINGLE_MATCH_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};

export default matchReducer;
