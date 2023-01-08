import React from 'react';
import './news-notice.scss';

function NewsNotice() {
  return (
    <div className='news-notice-w'>
        <div className='news-notice-content'>
            <p>Make MyNews your homepage</p>
            <p>Every day discover what’s trending on the internet!</p>
            <div className='content-buttons'>
                <button>get</button>
                <button>No, thanks</button>
            </div>
        </div>
    </div>
  )
}

export default NewsNotice