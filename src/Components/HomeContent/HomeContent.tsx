import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from '../../Redux/loaderSlice';
import MyNewsService from '../../Services/MyNewsService';
import CardNews from '../CardNews/CardNews';
import LatestNews from '../LatestNews/LatestNews';
import { IData } from '../../Interfaces/DataInterface';
import { ISearchedData } from '../../Interfaces/SearchedDataInterface';
import { setSearchTerm } from '../../Redux/searchTermSlice';
import { FaRegHeart, FaHeart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import routes from '../../Config/routes';
import TopNavigation from '../TopNavigation/TopNavigation';

function HomeContent() {

  const categoryName: string = 'home';
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state: any) => state.searchTermStore);
  const [responseData, setResponseData] = useState<IData[] | null>(null);
  const [searchedData, setSearchedData] = useState<ISearchedData[] | null>(null);

  const [favorite, setFavorite] = useState(false);
  const { favoriteNews } = useSelector((state: any) => state.favoriteNewsStore);
  const baseURL: string = 'https://www.nytimes.com/';
  const titleLimit: number = 100;

  useEffect(() => {
      getData();
      // getNewsApi();
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
            card.section && card.title &&
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


  // TODO ZAVRŠITI
  const searchedContentLayout = () => {
    return (
      searchedData?.map((card: ISearchedData, index) => {
        return(
          <div key={index} className='content-cards-news'>
            <div className='card-news-box'>
              <div className='box-image' style={{backgroundImage: ` url(${card.multimedia && card.multimedia.length > 0 && baseURL+ card.multimedia[0].url})`}}>
                <p className='ad-holdere'>AD</p>
                {
                  favorite ?
                  <p className='favorite-holder'>
                    <FaHeart className='heart'/>
                  </p>
                  :
                  <p className='favorite-holder'>
                    <FaRegHeart className='heart'/>
                  </p>
                }
              </div>
              <div className='box-info'>
                <div className='info-top'>
                  <p className='info-top-cat'>{card.section_name}</p>
                  <p className='info-top-title'>
                    {card.abstract.length > titleLimit ? card.abstract.slice(0, titleLimit) : card.abstract }
                    </p>
                </div>
                <p className='box-info-publisher'>autor</p>
              </div>
            </div>
          </div>
        )
      })
    )
  };

  // ? NewYorkAPI
  const getData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getCategoryData(categoryName)
                .then(res => {
                  console.log(res.data.results);
                  setResponseData(res.data.results);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  // ? NewsAPI
  //   const getNewsApi = (): void => {
  //   dispatch(setLoader(true));
  //   MyNewsService.getDataNewsApi()
  //               .then(res => {
  //                 console.log(res.data);
  //                 setResponseData(res.data.articles);
  //               })
  //               .catch(err => console.log(err))
  //               .finally(() => dispatch(setLoader(false)));
  // }

  const searchData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getSearchedData(searchTerm)
                .then(res => {
                  // console.log(res.data);
                  console.log(res.data.response.docs);
                  setSearchedData(res.data.response.docs);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  }

  return (
    <>
      <TopNavigation />
      <h2 className='main-content-title'>News</h2>
      <div className='main-content-cards'>
        {searchedData && searchTerm.length > 0 ? searchedContentLayout()
          : contentLayout()
        }
      </div>
    </>
  )
}

export default HomeContent