import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {

  const navItems=[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"About",
      link:"/"
    },
    {
      name:"Universities",
      link:"/"
    },
    {
      name:"Career",
      link:"/h"
    },
    {
      name:"Contact Us",
      link:"/h"
    }
  ]
  return (
    <header className="relative z-50 w-full bg-[#ffffff] shadow-md shadow-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <p className='text-2xl font-semibold text-[#2a3572]'>Logoo</p>
        <div className='hidden md:flex items-center justify-end gap-6 rounded-4xl bg-[#2a3572] px-6 py-4 text-white shadow-lg lg:gap-8'>
          {
            navItems.map((item)=>(
              <Link 
                key={item.name} 
                to={item.link}
                className='text-sm font-medium text-white/90 transition hover:text-[#facc42]'
                >
                  {item.name}
              </Link>
            ))
          }
          <p className='rounded-full bg-[#facc42] px-4 py-2 text-sm font-semibold text-[#2a3572] transition hover:bg-[#ffd75e]'>
            Suggest me a University
          </p>
        </div>
      </div>
    </header>
  )
}
