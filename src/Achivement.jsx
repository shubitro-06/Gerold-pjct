import React from 'react'
import SecHead from './components/SecHead'
import { FaRegCalendarCheck } from "react-icons/fa";
import wrk1 from '../src/assets/work1.png'
import wrk2 from '../src/assets/work2.png'
import wrk3 from '../src/assets/work3.png'

const Achivement = () => {
    return (
        <>
            <SecHead classname="mx-auto text-center mt-29.75 uppercase "
                head="Behind the Pixels"
                para="MY Background and Achievements"
            />
            <div className="container">
                <div className=' hov w-[393px] h-[52px] my-15 mx-auto rounded-full flex justify-between items-center px-2 bg-primary text-center'>
                    <h1 className='w-35 '>Experiences</h1>
                    <h1 className='w-35 '>Education</h1>
                    <h1 className='w-35 '>Awards</h1>
                </div>


                <div className='border-[#fff4] border rounded-2xl p-[62px]'>
                    <div className='border-b border-secondary flex justify-between items-start'>
                        <div className='flex gap-10.25'>
                            <div>

                                <img src={wrk1} alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl'>Senior Product Designer</h1>
                                <h4 className=' text-[#DDDDDD] pt-4 pb-6'>VirtusLab</h4>
                                <p className='pb-12.5 w-[623.95px] text-secondary'>I'm winner of the world's most prestigious web designthat has more- or-less normal awards in the fields.</p>
                            </div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaRegCalendarCheck className='text-primary ' />
                            <h4 className='text-[#DDDDDD]'> 2022 - 2023</h4>
                        </div>
                    </div>

                    <div className='border-b border-secondary flex justify-between items-start mt-10'>
                        <div className='flex gap-10.25'>
                            <div>

                                <img src={wrk2} alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl'>Senior Product Designer</h1>
                                <h4 className=' text-[#DDDDDD] pt-4 pb-6'>Semiflat Studio</h4>
                                <p className='pb-12.5 w-[623.95px] text-secondary'>I'm winner of the world's most prestigious web designthat has more- or-less normal awards in the fields.</p>
                            </div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaRegCalendarCheck className='text-primary ' />
                            <h4 className='text-[#DDDDDD]'> 2020 - 2023</h4>
                        </div>
                    </div>
                    <div className='flex justify-between items-start mt-10'>
                        <div className='flex gap-10.25'>
                            <div>

                                <img src={wrk1} alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl'>Senior User Interface Designer</h1>
                                <h4 className=' text-[#DDDDDD] pt-4 pb-6'>Autentika</h4>
                                <p className='w-[623.95px] text-secondary'>I'm winner of the world's most prestigious web designthat has more- or-less normal awards in the fields.</p>
                            </div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaRegCalendarCheck className='text-primary ' />
                            <h4 className='text-[#DDDDDD]'> 2018 - 2020</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achivement
