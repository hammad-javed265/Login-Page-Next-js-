import React from 'react'
import Link from 'next/link';

function NavList() {
  return (
    <nav className="bg-gray-800 flex rounded-2xl ">
      <div className='w-[97%]'>
      <ul className="flex space-x-4 p-4">
        <Link href="/home"><li><p className="text-white hover:bg-gray-700 px-2 py-1 rounded">Dashboard</p></li></Link>
        <Link href="/sld"><li><p className="text-white hover:bg-gray-700 px-2 py-1 rounded">SLD</p></li></Link>
        <Link href="/trend"><li><p className="text-white hover:bg-gray-700 px-2 py-1 rounded">Trends</p></li></Link>
        <Link href="/report"><li><p className="text-white hover:bg-gray-700 px-2 py-1 rounded">Reports</p></li></Link>
      </ul>
      </div>
      <div className='p-1'>
      <Link href = "/"><img src="/power-button-icon-8366.png" alt="" width="50px" height="50px" ></img></Link>
      </div>
    </nav>
  )
}

export default NavList
