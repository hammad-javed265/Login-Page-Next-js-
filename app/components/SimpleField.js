import React from 'react';

const SimpleField = ({placeholder, type, value, onChange}) => {
  return (
    <div>
      <input 
           placeholder={placeholder}
           type={type} 
           className='outline-none border-b-4 border-transparent py-2 text-sm w-full px-5 transition duration-150 focus:border-red-500 ' 
           value={value}
           onChange={onChange}
           ></input>
    </div>
  )
}

export default SimpleField
