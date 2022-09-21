import React from 'react';

import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div className='progress-bar'>
      {Array(100).fill(0).map((_, idx) => <span key={idx}></span>)}
      <span>70%</span>
    </div>
  )
}

export default ProgressBar