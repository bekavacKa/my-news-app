import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';
import { IData } from '../../Interfaces/DataInterface';
import { ISearchedData } from '../../Interfaces/SearchedDataInterface';
import { setSearchTerm } from '../../Redux/searchTermSlice';

function HomeContent() {

  const categoryName: string = 'home';
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state: any) => state.searchTermStore);
  const [responseData, setResponseData] = useState<IData[] | null>(null);
  const [searchedData, setSearchedData] = useState<ISearchedData[] | null>(null);

  useEffect(() => {
      getData();
  },[])

  useEffect(() => {
    searchTerm && searchTerm.length > 0 ? 
    searchData() : dispatch(setSearchTerm(""))
    getData();
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
                  // console.log(res.data);
                  setResponseData(res.data.results);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  const searchData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getSearchedData(searchTerm)
                .then(res => {
                  // console.log(res.data);
                  // console.log(res.data.response.docs);
                  setSearchedData(res.data.response.docs);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  return (
    <div className='homeContent-w'>
      <h2 className='main-content-title'>News</h2>
      <div className='main-content-cards'>
        {contentLayout()}
      </div>
    </div>
  )
}

export default HomeContent