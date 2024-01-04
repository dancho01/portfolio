import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import portrait from '../assets/portrait.jpg'

const Hero = ({projectRef}) => {

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

    return (
        <div name='hero' className='bg-[#171717] w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center sm:text-left pt-10'>

                <div className='w-full grid md:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='text-[#0097b2] text-xl' >Hi, my name is</p>
                        <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>Daniel Cho</h1>
                        <h2 className='text-2xl md:text-4xl font-bold text-[#8892b0]'>UNSW Comp Sci Student</h2>
                        <p className='text-[#8892b0] py-4 max-w-[700px] md:text-xl'>I'm a driven and diligent team player with a keen interest in front-end development</p>
                        <div>
                            <button onClick={() => {handleScroll(projectRef.current)}} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 mx-auto sm:mx-0'>
                            View Projects 
                            <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' /> 
                            </span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <img className='w-[40vw] md:w-[90vw] object-cover max-w-[300px] rounded-xl mx-auto' src={portrait} alt="portrait pic"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero