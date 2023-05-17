import React, { FC, useEffect } from 'react';
import { IData } from '../../Interfaces/DataInterface';
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