import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import VoteCount from "../VoteCount/VoteCount";
import CategoryType from "./../VoteCount/CategoryType";
import { h3, body1 } from "./../../Utils/Typography";
import { device } from "../../Utils/MediaQueries";
import router from "next/router";
import { handleDeletePost } from "../../Redux/Actions/Posts";
import { useDispatch } from "react-redux";
import EditPost from "../EditPost/EditPost";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const [editing, setEditing] = useState(false);

  return (
    <Post theme={theme}>
      <div className="post__vote">
        <VoteCount post={post} />
      </div>

      <div className="post__post">
        <p
          onClick={() => router.push(`/posts/${post?.id}`)}
          className="post__post--title"
        >
          {post?.title}
        </p>

        <p className="post__post--body">{post?.body}</p>

        <div className="post__post--category">
          <span>
            <CategoryType text={post.category} />
          </span>
          <span onClick={() => dispatch(handleDeletePost({ id: post.id }))}>
            <CategoryType text="Delete" />
          </span>
          <span onClick={() => setEditing(true)}>
            <CategoryType text="Edit" />
          </span>
          {editing && (
            <EditPost id={post.id} editing={editing} setEditing={setEditing} />
          )}
        </div>
      </div>

      <div className="post__comment">
        <svg
          className="post__comment--icon"
          width="18"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
            fill="#CDD2EE"
            fillRule="nonzero"
          />
        </svg>
        <p className="post__comment--count">{post.commentCount}</p>
      </div>
    </Post>
  );
};

export default SinglePost;

const Post = styled.div`
  position: relative;
  width: 82.5rem;
  height: 15.1rem;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 95%;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 90%;
    padding: 4rem;
  }

  .post {
    &__vote {
      align-self: flex-start;

      @media ${device.mobileL} {
        margin-top: 2rem;
      }
    }

    &__post {
      align-self: flex-start;

      &--title {
        ${h3}
      }

      &--category {
        display: flex;
        span {
          margin-right: 1rem;
        }
      }

      &--body {
        ${body1}
        margin: 1rem 0;
        @media ${device.mobileL} {
          margin-bottom: 2rem;
        }
      }
      @media ${device.mobileL} {
        order: -1;
      }
    }

    &__comment {
      display: flex;
      align-items: center;
      &--count {
        ${h3}
        font-size: 1.6rem;
        padding-left: 1.5rem;
      }

      @media ${device.mobileL} {
        position: absolute;
        right: 0;
        bottom: 0rem;
        margin: 2rem;
        margin-right: 4rem;
      }
    }
  }
`;
