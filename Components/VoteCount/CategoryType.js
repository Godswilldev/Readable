import { Categ } from "./CategoryTypeStyles";

const CategoryType = ({ text }) => {
  return (
    <Categ>
        <p className="voteScore">{text}</p>
    </Categ>
  );
};

export default CategoryType;
