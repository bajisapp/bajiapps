import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#07172f]'>



      

    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <form  action="https://getform.io/f/02ad1889-6d9f-417b-a772-ee378058b5df" method="POST" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300'>Contact </p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - bajisapp@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email' />
            <textarea className='my-4 p-2 bg-[#ccd6f6] ' name='message' rows='10'></textarea>      
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-400 px-4 my-8 mx-auto flex items-center'>Submit</button>
              </form>
              </div>
      
    </div>
  )
}

export default Contact
