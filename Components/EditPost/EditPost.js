import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleDeletePost, handleEditPost } from "../../Redux/Actions/Posts";
import { colors } from "../../Utils/Theme";
import Button1 from "../Buttons/Button1";
import Button3 from "../Buttons/Button1";
import Button4 from "./../Buttons/Button4";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";

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
        <h1>Editing {post.title}</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />

        <div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Category
            </InputLabel>

            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              label="Category"
              style={{ width: "20rem" }}
            >
              {categories?.map((category) => (
                <MenuItem
                  style={{ width: "20rem" }}
                  value={category?.name}
                  key={category?.name}
                >
                  {category?.name.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <textarea
          cols="30"
          rows="10"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Post details"
        />

        <div>
          <span onClick={() => dispatch(handleDeletePost({ id: post?.id }))}>
            <Button4 title="Delete" />
          </span>

          <span onClick={() => setEditing(false)}>
            <Button3 title="cancel" />
          </span>

          <span onClick={handleSubmit}>
            <Button1 title="save" />
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
    background-color: ${colors.white};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    width: 54rem;
    height: 54rem;
  }
`;
