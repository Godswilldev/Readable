import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SinglePost from "../Components/SinglePost/SinglePost";
import { handleGetAllPosts } from "../Redux/Actions/Posts";
import { useEffect, useState } from "react";
import router from "next/router";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllPosts());
  }, [dispatch]);

  const posts = useSelector(({ postsReducer }) => postsReducer);

  return (
    <>
      <Navbar
        post={posts}
      />

      {Object.values(posts).map((post) => (
        <Post onClick={() => router.push(`/posts/${post.id}`)} key={post?.id}>
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
