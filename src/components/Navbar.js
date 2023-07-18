import React, {useState} from 'react'
import Logo from '../assets/logo-my.jpg'
import {FaBars, FaTimes, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleclick = () =>
    {
       setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
      <img src={Logo} alt='Logo'  style={{height:'40px'}} />
        </div>
        <div>
            <ul className='hidden md:flex'>
                <li>
                  
                <Link to="home" smooth={true} duration={500} >  Home   </Link>
                </li>               
                <li>
                <Link to="skill" smooth={true} duration={500} >  Skills  </Link>     
                </li>
       
                <li>
                <Link to="mobile" smooth={true} duration={500} >  Mobile  </Link>     
                </li>

                <li>
                <Link to="web" smooth={true} duration={500} >  Web  </Link>     
                </li>
               
                <li>
                <Link to="contact" smooth={true} duration={500} >  Contact  </Link>     
                </li>
             
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleclick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes /> }   
        </div>

        {/* Mobile Menu */}
   
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl'>      <Link to="home" smooth={true} duration={500} >  Home   </Link></li>
                <li className='py-6 text-2xl'>      <Link to="skills" smooth={true} duration={500} >  Skills  </Link>    </li>
                <li className='py-6 text-2xl'>      <Link to="mobile" smooth={true} duration={500} >  Mobile  </Link>  </li>
                <li className='py-6 text-2xl'>      <Link to="web" smooth={true} duration={500} >  Web  </Link>  </li>
                <li className='py-6 text-2xl'>      <Link to="contact" smooth={true} duration={500} >  Contact  </Link>   </li>
            </ul>
    

        {/*Social Icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
           <ul>
            <li className='w-[110px] flex justify-between h-[50px] ml-[-70px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full bg-[#0a66c2]' href='https://www.linkedin.com/in/balaji-kaliyaperumal-92164511b/'>Linkedin <FaLinkedin size={30} /> </a>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar
