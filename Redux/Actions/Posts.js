import { axiosInstance } from "./../../Utils/config";
import { v4 as uuidv4 } from "uuid";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const SORT_BY = "SORT_BY";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const VOTE = "VOTE";
export const GET_CATEGORY_POST = "GET_CATEGORY_POST";
export const DELETE__POST = "DELETE__POST";
export const EDIT_POST = "EDIT_POST";

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

const vote = (post, option) => ({
  type: VOTE,
  post,
  option,
});

export const handleVote =
  ({ id, option }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        url: `/posts/${id}`,
        method: "POST",
        data: {
          option,
        },
      });
      dispatch(vote(data, option));
    } catch (error) {
      console.log(`Error from handleVote ${error}`);
    }
  };

const getCategoryPosts = (posts) => ({
  type: GET_CATEGORY_POST,
  payload: posts,
});

export const handleGetcategoryPost =
  ({ category }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: "GET",
        url: category ? `/${category}/posts` : "/posts",
      });
      dispatch(getCategoryPosts(data));
    } catch (error) {
      console.log(`error from handleGetCategoryPost ${error}`);
    }
  };

const deletePost = (post) => ({
  type: DELETE__POST,
  payload: post,
});

export const handleDeletePost =
  ({ id }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: "DELETE",
        url: `/posts/${id}`,
      });
      dispatch(deletePost(data));
    } catch (error) {
      console.log(`Error from handleDeletePost ${error}`);
    }
  };

const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});

export const handleEditPost =
  ({ id, title, body, category }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: "PUT",
        url: `/posts/${id}`,
        data: {
          title,
          body,
          category,
        },
      });
      dispatch(editPost(data));
    } catch (error) {
      console.log(`Error frommhandleeditPost ${error}`);
    }
  };
