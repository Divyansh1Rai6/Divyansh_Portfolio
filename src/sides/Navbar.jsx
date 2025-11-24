import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Menu, X} from 'lucide-react'
const Navbar = () => {
  const [mobileOpen, setmobileOpen] = useState(false)
  return (
    <header className='fixed top-0 z-50 w-full border-b border-gray-400 bg-blue-950/50'>
      <div className='max-w-7xl px-1 md:px-6'>
        <div className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
          <h1 className='font-bold text-2xl text-white'>Portfolio</h1>
        </div>
        <nav className='hidden md:flex'>
          <ul className='flex items-center justify-center font-medium text-xl'>
            <li><Link to='/' className='text-gray-200 px-4 py-2 hover:bg-gray-700 transition rounded-lg'>Home</Link></li>
            <li><Link to='/about'className='text-gray-200 px-4 py-2 hover:bg-gray-700 transition rounded-lg'>About</Link></li>
            <li><Link to='/skill' className='text-gray-200 px-4 py-2 hover:bg-gray-700 transition rounded-lg'>Skills</Link></li>
            <li><Link to='/project' className='text-gray-200 px-4 py-2 hover:bg-gray-700 transition rounded-lg'>Projects</Link></li>
            <li><Link to='/contact' className='text-gray-200 px-4 py-2 hover:bg-gray-700 transition rounded-lg'>Contact</Link></li>
          </ul>
        </nav>
        <button onClick={() => setmobileOpen(!mobileOpen)}  className='relative md:hidden text-gray-200'>{mobileOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}</button>
      </div>
      <nav className={`md:hidden w-screen border-t backdrop-blur-sm border-gray-400 transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <ul className='flex flex-col space-y-4 px-4'>
          <li><Link to='/' className='font-bold text-gray-200 hover:text-gray-500'>Home</Link></li>
          <li><Link to='/about' className='font-bold text-gray-200 hover:text-gray-500'>About</Link></li>
          <li><Link to='/skill' className='font-bold text-gray-200 hover:text-gray-500'>Skills</Link></li>
          <li><Link to='/project' className='font-bold text-gray-200 hover:text-gray-500'>Projects</Link></li>
          <li><Link to='/contact' className='font-bold text-gray-200 hover:text-gray-500'>Contact</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Navbar