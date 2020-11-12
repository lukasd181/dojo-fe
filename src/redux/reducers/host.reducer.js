import * as types from "../constants/host.constant";
const initialState = {
  host: null,
  loading: false,
  currentPage: null,
  totalHosts: null,
  totalPages: null,
  hostList: null,
  error: null,
  otherSingleHost: null,
};

const hostReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case types.CREATE_HOST_REQUEST:
        return { ...state, loading: true };
      case types.CREATE_HOST_SUCCESS:
        return { ...state, loading: false, host: payload };
      case types.CREATE_HOST_FAILURE:
        return { ...state, loading: false, error: payload };

        case types.GET_ME_HOST_REQUEST:
        return { ...state, loading: true };
      case types.GET_ME_HOST_SUCCESS:
        return { ...state, loading: false, host: payload };
      case types.GET_ME_HOST_FAILURE:
        return { ...state, loading: false, error: payload };
  
      case types.GET_ME_CURRENT_PAGE_HOST:
        return { ...state, currentPage: payload };
  
      case types.GET_HOST_REQUEST:
        return { ...state, loading: true };
      case types.GET_HOST_SUCCESS:
        return {
          ...state,
          loading: false,
          hostList: payload.hosts,
          totalPages: payload.totalPages,
          totalhosts: payload.totalHosts,
        };
      case types.GET_HOST_FAILURE:
        return { ...state, loading: false, error: payload };
  
      case types.EDIT_SINGLE_HOST_REQUEST:
        return { ...state, loading: true };
      case types.EDIT_SINGLE_HOST_SUCCESS:
        return { ...state, loading: false, host: payload };
      case types.EDIT_SINGLE_HOST_FAILURE:
        return { ...state, loading: false, error: payload };
  
      case types.GET_SINGLE_HOST_REQUEST:
        return { ...state, loading: true };
      case types.GET_SINGLE_HOST_SUCCESS:
        return { ...state, loading: false, otherSingleHost: payload };
      case types.EDIT_SINGLE_HOST_FAILURE:
        return { ...state, loading: false, error: payload };
  
      default:
        return { ...state };
    }
  };
  
  export default hostReducer;
  
