import React from "react";

const Postdetail = (props) => {
  const postId = props.match.params;
  return (
    <div>
      <h1>{postId}</h1>
    </div>
  );
};

export default Postdetail;
