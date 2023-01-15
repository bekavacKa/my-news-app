import React, { FC, useState } from 'react';
import './card-news.scss';
import testImage from '../../Assets/Images/news.jpg';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IData } from '../../Interfaces/DataInterface';

const CardNews : FC <IData> = ({ section, title, multimedia}) => {

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    console.log("dela");
    
    localStorage.setItem('favoriteNews', "test");
    setFavorite(!favorite);
  };

  return (
    <div className='card-news-box'>
        <div className='box-image' style={{backgroundImage: ` url(${multimedia && multimedia[0].url})`}}>
          {
            favorite ?
            <FaStar className='image-star' onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => handleFavorite(e)}/>
            :
            <FaRegStar className='image-star' onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => handleFavorite(e)}/>
          }
        </div>
        <div className='box-info'>
          <p className='box-info-cat'>{section}</p>
          <p className='box-info-title'>{title}</p>
          <p className='box-info-publisher'>autor</p>
        </div>

        {/* <div className='news-breaking'>
          <p className='breaking-badge'>Breaking</p>
          <h3 className='breaking-title'>Peace On Earth A Wonderful Wish But No Way</h3>
          <p className='breaking-publisher'>Bertie Campbell</p>
        </div> */}

    </div>
  )
}

export default CardNews