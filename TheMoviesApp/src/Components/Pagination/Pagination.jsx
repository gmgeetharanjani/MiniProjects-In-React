import React, {useState} from 'react'

export default function Pagination({pageNumber, onPrevClick, onNextClick}) {
  
  return (
    <div className='flex justify-center items-center gap-5 mt-8 h-[50px] bg-gray-400 text-white'>
      <div className='cursor-pointer' onClick={onPrevClick}>Prev</div>
      <div>{pageNumber}</div>
      <div className='cursor-pointer' onClick={onNextClick}>Next</div>
    </div>
  )
} 
