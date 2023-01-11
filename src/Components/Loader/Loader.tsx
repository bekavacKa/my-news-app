import React, { useState } from 'react';
import './loader.scss';

function Loader() {
    const [loading, setLoading] = useState(false);

  return (
    <>
        {
            loading &&
            <div className='loader'>
                <div className='loader-shape'></div>
            </div>
        }
    </>
  )
}

export default Loader