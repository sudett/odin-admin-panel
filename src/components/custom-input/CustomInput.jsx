import React from 'react'

import './CustomInput.css';

const CustomInput = ({labelTxt, inputId, inputName, type, value, changeHandler}) => {
  return (
    <div className='new-user__group'>
      <label htmlFor={inputId}>{labelTxt}</label>
      <input className='new-user__input' id={inputId} name={inputName} type={type} value={value} onChange={changeHandler} />
    </div>
  )
}

export default CustomInput