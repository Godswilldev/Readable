import React, { useContext } from "react";
import Image from "next/image";
import styled, { ThemeContext } from "styled-components";
import { device } from "../../Utils/MediaQueries";
import { body3 } from "./../../Utils/Typography";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import ArrowDown from "../../assets/shared/icon-arrow-down.svg";
import { useDispatch } from "react-redux";
import { handleVote } from "../../Redux/Actions/Posts";
import { handleCommentVote } from "../../Redux/Actions/Comments";

const VoteCount = ({ post }) => {
  const darkMode = useContext(ThemeContext);
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
    <Vote darkMode={darkMode}>
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

const Vote = styled.div`
  width: 4rem;
  height: 5.3rem;
  background-color: ${({ darkMode }) => darkMode.categoryType};
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: ${({ darkMode }) => darkMode.lightText};
  }

  @media ${device.mobileL} {
    flex-direction: row;
    height: 3.2rem;
    width: 6.9rem;
  }

  .voteScore {
    color: ${({ darkMode }) => darkMode.text};
    ${body3}
    font-weight: 600;
    @media ${device.mobileL} {
      padding-left: 1rem;
    }
  }

  .voteicon {
    cursor: pointer;
    z-index: 3;
  }
`;
