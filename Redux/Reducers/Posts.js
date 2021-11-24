import { GET_ALL_POSTS } from "./../Actions/Posts";

const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
