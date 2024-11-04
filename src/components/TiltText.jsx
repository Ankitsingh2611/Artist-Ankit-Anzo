import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-40'>
        <h1 className='text-[4.5vw] leading-[4vw] uppercase font-[anzo2]'>I AM <span className='text-black font-[anzo2]'>AN Artist<span className='text-white font-[anzo2]'>™</span> </span></h1>
        <h1 className='text-[6.2vw] leading-[6vw] uppercase font-[anzo2]'>Ankit Singh</h1>
        <h1 className='text-[4.5vw] leading-[4vw] uppercase font-[anzo2]'>TO HIRE</h1>
         </div>
  )
}

export default TiltText
