import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div id='Footer' className='pt-10 px-4 md:px-20 lg:px:32 bg-blue-600 w-full overflow-hidden'>
        <div className='container mx-auto flex flex-col justify-between items-start md:flex-row'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logohome} alt="logo"/>
                <p className='text-white mt-4'>Tart cotton candy sugar plum tootsie roll cupcake.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h1 className='text-white text-lg font-bolder mb-4'></h1>
                <ul className='flex flex-col gap-2'>
                    <a href="#Header" className='text-white hover:text-blue-800'>Home</a>
                    <a href="#About" className='text-white hover:text-blue-800'>About</a>
                    <a href="#Contact" className='text-white hover:text-blue-800'>Contact Us</a>
                    <a href="#" className='text-white hover:text-blue-800'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h2 className='text-white text-lg font-bolder mb-4'>Subscribe to our news letter:</h2>
            <p className='text-white hover:text-blue-800 mb-4 max-w-80'>The latest news, atricles and resourses, sent to your inbox monthly.</p>
        <div className='flex gap-2'>

        <input className='p-2 rounded bg-white text-blue-800 border border-blue-800 focus:outline-none w-full md:w-auto' type="email" placeholder='Please enter your email'/>
        <button className='p-2 rounded bg-text-blue-800 text-white border border-white'>Subscribe</button>
        </div>
        </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-white'>
            Copyright 2024 @ S&H Realty. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer