import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import WidgetContainer from './components/widget-container/WidgetContainer';
import Revenue from './components/revenue/Revenue';
import Chart from './components/chart/Chart';
import Transactions from './components/transactions/Transactions';

const App = () => {
  return (
    <div className='app'>
      <Sidebar/>
      <div className='main-container'>
        <Header/>
        <main className='main'>
          <WidgetContainer/>
          <div className='main-middle'>
            <Revenue/>
            <Chart/>
          </div>
          <Transactions/>
        </main>
      </div>
    </div>
  )
}

export default App