import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative bg-white flex items-center justify-center'>
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video loop muted autoPlay="true" className='z-10 h-[68vh] w-[107vh] relative object-cover' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
   <div className='h-0.5 w-3/5 top-[35%] absolute z-0 bg-black'></div>
   <div className='h-0.5 w-4/5 top-[55%] absolute z-0 bg-black'></div>
   <div className='h-0.5 w-full top-[75%] absolute z-0 bg-black'></div>
    </div>
  )
}

export default Page3