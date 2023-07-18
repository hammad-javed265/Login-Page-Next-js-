"use client";
import React from 'react'
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import { useRouter } from "next/navigation";

function NavList() {
  const router = useRouter();
  return (
    <nav className="bg-[#166079] flex rounded-2xl ">
      <div className='w-[97%]'>
        <ul className="flex space-x-14 p-4">
          <li className={router.pathname === "/home" ? "active" : "bg-[#E2E8F0] text-[#000000] rounded"}>
            <Dropdown title={"Dashboard"}>
              <li><Link href="/home">Plant Summary</Link></li>
              <li><Link href="/comparision">Energy Comparision</Link></li>
            </Dropdown>
          </li>
          <li className='text-white'>
            <Dropdown title={"Diagram"}>
              <li><Link href="/sld">SLD</Link></li>
              <li><Link href="/sankey">Sankey Diagram</Link></li>
            </Dropdown>
          </li>
          <Link href="/trend"><li><p className="text-white hover:bg-gray-700 px-2 py-1 rounded">Customized Trends</p></li></Link>
          <li className='text-white'>
            <Dropdown title={"Reports"}>
              <li><Link href="/report">Energy Usage Report</Link></li>
              <li><Link href="/report">Energy Cost Report</Link></li>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className='p-1'>
        <Link href="/"><img src="/power-button-icon-8366.png" alt="" width="50px" height="50px" ></img></Link>
      </div>
    </nav>
  )
}

export default NavList
