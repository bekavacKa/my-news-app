import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';
interface IData {
  author : string;
  content : string;
  description : string;
  publishedAt : string;
  title : string;
  url : string;
  urlToImage : string
};

function General() {
  // const testData = [1,2,3,4,5,6,7,8,9,10,32];
  const categoryName: string = 'general';
  const [generalData, setGeneralData] = useState<IData[] | null>(null);

  const dispatch = useDispatch();
  
  useEffect(() => {
      testGetCategoryData();
  },[]);

  const contentLayout = () => {
    console.log(generalData);
    return (
      generalData?.length &&
      generalData.map((card: IData, index) => {
        if(index !== 2) {
          return(
            <div key={index} className='content-cards-news'>
              <LatestNews />
            </div>
          )
        }
      })
    )
  };

  const testGetCategoryData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getCategoryData(categoryName)
                .then(res => {
                  console.log(res.data)
                  setGeneralData(res.data.articles)
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  return (
    <>
      <h2 className='content-title'>General</h2>
      {
        contentLayout()
      }
    </>
  )
}

export default General