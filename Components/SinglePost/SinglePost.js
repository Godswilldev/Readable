import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import VoteCount from "../VoteCount/VoteCount";
import Image from "next/image";
import CategoryType from "./../VoteCount/CategoryType";
import router from "next/router";
import EditPost from "../EditPost/EditPost";
import { Post } from "./SinglePostStyles";
import CommentIcon from "../../assets/shared/icon-comments.svg";

const SinglePost = ({ post }) => {
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

        <p
          onClick={() => router.push(`/posts/${post?.id}`)}
          className="post__post--body"
        >
          {post?.body}
        </p>

        <div className="post__post--category">
          <span>
            <CategoryType text={post?.category} />
          </span>

          <span onClick={() => setEditing(!editing)}>
            <CategoryType text="Edit" />
          </span>
          {editing && (
            <EditPost
              post={post}
              id={post?.id}
              editing={editing}
              setEditing={setEditing}
            />
          )}
        </div>
      </div>

      <div className="post__comment">
        <Image src={CommentIcon} alt="Comment Icon" />
        <p className="post__comment--count">{post?.commentCount}</p>
      </div>
    </Post>
  );
};

export default SinglePost;
