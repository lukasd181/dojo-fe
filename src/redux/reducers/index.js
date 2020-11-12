import { combineReducers } from "redux";
import experienceReducer from "./experience.reducer";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducer";
import modalReducer from "redux/reducers/modal.reducer";
import fighterReducer from "redux/reducers/fighter.reducer";
import hostReducer from "redux/reducers/host.reducer";
import matchReducer from "redux/reducers/match.reducer";
import sparRequestReducer from "redux/reducers/partnership.reducer";

export default combineReducers({
  experience: experienceReducer,
  auth: authReducer,
  user: userReducer,
  route: routeReducer,
  modal: modalReducer,
  fighter: fighterReducer,
  host: hostReducer,
  match: matchReducer,
  partner: sparRequestReducer,
});
