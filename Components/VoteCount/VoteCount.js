import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { device } from "../../Utils/MediaQueries";
import { body3 } from "./../../Utils/Typography";

const VoteCount = ({ text }) => {
  const darkMode = useContext(ThemeContext);

  return (
    <Vote darkMode={darkMode}>
      <div className="voteIcon">
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6l4-4 4 4"
            stroke={darkMode.text}
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <p className="voteScore">{text}</p>
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
`;
