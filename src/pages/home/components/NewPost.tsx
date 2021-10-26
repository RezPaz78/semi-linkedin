import React from "react";
import { NewPostProps } from "src/pages/home/types";

const NewPost: React.FC<NewPostProps> = ({ avatar }) => {
  return (
    <div className="newPost">
      <img className="newPost__avatar" src={avatar} alt="avatar" />
      <input
        type="text"
        className="newPost__input"
        placeholder="چیزی بنویس..."
      />
      <div className="newPost__footer">
        <div className="newPost__footer_media">
          <div className="newPost__footer_media-video">
            <span>Video</span>
          </div>
          <div className="newPost__footer_media-photo">
            <span>Photo</span>
          </div>
        </div>
        <button className="newPost__footer-send">ارسال</button>
      </div>
    </div>
  );
};

export default NewPost;
