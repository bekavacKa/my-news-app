import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Config/routes';
import { FaArrowRight } from "react-icons/fa";
import './not-found.scss';

function NotFound() {
  return (
    <div className='not-found-w'>
        <p className='not-found-info'>Page Not Found</p>
        <Link className='not-found-btn' to={routes.HOME.url}>Go Home <FaArrowRight className='arrow' /> </Link>
    </div>
  )
}

export default NotFound