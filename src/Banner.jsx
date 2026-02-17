import React from 'react'
import bnr from '../src/assets/bnr.png'
import ballbtn from '../src/assets/ballbtn.png'
import link from '../src/assets/Link.png'

const Banner = () => {
    return (
        <>

            <div className='text-[203px] font-semibold flex justify-center items-center gap-14.25 text-center '>
                <h1>HELLO</h1>
                <img src={link} alt="" className='h-53.75 w-53.75 ' />
                <h2>Motion</h2>
            </div>
            <div className="container">
                <div className='mt-20 flex justify-between items-center'>
                    <img src={bnr} alt="" />
                    <div>
                        <p className='text-[#ffffff71] w-75.25 '>My role as a amplify tha story through
                            my careful <span className='text-white'>[Video Editor]</span> selection of
                            footages, pacing, and visual style. My
                            keen attention to detail allows me to
                            enhance the mood.
                        </p>
                        <p className='text-white text-[110px] border-y border-[#ffffff4b] w-90 my-7'>12+ <sub className='text-[#ffffff71] text-base'>Years of Experience</sub></p>
                        <img src={ballbtn} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
