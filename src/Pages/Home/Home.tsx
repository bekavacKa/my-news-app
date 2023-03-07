import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NewsNotice from "../../Components/NewsNotice/NewsNotice";
import SideBar from "../../Components/SideBar/SideBar";
import { setFromLocalStorage } from "../../Redux/favoriteNewsSlice";
import "./home.scss";

function Home() {
  const dispatch = useDispatch();

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
