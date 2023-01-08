import React from 'react';
import Header from '../../Components/Header/Header';
import NewsNotice from '../../Components/NewsNotice/NewsNotice';
import './home.scss';

function Home() {
  return (
    <>
        <NewsNotice />
        <div className='home-w'>
          <Header />
        </div>
    </>
  )
}

export default Home