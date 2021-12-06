import styled from "styled-components";
import { h3, body1 } from "./../../Utils/Typography";
import { device } from "../../Utils/MediaQueries";
import { colors } from "./../../Utils/Theme";

export const Post = styled.div`
  position: relative;
  width: 82.5rem;
  height: 15.1rem;
  background-color: ${colors.white};
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 90%;
    padding: 4rem;
    position: relative;
  }
  .post {
    &__vote {
      align-self: flex-start;

      @media ${device.mobileL} {
        margin-top: 2rem;
      }
    }

    &__post {
      align-self: flex-start;

      &--title {
        ${h3}
      }

      &--category {
        display: flex;
        span {
          margin-right: 1rem;
        }
      }

      &--body {
        ${body1}
        margin: 1rem 0;
        @media ${device.mobileL} {
          margin-bottom: 2rem;
        }
      }
      @media ${device.mobileL} {
        order: -1;
      }
    }

    &__comment {
      display: flex;
      align-items: center;
      &--count {
        ${h3}
        font-size: 1.6rem;
        padding-left: 1.5rem;
      }

      @media ${device.mobileL} {
        position: absolute;
        right: 0;
        bottom: 0rem;
        margin: 2rem;
        margin-right: 4rem;
      }
    }
  }
`;
