import React from 'react';

import {FaSearch, FaRegMoon} from 'react-icons/fa';
import {TbWorld} from 'react-icons/tb';
import {MdNotifications, MdOutlineTextsms, MdOutlineEventNote} from 'react-icons/md';
import {FiSettings} from 'react-icons/fi';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <form className='form' action="" method="post">
        <input className='form__input' name='search' type="text" placeholder="Search"/>
        <button className='btn btn--search'><FaSearch className="icon search__icon"/></button>
      </form>

      <div className='header__info'>
        <div className='header__info-container'>
          <TbWorld className="icon"/>
          <span>English</span>
        </div>
        <div>
          <FaRegMoon className="icon"/>
        </div>
        <div className='header__info-container'>
          <MdNotifications className="icon"/>
          <span className='header__number'>1</span>
        </div>
        <div className='header__info-container'>
          <MdOutlineTextsms className="icon"/>
          <span className='header__number'>5</span>
        </div>
        <div>
          <MdOutlineEventNote className="icon"/>
        </div>
        <div>
          <img className='profile__picture' src='https://free-images.com/lg/7288/robinjonesgunn_profile_pic.jpg' alt='profile'/>
        </div>
        <div>
          <FiSettings className="icon"/>
        </div>
      </div>
    </header>
  )
}

export default Header