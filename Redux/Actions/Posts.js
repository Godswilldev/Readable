import { axiosInstance } from "./../../Utils/config";
import { v4 as uuidv4 } from "uuid";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const SORT_BY = "SORT_BY";
export const ADD_NEW_POST = "ADD_NEW_POST";

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

export const sortBy = (method) => ({
  type: SORT_BY,
  payload: method,
});

const addNewPost = (post) => ({
  type: ADD_NEW_POST,
  payload: post,
});

export const handleAddNewPost =
  ({ title, body, category }) =>
  async (dispatch) => {
    const id = uuidv4();
    const timestamp = Date.now();
    const author = "Greg";
    try {
      const { data } = await axiosInstance({
        method: "POST",
        url: "/posts",
        data: {
          id,
          timestamp,
          title,
          body,
          author,
          category,
        },
      });
      console.log(data);
      await dispatch(addNewPost(data));
    } catch (error) {
      console.log(`Error from handleAddNewPost ${error}`);
    }
  };
