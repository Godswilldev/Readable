import { TOGGLE_THEME } from "../Actions/Theme";

const initialState = {
  darkMode:
    (typeof window !== "undefined" &&
      JSON.parse(window.localStorage.getItem("state"))?.ThemeReducer
        ?.darkMode) ||
    false,
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: action.payload };

    default:
      return state;
  }
};

export default ThemeReducer;
