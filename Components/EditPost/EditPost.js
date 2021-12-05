import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleDeletePost, handleEditPost } from "../../Redux/Actions/Posts";
import { colors } from "../../Utils/Theme";
import Button1 from "../Buttons/Button1";
import Button3 from "../Buttons/Button1";
import Button4 from "./../Buttons/Button4";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";
import EditIcon from "../../assets/shared/icon-edit-feedback.svg";
import { body3, h1, h3, h4 } from "../../Utils/Typography";

const EditPost = ({ id, setEditing, post }) => {
  const dispatch = useDispatch();
  const posts = useSelector(({ postsReducer }) => postsReducer);
  const postToBeEdited = Object?.values(posts).find((p) => p?.id === id);

  const [title, setTitle] = useState(postToBeEdited.title);
  const [details, setDetails] = useState(postToBeEdited.body);
  const [selectedCategory, setSelectedCategory] = useState(
    postToBeEdited.category
  );
  const { categories } = useSelector(
    ({ categoriesReducer }) => categoriesReducer
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    title.length > 2 &&
      details.length > 5 &&
      selectedCategory.length > 2 &&
      dispatch(
        handleEditPost({
          id,
          title,
          body: details,
          category: selectedCategory,
        })
      );
    setEditing(false);
  };

  return (
    <Edit>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formIcon">
          <Image width="35rem" height="35rem" src={EditIcon} alt="Edit Icon" />
        </div>
        <h1 className="form__Heading">Editing `{post.title}`</h1>

        <div className="postTitle">
          <h3>Feedback Title</h3>
          <p>Add a short Description Headline</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title}
          />
        </div>

        <div className="postSelect">
          <h3>Category</h3>
          <p>Choose a category for your Post</p>
          <FormControl style={{ width: "100%" }} className="formControl">
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              label="Category"
            >
              {categories?.map((category) => (
                <MenuItem
                  style={{ width: "100%" }}
                  value={category?.name}
                  key={category?.name}
                >
                  {category?.name.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="postDetail">
          <h3>Post Detail</h3>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>

          <textarea
            cols="30"
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={details}
          />
        </div>

        <div className="post__Btns">
          <button
            className="post__Btns--delete"
            onClick={() => dispatch(handleDeletePost({ id: post?.id }))}
          >
            Delete
          </button>
          <span>
            <button
              className="post__Btns--cancel"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>

            <button
              className="post__Btns--save"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </span>
        </div>
      </form>
    </Edit>
  );
};

export default EditPost;

const Edit = styled.div`
  transition: 0.5s all;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  .form {
    transition: 0.5s all;
    background-color: ${colors.white};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 54rem;
    height: 88%;
    padding: 1rem 5rem;
  }

  .formIcon {
    position: relative;
    top: -7.5rem;
  }

  .form__Heading {
    ${h1}
    margin-bottom: 1rem;
    color: ${colors.col6};
  }

  input,
  textarea {
    border: none;
    outline: none;
    background: #f7f8fd;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    color: ${colors.col7};
    border-radius: 0.3rem;
  }

  .postTitle {
    h3 {
      color: ${colors.col6};
      ${h4};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${colors.col7};
      ${body3}
    }

    input {
      margin-top: 1.5rem;
    }
  }

  .postDetail {
    margin-top: 2rem;
    h3 {
      color: ${colors.col6};
      ${h4};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${colors.col7};
      ${body3}
    }

    textarea {
      margin-top: 1.5rem;
    }
  }

  .postSelect {
    margin-top: 2rem;

    h3 {
      color: ${colors.col6};
      ${h4};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${colors.col7};
      ${body3}
    }

    .formControl {
      margin-top: 1.5rem;
    }
  }

  .post__Btns {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    width: 100%;

    button {
      border: none;
      outline: none;
      color: #f2f4fe;
      border-radius: 1rem;
      cursor: pointer;
      box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
      &:focus,
      &:active {
        box-shadow: 0.4rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);
      }
    }

    &--delete {
      background-color: #d73737;
      width: 9.3rem;
      height: 4.4rem;
    }
    &--cancel {
      background-color: ${colors.col6};
      width: 9.3rem;
      height: 4.4rem;
      margin-right: 2rem;
    }

    &--save {
      background-color: ${colors.col1};
      width: 14.4rem;
      height: 4.4rem;
    }
  }
`;
