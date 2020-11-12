import * as types from "redux/constants/review.constant";
const initialState = {
  loading: false,
  error: null,
  currentPage: null,
  totalPages: null,
  reviewList: null,
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.CREATE_REVIEW_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.DELETE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_REVIEW_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.GET_OWN_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.GET_OWN_REVIEW_SUCCESS:
      return { ...state, loading: false, reviewList: payload };
    case types.GET_OWN_REVIEW_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.EDIT_SINGLE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.EDIT_SINGLE_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.EDIT_SINGLE_REVIEW_FAILURE:
      return { ...state, loading: false, error: payload };
    

    default:
      return { ...state };
  }
};
