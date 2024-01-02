import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import ReactImg from '../assets/react.png'
import Python from '../assets/python.png'
import Postgres from '../assets/postgresql.png'
import Java from '../assets/java.png'

const About = () => {
  return (
    <div name='about' className='w-full h-auto md:h-screen  bg-[#171717] text-gray-400'>

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold text-[#0097b2]' >About Me</p>
                </div>
                <div>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right'>
                    <p>Hi, my name is Daniel and I am a UNSW student studying Computer Science with a keen interest in <strong className='text-white font-bold'>web development</strong>. Having self-taught HTML, CSS and JavaScript, I have been able to start building my own webpages that is both interactive and visually appealing.</p>
                </div>
                <div>
                    <p>
                    In my spare time, I like to
                    </p>
                    <ul>
                        <li className='cursor-auto '>Swim 🏊</li>
                        <li className='cursor-auto '>Play piano 🎹</li>
                        <li className='cursor-auto '>Read 📚</li>
                    </ul>
                </div>
            </div>

            <div className='max-w-[1000px] w-full mx-auto p-4 justify-center'>  
                <p className='py-4'>Here are some of the technologies I've worked with</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Postgres} alt="PostgreSQL icon" />
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>Java</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default About