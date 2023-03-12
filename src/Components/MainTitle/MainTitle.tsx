import React from 'react';
import './main-title.scss';
import { IoMdMenu } from "react-icons/io";
function MainTitle() {

  const handleMenu = (): void => {
    console.log("test")
  }
  return (
    <div className='main-title-w'>
      <div className='main-title-content'>
        <h1 className='content-word'>My</h1>
        <h1 className='content-word'>News</h1>
      </div>
      <div className='main-title-menu' onClick={handleMenu}>
        <IoMdMenu />
      </div>
    </div>
  )
}

export default MainTitle