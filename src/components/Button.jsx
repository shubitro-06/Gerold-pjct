import React from 'react'

const Button = ({children,className}) => {
  return (
    <div>
        <button className={`h-12.25 w-40 rounded-[30px] cursor-pointer bg-linear-to-r from-primary via-[#2A1454] to-primary text-white ${className}` }>{children}</button>
    </div>
  )
}

export default Button
