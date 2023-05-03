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
import { debounce } from "lodash";

const LatestNews: FC<ILatestNews> = () => {
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState<ILatestNews[]>([]);
  const latestNewsRef = useRef<HTMLDivElement>(null);
  const [pageNum, setPageNum] = useState(0);
  const [resError, setResError] = useState(false);
  const latestError: string = 'failed to load news, please try again later';
  const seeMoreBTN: string = 'See all news';
  const loadMoreBTN: string = 'Load more';
  const refreshBTN: string = 'Refresh';
  const [debounceTime, setDebounceTime] = useState(0);

  useEffect(() => {
    getLatestNews();
    setDebounceTime(3000);
  }, []);

  const latestCardLayout = () => {
    return responseData && responseData.length > 0 ? (
      responseData.map((item, index) => (
        <a href={item.web_url} target="_blank" rel="noreferrer" key={index}>
          <div className="content-card">
            <p className="content-card-time">
              {item.pub_date?.toString().slice(11, 16)}
            </p>
            <p className="content-card-title">{item.headline?.main}</p>
          </div>
        </a>
      ))
    ) : (
      resError && <p className="latest-news-error">{latestError}</p>
    );
  };

  const getLatestNews = debounce((): void => {
    dispatch(setMiniLoader(true));
    MyNewsService.getLatestData(pageNum)
      .then((res) => {
        setResponseData([...responseData, ...res.data.response.docs]);
        setResError(false);
      })
      .catch((err) => {
        setResError(true);
      })
      .finally(() => dispatch(setMiniLoader(false)));
  }, debounceTime);

  const handleOnScroll = (): void => {
    if(latestNewsRef.current){
      if (Math.round(latestNewsRef.current.scrollHeight) - Math.round(latestNewsRef.current.scrollTop) === latestNewsRef.current.clientHeight) {
        dispatch(setMiniLoader(true));
        setPageNum(prev => prev + 1);
        getLatestNews();
      }
    }
  };

  const handleLoadMore = (): void => {
    dispatch(setMiniLoader(true));
    setPageNum(prev => prev + 1);
    getLatestNews();
  }

  const handleRefresh = () => {
    setPageNum(0);
    getLatestNews();
  };

  return (
    <div className="latest-news-w">
      <div className="latest-news-header">
        <div className="news-header-dot"></div>
        <h4 className="news-header-title">Latest News</h4>
      </div>
      <div ref={latestNewsRef} onScroll={handleOnScroll} className="latest-news-content">
        {latestCardLayout()}
        <LoaderMini />
      </div>
        {responseData && responseData.length > 0 ? (
          <div className="latest-news-footer">
            <Link to={`/latest-news`}>
              <p className="footer-btn">
                {seeMoreBTN} <FaAngleRight className="fotter-arrow" />
              </p>
            </Link>
            <div className="load-more">
              <button className="load-more-btn" onClick={handleLoadMore}>
                {loadMoreBTN}
              </button>
            </div>
          </div>
        ) : (
          <div className="latest-news-footer">
            <p className="footer-btn" onClick={handleRefresh}>
              {refreshBTN} <BiRefresh className="fotter-refresh" />
            </p>
          </div>
        )}
    </div>
  );
};

export default LatestNews;
