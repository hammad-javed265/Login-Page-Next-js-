import React from 'react'
import Sidebar from '../../sidebar/Sidebar'

const AdminLayout = ({children}) => {
  return (
    <div className='flex h-full min-h-screen'>
      <div className='w-[20%] bg-black text-white p-5'>
        <Sidebar />
      </div>
      <div className='w-[80%] bg-gray-100 p-10 text-black'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout