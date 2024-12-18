import React, { useState, useEffect } from 'react';
import { propertyData, assets } from '../assets/assets';



  const Property = () => {

    //   const propertyData = [
//     // Sample data for 10 properties (each object can contain more fields like image URL, title, etc.)
//     { id: 1, imageUrl: 'path/to/home1.jpg', title: 'Property 1' },
//     { id: 2, imageUrl: 'path/to/home2.jpg', title: 'Property 2' },
//     { id: 3, imageUrl: 'path/to/home3.jpg', title: 'Property 3' },
//     { id: 4, imageUrl: 'path/to/home4.jpg', title: 'Property 4' },
//     { id: 5, imageUrl: 'path/to/home5.jpg', title: 'Property 5' },
//     { id: 6, imageUrl: 'path/to/home6.jpg', title: 'Property 6' },
//     { id: 7, imageUrl: 'path/to/home7.jpg', title: 'Property 7' },
//     { id: 8, imageUrl: 'path/to/home8.jpg', title: 'Property 8' },
//     { id: 9, imageUrl: 'path/to/home9.jpg', title: 'Property 9' },
//     { id: 11, imageUrl: 'path/to/home11.jpg', title: 'Property 11' }
//   ];

    const [propertyCards, setPropertyCards] = useState(1); 
     const [currentIndex, setCurrentIndex] = useState(0); 
   
     
     // Update property cards count 
     useEffect(() => {
       const updatePropertyCards = () => {
         if (window.innerWidth >= 1024) {
           setPropertyCards(propertyData.length); 
         } else {
           setPropertyCards(1); 
         }
       };
   
       updatePropertyCards();
       window.addEventListener('resize', updatePropertyCards);
       return () => window.removeEventListener('resize', updatePropertyCards);
     }, []);
   
     // Previous and next button handlers
     const prevProperty = () => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.length);
     };
   
     const nextProperty = () => {
       setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? propertyData.length - 1 : prevIndex - 1
       );
     };
   
     return (
       <div
         id="Property"
         className="container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
       >
         <h1 className="text-2xl sm:text-4xl font-bolder mb-2 text-center">
           Property
           <span className="underline underline-offset-4 decoration-1-under font-bolder">
             Listings
           </span>
         </h1>
         <p className="text-center text-blue-800 mb-8 max-w-80 mx-auto">
           We are dedicated to providing you with professional, responsible, and honest services.
         </p>
   
         {/* Slider buttons */}
         <div className="flex justify-end items-center mb-8">
           <button
             className="p-3 bg-blue-300 rounded mr-2"
             onClick={prevProperty}
             aria-label="Previous Property"
           >
             <img src={assets.left_arrow} alt="Back arrow button" />
           </button>
           <button
             className="p-3 bg-blue-300 rounded mr-2"
             onClick={nextProperty}
             aria-label="Next Property"
           >
             <img src={assets.right_arrow} alt="Next arrow button" />
           </button>
         </div>
   
         {/* Property slider */}
         <div className="overflow-hidden">
           <div
             className="flex gap-8 transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${(currentIndex * 100) / propertyCards}%)` }}
           >
             {propertyData.slice(0, 7).map((project, index) => (  // Show only the first 7 images
               <div className="relative flex-shrink-0 w-full sm:w-1/4" key={index}>
                 <img className="w-full h-auto mb-14" src={project.image} alt={project.title} />
                 <div className="absolute left-0 right-0 bottom-5 justify-center">
                   <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                     <h1 className="text-xl font-bolder text-blue-800">{project.title}</h1>
                     <p className="text-blue-800 text-sm">
                       {project.price} <span className="px-1">|</span> {project.location}
                     </p>
                   </div>
                   
                 </div>
               </div>
             ))}
             
           </div>
           
         </div>
        
       </div>
     );
   };
 
 export default Property;   