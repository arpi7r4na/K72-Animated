import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center border-white rounded-2xl px-10 uppercase '>
        <Link className='text-[6vw] mt-3' to='/projects'>Projets</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center border-white rounded-2xl px-10 uppercase '>
        <Link className='text-[6vw] mt-3' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText