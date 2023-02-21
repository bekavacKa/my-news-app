import React from 'react';
import homeIcon from '../Assets/Images/svg/home.svg';
import generalIcon from '../Assets/Images/svg/general.svg';
import businessIcon from '../Assets/Images/svg/business.svg';
import healthIcon from '../Assets/Images/svg/health.svg';
import scienceIcon from '../Assets/Images/svg/science.svg';
import sportsIcon from '../Assets/Images/svg/sports.svg';
import techIcon from '../Assets/Images/svg/technology.svg';
import { FaHeart } from "react-icons/fa";

export const SIDE_BAR_ROUTES = [
    {
        name : "Home",
        url : "/",
        icon : homeIcon,
    },
    {
        name : "General",
        url : "/general",
        icon : generalIcon,
    },
    {
        name : "Business",
        url : "/business",
        icon : businessIcon,
    },
    {
        name : "Health",
        url : "/health",
        icon : healthIcon,
    },
    {
        name : "Science",
        url : "/science",
        icon : scienceIcon,
    },
    {
        name : "Sports",
        url : "/sports",
        icon : sportsIcon,
    },
    {
        name : "Technology",
        url : "/technology",
        icon : techIcon,
    },
    {
        name : "Favorite",
        url : "/favorite",
    },
]