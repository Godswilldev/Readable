import CategoryType from "../VoteCount/CategoryType";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleGetcategoryPost } from "../../Redux/Actions/Posts";
import { Side } from "./Sidebarstyles";
import { useRouter } from "next/router";
import Image from "next/image";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import icon_close from "../../assets/shared/mobile/icon-close.svg";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = useSelector(
    ({ categoriesReducer }) => categoriesReducer
  );
  const [onMobile, setOnMobile] = useState(false);

  return (
    <Side mobile={onMobile}>
      {!onMobile && <div className="overlay"></div>}
      <div onClick={() => router.push("/")} className="title">
        <span>
          <h1>Udacity</h1>
          <p>Readable</p>
        </span>

        <span className="hamburger">
          <Image
            onClick={() => setOnMobile(!onMobile)}
            src={onMobile ? hamburger : icon_close}
            alt="hamburger menu"
          />
        </span>
      </div>

      <div className="category">
        <div
          onClick={() =>
            dispatch(
              handleGetcategoryPost({
                category: null,
              })
            )
          }
        >
          <CategoryType text="ALL" />
        </div>

        <>
          {categories?.map((category) => (
            <div
              onClick={() =>
                dispatch(
                  handleGetcategoryPost({
                    category: category.name,
                  })
                )
              }
              key={category.name}
            >
              <CategoryType text={category?.name.toUpperCase()} />
            </div>
          ))}
        </>
      </div>

      <div className="roadmap">
        <ul>
          <li className="roadmap__title">
            <p>Roadmap</p>
            <span>View</span>
          </li>
          <li>
            <span>Planned</span>
            <span>2</span>
          </li>
          <li>
            <span>In-Progress</span>
            <span>3</span>
          </li>
          <li>
            <span>Live</span>
            <span>1</span>
          </li>
        </ul>
      </div>
    </Side>
  );
};

export default Sidebar;
