import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const pageLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Universities', link: '/' },
    { name: 'Career', link: '/h' },
    { name: 'Contact Us', link: '/h' },
  ]

  return (
    <footer className="bg-[#1a2250] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <p className="text-2xl font-semibold">Nextgen</p>
          <p className="max-w-sm text-sm leading-6 text-white/80">
            Find the right university, course, and mentor with guided support for your study journey.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Pages</h3>
          <ul className="space-y-3 text-sm text-white/80">
            {pageLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.link} className="transition hover:text-[#facc42]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Location</h3>
          <div className="space-y-3 text-sm leading-6 text-white/80">
            <p>Nextgen Education Hub</p>
            <p>2nd Floor, Tech Park Road</p>
            <p>Bengaluru, Karnataka, India</p>
            <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/70 sm:px-6 lg:px-8">
        © 2026 Nextgen. All rights reserved.
      </div>
    </footer>
  )
}
