import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  handleDeleteComment,
  handleEditComment,
} from "../../Redux/Actions/Comments";
import Button1 from "../Buttons/Button1";
import VoteCount from "../VoteCount/VoteCount";
import Button2 from "./../Buttons/Button2";
import { colors } from "./../../Utils/Theme";
import { body1 } from "./../../Utils/Typography";
import Button4 from "./../Buttons/Button4";
import { device } from "./../../Utils/MediaQueries";

const SingleComment = ({ comment }) => {
  const [editingComment, setEditingComment] = useState(false);
  const [newComment, setNewComment] = useState(comment?.body);
  const dispatch = useDispatch();

  const editComment = (evt) => {
    evt.preventDefault();

    newComment.length > 2 &&
      dispatch(
        handleEditComment({
          body: newComment,
          id: comment.id,
        })
      );
    setEditingComment(false);
  };

  return (
    <Comment>
      <div className="comment">
        <div className="comment__header">
          <span>
            <VoteCount post={comment} />
          </span>

          <div>
            <h1>{comment?.author}</h1>
            <p>{comment?.body}</p>
          </div>

          <h3
            className="comment__editButton"
            onClick={() => setEditingComment(true)}
          >
            Edit
          </h3>
        </div>

        <>
          {editingComment && (
            <form className="edit__comment" onSubmit={editComment}>
              <input
                className="edit__comment--input"
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />

              <button className="save__button" onClick={() => editComment}>
                Save
              </button>
            </form>
          )}
        </>

        <button
          className="delete__button"
          onClick={() =>
            dispatch(
              handleDeleteComment({
                id: comment.id,
              })
            )
          }
        >
          Delete
        </button>
      </div>
    </Comment>
  );
};

export default SingleComment;

export const Comment = styled.div`
  background-color: ${colors.white};
  width: 82.5rem;
  border-bottom: 1px solid ${colors.col11};
  padding: 2rem 3rem;
  margin: 0 auto;
  position: relative;

  @media ${device.laptop} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 90%;
  }

  .comment {
    display: flex;
    flex-direction: column;
    position: relative;

    &__header {
      display: grid;
      grid-template-columns: 10% 80% 10%;
      margin-top: 1rem;
      position: relative;
      @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
      }
      span{
        margin-bottom:2rem;
      }

      div {
        h1 {
          margin-bottom: 2rem;
        }

        p {
          ${body1}
          color: ${colors.col7};
        }
      }

      h3 {
        color: ${colors.col1};
        cursor: pointer;
        ${body1}
        &:hover {
          text-decoration: underline;
        }

        @media ${device.mobileL} {
          order: -1;
          position:absolute;
          right:0;
        }
      }
    }
  }

  .delete__button {
    align-self: flex-end;
    border: none;
    outline: none;
    color: #f2f4fe;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #d73737;
    width: 8rem;
    height: 3rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    &:focus,
    &:active {
      box-shadow: 0.4rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);
    }
     @media ${device.mobileL} {
        width:10rem;
        height:4rem;
      }
  }
  .save__button {
    margin-left: 1rem;
    border: none;
    outline: none;
    color: #f2f4fe;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: ${colors.col6};
    width: 8rem;
    height: 3rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    &:focus,
    &:active {
      box-shadow: 0.4rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);
    }
  }

  .edit__comment {
    margin-top: 1rem;
    &--input {
      outline: none;
      color: ${colors.col7};
      padding: 1rem;
      border: none;
      border-bottom: 1px solid ${colors.col1};
    }
  }
`;
