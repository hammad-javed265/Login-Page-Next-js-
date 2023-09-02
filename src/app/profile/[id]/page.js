import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-3'>
        <h2>User Profile Page</h2>
        <button className='bg-red-500 py-2 px-7 rounded-md'>Logout</button>
    </div>
  )
}

export default UserProfile