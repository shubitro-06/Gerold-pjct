import React from 'react'
import SecHead from './components/SecHead'
import work1 from '../src/assets/bg4.png'
import work2 from '../src/assets/bg5.png'
import work3 from '../src/assets/bg6.png'
import bgbnr from '../src/assets/bg7.png'

const RecentWork = () => {
  return (
    <>
          <SecHead classname="w-80 mt-29.75 "
            head="My Recent Work"
            para="Recent work for MY clients!"
          />

          <div className='flex justify-between mt-15 mb-30 '>
             <img src={work1} alt="" />
             <img src={work2} alt="" />
             <img src={work3} alt="" />
          </div>

          <div className='w-full'>

          <img src={bgbnr} alt="" />
          </div>
    </>
  )
}

export default RecentWork
