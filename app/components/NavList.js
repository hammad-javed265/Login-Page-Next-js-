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
        <ul className="flex space-x-[5%] p-4">
          <li className={router.pathname == "/home" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
            <Dropdown title={"Dashboard"}>
              <Link href="/home"><li>Plant Summary</li></Link>
              <Link href="/comparision"><li>Energy Comparision</li></Link>
            </Dropdown>
          </li>
          <li className={router.pathname == "/sld" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
            <Dropdown title={"Diagram"}>
              <Link href="/sld"><li>SLD</li></Link>
              <Link href="/sankey"><li>Sankey Diagram</li></Link>
            </Dropdown>
          </li>
          <Link href="/trend">
            <li className={router.pathname == "/trend" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
              <p className="px-2 py-1 rounded">Customized Trends</p>
            </li>
          </Link>
          <li className={router.pathname == "/report" ? "bg-[#E2E8F0] text-[#000000] rounded" : "text-[#E2E8F0]"}>
            <Dropdown title={"Reports"}>
              <Link href="/report"><li>Energy Usage Report</li></Link>
              <Link href="/report"><li>Energy Cost Report</li></Link>
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
