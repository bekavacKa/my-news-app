import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardNews from '../CardNews/CardNews';
import { IData } from '../../Interfaces/DataInterface';

function Favorite() {

  const [favoriteNewsLS, setFavoriteNewsLS] = useState<IData[]>([]);

  useEffect(() => {
    checkFavoriteLocalStorage();
  }, []);

  const checkFavoriteLocalStorage = ():void => {
    const allFavoriteLS = localStorage.getItem('favoriteNews');
    if(allFavoriteLS){
      setFavoriteNewsLS(JSON.parse(allFavoriteLS));
    }
  }

  const contentLayout = () => {
    return (
      favoriteNewsLS.map((favorite: any, index: number) => {
        return(
          <div key={index} className='content-cards-news'>
            <CardNews {...favorite} />
          </div>
        )
      })
    )
  };


  return (
    <>
        <h2 className='content-title'>Favorite</h2>
        {
            contentLayout()
        }
    </>
  )
}

export default Favorite