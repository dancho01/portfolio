import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#171717] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Daniel, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                    I have a keen interest in software engineering, in particular front-end development. Having spent a lot of spare time self-teaching HTML, CSS and JavaScript, and completing a front-end web development course, I have been able to use the knowledge I gained and start building my own webpages that is both interactive and visually appealing.
                    </p>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default About