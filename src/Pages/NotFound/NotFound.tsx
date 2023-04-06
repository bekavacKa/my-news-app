import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Config/routes';
import { FaArrowRight } from "react-icons/fa";
import './not-found.scss';

function NotFound() {
  const infoTXT: string = 'Page Not Found';
  const homeBTN: string = 'Go Home';
  return (
    <div className='not-found-w'>
        <p className='not-found-info'>{infoTXT}</p>
        <Link className='not-found-btn' to={routes.HOME.url}>{homeBTN}<FaArrowRight className='arrow' /> </Link>
    </div>
  )
}

export default NotFound