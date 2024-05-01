import React from 'react'
import SearchIcon from '~/assets/icons/magnifying-glass.svg'

export default function HeaderSearch({className}) {
  return (
    <div className={`flex items-center justify-center bg-white ${className}`}>
        <img className='w-7 h-7 p-1 ' src={SearchIcon} alt=''/>
        <input className='w-[160px] outline-none bg-transparent' type='text' placeholder='Tìm kiếm' />
    </div>
  )
}
