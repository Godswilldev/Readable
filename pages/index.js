import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SinglePost from "../Components/SinglePost/SinglePost";
import { handleGetAllPosts } from "../Redux/Actions/Posts";
import { useEffect, useState } from "react";
import router from "next/router";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetAllPosts());
  }, [dispatch]);

  const posts = useSelector(({ postsReducer }) => postsReducer);

  return (
    <Index>
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="posts">
          <div className="navbar">
            <Navbar post={posts} />
          </div>

          <div className="post">
            {Object.values(posts).map((post) => (
              <Post
                onClick={() => router.push(`/posts/${post.id}`)}
                key={post?.id}
              >
                <SinglePost post={post} />
              </Post>
            ))}
          </div>
        </div>
      </div>
    </Index>
  );
};

export default Home;

const Index = styled.div`
  max-width: 100vw;
  position: absolute;
  top: 10%;
  left: 10rem;

  .sidebar {
    width: 25.5rem;
    height: 52.9rem;
    position: fixed;
  }

  .posts {
    position: absolute;
    left: 26rem;
    margin-left: 5rem;
  }
`;

const Post = styled.div`
  margin: 1.5rem 0;
  cursor: pointer;
`;
