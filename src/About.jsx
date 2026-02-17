import React from 'react'
import image from '../src/assets/Images.png'
import Button from './components/Button'

const About = () => {
    return (
        <>
            <>
                <section className='bg-black py-30 w-full'>
                    <div className="container">
                        <div className='flex justify-between items-center'>
                            <img src={image} alt="" />
                            <div >
                                <h4 className='text-primary uppercase'>Behind the Pixels</h4>
                                <p className='w-141.75 py-7 text-[45px] text-white uppercase'> Passionate On Digital Marketer Focused on Driving Results.</p>
                                <p className='w-120.25 text-secondary '>This encompasses a variety of strategies, including search engine optimization (SEO), content marketing, social media marketing, email marketing,.</p>
                                <div className='flex justify-between items-center gap-[34.62px] px-8.25 my-8.25 w-[563.33px] h-[149.19px] rounded-2xl bg-[#140C1C] '>
                                    <div>
                                        <h5 className='text-primary text-5xl'>30+</h5>
                                        <p className='w-[90.59px] text-secondary'>Years of Experience</p>
                                    </div>
                                    <div className='border-x border-[#ffffff3a] px-8.75 '>
                                        <h5 className='text-primary text-5xl'>100+</h5>
                                        <p className='w-[90.59px] text-secondary'>Project Completed</p>
                                    </div>
                                    <div>
                                        <h5 className='text-primary text-5xl'>300+</h5>
                                        <p className='w-[90.59px] text-secondary'>Successful Project</p>
                                    </div>
                                </div>
                                <Button> Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default About
