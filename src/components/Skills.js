import React from 'react'
import ASP from '../assets/asp.png';
import bootstrap from '../assets/bootstrap.png';
import tailwindcss from '../assets/tailwind.png';
import sql from '../assets/SQL SERVER.png';
import reactlogo from '../assets/react.png';
import firebase from '../assets/firebase.png';
import photoshop from '../assets/Photoshop.png';
import illustrator from '../assets/illustrator.png';

const Skills = () => {
  return (
    <div name='skill' className='bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-2xl font-bold border-b-4 inline border-blue-500 '>Experience</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
 

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={bootstrap} alt='Bootstrap Icon' />
                <p className='my-4'>Bootstrap</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={ASP} alt='Bootstrap Icon' />
                <p className='my-4'>Asp.Net</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={sql} alt='Bootstrap Icon' />
                <p className='my-4'>MS SQL</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={tailwindcss} alt='Bootstrap Icon' />
                <p className='my-4'>tailwind css</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={reactlogo} alt='Bootstrap Icon' />
                <p className='my-4'>React / React Native</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={firebase} alt='Bootstrap Icon' />
                <p className='my-4'>Firebase</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={photoshop} alt='Bootstrap Icon' />
                <p className='my-4'>Photoshop</p>
            </div>

            <div className='shadow-md shadow-[#0f0c16] hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={illustrator} alt='Bootstrap Icon' />
                <p className='my-4'>Illustrator</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Skills
