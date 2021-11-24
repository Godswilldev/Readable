import { combineReducers } from "redux";
import ThemeReducer from "./../Reducers/Theme";
import postsReducer from "./../Reducers/Posts";

const rootReducer = combineReducers({
  ThemeReducer,
  postsReducer,
});

export default rootReducer;
