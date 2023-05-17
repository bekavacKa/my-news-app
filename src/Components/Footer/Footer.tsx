import React from 'react';
import './footer.scss';

function Footer() {
  const author: string = "Kažimir Bekavac";
  const developmentYear: number = 2022;

  return (
    <div className='footer-w'>
      <div className='footer-author'>
        {author}
      </div>
      <div className='footer-year'>
        {developmentYear}
      </div>
    </div>
  )
}

export default Footer