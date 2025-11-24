import React from 'react'
import {SquareArrowOutUpRight} from 'lucide-react'
import { Github } from 'lucide-react'
const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto p-6 md:p-12 animate-smooth'>
        <h1 className='text-blue-500 text-center text-2xl'>Featured Projects</h1>
        <h3 className='text-gray-300 text-center mt-7'>Here are some of my recents projects that showcase my skills and experience</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 md:gap-20'>
          <div className='w-full border border-blue-400 rounded-xl bg-slate-800'>
              <div className='flex h-48 items-center justify-center rounded-t-xl'>
                  <img src='/weather.jpeg' className='h-full w-full object-cover rounded-xl'></img>
              </div>
              <div className='p-4 md:p-6'> 
                  <h3 className='text-2xl text-gray-200'>Weather Applications</h3>
                  <p className='text-gray-300'>Clean weather app with location-based forecasts, hourly predictions and weather alerts.</p>
                  <div className='flex flex-wrap gap-3 md:gap-5 mt-4'>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>React</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Tailwind CSS</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>OpenWeather API</
                      span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Open-Meteo Geocoding API</span>
                      <div className='flex gap-3 md:gap-5 text-center mt-5'>
                          <a href='https://weather-app-three-omega-72.vercel.app/' className='bg-blue-500 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white cursor-pointer'><SquareArrowOutUpRight size={22} /> Demo</a>
                          <a href='https://github.com/Divyansh1Rai6/Weather-app' className='bg-gray-500/25 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white cursor-pointer'><Github size={22} />Code</a>
                      </div>
                  </div>
              </div>
          </div>
           
          <div className='w-full border border-blue-400 rounded-xl bg-slate-800'>
              <div className='flex h-48 items-center justify-center rounded-t-xl'>
                  <img src='/blog.jpeg' className='h-full w-full object-cover rounded-xl'></img>
              </div>
              <div className='p-4 md:p-6'> 
                  <h3 className='text-2xl text-gray-200'>Blogg Application</h3>
                  <p className='text-gray-300'>A fast, responsive blog application built for content creators, featuring user authentication, Tiptap rich editing and robust search capabilities.</p>
                  <div className='flex flex-wrap gap-3 md:gap-5 mt-4'>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>React</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Tailwind CSS</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Tiptap Editor</
                      span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Prose Mirror</span>
                      <div className='flex gap-3 md:gap-5 text-center mt-5'>
                          <a href='https://blog-app-seven-topaz.vercel.app/' className='bg-blue-500 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white cursor-pointer'><SquareArrowOutUpRight size={22} /> Demo</a>
                          <a href='https://github.com/Divyansh1Rai6/Blog-app' className='bg-gray-500/25 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white cursor-pointer'><Github size={22} />Code</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='w-full border border-blue-400 rounded-xl bg-slate-800'>
              <div className='flex h-48 items-center justify-center rounded-t-xl'>
                  <img src='/quiz.jpeg' className='h-full w-full object-cover rounded-xl'></img>
              </div>
              <div className='p-4 md:p-6'> 
                  <h3 className='text-2xl text-gray-200'>Quiz Game</h3>
                  <p className='text-gray-300'>A fast score tracking quiz application built with vanilla JavaScript. It features question-shuffling, instant feedback and high-score persistance using the browser's Local Storage.</p>
                  <div className='flex flex-wrap gap-3 md:gap-5 mt-4'>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>HTML</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>CSS</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>JavaScript</
                      span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Local Storage</span>
                      <div className='flex gap-3 md:gap-5 text-center mt-5'>
                          <a href='https://quiz-game-seven-sepia.vercel.app/' className='bg-blue-500 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white'><SquareArrowOutUpRight size={22} /> Demo</a>
                          <a href='https://github.com/Divyansh1Rai6/QuizGame' className='bg-gray-500/25 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white'><Github size={22} />Code</a>
                      </div>
                  </div>
              </div>
          </div> 
          <div className='w-full border border-blue-400 rounded-xl bg-slate-800'>
              <div className='flex h-48 items-center justify-center rounded-t-xl'>
                  <img src='/port.jpeg' className='h-full w-full object-cover rounded-xl'></img>
              </div>
              <div className='p-4 md:p-6'> 
                  <h3 className='text-2xl text-gray-200'>Personal Portfolio</h3>
                  <p className='text-gray-300'>A website that showcase my skills and projects. Here you get live Demo links of my projects and contact Information.</p>
                  <div className='flex flex-wrap gap-3 md:gap-5 mt-4'>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>React</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Tailwind CSS</span>
                      <span className='rounded-full bg-blue-700/50 text-blue-300 px-3 py-1'>Lucide-react</
                      span>
                      <div className='flex gap-3 md:gap-5 text-center mt-5'>
                          <a href='https://tourmaline-marzipan-a4dc1e.netlify.app/' className='bg-blue-500 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white cursor-pointer'><SquareArrowOutUpRight size={22} /> Demo</a>
                          <a href='https://github.com/Divyansh1Rai6/Divyansh_Portfolio' className='bg-gray-500/25 gap-2 flex justify-center items-center px-3 py-2 md:px-6 md:py-3 rounded-xl text-white cursor-pointer'><Github size={22} />Code</a>
                      </div>
                  </div>
              </div>
          </div>     
        </div>
    </div>
  )
}

export default Projects