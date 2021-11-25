import React from "react";
import styled from "styled-components";
import CategoryType from "../VoteCount/CategoryType";
import { colors } from "./../../Utils/Theme";
const Sidebar = () => {
  return (
    <Side>
      <div className="title">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>

      <div className="category">
        <CategoryType text="All" />
        <CategoryType text="UI" />
        <CategoryType text="UX" />
        <CategoryType text="Enhancement" />
        <CategoryType text="Bug" />
        <CategoryType text="Feature" />
      </div>

      <div className="roadmap">
        <ul>
          <li>
            <span>Roadmap</span>
            <span>View</span>
          </li>
          <li>
            <span>Planned</span>
            <span>2</span>
          </li>
          <li>
            <span>In-Progress</span>
            <span>3</span>
          </li>
          <li>
            <span>Live</span>
            <span>1</span>
          </li>
        </ul>
      </div>
    </Side>
  );
};

export default Sidebar;

const Side = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    height: 13.7rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
    /* background-image: linear-gradient(to top right, red, blue); */
    background-image: radial-gradient(
      circle farthest-side at 95% 50%,
      #e84d70,
      #a337f6,
      #28a7ed
    );
  }

  .category {
    display: flex;
    height: 16.6rem;
    border-radius: 1rem;
    margin-bottom: 3rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    background-color: ${colors.white};
  }

  .roadmap {
    background-color: green;
    height: 17.8rem;
    border-radius: 1rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
    background-color: ${colors.white};
  }
`;
