import React from "react";
import Banner from "src/assets/img/banner.png";
import Avatar from "src/assets/img/avatar.png";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <img className="profile__banner" src={Banner} alt="banner" />
      <div className="profile__info">
        <img className="profile__info-avatar" src={Avatar} alt="avatar" />
        <h2 className="profile__info-name">Karim Saif</h2>
        <h3 className="profile__info-role">UI/UX Designer</h3>
      </div>
    </div>
  );
};

export default Profile;
