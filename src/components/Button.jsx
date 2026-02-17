import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className='h-[49px] w-[160px] rounded-[30px] cursor-pointer bg-linear-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-[#fff] '>{children}</button>
    </div>
  )
}

export default Button
