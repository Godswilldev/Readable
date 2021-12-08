import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import { body2, h2 } from "../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  @media ${device.mobileL} {
    margin-top: 2rem;
  }
  .details {
    width: 100%;
    margin: 0 auto;

    &__backButton {
      margin-top: 1rem;

      @media ${device.mobileL} {
        margin: 2rem 0;
      }
    }

    &__post {
      margin-top: 2rem;

      @media ${device.mobileL} {
        margin-top: 0;
        padding: 0;
      }
    }

    &__comments {
      margin-top: 3rem;
      border-radius: 1rem;
    }

    &__form {
      width: 82.5rem;
      height: 24.6rem;
      background-color: ${colors.white};
      border-radius: 1rem;
      margin: 0 auto;
      margin-top: 3rem;
      box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
      padding: 2rem 3rem;

      @media ${device.laptop} {
        width: 95%;
      }

      @media ${device.tablet} {
        width: 90%;
      }

      h2 {
        ${h2}
        margin-bottom: 1rem;
      }

      form {
        display: flex;
        flex-direction: column;

        textarea {
          width: 100%;
          background: #f7f8fd;
          border: none;
          outline: none;
          color: ${colors.col7};
          ${body2}
          padding:2rem;
          border-radius: 1rem;
        }

        div {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            ${body2}
          }
        }
      }
    }
  }
`;
