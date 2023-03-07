import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardNews from "../CardNews/CardNews";
import routes from "../../Config/routes";
import "./favorite.scss";

function Favorite() {
  const { favoriteNews } = useSelector((state: any) => state.favoriteNewsStore);
  const pageTitle: string = "favorite";
  const emptyFavoriteText: string = "Favorite news section is empty, mark news with a heart so you can find it here";
  const emptyFavoriteBtn: string = "Go to Home";

  const contentLayout = () => {
    return favoriteNews.map((favorite: any, index: number) => {
      return (
        <div key={index} className="content-cards-w">
          <CardNews {...favorite} />
        </div>
      );
    });
  };

  const emptyLayout = () => {
    return (
      <div className="content-empty-favorite">
        <p className="empty-favorite-text">{emptyFavoriteText}</p>
        <Link className="empty-favorite-btn" to={routes.HOME.url}>
          {emptyFavoriteBtn}
        </Link>
      </div>
    );
  };

  return (
    <>
      {favoriteNews.length > 0 ? (
        <>
          <h2 className="main-content-title">{pageTitle}</h2>
          <div className="main-content-cards">{contentLayout()}</div>
        </>
      ) : (
        emptyLayout()
      )}
    </>
  );
}

export default Favorite;
