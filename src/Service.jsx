import React from 'react'
import SecHead from './components/SecHead'
import illu1 from '../src/assets/bg-1.png'
import illu2 from '../src/assets/bg-2.png'
import illu3 from '../src/assets/bg-3.png'
import Button from './components/Button'

const Service = () => {
  return (
    <>
       <div className="container">
          <SecHead classname="mx-auto text-center mt-29.75 "
            head="my services"
            para="Here's how I can help!"
           />

           <div className='flex justify-between items-center mt-14.5 mb-7.5'>
              <div className='h-111.5 w-103.5 pl-7.5 pt-7.5 pr-13 bg-black rounded-2xl  '>
                <img src={illu1} alt="" />
                <h2 className='pt-8.75 font-bold text-3xl'>Web Development</h2>
                <p className='py-4.75 w-83 text-secondary'>Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.</p>
                <ul className='list-disc text-white'> 
                    <li> UI/UX Design</li>
                    <li className='py-3'>Research</li>
                    <li>Mobile & Web App</li>
                </ul>
              </div>
              <div className='h-111.5 w-103.5 pl-7.5 pt-7.5 pr-13 bg-black rounded-2xl '>
                <img src={illu2} alt="" />
                <h2 className='pt-8.75 font-bold text-3xl'>Web Development</h2>
                <p className='py-4.75 w-83 text-secondary'>Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.</p>
                <ul className='list-disc text-white'> 
                    <li> UI/UX Design</li>
                    <li className='py-3'>Research</li>
                    <li>Mobile & Web App</li>
                </ul>
              </div>
              <div className='h-111.5 w-103.5 pl-7.5 pt-7.5 pr-13 bg-black rounded-2xl '>
                <img src={illu3} alt="" />
                <h2 className='pt-8.75 font-bold text-3xl'>Web Development</h2>
                <p className='py-4.75 w-83 text-secondary'>Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.</p>
                <ul className='list-disc text-white'> 
                    <li> UI/UX Design</li>
                    <li className='py-3'>Research</li>
                    <li>Mobile & Web App</li>
                </ul>
              </div>
           </div>

           <Button className="w-full rounded-[5px] h-18 ">Let’s Contact with Me</Button>
       </div>
    </>
  )
}

export default Service
