import router from "next/router";
import Button1 from "./../Buttons/Button1";
import EmptyIcon from "../../assets/suggestions/illustration-empty.svg";
import Image from "next/image";
import { Empty } from "./NoPostStyles";

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
