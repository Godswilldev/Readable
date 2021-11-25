import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled, { ThemeContext } from "styled-components";
import { colors } from "./../../Utils/Theme";
import { body3 } from "./../../Utils/Typography";

const CategoryType = ({ text }) => {
  const darkMode = useContext(ThemeContext);
  const dark = useSelector(({ ThemeReducer }) => ThemeReducer);

  return (
    <Category dark={dark} darkMode={darkMode}>
      <p className="voteScore">{text}</p>
    </Category>
  );
};

export default CategoryType;

const Category = styled.div`
  width: min-content;
  height: 3rem;
  padding: 1rem;
  background-color: ${({ darkMode }) => darkMode.categoryType};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s all;
  color: ${({ dark }) => (dark?.darkMode ? colors.col4 : colors.col2)};

  &:hover {
    background-color: ${colors.col2};
    color: ${colors.col11};
  }

  .voteScore {
    ${body3}
    font-weight: 600;
    
  }
`;
