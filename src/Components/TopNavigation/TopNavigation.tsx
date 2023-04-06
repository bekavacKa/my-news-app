import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../Config/routes'

function TopNavigation() {
  const firstBTN: string = 'Featured';
  const secondBTN: string = 'Latest';

  return (
    <div className='home-top-nav'>
        <NavLink className='top-nav-btn' to={routes.HOME.url}>
          {firstBTN}
        </NavLink>
        <NavLink className='top-nav-btn' to={routes.LATES_NEWS.url}>
          {secondBTN}
        </NavLink>
    </div>
  )
}

export default TopNavigation