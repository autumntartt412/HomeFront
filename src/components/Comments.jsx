import React from 'react'
import { assets, commentsData } from '../assets/assets'


const Comments = () => {
    
  return (
   
    <div id='Comments' className='container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='ext-2xl sm:text-4xl font-bolder mb-2 text-center'>Client <span className='underline underline-offset-4 decoration-1-under font-bolder'>Comments</span></h1>
        <p className='text-blue-800 max-w-80 text-center mb-12 mx-auto'>Past Comments.</p>
   
    <div className='flex flex-wrap justify-center gap-8'>
    {commentsData.map((review, index) =>(
        <div className='max-w-[340px border shadow-lg rounded px-8 py-12 text-center' key={index}>
           <img className='w-20 h-20 rounded-full mx-auto mb-4' src={review.image} alt={review.alt}/>
           <h1 className='text-xl font-bolder text-blue-800'>{review.name}</h1>
           <p className='text-blue-800 mb- text-sm'>{review.title}</p>
           <div className='flex justify-center gap-1 text-red-500 mb-4'>
            {Array.from({length: review.rating}, (item, index) => (
                <img key={index}src={assets.star_icon} alt="" />
            ))}
           </div>
            <p className='text-blue-800'>{review.text}</p>
        </div>
    ))}
    </div>
    <div >
        <h1 className='mx-auto text-blue-300 text-lg font-bold mb-4 flex flex-col items-center gap-2'>
          <a href="#Header" className='text-blue-300 hover:text-blue-600'>Home</a>
        </h1>
      </div>
    
    </div>
   
   
  )
}

export default Comments