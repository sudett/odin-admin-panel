import React from 'react';

import './UserInfo.css';

const UserInfo = () => {
  return (
    <article className='user'>
      <div className='user__container'>
        <h3>Information</h3>
        <button className='btn btn--edit'>Edit</button>
      </div>

      <div className='user__info'>
        <img className='user__img' src="https://free-images.com/lg/7288/robinjonesgunn_profile_pic.jpg" alt="profile"/>
        <div>
          <h2>Jane Doe</h2>
          <ul className='user__list-info'>
            <li>Email: </li>
            <li>Phone: </li>
            <li>Address: </li>
            <li>Country: </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default UserInfo