import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#171717] flex justify-center items-center p-4'>
        
        {/* container */}
        <form action="https://getform.io/f/6fb3fc03-5daa-45f4-8d3d-c0b99972a25c" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-[#0097b2]'>Contact</p> 
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - chodaniel99@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>

    </div>
  )
}

export default Contact