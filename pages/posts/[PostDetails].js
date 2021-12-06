import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddComment,
  handleGetComments,
} from "../../Redux/Actions/Comments";
import { handleGetAllPosts } from "../../Redux/Actions/Posts";
import SinglePost from "./../../Components/SinglePost/SinglePost";
import SingleComment from "./../../Components/SingleComment/SingleComment";
import Button1 from "../../Components/Buttons/Button1";
import Button5 from "./../../Components/Buttons/Button5";
import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import { body2, h2 } from "../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";

const PostDetail = () => {
  const [params, setParams] = useState();
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setParams(query?.PostDetails);
    params &&
      (dispatch(handleGetAllPosts()),
      dispatch(handleGetComments({ id: params })));
  }, [query, dispatch, params]);

  const posts = useSelector(({ postsReducer }) => postsReducer);

  const postToBeEdited = Object?.values(posts).find(
    (p) => p?.id === query?.PostDetails
  );

  const comments = useSelector(({ commentsReducer }) => commentsReducer);
  const [newComment, setNewComment] = useState("");

  const addNewComment = (evt) => {
    evt.preventDefault();

    newComment.length < 251 &&
      newComment.length > 2 &&
      (dispatch(
        handleAddComment({
          body: newComment,
          parentId: query?.PostDetails,
        })
      ),
      setNewComment(""));
  };

  return (
    <Details>
      <div className="details">
        <div className="details__backButton" onClick={() => Router.push("/")}>
          <Button5 title="Go back" />
        </div>

        <div id="details__post" className="details__post">
          <SinglePost post={postToBeEdited} />
        </div>

        <div className="details__comments">
          {Object.values(comments)?.map((comment) => (
            <div key={comment?.id}>
              <SingleComment comment={comment} />
            </div>
          ))}
        </div>

        <div className="details__form">
          <h2>Add Comment</h2>

          <form onSubmit={addNewComment}>
            <textarea
              value={newComment}
              placeholder="Add new Comment"
              onChange={(evt) => setNewComment(evt.target.value)}
              cols="30"
              rows="3"
            />

            <div>
              <p>{250 - newComment.length} characters left</p>
              <span onClick={addNewComment}>
                <Button1 title="Post Comment" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </Details>
  );
};

export default PostDetail;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  @media ${device.mobileL} {
    margin: 0;
  }
  .details {
    width: 100%;
    margin: 0 auto;

    &__backButton {
      margin-top: 1rem;

      @media ${device.mobileL} {
        margin: 2rem 0;
      }
    }

    &__post {
      margin-top: 2rem;

      @media ${device.mobileL} {
        margin-top: 0;
        padding: 0;
      }
    }

    &__comments {
      margin-top: 3rem;
      border-radius: 1rem;
    }

    &__form {
      width: 82.5rem;
      height: 24.6rem;
      background-color: ${colors.white};
      border-radius: 1rem;
      margin: 0 auto;
      margin-top: 3rem;
      box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
      padding: 2rem 3rem;

      @media ${device.laptop} {
        width: 95%;
      }

      @media ${device.tablet} {
        width: 90%;
      }

      h2 {
        ${h2}
        margin-bottom: 1rem;
      }

      form {
        display: flex;
        flex-direction: column;

        textarea {
          width: 100%;
          background: #f7f8fd;
          border: none;
          outline: none;
          color: ${colors.col7};
          ${body2}
          padding:2rem;
          border-radius: 1rem;
        }

        div {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            ${body2}
          }
        }
      }
    }
  }
`;
