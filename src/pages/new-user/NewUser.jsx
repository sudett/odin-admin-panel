import React, {useState} from 'react';

import {AiOutlineCloudUpload} from 'react-icons/ai';

import CustomInput from '../../components/custom-input/CustomInput';

import './NewUser.css';

const NewUser = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    userName: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    country: '',
    image: ''
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setUserCredentials(prevCredentials => ({...prevCredentials, [name]: value}))
  }

  return (
    <div className='new-user'>
      <h3 className='new-user__title'>Add new user</h3>
      <form className='new-user__form' action='' method='post'>
        <div className='new-user__img-preview' style={{backgroundImage: "url('https://images.pexels.com/photos/5129351/pexels-photo-5129351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}></div>

        <div className='new-user__middle-grid'>
          <div className='new-user__group'>
            <p>Image: <button className='btn'><AiOutlineCloudUpload className='icon'/></button></p>
          </div>
          <div>
            <CustomInput labelTxt='Name and Surname' inputId='name' inputName='name' type="text" value={userCredentials.name} changeHandler={changeHandler}/>
            <CustomInput labelTxt='Username' inputId='username' inputName='username' type="text" value={userCredentials.userName} changeHandler={changeHandler}/>
            <CustomInput labelTxt='Password' inputId='password' inputName='password' type="password" value={userCredentials.password} changeHandler={changeHandler}/>         
          </div>
        </div>

        <div>
        <CustomInput labelTxt='Email' inputId='email' inputName='email' type="email" value={userCredentials.email} changeHandler={changeHandler}/>
          <CustomInput labelTxt='Phone' inputId='phone' inputName='phone' type="text" value={userCredentials.phone} changeHandler={changeHandler}/>
          <CustomInput labelTxt='Address' inputId='address' inputName='address' type="text" value={userCredentials.address} changeHandler={changeHandler}/>
          <CustomInput labelTxt='Country' inputId='country' inputName='country' type="text" value={userCredentials.country} changeHandler={changeHandler}/>
        </div>
      </form>
    </div>
  )
}

export default NewUser