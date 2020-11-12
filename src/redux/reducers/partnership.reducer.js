import * as types from "redux/constants/partnership.constant";
const initialState = {
  relationshipWithFighter: null,
  error: null,
  loading: false,
  handleRequest: false,
  sparRequests: [],
  currentPage: null,
  totalPages: null,
  status: null,
  fighterLoading: null,
  handleRequest: false,
  handleRequest: false,
  
};

const sparRequestReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_STATUS_SPARREQUEST_REQUEST:
      return { ...state, fighterLoading: payload };
    case types.GET_STATUS_SPARREQUEST_SUCCESS:
      return { ...state, fighterLoading: null, status: payload.type };
    case types.GET_STATUS_SPARREQUEST_FAILURE:
      return { ...state, fighterLoading: null, error: payload };

    case types.GET_RECEIVED_SPARREQUEST_REQUEST:
      return { ...state, loading: true };
    case types.GET_RECEIVED_SPARREQUEST_SUCCESS:
      return { ...state, loading: false, sparRequests: payload.users }; // users.friendship
    case types.GET_RECEIVED_SPARREQUEST_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.CANCEL_SPARREQUEST_REQUEST:
      return { ...state, loading: true, handleRequest: true };
    case types.CANCEL_SPARREQUEST_REQUEST:
      return { ...state, loading: false, handleRequest: false };
    case types.CANCEL_SPARREQUEST_FAILURE:
      return { ...state, loading: false, handleRequest: false, error: payload };

    case types.ACCEPT_SPARREQUEST_REQUEST:
      return { ...state, loading: true, handleRequest: true };
    case types.ACCEPT_SPARREQUEST_REQUEST:
      return { ...state, loading: false, handleRequest: false };
    case types.ACCEPT_SPARREQUEST_FAILURE:
      return { ...state, loading: false, handleRequest: false, error: payload };

    case types.DECLINE_SPARREQUEST_REQUEST:
      return { ...state, loading: true, handleRequest: true };
    case types.DECLINE_SPARREQUEST_SUCCESS:
      return { ...state, loading: false, handleRequest: false };
    case types.CREATE_SPARREQUEST_FAILURE:
      return { ...state, loading: false, handleRequest: false, error: payload };

    case types.REMOVE_SPARREQUEST_REQUEST:
      return { ...state, loading: true, handleRequest: true };
    case types.REMOVE_SPARREQUEST_SUCCESS:
      return { ...state, loading: false, handleRequest: false };
    case types.REMOVE_SPARREQUEST_FAILURE:
      return { ...state, loading: false, handleRequest: false, error: payload };

    case types.UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: payload };

    default:
      return { ...state };
  }
};

export default sparRequestReducer;
