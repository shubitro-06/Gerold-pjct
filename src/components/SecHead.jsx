import React from 'react'

const SecHead = ({ head, para,classname }) => {
    return (
        <>
            <div className="container">
                <div className={`${classname} w-132.5 `}>
                    <h4 className='text-primary mb-6.2'>{head} </h4>
                    <p className='text-[45px] font-semibold text-white  '>{para} </p>
                </div>
            </div>
        </>
    )
}

export default SecHead

// -linear-to-r from-white  to-[#ffffff65]