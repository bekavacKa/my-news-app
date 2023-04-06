import React from 'react';
import './news-notice.scss';

function NewsNotice() {
  const firstTXT: string = 'Make MyNews your homepage';
  const mainTXT: string = 'Every day discover what’s trending on the internet!';
  const firstBTN: string = 'get';
  const secondBTN: string = 'No, thanks';

  return (
    <div className='news-notice-w'>
        <div className='news-notice-content'>
            <p>{firstTXT}</p>
            <p>{mainTXT}</p>
            <div className='content-buttons'>
                <button>{firstBTN}</button>
                <button>{secondBTN}</button>
            </div>
        </div>
    </div>
  )
}

export default NewsNotice