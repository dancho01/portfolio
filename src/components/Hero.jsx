import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
    return (
        <div name='hero' className='bg-[#0a192f] w-full h-screen'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600' >Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daniel Cho</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>I'm a uni student.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a currently a UNSW student studying Bachelor of Computer Science and I have a keen interest in software engineering, in particular front-end development. Having spent a lot of spare time self-teaching HTML, CSS and JavaScript, and completing a front-end web development course, I have been able to use the knowledge I gained and start building my own webpages that is both interactive and visually appealing</p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' /> 
                    </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero