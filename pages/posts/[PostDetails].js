import { useRouter } from "next/router";
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

const PostDetail = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetAllPosts());
    dispatch(handleGetComments({ id: query?.PostDetails }));
  }, [dispatch, query]);

  const posts = useSelector(({ postsReducer }) => postsReducer);

  const postToBeEdited = Object?.values(posts).find(
    (p) => p?.id === query?.PostDetails
  );

  const comments = useSelector(({ commentsReducer }) => commentsReducer);
  const [newComment, setNewComment] = useState("");

  const addNewComment = (evt) => {
    evt.preventDefault();
    dispatch(
      handleAddComment({
        body: newComment,
        parentId: query?.PostDetails,
      })
    );
    setNewComment("");
  };

  return (
    <div>
      <SinglePost post={postToBeEdited} />

      <>
        {Object.values(comments)?.map((comment) => (
          <div key={comment?.id}>
            <SingleComment comment={comment} />
          </div>
        ))}
      </>

      <form onSubmit={addNewComment}>
        <textarea
          value={newComment}
          placeholder="Add new Comment"
          onChange={(evt) => setNewComment(evt.target.value)}
          cols="30"
          rows="10"
        ></textarea>

        <span onClick={addNewComment}>
          <Button1 title="Post Comment" />
        </span>
      </form>
    </div>
  );
};

export default PostDetail;
