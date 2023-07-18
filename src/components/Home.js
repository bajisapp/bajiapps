import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import MobileApp01 from '../assets/projects/Mobile/React-Native-01.jpg';
const Home = () => {
  return (
    <div name='home' className='bg-[#071427] w-full h-screen'>    
      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>

      <div className='grid grid-cols-3 gap-4'>

      <div class="col-span-2 ...">
        
      <div >    

           <p className='text-blue-600'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-2xl font-bold text-[#ccd6f6] animate-typing'>Balaji K</h1>
        <h2 className='text-2xl sm:text-2xl font-bold text-[#c5cbdf] animate-typing'>I'm a web designer</h2>
        <p className='text-[#8892b0] py-4 max-w-[500px] animate-typing'>         
        I have a background in Web and Graphics designing and experience of successfully designing a websites layout, usability and appearance. Over the last few years, I’ve had the opportunity of working for several companies, this has given me extensive Front-end web development / Graphics Design knowledge and technical skills. 
        </p>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div' > 
           <Link smooth={true} duration={500}  to="mobile" className='text-[#f4f4f4] animate-bounce duration-700 border-2 group px-3 py-3 w-[160px] flex items-center hover:bg-blue-700 hover:border-blue-600'>View Work
              <span className='group-hover:rotate-90 duration-300'>
                 <HiArrowNarrowRight className='ml-2' />
                 </span>     
                  </Link>
              </div>
              </div>


      </div>
  <div class="...">
  <div >
        <img class="skew-y-0 h-auto w-[250px] right-0"  src={MobileApp01} style={{  borderColor: '#283467',    borderWidth: 5,    borderRadius: 10 }} />
      <h2 className='text-[#fff]'>React Native UI Design</h2>
        </div>


  </div>















  
     
        </div>

   
      </div>
    </div>
  )
}

export default Home
