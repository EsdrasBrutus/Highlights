import { combineReducers } from "redux";
import postReducer from "./postReducer";
import modalReducer from "./modalReducer";
import currentIdReducer from "./currentIdReducer";
import authReducer from "./authReducer";

export default combineReducers({
    posts: postReducer,
    modal: modalReducer,
    currentId: currentIdReducer,
    auth: authReducer,
});
