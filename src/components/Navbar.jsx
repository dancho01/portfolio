import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import resume from '../assets/MyCV.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }

    function logoClick () {
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#171717] text-gray-300'>
            <div onClick={logoClick} className='hover:scale-110 duration-500 cursor-pointer'>
                <img src={logo} alt="Logo Image" style={{width: '50px'}} />
            </div>

            {/*Menu*/}
            <ul className='hidden md:flex gap-1'>
                <li className='hover:bg-gray-800 py-2 px-4 rounded duration-200'>
                <Link to='hero' smooth={true} duration={500} >
                    Home
                </Link>
                </li>
                <li className='hover:bg-gray-800 py-2 px-4 rounded duration-200'>
                <Link to='about' smooth={true} duration={500} >
                    About
                </Link>
                </li>
                <li className='hover:bg-gray-800 py-2 px-4 rounded duration-200'>
                <Link to='project' smooth={true} duration={500} >
                    Project
                </Link>
                </li>
                <li className='hover:bg-gray-800 py-2 px-4 rounded duration-200'>
                <Link to='contact' smooth={true} duration={500} >
                    Contact
                </Link>
                </li>
            </ul>


            {/*Burger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
        
            {/*Mobile Menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='hero' smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='project' smooth={true} duration={500}>
                    Project
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
                </li>  
            </ul>

            {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' target='blank' href="https://www.linkedin.com/in/daniel-cho-129984226/"> Linkedin <FaLinkedin size={30} /></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' target='blank' href="https://github.com/dancho01"> Github <FaGithub size={30} /></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' target='blank' href="mailto: chodaniel99@gmail.com"> Email <HiOutlineMail size={30} /></a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href={resume} target='blank'> Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Navbar