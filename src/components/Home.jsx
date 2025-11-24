import React from 'react'
import {ChevronDown} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='max-w-7xl mx-auto px-4 py-10 md:px-12 md:py-20 animate-smooth'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-40 px-6 md:px-16'>
          <div className='relative w-40 h-40 md:w-48 md:h-48 rounded-full md:mt-16'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-70 animate-pulse'></div>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg  animate-spin-slow'></div>
              <img src='/Divyansh.jpg' className='relative rounded-full w-full h-full object-cover border-4 border-slate-900'></img>
          </div>
          <div className='flex flex-col gap-5 md:gap-3 text-center md:text-left'>
        <span className='text-blue-400 text-xl'>Hello I am</span>
        <h1 className='text-white text-3xl'>Divyansh Rai</h1>
        <p className='text-md text-gray-200'>Web Developer | Frontend Specialist | UI/UX Enthusiast</p>
        <p className='text-gray-400'>Crafting responsive, performant and accessible web applications with modern technologies.</p>
        <p className='text-gray-400'>Passionate about clean code, user experience and bringing ideas to life through the web.</p>
        <div className='flex flex-col md:flex-row gap-4 sm:gap-7 mt-4'>
          <Link to='/project'><button className='px-5 py-3 bg-blue-700 rounded-lg text-white'>View My Work</button></Link>
          <Link to='/contact'><button className='px-5 py-3 bg-transparent rounded-lg text-white border border-gray-300'>Get In Touch</button></Link>
        </div>
      </div>
      </div>
      <div className='flex justify-center'>
        <button onClick={() => {navigate("/about", {state:{section:"about"}})}}>
      <ChevronDown size={42} className='text-white animate-bounce mt-20' />
      </button>
      </div>
    </div>
  )
}

export default Home