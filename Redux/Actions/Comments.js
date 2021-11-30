import { axiosInstance } from "./../../Utils/config";
import { v4 as uuidv4 } from "uuid";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const COMMENT_VOTE = "COMMENT_VOTE";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

export const handleGetComments =
  ({ id }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: "GET",
        url: `/posts/${id}/comments`,
      });
      dispatch(getComments(data));
    } catch (error) {
      console.log(`Error from handleGetComments ${error}`);
    }
  };

const addComment = (comment) => ({
  type: ADD_COMMENTS,
  payload: comment,
});

export const handleAddComment =
  ({ body, parentId }) =>
  async (dispatch) => {
    const id = uuidv4();
    const timestamp = Date.now();
    const author = ["thingTwo", "thingOne", "Greg"];
    try {
      const { data } = await axiosInstance({
        method: "POST",
        url: "/comments",
        data: {
          id,
          timestamp,
          body,
          author: author[Math.floor(Math.random() * author.length + 1)],
          parentId,
        },
      });
      await dispatch(addComment(data));
    } catch (error) {
      console.log(`Error from handleAddNewPost ${error}`);
    }
  };

const commentVote = (comment, option) => ({
  type: COMMENT_VOTE,
  comment,
  option,
});

export const handleCommentVote =
  ({ id, option }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: "POST",
        url: `/comments/${id}`,
        data: {
          option,
        },
      });
      dispatch(commentVote(data, option));
    } catch (error) {
      console.log(`error from handleCommentVote ${error}`);
    }
  };

const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});

export const handleEditComment =
  ({ body, id }) =>
  async (dispatch) => {
    const timestamp = Date.now();
    try {
      const { data } = await axiosInstance({
        url: `/comments/${id}`,
        method: "PUT",
        data: {
          timestamp,
          body,
        },
      });
      dispatch(editComment(data));
    } catch (error) {
      console.log(`error from handleEditComment ${error}`);
    }
  };

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: comment,
});
export const handleDeleteComment =
  ({ id }) =>
  async (dispatch) => {
    try {
      const { data } = await axiosInstance({
        method: "DELETE",
        url: `/comments/${id}`,
      });
      console.log(id, data);
      dispatch(deleteComment(data));
    } catch (error) {
      console.log(`error from handleDeleteComment ${error}`);
    }
  };
