import React from 'react';
import './search.scss';
import { FaDev } from 'react-icons/fa';

function Search() {
  return (
    <div className='search-w'>
      <div className='search-icon-input'>
        <FaDev className='search-icon' />
        <input className='search-input' type="search" placeholder='Search news'></input>
      </div>
      <button className='search-button'>
        search
      </button>
    </div>
  )
}

export default Search