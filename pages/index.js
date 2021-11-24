import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SinglePost from "../Components/SinglePost/SinglePost";
import { toggleTheme } from "../Redux/Actions/Theme";
import { handleGetAllPosts } from "../Redux/Actions/Posts";
import { useEffect } from "react";
import Button1 from "./../Components/Buttons/Button1";

const Home = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(({ ThemeReducer }) => ThemeReducer);

  useEffect(() => {
    dispatch(handleGetAllPosts());
  }, [dispatch]);

  const posts = useSelector(({ postsReducer }) => postsReducer);

  return (
    <>
      <span onClick={() => dispatch(toggleTheme(!darkMode))}>
        <Button1 title="Toggle">Toggle</Button1>
      </span>
      {Object.values(posts)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((post) => (
          <Post key={post?.id}>
            <SinglePost post={post} />
          </Post>
        ))}
    </>
  );
};

export default Home;

const Post = styled.div`
  margin: 1.5rem 0;
  cursor: pointer;
`;
