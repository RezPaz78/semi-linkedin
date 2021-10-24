import React from "react";
import Logo from "src/assets/img/logo.png";
import Home from "src/assets/svg/home.svg";
import Bell from "src/assets/svg/bell.svg";
import Group from "src/assets/svg/group.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar__pages">
        <img className="navbar__pages-home" src={Home} alt="home" />
        <img className="navbar__pages-bell" src={Bell} alt="bell" />
        <img className="navbar__pages-group" src={Group} alt="group" />
      </div>
    </nav>
  );
};

export default Navbar;
