import React, { FC, useState, useEffect } from 'react';
import './card-news.scss';
import testImage from '../../Assets/Images/news.jpg';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IData } from '../../Interfaces/DataInterface';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoriteNews } from '../../Redux/favoriteNewsSlice';

const CardNews : FC <IData> = (card, { section, title, byline, multimedia}) => {

  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const { favoriteNews } = useSelector((state: any) => state.favoriteNewsStore);

  // useEffect(() => {
  //   console.log("iz stora", favoriteNews);
    
  // }, [])
  

  const handleFavorite = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    console.log("dela");
    console.log("dela card", card);
    
    dispatch(setFavoriteNews(card));
    localStorage.setItem('favoriteNews', JSON.stringify(card));
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