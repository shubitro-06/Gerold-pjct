import React from 'react'
import SecHead from './components/SecHead'
import blg1 from '../src/assets/blog1.png'
import blg2 from '../src/assets/blog2.png'
import blg3 from '../src/assets/blog3.png'

const Blog = () => {
  return (
    <>
      <SecHead classname="mx-auto text-center mt-30"
        head="Behind the Pixels"
        para="Read My Recent Blog"
      />

      <div className="container">
        <div className='flex gap-5 mt-15'>
            <img src={blg1} alt="" />
            <img src={blg2} alt="" />
            <img src={blg3} alt="" />
        </div>
      </div>
    </>
  )
}

export default Blog
