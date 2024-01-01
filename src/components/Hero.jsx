import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
    return (
        <div name='hero' className='bg-[#171717] w-full h-screen'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center sm:text-left'>
                <p className='text-pink-600 text-xl' >Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daniel Cho</h1>
                <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>UNSW Comp Sci Student.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px] sm:text-xl'>I'm a driven and diligent team player with a keen interest in front-end development</p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 mx-auto sm:mx-0'>
                    View Projects 
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