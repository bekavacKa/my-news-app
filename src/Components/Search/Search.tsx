import React, { useState } from 'react';
import './search.scss';
import { FaDev } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../Redux/searchTermSlice';
import { useNavigate } from "react-router-dom";
import routes from '../../Config/routes';

function Search() {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setTerm(e.target.value);
    // console.log(term);
    term.length <= 1 && dispatch(setSearchTerm(""));
  }

  const handleSearch = () => {
    console.log("handle",term);
    dispatch(setSearchTerm(term));
    navigate(routes.HOME.url)
  }

  return (
    <div className='search-w'>
      <div className='search-icon-input'>
        <FaDev className='search-icon' />
        <input className='search-input' type="search" placeholder='Search news' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
      </div>
      <button className='search-button' onClick={handleSearch}>
        search
      </button>
    </div>
  )
}

export default Search