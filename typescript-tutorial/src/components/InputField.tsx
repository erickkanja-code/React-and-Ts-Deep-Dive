import React, { useState } from 'react'
import './styles.css'
const InputField: React.FC = () => {




  return (
    <form className='input'>
      <input 
        type="text"
        placeholder='Enter a task'
        className='input__box'
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
      />
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
