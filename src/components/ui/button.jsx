import React from 'react'

export default function YellowButton({ name = '', children }) {
  return (
    <button type='button' className='bg-[#facc42] shadow-md text-[#2a3572] text-center px-3 py-2 rounded-xs text-[1em] md:text-[1.12em] font-medium transition hover:bg-[#ffd75e]'>
      {children ?? name}
    </button>
  )
}
