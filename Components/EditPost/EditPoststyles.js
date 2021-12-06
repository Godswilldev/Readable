import styled from "styled-components";
import { body3, h1, h4 } from "../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";
import { colors } from "../../Utils/Theme";

export const Edit = styled.div`
  transition: 0.5s all;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  @media ${device.mobileL} {
    z-index: 11;
  }
  .form {
    transition: 0.5s all;
    background-color: ${colors.white};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 54rem;
    height: 60rem;
    padding: 1rem 5rem;

    @media ${device.tablet} {
      height: 91%;
    }
    @media ${device.mobileL} {
      height: 85%;
    }
    @media ${device.mobileM} {
      height: 80%;
    }
    @media ${device.mobileS} {
      height: 70%;
    }
  }

  .form__post {
    @media ${device.laptop} {
      margin-top: -3rem;
    }
  }

  .formIcon {
    position: relative;
    top: -4rem;
    @media ${device.laptop} {
      top: -2rem;
    }
    @media ${device.tablet} {
      top: -3.5rem;
    }
    @media ${device.mobileM} {
      top: -5rem;
    }
    @media ${device.mobileS} {
      top: -6rem;
    }
  }

  .form__Heading {
    ${h1}
    margin-bottom: 1rem;
    color: ${colors.col6};
  }

  input,
  textarea {
    border: none;
    outline: none;
    background: #f7f8fd;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    color: ${colors.col7};
    border-radius: 0.3rem;
  }

  .postTitle {
    h3 {
      color: ${colors.col6};
      ${h4};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${colors.col7};
      ${body3}
    }

    input {
      margin-top: 1.5rem;
    }
  }

  .postDetail {
    margin-top: 2rem;
    h3 {
      color: ${colors.col6};
      ${h4};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${colors.col7};
      ${body3}
    }

    textarea {
      margin-top: 1.5rem;
    }
  }

  .postSelect {
    margin-top: 2rem;

    h3 {
      color: ${colors.col6};
      ${h4};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${colors.col7};
      ${body3}
    }

    .formControl {
      margin-top: 1.5rem;
    }
  }

  .post__Btns {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    width: 100%;

    button {
      border: none;
      outline: none;
      color: #f2f4fe;
      border-radius: 1rem;
      cursor: pointer;
      box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
      &:focus,
      &:active {
        box-shadow: 0.4rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);
      }
    }

    &--delete {
      background-color: #d73737;
      width: 9.3rem;
      height: 4.4rem;
      @media ${device.mobileS} {
        width: 10rem;
      }
    }
    &--cancel {
      background-color: ${colors.col6};
      width: 9.3rem;
      height: 4.4rem;
      margin-right: 2rem;
      @media ${device.mobileS} {
        width: 10rem;
        margin-right: 1rem;
      }
    }

    &--save {
      background-color: ${colors.col1};
      width: 14.4rem;
      height: 4.4rem;
    }
  }
`;
