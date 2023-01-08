import React from 'react';
import './card-news.scss';
import testImage from '../../Assets/Images/news.jpg';

function CardNews() {

  return (
    <div className='card-news-box'>
        <div className='box-image' style={{backgroundImage: ` url(${testImage})`}}>
        </div>
        <div className='box-info'>
            <p className='box-info-cat'>Category</p>
            <p className='box-info-title'>Title</p>
            <p className='box-info-publisher'>Publisher</p>
        </div>
    </div>
  )
}

export default CardNews