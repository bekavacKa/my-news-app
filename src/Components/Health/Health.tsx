import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IData } from '../../Interfaces/DataInterface';
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';

function Health() {

  const categoryName: string = 'health';
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState<IData[] | null>(null);

  useEffect(() => {
      getData();
  },[])

  const contentLayout = () => {
    return (
      responseData &&
      responseData.map((card: IData, index: number) => {
        if(index !== 2) {
          return(
            <div key={index} className='content-cards-news'>
              <CardNews {...card} />
            </div>
          )
        }
        else{
          return(
            <div key={index} className='content-latest'>
              <LatestNews />
            </div>
          )
        }
      })
    )
  };

  const getData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getCategoryData(categoryName)
                .then(res => {
                  console.log(res.data)
                  setResponseData(res.data.results);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }


  return (
    <>
        <h2 className='content-title'>{categoryName}</h2>
        {
            contentLayout()
        }
    </>
  )
}

export default Health