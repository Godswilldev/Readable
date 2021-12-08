import {
  ADD_COMMENTS,
  COMMENT_VOTE,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENTS,
} from "../Types/ActionTypes";

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...action.payload,
      };

    case ADD_COMMENTS:
      return Object.values(state).concat(action.payload);

    case COMMENT_VOTE:
      let { id } = action.comment;
      let { option } = action;
      let comment = Object.values(state).find((p) => p.id === id);
      let key = Object.keys(state).find((key) => state[key] === comment);

      switch (option) {
        case "upVote":
          return {
            ...state,
            [key]: action.comment,
          };
        case "downVote":
          return {
            ...state,
            [key]: action.comment,
          };
      }

    case EDIT_COMMENT:
      let { id: uuid } = action.payload;
      let commentToEdit = Object.values(state).find((p) => p.id === uuid);
      let editedPostkey = Object.keys(state).find(
        (key) => state[key] === commentToEdit
      );
      return {
        ...state,
        [editedPostkey]: action.payload,
      };

    case DELETE_COMMENT:
      const { id: uid } = action.payload;
      return Object.values(state).filter((p) => p.id !== uid);

    default:
      return state;
  }
};

export default commentsReducer;
