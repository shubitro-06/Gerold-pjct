import React from 'react'

const Card = ({img,head,para,par}) => {
  return (
    <>
      <div className='bg-[#050709] px-7 py-10 w-77 h-81.5 mt-15 rounded-3xl'>
          <div className='flex gap-6 items-center'>
              <img src={img} alt="###" />
              <h4 className='w-31.25 text-secondary'>{head} </h4>
          </div>
          <p className='pt-4 pb-9.75 w-60.75 text-secondary'>{para} </p>
          <img src={par} alt="###" />
          
      </div>
    </>
  )
}

export default Card
