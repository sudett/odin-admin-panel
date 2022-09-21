import React, {useState, useEffect} from 'react';

import {AiOutlineUser, AiFillCreditCard} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {AiFillDollarCircle} from 'react-icons/ai';

import Widget from '../widget/Widget';

import './WidgetContainer.css'

const widgets = [
  {
    title: "users",
    percentage: +5,
    quantity: '478',
    text: 'See all users',
    icon: <AiOutlineUser className='icon'/>

  },
  {
    title: "orders",
    percentage: +2,
    quantity: '783',
    text: 'View all orders',
    icon: <FiShoppingCart className='icon'/>

  },
  {
    title: "earnings",
    percentage: -7,
    quantity: '$3.8k',
    text: 'View net earnings',
    icon: <AiFillDollarCircle className='icon'/>

  },
  {
    title: "my balance",
    percentage: -8,
    quantity: '$5.3k',
    text: 'See details',
    icon: <AiFillCreditCard  className='icon'/>

  }
]

const WidgetContainer = () => {
  const [widgetsInfo, setWidgetsInfo] = useState([]);

  useEffect(() => {
    setWidgetsInfo(widgets);
  })

  return (
    <div className='widget-container'>
      {widgetsInfo.map((wid, idx) => <Widget key={idx} {...wid}/>)}
    </div>
  )
}

export default WidgetContainer