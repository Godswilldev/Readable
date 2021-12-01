import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import { h2 } from "../../Utils/Typography";
import { body1 } from "./../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";

export const Empty = styled.div`
  background-color: ${colors.white};
  width: 82.5rem;
  height: 60rem;
  margin-top: 4rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${device.tablet} {
    width: 95%;
  }
  @media ${device.mobileL} {
    width: 90%;
  }

  .nopost {
    &__image {
    }

    &__title {
      ${h2}
      margin: 3rem 0;
      margin-bottom: 2rem;
    }

    &__body {
      ${body1}
      margin-bottom: 3rem;
      color: ${colors.col7};
    }
  }
`;
