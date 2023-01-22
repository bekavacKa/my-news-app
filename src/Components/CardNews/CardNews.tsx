import React, { FC, useState } from 'react';
import './card-news.scss';
import testImage from '../../Assets/Images/news.jpg';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IData } from '../../Interfaces/DataInterface';

const CardNews : FC <IData> = (card, { section, title, byline, multimedia}) => {

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    console.log("dela");
    
    localStorage.setItem('favoriteNews', JSON.stringify({...card, card}));
    setFavorite(!favorite);
  };

  const cardNewsLayout = () => {
    return (
      <>
        <div className='box-image' style={{backgroundImage: ` url(${card.multimedia && card.multimedia[0].url})`}}>
          <div className='image-star-holder'>
          {
            favorite ?
              <FaStar className='image-star' onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => handleFavorite(e)}/>
            :
              <FaRegStar className='image-star' onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => handleFavorite(e)}/>
          }
          </div>
        </div>
        <div className='box-info'>
          <div className='info-top'>
            <p className='info-top-cat'>{card.section}</p>
            <p className='info-top-title'>{card.title}</p>
          </div>
          <p className='box-info-publisher'>{card.byline}</p>
        </div>
      </>
    )
  }

  const breakingCardLayout = () => {
    return (
      <div className='news-breaking'>
        <p className='breaking-badge'>Breaking</p>
        <h3 className='breaking-title'>{card.title}</h3>
        <p className='breaking-publisher'>{card.byline}</p>
      </div>
    )
  }

  return (
    <div className='card-news-box'>
      {
        card.multimedia ?
        cardNewsLayout() :
        breakingCardLayout()
      }

    </div>
  )
}

export default CardNews