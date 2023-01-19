import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IData } from '../../Interfaces/DataInterface';
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';

const LatestNewsContent : FC <IData> = ({ title }) => {

  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState<IData[] | null>(null);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    getLatestNews();
  },[])

  const contentLayout = () => {
    return (
      responseData &&
      responseData.map((card: IData, index: number) => {
        return(
        <div key={index} className='content-cards-news'>
            <CardNews {...card} />
        </div>
        )
      })
    )
  };

  const getLatestNews = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getLatestData(pageNum)
                .then(res => {
                  console.log(res.data);
                  setResponseData(res.data.results);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }


  return (
    <>
        <h2 className='content-title'>Latest</h2>
        {
            contentLayout()
        }
    </>
  )
}

export default LatestNewsContent