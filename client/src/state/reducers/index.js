import { combineReducers } from "redux";
import postReducer from "./postReducer";
import modalReducer from "./modalReducer";
import currentIdReducer from "./currentIdReducer";

export default combineReducers({
    posts: postReducer,
    modal: modalReducer,
    currentId: currentIdReducer,
});
