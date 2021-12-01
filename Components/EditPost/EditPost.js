import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleEditPost } from "../../Redux/Actions/Posts";
import Button1 from "../Buttons/Button1";
import Button3 from "../Buttons/Button1";

const EditPost = ({ id, setEditing }) => {
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
    <form onSubmit={handleSubmit}>
      <h1>Edit Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="" key="">
          Select Category
        </option>
        {categories?.map((category) => (
          <option value={category?.name} key={category?.name}>
            {category?.name.toUpperCase()}
          </option>
        ))}
      </select>

      <textarea
        cols="30"
        rows="10"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Post details"
      />

      <span onClick={() => setEditing(false)}>
        <Button3 title="cancel" />
      </span>

      <span onClick={handleSubmit}>
        <Button1 title="Add" />
      </span>
    </form>
  );
};

export default EditPost;
