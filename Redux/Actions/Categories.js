import { axiosInstance } from "../../Utils/config";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

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
