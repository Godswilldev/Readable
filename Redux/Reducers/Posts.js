import { ADD_NEW_POST, GET_ALL_POSTS, SORT_BY, VOTE } from "./../Actions/Posts";

const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_NEW_POST:
      return Object.values(state).concat(action.payload);

    case VOTE:
      let { id } = action.post;
      let { option } = action;
      let post = Object.values(state).find((p) => p.id === id);
      let key = Object.keys(state).find((key) => state[key] === post);

      switch (option) {
        case "upVote":
          return {
            ...state,
            [key]: action.post,
          };
        case "downVote":
          return {
            ...state,
            [key]: action.post,
          };
      }

    case SORT_BY:
      switch (action.payload) {
        case "Most Upvotes":
          return Object.values(state).sort((a, b) => b.voteScore - a.voteScore);

        case "Least Upvotes":
          return Object.values(state).sort((a, b) => a.voteScore - b.voteScore);

        case "Most Comments":
          return Object.values(state).sort(
            (a, b) => b.commentCount - a.commentCount
          );

        case "Timestamp":
          return Object.values(state).sort((a, b) => b.timestamp - a.timestamp);
        default:
          break;
      }

    default:
      return state;
  }
};

export default postsReducer;
