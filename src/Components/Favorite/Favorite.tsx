import React from 'react'
import { useSelector } from 'react-redux';
import CardNews from '../CardNews/CardNews';
import './favorite.scss';

function Favorite() {

  const { favoriteNews } = useSelector((state: any) => state.favoriteNewsStore);

  const contentLayout = () => {
    return (
      favoriteNews.map((favorite: any, index: number) => {
        return(
          <div key={index} className='content-cards-news'>
            <CardNews {...favorite} />
          </div>
        )
      })
    )
  };

  const emptyLayout = () => {
    return (
      <div className='content-empty-favorite'>
        <p>Favorite news is empty</p>
      </div>
    )
  }

  return (
    <>
        <h2 className='content-title'>Favorite</h2>
        {
          favoriteNews.length > 0 ?
          contentLayout()
          :
          emptyLayout()
        }
    </>
  )
}

export default Favorite