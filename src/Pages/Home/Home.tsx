import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import NewsNotice from '../../Components/NewsNotice/NewsNotice';
import SideBar from '../../Components/SideBar/SideBar';
import { setFromLocalStorage } from '../../Redux/favoriteNewsSlice';
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