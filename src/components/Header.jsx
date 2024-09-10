import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className='mx-auto pt-8 pb-8 pl-[99px] pr-[99px] max-w-[1440px] flex items-center justify-between'>
      <div className='flex gap-4 items-center '>
        <img className='w-10 h-10' src={Logo} alt="logo icon" />
        <span className='flex gap-2 items-center'>
            <p className='text-[#170F49] text-3xl'>brix</p>
            <p className='text-[#4A3AFF] text-3xl'>templates</p>
        </span>
      </div>
      <button className="btn btn-primary rounded-[56px]">Clone now</button>
    </div>
  )
}

export default Header
