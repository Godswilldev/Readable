import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import { body3 } from "./../../Utils/Typography";

export const Categ = styled.span`
  width: min-content;
  height: 3rem;
  padding: 1rem;
  background-color: ${colors.col4};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s all;
  color: ${colors.col2};

  &:hover {
    background-color: ${colors.col2};
    color: ${colors.col11};
  }

  .voteScore {
    ${body3}
    font-weight: 600;
  }
`;
