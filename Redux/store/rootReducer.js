import { combineReducers } from "redux";
import ThemeReducer from "./../Reducers/Theme";
import postsReducer from "./../Reducers/Posts";
import categoriesReducer from "./../Reducers/Categories";
import commentsReducer from "./../Reducers/Comments";

const rootReducer = combineReducers({
  ThemeReducer,
  postsReducer,
  categoriesReducer,
  commentsReducer,
});

export default rootReducer;
