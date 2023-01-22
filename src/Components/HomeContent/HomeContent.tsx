import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';
import { IData } from '../../Interfaces/DataInterface';
import { ISearchedData } from '../../Interfaces/SearchedDataInterface';
import { setData } from '../../Redux/dataSlice';
import { setSearchTerm } from '../../Redux/searchTermSlice';

function HomeContent() {

  const categoryName: string = 'home';
  const dispatch = useDispatch();
  // const { newsData } = useSelector((state: any) => state.newsDataStore);
  const { searchTerm } = useSelector((state: any) => state.searchTermStore);
  const [responseData, setResponseData] = useState<IData[] | null>(null);
  const [searchedData, setSearchedData] = useState<ISearchedData[] | null>(null);

  useEffect(() => {
      getData();
      console.log("opalioo");
  },[])

  useEffect(() => {
    console.log(searchTerm.length);
    
    searchTerm && searchTerm.length > 0 ?
      // console.log("searcha u home i nije prazan", searchTerm)
      searchData()
      :
      dispatch(setSearchTerm(""))
      getData();
      // console.log("nisam opalio jer je prazan")
  },[searchTerm])

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

  const searchedContentLayout = () => {
    return (
      searchedData?.map((card: ISearchedData, index) => {
        return(
          <div key={index} className='content-cards-news'>
            dela moram drugu komponentu
          </div>
        )
      })
    )
  };

  const getData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getCategoryData(categoryName)
                .then(res => {
                  console.log(res.data);
                  // dispatch(setData((res.data.results)));
                  setResponseData(res.data.results);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  const searchData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getSearchedData(searchTerm)
                .then(res => {
                  console.log(res.data);
                  console.log(res.data.response.docs);
                  
                  // dispatch(setData((res.data.results)));
                  setSearchedData(res.data.response.docs);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  return (
    <>
        <h2 className='content-title'>News</h2>
        {
          searchedData && searchTerm.length > 0 ? 
          searchedContentLayout()
          :
          contentLayout()
        }
    </>
  )
}

export default HomeContent