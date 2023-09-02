import React from 'react'

function Date({id, onChange, value}) {
  return (
    <div className='flex space-x-4'>
    <input 
    type="date" 
    value = {value}
    id={id} 
    onChange={onChange}
    className="text-black border rounded px-2 py-1 w-full" />
    </div>
  )
}

export default Date