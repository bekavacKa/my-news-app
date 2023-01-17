import React, { FC, useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IData } from '../../Interfaces/DataInterface';
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import './latest-news.scss';

const LatestNews : FC <IData> = ({ title }) => {

    const dispatch = useDispatch();
    const [responseData, setResponseData] = useState<IData[] | null>(null);

    useEffect(() => {
        getLatestNews();
    },[])

    const latestCardLayout = () => {
        return (
            responseData &&
            responseData.map((item, index) => {
                return(
                    <div className='content-card' key={index}>
                        <p className='content-card-time'>{item.created_date}</p>
                        <p className='content-card-title'>{item.title}</p>
                    </div>
                )
            })
        )
    }

    const getLatestNews = (): void => {
        dispatch(setLoader(true));
        MyNewsService.getLatestData()
                    .then(res => {
                      console.log(res.data);
                      setResponseData(res.data.results);
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)));
      }

    return (
        <div className='latest-news-w'>
            <div className='latest-news-header'>
                <div className='news-header-dot'></div>
                <h4 className='news-header-title'>Latest News</h4>
            </div>
            <div className='latest-news-content'>
                {
                    latestCardLayout()
                }
            </div>
            <Link to={`/latest-news`} className='latest-news-footer'>
                <p className='footer-btn'>See all news <FaAngleRight className='fotter-arrow' /> </p>
            </Link>
        </div>
    )
}

export default LatestNews