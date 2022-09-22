import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import SingleUser from './pages/single-user/SingleUser';
import NewUser from './pages/new-user/NewUser';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Sidebar/>
      <div className='main-container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users'>
            <Route index element={<Users/>}/>
            <Route path=':userId' element={<SingleUser/>}/>
            <Route path='new' element={<NewUser/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App