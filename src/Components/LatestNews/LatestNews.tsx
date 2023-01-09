import React from 'react';
import './latest-news.scss';

function LatestNews() {

  const testData = [1,2,3,4,5,6,7,8,9,10,11,12,13];


    const latestCardLayout = () => {
        return (
            testData.map((card, index) => {
                return(
                    <div className='content-card' key={index}>
                        <p className='content-card-time'>14:30</p>
                        <p className='content-card-title'>How To Write Better Advertising Copy</p>
                    </div>
                )
            })

        )
    }
    return (
        <div className='latest-news-w'>
            <div className='latest-news-header'>
                <div className='news-header-dot'></div>
                <h4 className='news-header-title'>Latest News</h4>
            </div>
            <div className='latest-news-content'>
                {
                    latestCardLayout()
                }
            </div>
            <div className='latest-news-footer'>
                <p className='footer-btn'>See all news </p>
            </div>
        </div>
  )
}

export default LatestNews