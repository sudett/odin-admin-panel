import React from 'react';

import WidgetContainer from '../../components/widget-container/WidgetContainer';
import Revenue from '../../components/revenue/Revenue';
import Chart from '../../components/chart/Chart';
import Transactions from '../../components/transactions/Transactions';

import './Home.css';

const Home = () => {
  return (
    <main className='home'>
      <WidgetContainer/>
      <div className='home-middle'>
        <Revenue/>
        <Chart/>
      </div>
      <Transactions/>
    </main>
)
}

export default Home