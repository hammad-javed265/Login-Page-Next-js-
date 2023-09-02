"use client";
import React from 'react'
import { BiSolidBasketball } from 'react-icons/bi';
import { AiOutlineHome,AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { BsBorderWidth } from 'react-icons/bs';
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from './LogoutButton';


const Sidebar = () => {
  const path = usePathname();
  // console.log(path);
  return (
    <div className='flex flex-col gap-5'>
        <SidebarItem Icon={AiOutlineHome} title="Dashboard" url="/" active={ path === "/" ? true : false} />
        <SidebarItem Icon={BiSolidBasketball} title="Products" url="/products" active={ path === "/products" ? true : false} />
        <SidebarItem Icon={BsBorderWidth} title="Orders" url="/orders" active={ path === "/orders" ? true : false} />
        <SidebarItem Icon={AiOutlineSetting} title="Settings" url="/settings" active={ path === "/settings" ? true : false} />
        <LogoutButton />
    </div>
  )
}

export default Sidebar