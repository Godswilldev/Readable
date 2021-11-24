import { useRouter } from "next/router";

const PostDetail = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>post detail {query.PostDetails} </h1>
    </div>
  );
};

export default PostDetail;
