import React from 'react'
import {BsBellFill} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img className='w-[120px] sm:w-[160px] md:w-[190px] lg:w-[230px] inline-block cursor-pointer relative p-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Netflix_Logo'/>
      <div>
        <button className='text-white pr-4'>
          <BiSearch />
        </button>
        <button className= 'text-white px-6 py-2 rounded cursor-pointer'>< BsBellFill/></button>
      <img className='w-[32px] sm:w-[40px] md:w-[48px] lg:w-[56px] inline-block cursor-pointer relative p-2' src="http://zoeice.com/assets/img/uploads/profile.png"
          alt="Avatar" />

      </div>
    </div>
  )
}

export default Navbar;
