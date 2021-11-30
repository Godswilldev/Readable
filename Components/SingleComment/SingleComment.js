import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleDeleteComment,
  handleEditComment,
} from "../../Redux/Actions/Comments";
import Button1 from "../Buttons/Button1";
import VoteCount from "../VoteCount/VoteCount";
import Button2 from "./../Buttons/Button2";

const SingleComment = ({ comment }) => {
  const [editingComment, setEditingComment] = useState(false);
  const [newComment, setNewComment] = useState(comment?.body);
  const dispatch = useDispatch();

  const editComment = (evt) => {
    evt.preventDefault();
    dispatch(
      handleEditComment({
        body: newComment,
        id: comment.id,
      })
    );
    setEditingComment(false);
  };

  return (
    <div>
      {/* <Image src="" alt="" /> */}
      <h1>{comment?.author}</h1>
      <p>@{comment?.author}</p>
      <p>{comment?.body}</p>
      <VoteCount post={comment} />

      <span
        onClick={() =>
          dispatch(
            handleDeleteComment({
              id: comment.id,
            })
          )
        }
      >
        <Button1 title="delete" />
      </span>
      <span onClick={() => setEditingComment(true)}>
        <Button1 title="edit" />
      </span>

      {editingComment && (
        <form onSubmit={editComment}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <span onClick={editComment}>
            <Button2 title="Save" />
          </span>
        </form>
      )}
    </div>
  );
};

export default SingleComment;
