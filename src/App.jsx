import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Property from './components/Property'
import Comments from './components/Comments'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImageUploadFile from './components/ImageUploadFile'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const App = () => {
 

//  render() {
  return (
   
    <div className='w-full overFlow-hidden'>
    
    {/* <ToastContainer/> */}
    <Header/>
    <About/>
    <Property/>
    <Comments/>
    <Contact/>
    <Footer/>
    <ImageUploadFile/>
    </div>

  )
  }
// }
export default App