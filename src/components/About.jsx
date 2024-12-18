import React from 'react'
import { assets } from '../assets/assets'


const About = () => {
  return (
  


    
   <div id='About' className='flex flex-col items-center justfy-center container mx-auto p-10 md:px-20 lg:px-32 w-full overflow-hidden'> 
        <h1 className='text-2xl sm:text-4xl font-bolder mb-2 text-center'>About <span className='underline underline-offset-4 decoration-1-under font-bolder'>Our Brand</span></h1>
        <p className='text-blue-800 max-w-80 text-center mb-8'>Transforming Neighborhoods. Transforming Homes. Transforming Lives.</p>
   <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    <img className='w-full sm:w-1/2 max-w-lg' src={assets.home10} alt="" />
    <div className='flex flex-col items-center md:items-start mt-10 text-blue-800'>
    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
   
    
    <div>
        <p className='text-4xl font-medium text-blue-800'>10+</p>
        <p>Over a Decade of Excellence and Beyond</p>
    </div>
    <div>
        <p className='text-4xl font-medium text-blue-800'>20+</p>
        <p>####</p>
    </div>
    <div>
        <p className='text-4xl font-medium text-blue-800'>50+</p>
        <p>####</p>
    </div>
    <div>
        <p className='text-4xl font-medium text-blue-800'>100+</p>
        <p>####</p>
    </div>
    </div>
    <p className='my-10 max-w-lg'>Chocolate bar powder gingerbread icing chocolate bar. Gummi bears pastry topping brownie tootsie roll. Gummies croissant gingerbread jujubes gummi bears caramels. Bear claw cotton candy cotton candy ice cream gummies. Chocolate bar sugar plum shortbread bonbon cheesecake wafer tart. Bear claw shortbread danish brownie chupa chups Cake sweet muffin lollipop lollipop fruitcake. Oat cake sweet roll powder carrot cake cheesecake. Pastry chocolate cake sweet roll gingerbread gingerbread marshmallow Dessert danish candy caramels jujubes oat cake jujubes. Cake marzipan cupcake gingerbread toffee jelly-o cotton candy chocolate bar powder. Icing dragée candy jelly beans cotton candy. Wafer sweet wafer powder topping jujubes  Lemon drops chocolate jelly marshmallow gingerbread sweet roll halvah tootsie roll Sesame snaps dessert croissant chocolate cake fruitcake jelly-o bear.</p>
    <button className='bg-blue-300 text-white px-8 py-2 rounded'>See More</button> 
    <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <h1 className='mx-10 text-blue-300 text-lg font-bold mb-4 flex flex-col gap-2'>
          <a href="#Header" className='text-blue-300 hover:text-blue-600'>Home</a>
        </h1>
      </div>
    </div>
    
   </div>
   
    </div>

    
  )
}

export default About
