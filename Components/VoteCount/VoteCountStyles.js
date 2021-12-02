import styled from "styled-components";
import { device } from "../../Utils/MediaQueries";
import { colors } from "./../../Utils/Theme";
import { body3 } from "./../../Utils/Typography";

export const Vote = styled.div`
  width: 4rem;
  height: 5.3rem;
  background-color: ${colors.col11};
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: ${colors.col9};
    .voteScore {
      color: ${colors.col11};
    }
  }

  @media ${device.mobileL} {
    flex-direction: row;
    height: 3.2rem;
    width: 6.9rem;
  }

  .voteScore {
    color: ${colors.col6};
    ${body3}
    font-weight: 600;

    @media ${device.mobileL} {
      padding-left: 1rem;
      padding-right:1rem;
    }
  }

  .voteicon {
    cursor: pointer;
    z-index: 3;
  }
`;
