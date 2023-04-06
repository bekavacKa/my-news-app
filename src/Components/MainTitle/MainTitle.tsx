import React from 'react';
import './main-title.scss';
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setHambMenu } from '../../Redux/hambMenuSlice';

function MainTitle() {

  const { isHambMenuOpen } = useSelector((state: any) => state.hambMenuStore);
  const dispatch = useDispatch();

  const handleOpenMenu = (): void => {
    dispatch(setHambMenu(true));
  }

  return (
    <div className='main-title-w'>
      <div className='main-title-content'>
        <h1 className='content-word'>My</h1>
        <h1 className='content-word'>News</h1>
      </div>
      {!isHambMenuOpen &&
      <div className='main-title-menu' onClick={handleOpenMenu}>
        <IoMdMenu />
      </div>
      }
    </div>
  )
}

export default MainTitle