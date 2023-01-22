import React from 'react'
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';

function Sports() {
    const testData = [1];

    const contentLayout = () => {
      return (
        testData.map((card, index) => {
          if(index !== 2) {
            return(
              <div key={index} className='content-cards-news'>
                <LatestNews />
              </div>
            )
          }else{
            return(
              <div key={index} className='content-latest'>
                <LatestNews />
              </div>
            )
          }
        })
      )
    };


  return (
    <>
        <h2 className='content-title'>Sports</h2>
        {
            contentLayout()
        }
    </>
  )
}

export default Sports