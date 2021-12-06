import router from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button1 from "../../Components/Buttons/Button1";
import { handleAddNewPost } from "../../Redux/Actions/Posts";
import Button3 from "./../../Components/Buttons/Button3";
import  styled  from 'styled-components';

const New = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

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
      router.push("/"));
  };

  return (
    <NewPost>
    <form onSubmit={handleSubmit}>
      <h1>New Post</h1>
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

      <span onClick={() => router.push("/")}>
        <Button3 title="cancel" />
      </span>

      <span onClick={handleSubmit}>
        <Button1 title="Add" />
      </span>
    </form>
    </NewPost>
  );
};

export default New;

const NewPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100vw;
  height:100vh;
  margin: 5rem 0;
`;