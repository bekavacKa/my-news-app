import React from 'react';
import { Outlet } from 'react-router-dom';
import CardNews from '../../Components/CardNews/CardNews';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import NewsNotice from '../../Components/NewsNotice/NewsNotice';
import SideBar from '../../Components/SideBar/SideBar';
import './home.scss';

function Home() { 

  return (
    <>
        <NewsNotice />
        <div className='home-w'>
          <Header />
          <div className='home-content'>
            <div className='home-cotent-sidebar'>
              <SideBar />
            </div>

            <div className='home-cotent-cards'>
              <Outlet />
            </div>

          </div>
        </div>
    </>
  )
}

export default Home