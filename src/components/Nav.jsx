import React from 'react'
import {assets} from '../assets/assets'

const Nav = () => {
  return (
 
         <div className='nav absolute top-0 left-0 w-full z-10'>
        <div className='navContainer mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

            <img src={assets.hclogo} alt="logo"/>
            <ul className='hidden md:flex gap:20 text-white gap-5'>
                <a href="#Header" className='cursor-progress hover:text-blue-800'>Home</a>
                <a href="#About" className='cursor-progress hover:text-blue-800'>About</a>
                <a href="#Property" className='cursor-progress hover:text-blue-800'>Property</a>
                <a href="#Comments" className='cursor-progress hover:text-blue-800'>Comments</a>
            </ul>
            <button className='hidden md:block bg-white px-10 py-2 rounded-full'>Sign In</button>
            <img  className='md:hidden w-7' src={assets.menu_icon}  alt="menu lines" />

    </div>
    </div>
  )
}

export default Nav
