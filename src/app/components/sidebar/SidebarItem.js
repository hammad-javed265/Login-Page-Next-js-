import Link from 'next/link'
import React from 'react'
// import { Icon } from 'react-icons';

const SidebarItem = ({Icon, title, url, active}) => {
  return (
    <Link 
        href={url}
        className={`flex items-center font-semibold gap-3 p-2 hover:bg-white hover:text-black rounded-full
                    ${active && 'bg-white text-black'} `}>
        <Icon size={25} />
        <p className='text-lg'>{title}</p>    
    </Link>
  )
}

export default SidebarItem