import { GET_ALL_CATEGORIES } from "../Types/ActionTypes";

const initialState = {};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default categoriesReducer;
