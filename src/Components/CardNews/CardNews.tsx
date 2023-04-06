import React, { FC, useState, useEffect } from 'react';
import './card-news.scss';
import { FaRegHeart, FaHeart} from 'react-icons/fa';
import { IData } from '../../Interfaces/DataInterface';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteNews, setFavoriteNews } from '../../Redux/favoriteNewsSlice';

const CardNews : FC <IData> = (card) => {

  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const { favoriteNews } = useSelector((state: any) => state.favoriteNewsStore);
  const adSelector: string = 'business';

  useEffect(() => {
    if(favoriteNews.find((item:any) => (item.uri === card.uri)) === undefined){
      setFavorite(false);
    }
    else{
      setFavorite(true);
    }
  }, [favoriteNews])
  

  const handleFavorite = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    dispatch(setFavoriteNews(card));
    setFavorite(!favorite);
  };

  const deleteFavorite = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    dispatch(removeFavoriteNews(card))
  }

  const cardNewsLayout = () => {
    return (
      <a href={card.url} target='_blank' rel="noreferrer">
        <div className={`box-image ${card.section === adSelector ? 'include-ad' : ''} `} style={{backgroundImage: ` url(${card.multimedia && card.multimedia[0].url})`}}>
          {card.section === adSelector && (
            <p className='ad-holdere'>AD</p>
          )}
          {
            favorite ?
            <p className='favorite-holder'>
              <FaHeart className='heart' onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => deleteFavorite(e)}/>
            </p>
            :
            <p className='favorite-holder'>
              <FaRegHeart className='heart' onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => handleFavorite(e)}/>
            </p>
          }
        </div>
        <div className='box-info'>
          <div className='info-top'>
            <p className='info-top-cat'>{card.section}</p>
            <p className='info-top-title'>{card.title}</p>
          </div>
          <p className='box-info-publisher'>{card.byline}</p>
        </div>
      </a>
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