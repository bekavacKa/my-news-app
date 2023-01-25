import React from 'react'
import { useSelector } from 'react-redux';
import CardNews from '../CardNews/CardNews';
import { IData } from '../../Interfaces/DataInterface';

function Favorite() {

    const { favoriteNews } = useSelector((state: any) => state.favoriteNewsStore);
    console.log(favoriteNews)

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