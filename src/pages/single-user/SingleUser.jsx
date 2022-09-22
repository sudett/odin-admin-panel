import React from 'react';

import UserInfo from '../../components/user-info/UserInfo';
import Chart from '../../components/chart/Chart';
import Transactions from '../../components/transactions/Transactions';

import './SingleUser.css';

const SingleUser = () => {
  return (
    <main className='single-user'>
      <UserInfo/>
      <Chart/>
      <Transactions/>
    </main>
  )
}

export default SingleUser