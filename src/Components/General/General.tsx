import React from 'react';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';

function General() {
    const testData = [1,2,3,4,5,6,7,8,9,10,32];

    const contentLayout = () => {
      return (
        testData.map((card, index) => {
          if(index !== 2) {
            return(
              <div key={index} className='content-cards-news'>
                <CardNews />
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
        <h2 className='content-title'>General</h2>
        {
            contentLayout()
        }
    </>
  )
}

export default General