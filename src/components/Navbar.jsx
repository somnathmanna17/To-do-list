import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gradient-to-r from-teal-500 to-violet-500 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-9 bg-gradient-to-r from-neutral-700 to-red-500 bg-clip-text text-transparent'>Awesome Task</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
