import React from 'react'
import SecHead from './components/SecHead'
import Button from './components/Button'
import man from '../src/assets/man.png'
import star from '../src/assets/stars.png'

const Review = () => {
    return (
        <>

            <div className='container'>
                <div className='mt-30 flex justify-between items-start'>
                    <div>

                        <SecHead classname="mb-10"
                            head="Clients feedback"
                            para="Let’s Hear From Dear Clients."
                        />

                        <Button>
                            contact Me
                        </Button>
                    </div>



                    <div className='w-197.25 border border-primary rounded-2xl py-7.5 px-6 '>
                        <div className='flex justify-between items-end border-b border-secondary pb-7.5'>
                            <div className='flex gap-6.5'>
                                <img src={man} alt="" />
                                <div>
                                    <h1 className='text-xl font-bold py-2'>Tim Bailey</h1>
                                    <h2>SEO Specialist, Theme Junction</h2>
                                </div>
                            </div>
                            <img src={star} alt="" />
                        </div>
                        <p className='text-secondary text-xl w-[731.26px] mt-6.75 '>“Taylor is a professional Designe really helps my business by providing
                            value to my business. Taylor is a professional Designer he really helps my
                            business by providing value to my business. Taylor is a professional.
                            Helps business providing value to my business. professional Designer he
                            really helps my business</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Review
