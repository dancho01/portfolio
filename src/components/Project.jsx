import React from 'react'
import project1 from '../assets/project1.png'
import realEstate from '../assets/realestate.jpg'

const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#171717]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-[#0097b2]'>Projects</p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md: grid-flow-col-3 gap-4'>


                {/*Project 1 */}
                <div style={{ backgroundImage: `url(${project1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/*Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
            
                    <div className='pt-8 text-center'>
                        <a href="https://dancho01.github.io/game-galaxy/">
                            <button className='text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/dancho01/game-galaxy">
                            <button className='text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>  
                    </div>
                </div>
                </div>

                <div style={{ backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/*Hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
            
                    <div className='pt-8 text-center'>
                        <a href="">
                            <button className='text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="">
                            <button className='text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>  
                    </div>
                </div>
                </div>



            </div>

        </div>
    </div>
  )
}

export default Project