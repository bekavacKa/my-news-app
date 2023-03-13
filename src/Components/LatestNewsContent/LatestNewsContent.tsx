import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IData } from '../../Interfaces/DataInterface';
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';
import TopNavigation from '../TopNavigation/TopNavigation';

const LatestNewsContent : FC <IData> = ({ title }) => {

  const categoryName: string = "latest news";

  useEffect(() => {
  },[])

  const contentLayout = () => {
    return (
      <div className='content-latest'>
        <LatestNews />
      </div>
    )
  };

  return (
    <>
      <TopNavigation />
      <h2 className="main-content-title">{categoryName}</h2>
      {contentLayout()}
    </>
  )
}

export default LatestNewsContent