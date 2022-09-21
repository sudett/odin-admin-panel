import React from 'react';

import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri';

import './Widget.css';

const Widget = ({title, quantity, text, percentage, icon}) => {
  return (
    <article className='widget'>
      <div className='widget__left'>
        <h4 className='widget__title'>{title}</h4>
        <span className='widget__quantity'>{quantity}</span>
        <span>{text}</span>
      </div>

      <div className='widget__right'>
        <p className='percent__container'>
          {percentage > 0 ? <RiArrowUpSLine className='icon widget__icon--arrow-up'/> : <RiArrowDownSLine className='icon widget__icon--arrow-down'/>}
          <span className={`${percentage > 0 ? 'percentage__positive' : 'percentage__negative'}`}>{percentage > 0 ? `+${percentage}` : percentage} %</span>
        </p>
        <p className='widget__icon'>
         {icon}
        </p>
      </div>
    </article>
  )
}

export default Widget