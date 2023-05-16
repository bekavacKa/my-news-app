import React from 'react';
import './footer.scss';
import MainTitle from '../MainTitle/MainTitle';

function Footer() {
  const author: string = "Kažimir Bekavac";
  const developmentYear: number = 2022;
  const currentYear = new Date();

  return (
    <div className='footer-w'>
        <MainTitle />
    </div>
  )
}

export default Footer