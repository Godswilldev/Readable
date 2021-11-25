import styled from "styled-components";
import Image from "next/image";
import { colors } from "./../../Utils/Theme";
import bulb from "../../assets/suggestions/icon-suggestions.svg";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import Button1 from "./../Buttons/Button1";
import { useState } from "react";
import { body1, body2, h3 } from "./../../Utils/Typography";
import { useDispatch } from "react-redux";
import { sortBy } from "../../Redux/Actions/Posts";

const Navbar = ({ post }) => {
  const [sortMethod, setSortMethod] = useState("Most Upvotes");
  const postLength = Object.values(post).length;
  const dispatch = useDispatch();

  const [showSortMethod, setShowSortMethod] = useState(false);

  return (
    <Navigation>
      <div className="suggestions">
        <Image src={bulb} alt="Icon suggestion" />
        <span className="suggestions__title"> {postLength} Suggestions</span>
      </div>

      <p className="sortBy" onClick={() => setShowSortMethod(!showSortMethod)}>
        Sort By: {sortMethod} {"  "} <Image src={arrowUp} alt="Arrow up" />
      </p>

      <div onClick={() => setShowSortMethod(!showSortMethod)}>
        {showSortMethod && (
          <ul className="sortMethod">
            <li
              onClick={() => {
                setSortMethod("Most Upvotes"), dispatch(sortBy(sortMethod));
              }}
            >
              Most Upvotes
            </li>

            <li
              onClick={() => {
                setSortMethod("Least Upvotes"), dispatch(sortBy(sortMethod));
              }}
            >
              Least Upvotes
            </li>

            <li
              onClick={() => {
                setSortMethod("Most Comments"), dispatch(sortBy(sortMethod));
              }}
            >
              Most Comments
            </li>

            <li
              onClick={() => {
                setSortMethod("Least Comments"), dispatch(sortBy(sortMethod));
              }}
            >
              Least Comments
            </li>
          </ul>
        )}
      </div>
      <span className="nav__button">
        <Button1 title="Add Feedback" />
      </span>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
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
    left: 50rem;
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
