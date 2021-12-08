import { axiosInstance } from "../../Utils/config";
import { GET_ALL_CATEGORIES } from "./Categories";

// GET /categories
// USAGE:
//   Get all of the categories available for the app. List is found in categories.js.

const getCategories = (categories) => ({
  type: GET_ALL_CATEGORIES,
  payload: categories,
});

export const handleGetAllCategories = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance({
      method: "GET",
      url: "/categories",
    });
    await dispatch(getCategories(data));
  } catch (error) {
    console.log(`Error from handkleGetAllCategories ${error}`);
  }
};
