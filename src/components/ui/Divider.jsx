import React from 'react'

export const Divider = ({title}) => {
  return (
    <div className='w-full flex flex-col justify-start items-start my-5'>
        <span className='font-semibold text-2xl'>{title}</span>
        <div className="w-full h-[1.5px] bg-green-700"></div>
    </div>
  )
}
