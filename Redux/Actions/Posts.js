import { axiosInstance } from "./../../Utils/config";

export const GET_ALL_POSTS = "GET_ALL_POSTS";

const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  payload: posts,
});

export const handleGetAllPosts = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance({
      method: "get",
      url: `/posts`,
    });
    await dispatch(getAllPosts(data));
  } catch (error) {
    console.log(`Error from handleGetAllPost ${error}`);
  }
};
