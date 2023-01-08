import React from 'react';
import './side-bar.scss';
import { SIDE_BAR_ROUTES } from '../../Config/sideBarRoutes';
import { NavLink } from 'react-router-dom';
import { FaDev } from "react-icons/fa";

function SideBar() {

    const sideBarLayout = () => {
        return (
            SIDE_BAR_ROUTES.map((item, index) => {
                return (
                    <NavLink className='side-bar-box' to={item.url} key={index} >
                        <FaDev className='side-bar-icon' />
                        <p className='side-bar-name'> {item.name} </p>
                    </NavLink>
                )
            })
        )
    }

  return (
    <div className='side-bar-w'>
        {
            sideBarLayout()
        }
    </div>
  )
}

export default SideBar