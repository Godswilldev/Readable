import { axiosInstance } from "./../../Utils/config";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_COMMENTS,
  COMMENT_VOTE,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_COMMENTS,
} from "../Types/ActionTypes";

//  GET /comments/:id
//       USAGE:
//         Get the details for a single comment

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

// POST /comments
// USAGE:
//   Add a comment to a post

// PARAMS:
//   id: Any unique ID. As with posts, UUID is probably the best here.
//   timestamp: timestamp. Get this however you want.
//   body: String
//   author: String
//   parentId: Should match a post id in the database.

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

//  POST /comments/:id
//     USAGE:
//       Used for voting on a comment.
//     PARAMS:
//       option - String: Either "upVote" or "downVote"

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

//  PUT /comments/:id
//     USAGE:
//       Edit the details of an existing comment

//     PARAMS:
//       timestamp: timestamp. Get this however you want.
//       body: String
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

//  DELETE /comments/:id
//     USAGE:
//       Sets a comment's deleted flag to 'true'
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
