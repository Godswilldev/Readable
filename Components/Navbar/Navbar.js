import styled from "styled-components";
import Image from "next/image";
import { colors } from "./../../Utils/Theme";
import bulb from "../../assets/suggestions/icon-suggestions.svg";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import Button1 from "./../Buttons/Button1";
import { useState } from "react";
import { body1 } from "./../../Utils/Typography";

const Navbar = () => {
  const [showSortMethod, setShowSortMethod] = useState(false);
  const [selectedSortMethod, setSelectedSortMethod] = useState("Most Upvotes");

  return (
    <Navigation>
      <Image src={bulb} alt="Icon suggestion" />

      <h1>6 Suggestions</h1>

      <p onClick={() => setShowSortMethod(!showSortMethod)}>
        Sort By: {selectedSortMethod} <Image src={arrowUp} alt="Arrow up" />
      </p>

      <div onClick={() => setShowSortMethod(!showSortMethod)}>
        {showSortMethod && (
          <ul className="sortMethod">
            <li onClick={() => setSelectedSortMethod("Most Upvotes")}>
              Most Upvotes
            </li>
            <li onClick={() => setSelectedSortMethod("Least Upvotes")}>
              Least Upvotes
            </li>
            <li onClick={() => setSelectedSortMethod("Most Comments")}>
              Most Comments
            </li>
            <li onClick={() => setSelectedSortMethod("Least Comments")}>
              Least Comments
            </li>
          </ul>
        )}
      </div>

      <Button1 title="Add Feedback" />
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
  width: 82.5rem;
  height: 7.2rem;
  background-color: ${colors.col3};
  color: ${colors.col11};
  border-radius: 1rem;
  display: flex;
  align-items: center;

  .sortMethod {
    background-color: ${colors.white};
    color: ${colors.col3};
    border-radius: 1rem;
    width: 25.5rem;
    height: 19.2rem;
    position: absolute;
    z-index: 2;
    box-shadow: 1rem 1rem 1rem 0rem rgba(0, 0, 0, 0.2);

    li {
      cursor: pointer;
      ${body1}

      &:hover {
        color: ${colors.col1};
      }
    }
  }
`;
