import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../Config/routes'

function TopNavigation() {
  return (
    <div className='home-top-nav'>
        <NavLink className='top-nav-btn' to={routes.HOME.url}>
        Featured
        </NavLink>
        <NavLink className='top-nav-btn' to={routes.LATES_NEWS.url}>
        Latest
        </NavLink>
    </div>
  )
}

export default TopNavigation