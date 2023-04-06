import React, { useState } from 'react';
import './search.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../Redux/searchTermSlice';
import { useNavigate } from "react-router-dom";
import routes from '../../Config/routes';

function Search() {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchBTN: string = 'search';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    term.length <= 1 && dispatch(setSearchTerm(""));
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchTerm(term));
    navigate(routes.HOME.url)
  }

  return (
    <form className='search-w' onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSearch(e)}>
      <div className='search-icon-input'>
        <AiOutlineSearch className='search-icon' />
        <input className='search-input' type="search" placeholder='Search news' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
      </div>
      <button className='search-button' type='submit'>
        {searchBTN}
      </button>
    </form>
  )
}

export default Search