import React, { useState } from 'react';
import './card-news.scss';
import testImage from '../../Assets/Images/news.jpg';
import { FaRegStar, FaStar } from 'react-icons/fa';

function CardNews() {

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className='card-news-box'>
        <div className='box-image' style={{backgroundImage: ` url(${testImage})`}}>
          {
            favorite ?
            <FaStar className='image-star' onClick={handleFavorite}/>
            :
            <FaRegStar className='image-star' onClick={handleFavorite}/>
          }
        </div>
        <div className='box-info'>
          <p className='box-info-cat'>Category</p>
          <p className='box-info-title'>Title</p>
          <p className='box-info-publisher'>Publisher</p>
        </div>

        <div className='news-breaking'>
          <p className='breaking-badge'>Breaking</p>
          <h3 className='breaking-title'>Peace On Earth A Wonderful Wish But No Way</h3>
          <p className='breaking-publisher'>Bertie Campbell</p>
        </div>

    </div>
  )
}

export default CardNews