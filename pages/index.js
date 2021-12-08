import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SinglePost from "../Components/SinglePost/SinglePost";
import { handleGetAllPosts } from "../Redux/Actions/Posts";
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { device } from "./../Utils/MediaQueries";
import NoPost from "../Components/NoPost/NoPost";
import { handleGetAllCategories } from "../Redux/Actions/Categories";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ postsReducer }) => postsReducer);

  useEffect(() => {
    dispatch(handleGetAllPosts());
    dispatch(handleGetAllCategories());
  }, [dispatch]);

  return (
    <Index>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="posts">
        <div className="navbar">
          <Navbar post={posts} />
        </div>

        <div className="post">
          {Object.values(posts).length < 1 ? (
            <NoPost />
          ) : (
            Object.values(posts).map((post) => (
              <Post key={post?.id}>
                <SinglePost post={post} />
              </Post>
            ))
          )}
        </div>
      </div>
    </Index>
  );
};

export default Home;

const Index = styled.div`
  padding: 6%;
  display: grid;
  grid-template-columns: 20% 1fr;
  position: relative;

  @media ${device.laptopM} {
    padding: 3%;
  }
  @media ${device.laptop} {
    grid-template-columns: 25% 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding: 0;
  }

  .post {
    @media ${device.mobileL} {
      padding-bottom: 20rem;
    }
  }
`;

const Post = styled.div`
  margin: 2rem 0;

  @media ${device.mobileL} {
    position: relative;
    top: 17rem;
  }
`;
