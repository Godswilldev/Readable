import CategoryType from "../VoteCount/CategoryType";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleGetcategoryPost } from "../../Redux/Actions/Posts";
import { Side } from "./Sidebarstyles";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = useSelector(
    ({ categoriesReducer }) => categoriesReducer
  );

  return (
    <Side>
      <div onClick={() => router.push("/")} className="title">
        <h1>Udacity</h1>
        <p>Readable</p>
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
          <CategoryType text="All" />
        </div>

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
            <CategoryType text={category?.name} />
          </div>
        ))}
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
