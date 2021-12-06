import styled from "styled-components";
import { body1, body2, body3, h1 } from "../../Utils/Typography";
import { colors } from "./../../Utils/Theme";
import { h3 } from "./../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;

  .overlay {
    position: fixed;
    width: 51vw;
    height: 100vh;
    right: 0rem;
    transition: 0.5s all;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 0;
  }

  @media ${device.mobileL} {
    background-color: ${colors.col4};
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin: 0;
    height: 100vh;
    width: 30rem;
    transition: 0.5s ease-in;
    left: ${({ mobile }) => (mobile ? "-100vw" : 0)};
  }

  .title {
    height: 13.7rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
    color: ${colors.col11};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: 3rem;
    padding-left: 2rem;
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
    background-image: radial-gradient(
      circle farthest-side at 95% 50%,
      #e84d70,
      #a337f6,
      #28a7ed
    );
    h1 {
      ${h1}
    }

    p {
      ${body2}
    }
    .hamburger {
      display: none;
    }

    @media ${device.laptop} {
      width: 95%;
    }

    @media ${device.tablet} {
      width: 22.3rem;
      height: 17.8rem;
      margin-bottom: 0;
      margin: 0;
    }
    @media ${device.tabletSM} {
      width: 18rem;
    }

    @media ${device.mobileL} {
      width: 100vw;
      box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.11);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 4rem;
      align-items: center;
      border-radius: 0;
      height: 7.2rem;
      position: fixed;
      left: 0;
      top: 0;
      .hamburger {
        display: block;
      }
    }
  }

  .category {
    align-items: center;
    height: 16.6rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
    background-color: ${colors.white};
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    position: relative;

    @media ${device.laptop} {
      width: 95%;
      margin: 2rem auto;
    }
    @media ${device.tablet} {
      width: 23rem;
      height: 17.8rem;
      margin-bottom: 0;
      margin: 0;
    }
    @media ${device.tabletSM} {
      width: 18rem;
    }
    @media ${device.mobileL} {
      top: 0rem;
      width: 21rem;
    }
    @media ${device.mobileM} {
      top: -2rem;
    }
    @media ${device.mobileS} {
      top: -5rem;
    }
  }

  .roadmap {
    background-color: green;
    height: 17.8rem;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.11);
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media ${device.laptop} {
      width: 95%;
      margin: 2rem auto;
      margin-bottom: 5rem;
    }
    @media ${device.tablet} {
      width: 23rem;
      height: 17.8rem;
      margin: 0;
    }

    @media ${device.tabletSM} {
      width: 18rem;
    }

    @media ${device.mobileL} {
      position: relative;
      top: -20rem;
      width: 21rem;
    }
    @media ${device.mobileM} {
      position: relative;
      top: -28rem;
    }
    @media ${device.mobileS} {
      position: relative;
      top: -38rem;
    }

    &__title {
      p {
        ${h3}
      }
      span {
        ${body3}

        &:hover {
          border-bottom: 1px solid gray;
          color: ${colors.col1};
        }
      }
    }

    ul {
      width: 100%;
      padding: 0 3rem;

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${body1}
        margin:1rem 0;
      }
    }
  }
`;
