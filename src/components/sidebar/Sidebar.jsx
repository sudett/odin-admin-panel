import React from 'react';
import {Link} from 'react-router-dom';

import {MdDashboard, MdOutlineProductionQuantityLimits, MdNotifications, MdOutlineLogout} from 'react-icons/md';
import {AiOutlineUser, AiFillCreditCard} from 'react-icons/ai';
import {GrDeliver} from 'react-icons/gr';
import {IoMdStats} from 'react-icons/io';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <h1 className='heading--primary'>Admin Panel</h1>

      <div className='side__container'>
        <div className='side__info-container'>
          <h4 className='side__header'>Main</h4>
          <Link to="/" className='side__group'>
            <MdDashboard className='icon side__icon'/>
            <span>Dashboard</span>
          </Link>
        </div>

        <div className='side__info-container'>
          <h4 className='side__header'>Lists</h4>
          <Link to="/users" className='side__group'>
            <AiOutlineUser className='icon side__icon'/>
            <span>Users</span>
          </Link>
          <Link to="/" className='side__group'>
            <MdOutlineProductionQuantityLimits className='icon side__icon'/>
            <span>Products</span>
          </Link>
          <Link to="/" className='side__group'>
            <AiFillCreditCard className='icon side__icon'/>
            <span>Orders</span>
          </Link>
          <Link to="/" className='side__group'>
            <GrDeliver className='icon side__icon'/>
            <span>Delivery</span>
          </Link>
        </div>

        <div className='side__info-container'>
          <h4 className='side__header'>Useful</h4>
          <Link to="/" className='side__group'>
            <IoMdStats className='icon side__icon'/>
            <span>Stats</span>
          </Link>
          <Link to="/" className='side__group'>
            <MdNotifications className='icon side__icon'/>
            <span>Notifications</span>
          </Link>
        </div>

        <div className='side__info-container'>
          <h4 className='side__header'>Service</h4>
          <Link to="/" className='side__group'>
            <MdDashboard className='icon side__icon'/>
            <span>System Health</span>
          </Link>
          <Link to="/" className='side__group'>
            <MdDashboard className='icon side__icon'/>
            <span>Logs</span>
          </Link>
          <Link to="/" className='side__group'>
            <MdDashboard className='icon side__icon'/>
            <span>Settings</span>
          </Link>
        </div>

        <div className='side__info-container'>
          <h4 className='side__header'>User</h4>
          <Link to="/" className='side__group'>
            <MdOutlineLogout className='icon side__icon'/>
            <span>Profile</span>
          </Link>
          <Link to="/" className='side__group'>
            <MdOutlineLogout className='icon side__icon'/>
            <span>Logout</span>
          </Link>
        </div>

        <div className='side__info-container'>
          <h4 className='side__header'>Theme</h4>
          <button className='btn btn__theme btn__theme--light'></button>
          <button className='btn btn__theme btn__theme--dark'></button>
        </div>
      </div>
    </aside>
  ) 
}

export default Sidebar