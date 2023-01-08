import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import Search from '../Search/Search';
import './header.scss';

function Header() {
  return (
    <div className='header-w'>
        <MainTitle />
        <Search />
    </div>
  )
}

export default Header