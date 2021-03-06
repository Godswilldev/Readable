import Image from "next/image";
import bulb from "../../assets/suggestions/icon-suggestions.svg";
import arrowUp from "../../assets/shared/icon-arrow-up.svg";
import Button1 from "./../Buttons/Button1";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../../Redux/Actions/Posts";
import { Navigation } from "./NavbarStyles";
import NewPost from "../NewPost/NewPost";

const Navbar = ({ post }) => {
  const [sortMethod, setSortMethod] = useState("Most Upvotes");
  const [newPost, setNewPost] = useState(false)
  const postLength = Object.values(post).length;
  const dispatch = useDispatch();

  const [showSortMethod, setShowSortMethod] = useState(false);

  const handleSort = (method) => {
    setSortMethod(method);
    dispatch(sortBy(method));
  };

  return (
    <Navigation>
      <div className="suggestions">
        <Image src={bulb} alt="Icon suggestion" />
        <span className="suggestions__title"> {postLength} Suggestions</span>
      </div>

      <p className="sortBy" onClick={() => setShowSortMethod(!showSortMethod)}>
        Sort By: {sortMethod} <Image src={arrowUp} alt="Arrow up" />
      </p>

      <div onClick={() => setShowSortMethod(!showSortMethod)}>
        {showSortMethod && (
          <ul className="sortMethod">
            <li onClick={() => handleSort("Most Upvotes")}>Most Upvotes</li>

            <li onClick={() => handleSort("Least Upvotes")}>Least Upvotes</li>

            <li onClick={() => handleSort("Most Comments")}>Most Comments</li>

            <li onClick={() => handleSort("Timestamp")}>Timestamp</li>
          </ul>
        )}
      </div>

      <span onClick={() => setNewPost(true)} className="nav__button">
        <Button1 title="Add Post" />
      </span>
      <>
          {
            newPost&&<NewPost setNewPost={setNewPost}  />
          }
      </>
    </Navigation>
  );
};

export default Navbar;
