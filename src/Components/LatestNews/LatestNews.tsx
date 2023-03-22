import React, { FC, useState, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ILatestNews } from "../../Interfaces/DataInterface";
import { setMiniLoader } from "../../Redux/loaderMiniSlice";
import MyNewsService from "../../Services/MyNewsService";
import LoaderMini from "../LoaderMini/LoaderMini";
import "./latest-news.scss";

const LatestNews: FC<ILatestNews> = () => {
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState<ILatestNews[]>([]);
  const latestNewsRef = useRef<HTMLDivElement>(null);
  const [pageNum, setPageNum] = useState(0);
  const [resError, setResError] = useState(false);
  const latestError: string = 'failed to load news, please try again later';

  useEffect(() => {
    getLatestNews();
  }, []);

  useEffect(() => {
    if (!latestNewsRef.current) {
      // console.log("problem");
      return;
    }
    const element = latestNewsRef.current;
    const handleScroll = () => {
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        setPageNum(prev => prev + 1);
        console.log(pageNum)
        getLatestNews();
      }
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [pageNum, responseData, latestNewsRef]);

  const latestCardLayout = () => {
    return responseData && responseData.length > 0 ? (
      responseData.map((item, index) => (
        <div className="content-card" key={index}>
          <p className="content-card-time">
            {item.pub_date?.toString().slice(11, 16)}
          </p>
          <p className="content-card-title">{item.headline?.main}</p>
        </div>
      ))
    ) : (
      resError && <p className="latest-news-error">{latestError}</p>
    );
  };

  const getLatestNews = (): void => {
    dispatch(setMiniLoader(true));
    MyNewsService.getLatestData(pageNum)
      .then((res) => {
        setResponseData([...responseData, ...res.data.response.docs]);
        setResError(false);
      })
      .catch((err) => {
        console.log(err);
        setResError(true);
      })
      .finally(() => dispatch(setMiniLoader(false)));
  };

  const handleRefresh = () => {
    setPageNum(0);
    getLatestNews();
  }

  return (
    <div className="latest-news-w">
      <div className="latest-news-header">
        <div className="news-header-dot"></div>
        <h4 className="news-header-title">Latest News</h4>
      </div>
      <div ref={latestNewsRef} className="latest-news-content">
        {latestCardLayout()}
        <LoaderMini />
      </div>
        {responseData && responseData.length > 0 ? (
          <Link to={`/latest-news`} className="latest-news-footer">
            <p className="footer-btn">
              See all news <FaAngleRight className="fotter-arrow" />
            </p>
          </Link>
        ) : (
          <div className="latest-news-footer">
            <p className="footer-btn" onClick={handleRefresh}>
              Refresh <BiRefresh className="fotter-refresh" />
            </p>
          </div>
        )}
    </div>
  );
};

export default LatestNews;
