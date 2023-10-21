import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Navbar = () => {
  const {user, logOut} = UserAuth();
  // console.log(user.email);
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try{
     await logOut();
     navigate('/')
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
      <img className='w-[120px] sm:w-[160px] md:w-[190px] lg:w-[230px] inline-block cursor-pointer relative p-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='Netflix_Logo'/>
      </Link>
      {user?.email ? <div>
        <Link to='/account'>
        <button className='text-white pr-4 bg-red-600 hover:bg-red-700 rounded-md px-3 py-2 '>
          Account
        </button>
        </Link>
      
        <button onClick={handleLogout} className= 'text-white  px-3 py-2 rounded-md pr-4 bg-gray-800 hover:bg-gray-900'>LogOut</button>
        
      {/* <img className='w-[32px] sm:w-[40px] md:w-[48px] lg:w-[56px] inline-block cursor-pointer relative p-2' src="http://zoeice.com/assets/img/uploads/profile.png"
          alt="Avatar" /> */}

      </div> :
        <div>
        <Link to='/login'>
        <button className='text-white pr-4 bg-red-600 hover:bg-red-700 rounded-md px-3 py-2 '>
          Sign In
        </button>
        </Link>
        <Link to='/signup'>
        <button className= 'text-white  px-3 py-2 rounded-md pr-4 bg-gray-800 hover:bg-gray-900'>Sign Up</button>
        </Link>
      {/* <img className='w-[32px] sm:w-[40px] md:w-[48px] lg:w-[56px] inline-block cursor-pointer relative p-2' src="http://zoeice.com/assets/img/uploads/profile.png"
          alt="Avatar" /> */}

      </div> }
      
    </div>
  )
}

export default Navbar;
