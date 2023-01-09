import React from 'react';
import CardNews from '../../Components/CardNews/CardNews';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import NewsNotice from '../../Components/NewsNotice/NewsNotice';
import SideBar from '../../Components/SideBar/SideBar';
import './home.scss';

function Home() {

  const testData = [1,2,3,4,5,6,7,8,9,10];

  const contentLayout = () => {
    return (
      testData.map((card, index) => {
        if(index === 2) {
          return(
            <LatestNews key={index+2} />
          )
        }
        return(
          <CardNews key={index+2} />
        )
      })
    )
  } 

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
              <h2 className='content-title'>News</h2>
              {
                contentLayout()
              }
            </div>

          </div>
        </div>
    </>
  )
}

export default Home