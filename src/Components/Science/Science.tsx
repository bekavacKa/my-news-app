import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardNews from "../CardNews/CardNews";
import { IData } from "../../Interfaces/DataInterface";
import { setLoader } from "../../Redux/loaderSlice";
import MyNewsService from "../../Services/MyNewsService";

function Science() {
  const categoryName: string = "science";
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState<IData[] | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const contentLayout = () => {
    return (
      responseData &&
      responseData.map((card: IData, index: number) => {
        return (
          <div key={index} className="content-cards-news">
            <CardNews {...card} />
          </div>
        );
      })
    );
  };

  const getData = (): void => {
    dispatch(setLoader(true));
    MyNewsService.getCategoryData(categoryName)
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoader(false)));
  };

  return (
    <>
      <h2 className="main-content-title">{categoryName}</h2>
      <div className="main-content-cards">{contentLayout()}</div>
    </>
  );
}

export default Science;
