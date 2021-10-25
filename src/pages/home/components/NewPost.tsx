import React from "react";
import { NewPostProps } from "src/pages/home/types";

const NewPost: React.FC<NewPostProps> = ({ avatar }) => {
  return (
    <div className="newPost">
      <img src={avatar} alt="avatar" />
      <input type="text" />
      <div>
        <div>
          <span>Photo</span>
          <span>Video</span>
        </div>
        <button>ارسال</button>
      </div>
    </div>
  );
};

export default NewPost;
