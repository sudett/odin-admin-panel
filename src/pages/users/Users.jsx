import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import './Users.css';

const usersInfo = [
  {
    id: 1,
    userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    userName: 'Michael Rocha',
    email: 'michael@gmail.com',
    age: 35, 
    status: 'active'
  },
  {
    id: 2,
    userImg: 'https://free-images.com/lg/7288/robinjonesgunn_profile_pic.jpg',
    userName: 'Vienna Richmond',
    email: 'vienna@gmail.com',
    age: 42, 
    status: 'pending'
  },
  {
    id: 3,
    userImg: 'https://free-images.com/lg/7288/robinjonesgunn_profile_pic.jpg',
    userName: 'Luca Payne',
    email: 'luca@gmail.com',
    age: 25, 
    status: 'passive'
  },
  {
    id: 4,
    userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    userName: 'John Smith',
    email: 'john@gmail.com',
    age: 58, 
    status: 'active'
  },
  {
    id: 5,
    userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    userName: 'Michael Rocha',
    email: 'michael@gmail.com',
    age: 29, 
    status: 'pending'
  },
  {
    id: 6,
    userImg: 'https://free-images.com/lg/7288/robinjonesgunn_profile_pic.jpg',
    userName: 'Jane Doe',
    email: 'jane@gmail.com',
    age: 22, 
    status: 'active'
  },
  {
    id: 7,
    userImg: 'https://free-images.com/lg/7288/robinjonesgunn_profile_pic.jpg',
    userName: 'Lucy Rocha',
    email: 'lucy@gmail.com',
    age: 19, 
    status: 'passive'
  },
  {
    id: 8,
    userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    userName: 'Bob Smith',
    email: 'bob@gmail.com',
    age: 33, 
    status: 'pending'
  },
  {
    id: 9,
    userImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    userName: 'John Peterson',
    email: 'john@gmail.com',
    age: 41, 
    status: 'passive'
  },

]

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersInfo);
  }, []);

  const computeStyles = (status) => {
    let styles;
    if (status === 'active') styles = 'users__status--active'
    else if (status === 'pending') styles = 'users__status--pending'
    else if (status === 'passive') styles = 'users__status--passive'

    return styles;
  }

  return (
    <section className='users'>
      <div className='users__title-container'>
        <h2>Customers</h2>
        <button className='btn btn--add' onClick={() => navigate('/users/new')}>Add New</button>
      </div>

      <table className='users__table'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({id, userImg, userName, email, age, status}) => (
            <tr key={id}>
              <td><input type="checkbox" /></td>
              <td>{id}</td>
              <td className='users__img-container'><img className='users__img' src={userImg} alt="customer"/><span>{userName}</span></td>
              <td>{email}</td>
              <td>{age}</td>
              <td><span className={`${computeStyles(status)} general__status`}>{status}</span></td>
              <td><button className='btn btn--view' onClick={() => navigate(`/users/id`)}>View</button><button className='btn btn--delete'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Users