import React from "react";
import styled from "styled-components";
import { body1, body2, body3, h2 } from "../../Utils/Typography";
import CategoryType from "../VoteCount/CategoryType";
import { colors } from "./../../Utils/Theme";
import { h3 } from "./../../Utils/Typography";
import { device } from "./../../Utils/MediaQueries";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleGetcategoryPost } from "../../Redux/Actions/Posts";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    ({ categoriesReducer }) => categoriesReducer
  );

  return (
    <Side>
      <div className="title">
        <h1>Udacity</h1>
        <p>Readable</p>
      </div>

      <div className="category">
        <div
          onClick={() =>
            dispatch(
              handleGetcategoryPost({
                category: null,
              })
            )
          }
        >
          <CategoryType text="All" />
        </div>
        {categories?.map((category) => (
          <div
            onClick={() =>
              dispatch(
                handleGetcategoryPost({
                  category: category.name,
                })
              )
            }
            key={category.name}
          >
            <CategoryType text={category?.name} />
          </div>
        ))}
      </div>

      <div className="roadmap">
        <ul>
          <li className="roadmap__title">
            <p>Roadmap</p>
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
