import React from 'react';

import {BsThreeDotsVertical} from 'react-icons/bs';
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri';

import ProgressBar from '../progress-bar/ProgressBar';

import './Revenue.css';

const Revenue = () => {
  return (
    <article className='revenue'>
      <h3 className='revenue__title'>Total Revenue <BsThreeDotsVertical/></h3>
      <ProgressBar/>
      <p className="revenue__text">Total sales made today</p>
      <p className='revenue__number'>480$</p>
      <p className="revenue__text">Previous transactions processing. Last payments may not be included.</p>
      <div className='revenue__container'>
        <div className='revenue__number-container'>
          <span>Target</span>
          <p className='percentage__negative'><RiArrowDownSLine className='icon widget__icon--arrow-down'/>$21.5k</p>
        </div>
        <div className='revenue__number-container'>
          <span>Last Week</span>
          <p className='percentage__negative'><RiArrowDownSLine className='icon widget__icon--arrow-down'/>$21.5k</p>
        </div>
        <div className='revenue__number-container'>
          <span>Last Month</span>
          <p className='percentage__positive'><RiArrowUpSLine className='icon widget__icon--arrow-up'/>$21.5k</p>
        </div>
      </div>
    </article>
  )
}

export default Revenue