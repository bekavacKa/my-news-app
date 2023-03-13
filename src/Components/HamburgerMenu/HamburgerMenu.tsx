import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import Search from "../Search/Search";
import SideBar from "../SideBar/SideBar";
import { IoMdClose } from "react-icons/io";
import './hamburger-menu.scss';
import { useDispatch } from "react-redux";
import { setHambMenu } from "../../Redux/hambMenuSlice";

function HamburgerMenu() {

  const dispatch = useDispatch();

  const handleCloseMenu = ():void => {
    dispatch(setHambMenu(false));
  }

  return (
    <div className="hamburger-menu-w">
      <div className="hamburger-close-w" onClick={handleCloseMenu}>
        <IoMdClose className="hamburger-close"/>
      </div>
      <div className="hamburger-title">
        <MainTitle />
      </div>
      <Search />
      <div className="hamburger-nav">
        <SideBar />
      </div>
    </div>
  );
}

export default HamburgerMenu;
