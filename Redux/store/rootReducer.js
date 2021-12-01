import { combineReducers } from "redux";
import postsReducer from "./../Reducers/Posts";
import categoriesReducer from "./../Reducers/Categories";
import commentsReducer from "./../Reducers/Comments";

const rootReducer = combineReducers({
  postsReducer,
  categoriesReducer,
  commentsReducer,
});

export default rootReducer;
