import styled from "styled-components";
import { body1, body2, body3, h2 } from "../../Utils/Typography";
import { colors } from "./../../Utils/Theme";
import { h3 } from "./../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";

export const Side = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 0;
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
    background-image: radial-gradient(
      circle farthest-side at 95% 50%,
      #e84d70,
      #a337f6,
      #28a7ed
    );
    h1 {
      ${h2}
    }

    p {
      ${body2}
    }

    @media ${device.tablet} {
      width: 22.3rem;
      height: 17.8rem;
      margin-bottom: 0;
    }
  }

  .category {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 16.6rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    background-color: ${colors.white};
    position: relative;
    flex-wrap: wrap;
    @media ${device.tablet} {
      width: 22.3rem;
      height: 17.8rem;
      margin-bottom: 0;
    }
  }

  .roadmap {
    background-color: green;
    height: 17.8rem;
    border-radius: 1rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media ${device.tablet} {
      width: 22.3rem;
      height: 17.8rem;
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
