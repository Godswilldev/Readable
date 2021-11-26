import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SinglePost from "../Components/SinglePost/SinglePost";
import { handleGetAllPosts } from "../Redux/Actions/Posts";
import { useEffect } from "react";
import router from "next/router";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { device } from "./../Utils/MediaQueries";

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
            {Object.values(posts).length < 1 ? (
              <h1>No posts</h1>
            ) : (
              Object.values(posts)
                ?.sort((a, b) => b.timestamp - a.timestamp)
                .map((post) => (
                  <Post
                    onClick={() => router.push(`/posts/${post?.id}`)}
                    key={post?.id}
                  >
                    <SinglePost post={post} />
                  </Post>
                ))
            )}
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
  left: 12%;

  @media ${device.laptop} {
    left: 1%;
  }

  .sidebar {
    width: 25.5rem;
    height: 52.9rem;
    position: fixed;

    @media ${device.tablet} {
      width: 68.9rem;
      height: 17.8rem;
    }
  }

  .posts {
    position: absolute;
    left: 26rem;
    margin-left: 5rem;

    @media ${device.laptop} {
      margin-left: 2rem;
    }
  }
`;

const Post = styled.div`
  margin: 1.5rem 0;
  cursor: pointer;
`;
