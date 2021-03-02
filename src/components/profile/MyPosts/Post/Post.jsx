import React from "react";
import styleProfile from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styleProfile.item}>
      <img src="https://html5css.ru/w3images/avatar2.png" alt="" />
      {props.message}
      <div>
        <span>like</span> {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
