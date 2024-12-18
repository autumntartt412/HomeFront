import React from 'react'
import Nav from './Nav'


const Header = () => {
  return (
    <div  id="Header" style={{backgroundImage: "url('/header_img.jpg')"}} className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'>
        <Nav/>
    <div className='text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h1 className='text-5XL sm:text-6xl md:text-[82px] inline-block max-w-5xl font-semibold pt-20'>There's No Place Like Home!</h1>
    <div className='space-x-5 mt-16'>
            <a href="#Property" className='border border-white px-8 py-3 rounded'>Property</a>
            <a href="#Contact" className='bg-blue-300 px-8 py-3 rounded'>Contact Us</a>
    </div>
    </div>
    </div>
  )
}

export default Header