import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen relative p-3 bg-white'>
        <div className='h-full w-full bg-black shadow-2xl overflow-hidden shadow-gray-700 rounded-[30px]'>
                <video loop muted autoPlay="true" className='h-full w-full object-cover'  src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
                <h1 className='font-[anzo5] text-[40vw] absolute uppercase -bottom-44 left-20'>About</h1>
        </div>
    </div>
  )
}

export default Page6