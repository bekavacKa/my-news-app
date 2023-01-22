import React from 'react';
import { useSelector } from 'react-redux';
import './loader-mini.scss';

function LoaderMini() {
  const { miniLoading } = useSelector((state: any) => state.loaderMiniStore);

  return (
    <>
      {
        miniLoading &&
        <div className='loader-content'>
            <div className='loader-shape'></div>
        </div>  
      }
    </>
  )
}

export default LoaderMini