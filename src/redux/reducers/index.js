import { combineReducers } from "redux";
import experienceReducer from "./experience.reducer"

export default combineReducers({
    experience: experienceReducer,
})