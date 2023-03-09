import React from 'react'
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className=' flex text-white underline items-center justify-center text-2xl font-bold cursor-pointer'>Build by Aditya</h1>
      <div className='flex text-white m-6 px-3 py-3 cursor-pointer'>
        <a className='pl-4' href="https://twitter.com/aditya_sp3" target='_blank'><TbBrandTwitter /></a>
        
      <a className='pl-4' href="https://github.com/adityasp1" target='_blank'><TbBrandGithub /></a>
        
        <a className='pl-4' href="https://www.linkedin.com/in/aditya-rawat-75b668133/" target='_blank'><TbBrandLinkedin /></a>
        
        </div>
      </div>
    
  )
}

export default Footer;
