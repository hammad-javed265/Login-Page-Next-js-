import React from 'react'

function Date({title, id}) {
  return (
    <div className='flex space-x-4'>
      <p 
      className='py-2'
      >{title}</p>
    <input 
    type="date" 
    id={id} 
    className="text-black border rounded px-2 py-1" />
    </div>
  )
}

export default Date
