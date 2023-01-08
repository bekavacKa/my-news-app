import React from 'react';
import Header from '../../Components/Header/Header';
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
            <SideBar />
          </div>
        </div>
    </>
  )
}

export default Home