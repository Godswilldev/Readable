import router from "next/router";
import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import Button1 from "./../Buttons/Button1";
import EmptyIcon from "../../assets/suggestions/illustration-empty.svg";
import Image from "next/image";
import { h2 } from "../../Utils/Typography";
import { body1 } from "./../../Utils/Typography";

const NoPost = () => {
  return (
    <Empty>
      <div className="nopost">
        <span className="nopost__image">
          <Image alt="Illustration Empty" src={EmptyIcon} />
        </span>
        <h2 className="nopost__title">There is no feedback yet</h2>
        <p className="nopost__body">
          Got a suggestion? Found a bug that needs to be squashed? <br /> We
          love hearing about new ideas to improve our app.
        </p>
        <span className="nopost__btn" onClick={() => router.push("/posts/new")}>
          <Button1 title="Add Feedback" />
        </span>
      </div>
    </Empty>
  );
};

export default NoPost;

const Empty = styled.div`
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
    }
  }
`;
