import React from "react";
import { PostProps } from "src/pages/home/types";
import Tag from "src/shared/components/layout/components/Tag";
import Like from "src/assets/img/like.png";

const Post: React.FC<PostProps> = (props) => {
  const companyButtons = (
    <>
      <button className="post__buttons-save">ذخیره</button>
      <button className="post__buttons-cv">ارسال رزومه</button>
    </>
  );

  const userButton = (
    <div className="post__buttons_like">
      <span className="post__buttons_like-count">+{props.likesCount}</span>
      <img className="post__buttons_like-image" src={Like} alt="like" />
    </div>
  );

  console.log(props);
  return (
    <div className="post">
      <div className="post__user">
        <img
          className="post__user-avatar"
          src={props.user.avatar}
          alt="avatar"
        />
        <div className="post__user_info">
          <h2 className="post__user_info-name">{props.user.name}</h2>
          <h3 className="post__user_info-role">{props.user.role}</h3>
        </div>
      </div>
      <p className="post__text">{props.text}</p>
      {props.media && props.media.length > 0 ? (
        <div className="post__media">
          {props.media?.map((media) => (
            <img className="post__media-item" src={media} alt="media" />
          ))}
        </div>
      ) : null}
      <div className="post__tags">
        {props.tags?.map((tag) => (
          <Tag id={tag.id} title={tag.title} />
        ))}
      </div>
      <div className="post__buttons">
        {props.isCompany ? companyButtons : userButton}
      </div>
    </div>
  );
};

export default Post;
