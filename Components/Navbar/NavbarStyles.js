import styled from "styled-components";
import { device } from "./../../Utils/MediaQueries";
import { colors } from "./../../Utils/Theme";
import { h3, body1, body2 } from "./../../Utils/Typography";

export const Navigation = styled.div`
  margin: 0 auto;
  width: 82.5rem;
  height: 7.2rem;
  background-color: ${colors.col3};
  color: ${colors.col11};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.2);
  @media ${device.tablet} {
    width: 95%;
  }
  @media ${device.mobileL} {
    width: 90%;
  }

  .suggestions {
    display: flex;
    align-items: center;
    &__title {
      padding-left: 1rem;
      ${h3}
    }
  }

  .sortBy {
    cursor: pointer;
    ${body2}
  }

  .sortMethod {
    background-color: ${colors.white};
    color: ${colors.col3};
    border-radius: 1rem;
    width: 25.5rem;
    height: 19.2rem;
    position: absolute;
    top: 6rem;
    left: 38%;
    z-index: 2;
    box-shadow: 1rem 1rem 1rem 0rem rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      transition: 0.5s all;
      cursor: pointer;
      ${body1}
      padding: 1.1rem;
      padding-left: 2rem;
      &:not(:last-child) {
        border-bottom: 1px solid ${colors.col11};
      }
      &:hover {
        color: ${colors.col1};
      }
    }
  }

  .nav__button {
    justify-content: flex-end;
    text-transform: lowercase;
  }
`;
