import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleAddNewPost } from "../../Redux/Actions/Posts";
import { colors } from "../../Utils/Theme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";
import NewPostIcon from "../../assets/shared/icon-new-feedback.svg";
import { Edit } from "./NewPoststyles";

const NewPost = ({ setNewPost}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("react");
  const { categories } = useSelector(
    ({ categoriesReducer }) => categoriesReducer
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    title.length > 2 &&
      details.length > 5 &&
      selectedCategory.length > 2 &&
      (dispatch(
        handleAddNewPost({
          title,
          body: details,
          category: selectedCategory,
        })
      ),
      setNewPost(false));
  };

  return (
    <Edit>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__post">
          <div className="formIcon">
            <Image
              width="35rem"
              height="35rem"
              src={NewPostIcon}
              alt="Edit Icon"
            />
          </div>
          <h1 className="form__Heading">New Post</h1>

          <div className="postTitle">
            <h3>Post Title</h3>
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
                placeholder="--Select a Category--"
                style={{
                  fontSize: "1.7rem",
                  color: colors.col7,
                  height: "4rem",
                }}
              >
               
                {categories?.map((category) => (
                  <MenuItem
                    style={{ width: "100%" }}
                    value={category?.name}
                    key={category?.name}
                    style={{ fontSize: "1.7rem", height: "2rem" }}
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
              className="post__Btns--cancel"
              onClick={() => setNewPost(false)}
            >
              Cancel
            </button>

            <button
              className="post__Btns--save"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </Edit>
  );
};

export default NewPost;
