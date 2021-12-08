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
import { Details } from "../../Components/SinglePost/PostDetailsStyles";

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
