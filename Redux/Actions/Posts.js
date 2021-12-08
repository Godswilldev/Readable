import { axiosInstance } from "./../../Utils/config";
import { v4 as uuidv4 } from "uuid";
import {
  DELETE__POST,
  EDIT_POST,
  GET_ALL_POSTS,
  SORT_BY,
  VOTE,
  GET_CATEGORY_POST,
  ADD_NEW_POST,
} from "../Types/ActionTypes";

//  GET /posts
//   USAGE:
//  Get all of the posts. Useful for the main page when no category is selected.

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

// sorts the post according to the method passed in. Methods include timestamp, most upvotes, least upvotes, most comments, least comments
export const sortBy = (method) => ({
  type: SORT_BY,
  payload: method,
});

//  POST /posts
//       USAGE:
//         Add a new post
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
      await dispatch(addNewPost(data));
    } catch (error) {
      console.log(`Error from handleAddNewPost ${error}`);
    }
  };

//  POST /posts/:id
//       USAGE:
//         Used for voting on a post
//       PARAMS:
//         option - String: Either "upVote" or "downVote"
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

// used To filter post by category. Categories includes react, redux, udacity
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

//  DELETE /posts/:id
//     USAGE:
//       Sets the deleted flag for a post to 'true'.
//       Sets the parentDeleted flag for all child comments to 'true'.
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

// PUT /posts/:id
//   USAGE:
//     Edit the details of an existing post
//   PARAMS:
//     title - String
//     body - String

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
