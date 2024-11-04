import React, { useRef, useState } from 'react'
// import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TiltText from '../components/TiltText'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)

    

   //tiltRef.current.style.transform =`rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }
 useGSAP(function(){
  gsap.to(tiltRef.current,{
    transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'power4.out'
  })
 },[xVal, yVal])




  return (
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-screen p-3 bg-white'>
        {/* <div id='page1-in' className='shadow-2xl p-20 shadow-gray-700 h-full w-full rounded-[30px]  bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_586,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'> */}
        <div id='page1-in' className='shadow-2xl p-20 shadow-gray-700 h-full w-full rounded-[30px] bg-[url(/src/assets/dp.jpg)]  bg-cover bg-center bg-no-repeat'>
          <img className='h-15 ml-0' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
          <TiltText abc={tiltRef}/>
          <Page1Bottom />
        </div>
    </div>
  )
}

export default Page1