import Image from "next/image";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import ArrowDown from "../../assets/shared/icon-arrow-down.svg";
import { useDispatch } from "react-redux";
import { handleVote } from "../../Redux/Actions/Posts";
import { handleCommentVote } from "../../Redux/Actions/Comments";
import { Vote } from "./VoteCountStyles";

const VoteCount = ({ post }) => {
  const dispatch = useDispatch();

  const handleVoting = (option) => {
    post.parentId
      ? dispatch(
          handleCommentVote({
            id: post?.id,
            option,
          })
        )
      : dispatch(
          handleVote({
            id: post?.id,
            option,
          })
        );
  };

  return (
    <Vote>
      <div onClick={() => handleVoting("upVote")} className="voteIcon">
        <Image width={10} height={10} src={ArrowUp} alt="Upvote" />
      </div>

      <p className="voteScore">{post?.voteScore}</p>

      <div onClick={() => handleVoting("downVote")} className="voteIcon">
        <Image width={10} height={10} src={ArrowDown} alt="Downvote" />
      </div>
    </Vote>
  );
};

export default VoteCount;
