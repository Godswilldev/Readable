import { Category } from "./CategoryTypeStyles";

const CategoryType = ({ text }) => {
  return (
    <Category>
      <p className="voteScore">{text}</p>
    </Category>
  );
};

export default CategoryType;
