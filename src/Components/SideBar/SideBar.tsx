import React from "react";
import "./side-bar.scss";
import { SIDE_BAR_ROUTES } from "../../Config/sideBarRoutes";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function SideBar() {
  const sideBarLayout = () => {
    return SIDE_BAR_ROUTES.map((item, index) => {
      return (
        <NavLink className="side-bar-box" to={item.url} key={index}>
          {item.icon ? (
            <img className="side-bar-icon" src={item.icon} alt="" />
          ) : (
            <FaHeart className="side-bar-icon" />
          )}
          <p className="side-bar-name"> {item.name} </p>
        </NavLink>
      );
    });
  };

  return (
    <>
      {sideBarLayout()}
    </>
  );
}

export default SideBar;
