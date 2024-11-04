import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#banner img',{
      rotate: 360,
      duration: 6,
      repeat:-1, 
      ease: 'linear'
    })
  })

  return (
    <div className='absolute left-0 px-20 py-9 flex items-end justify-between bottom-0 w-full'>
        <div>
            <h2 className='text-[18px] font-[anzo2]'>Commission work | Art classes</h2>
            <h3 className='text-[18px] font-[anzo3] text-gray-400' >Kalagrih</h3>
        </div>
        <div id='banner'>
            <img className='mb-5' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
            <img className='mb-5' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom