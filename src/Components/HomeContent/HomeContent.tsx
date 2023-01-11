import React, { useEffect } from 'react'
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';

function HomeContent() {
    const testData = [1,2,3,4,5,6,7,8,9,10,32];

    useEffect(() => {
        testGetData();
    },[])

    const contentLayout = () => {
      return (
        testData.map((card, index) => {
          if(index !== 2) {
            return(
              <div key={index} className='content-cards-news'>
                <CardNews />
              </div>
            )
          }
          else{
            return(
              <div key={index} className='content-latest'>
                <LatestNews />
              </div>
            )
          }
        })
      )
    };

    const testGetData = () => {
        MyNewsService.getData()
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
    }


  return (
    <>
        <h2 className='content-title'>News</h2>
        {
            contentLayout()
        }
    </>
  )
}

export default HomeContent