import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        gsap.from(".rotateText5", {
            transform: 'rotateX(-80deg)',
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger: {
                trigger: ".rotateText5",
                start: "top 60%",
                end: "top -270%",
                scrub:2,
            }
        })
    })
  return (
    <div id='section5' className='bg-white text-black text-center p-10'>
        <div className='rotateText5 mt-14'>
            <h1 className='text-[41vw] text-black font-[anzo5] uppercase leading-[33vw]'>HELPING</h1>
        </div>
        <div className='rotateText5'>
            <h1 className='text-[41vw] text-gray-400 font-[anzo5] uppercase leading-[33vw]'>MY</h1>
        </div>
        <div className='rotateText5'>
            <h1 className='text-[41vw] text-black font-[anzo5] uppercase leading-[33vw]'>CLIENTS</h1>
        </div>
        <div className='rotateText5'>
            <h1 className='text-[41vw] text-black font-[anzo5] uppercase leading-[33vw]'>TO ACHIEVE</h1>
        </div>
        <div className='rotateText5'>
            <h1 className='text-[41vw] text-gray-400 font-[anzo5] uppercase leading-[33vw]'>THEIR</h1>
        </div>
        <div className='rotateText5'>
            <h1 className='text-[41vw] text-black font-[anzo5] uppercase leading-[33vw]'>DREAMS!</h1>
        </div>
    </div>
  )
}

export default Page5