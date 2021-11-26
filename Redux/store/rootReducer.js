import { combineReducers } from "redux";
import ThemeReducer from "./../Reducers/Theme";
import postsReducer from "./../Reducers/Posts";
import categoriesReducer from "./../Reducers/Categories";

const rootReducer = combineReducers({
  ThemeReducer,
  postsReducer,
  categoriesReducer,
});

export default rootReducer;
