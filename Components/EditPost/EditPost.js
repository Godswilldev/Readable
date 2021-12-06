import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleDeletePost, handleEditPost } from "../../Redux/Actions/Posts";
import { colors } from "../../Utils/Theme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";
import EditIcon from "../../assets/shared/icon-edit-feedback.svg";
import { Edit } from "./EditPoststyles";

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
        <div className="form__post">
          <div className="formIcon">
            <Image
              width="35rem"
              height="35rem"
              src={EditIcon}
              alt="Edit Icon"
            />
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
                style={{
                  fontSize: "1.5rem",
                  color: colors.col7,
                  height: "3.5rem",
                }}
              >
                {categories?.map((category) => (
                  <MenuItem
                    style={{ width: "100%" }}
                    value={category?.name}
                    key={category?.name}
                    style={{ fontSize: "1.7rem", height: "3.5rem" }}
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
        </div>
      </form>
    </Edit>
  );
};

export default EditPost;
