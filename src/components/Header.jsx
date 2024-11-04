import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 py-20 px-20'>
        <button className='bg-black px-4 py-2 text-xl border-4 px-9 py-2 hover:bg-gray-500 rounded-full'>Hire Me</button>
        <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  )
}

export default Header