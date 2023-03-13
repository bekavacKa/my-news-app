import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../../Components/HamburgerMenu/HamburgerMenu";
import Header from "../../Components/Header/Header";
import NewsNotice from "../../Components/NewsNotice/NewsNotice";
import SideBar from "../../Components/SideBar/SideBar";
import { setFromLocalStorage } from "../../Redux/favoriteNewsSlice";
import "./home.scss";

function Home() {
  const dispatch = useDispatch();
  const { isHambMenuOpen } = useSelector((state: any) => state.hambMenuStore);

  useEffect(() => {
    const favoriteLS = localStorage.getItem("favoriteNews");
    if (typeof favoriteLS === "string") {
      const favoriteParse = JSON.parse(favoriteLS);
      dispatch(setFromLocalStorage(favoriteParse));
    }
  }, []);

  return (
    <>
      <NewsNotice />
      {
        isHambMenuOpen &&
        <HamburgerMenu />
      }
      <div className="home-w">
        <Header />
        <div className="home-content">
          <div className="home-sidebar">
            <SideBar />
          </div>
          <div className="home-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
