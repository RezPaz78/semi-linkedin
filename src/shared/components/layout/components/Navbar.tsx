import React from "react";
import Logo from "src/assets/img/logo.png";
import Home from "src/assets/svg/home.svg";
import Bell from "src/assets/svg/bell.svg";
import Group from "src/assets/svg/group.svg";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar__pages">
        <NavLink
          to="/"
          exact
          className="navbar__pages_container"
          activeClassName="navbar__pages_container-active"
        >
          <img className="navbar__pages-home" src={Home} alt="home" />
        </NavLink>
        <NavLink
          to="/notifications"
          className="navbar__pages_container"
          activeClassName="navbar__pages_container-active"
        >
          <img className="navbar__pages-bell" src={Bell} alt="bell" />
          <span className="navbar__pages-notification-count">+9</span>
        </NavLink>
        <NavLink
          to="/groups"
          className="navbar__pages_container"
          activeClassName="navbar__pages_container-active"
        >
          <img className="navbar__pages-group" src={Group} alt="group" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
