import React from 'react'
import { Code2, Palette, Rocket } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
const About = () => {
  const location = useLocation()

  useEffect(() => {
    if(location.state?.section) {
      const section = document.getElementById(location.state.section)
      section?.scrollIntoView({behavior:"smooth"})
    }
  }, [location])
  return (
    <div id='about' className='max-w-7xl mx-auto p-6 md:p-12 animate-smooth'>
      <h1 className='text-center text-blue-500 text-2xl font-bold'>About Me</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
        <div className='mt-10'>
          <h3 className='text-white mb-10'>Web Developer & Problem Solver</h3>
          <p className='text-gray-300'>As a Passionate web developer with expertise in modern frontend technologies, I transform ideas into engaging digital experiences. My journey in web development has equipped me with a deep understanding of both client-side and server-side technologies, allowing me to build complete, production-ready applications.</p>
          <p className='text-gray-300 mt-7'>I specialize in React ecosystem, responsive design, and performance optimization. I'm committed to writing clean, maintainable code and staying current with the latest web development trends. When I'm not coding, I enjoy contributing to open-source projects and helping other developers in the community.</p>
          <div className='flex mt-5 justify-center items-center'>
          <a href='/DivyanshResume.pdf' className='bg-blue-600 rounded-lg text-white text-center px-7 py-2 md:px-10 md:py-3 cursor-pointer'>Download Resume</a>      
          </div>
         
        </div>
        <div className='mt-10'>
          <div className='grid grid-cols-1 gap-7'>
            <div className='border border-gray-400 rounded-lg px-5 py-3 md:px-10 md:py-5'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 p-2 bg-blue-900 rounded-lg'>
                  <Code2 size={42} className='text-blue-400' />

                </div>
                <div className='flex flex-col'>
                  <h2 className='text-white text-lg'>Modern Web Apps</h2>
                  <p className='text-gray-300'>Building scalable web applications using React, Javascript and modern frameworks.</p>
                </div>
              </div>
            </div>
            <div className='border border-gray-400 rounded-lg px-5 py-3 md:px-10 md:py-5'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 bg-blue-900 p-2 rounded-lg'>
                  <Palette size={42} className='text-blue-400' />
                </div>
                <div className='flex flex-col'>
                  <h2 className='text-white text-lg'>Responsive Design</h2>
                  <p className='text-gray-300'>Creating pixel-perfect, mobile-first designs that work seamlessly across all devices.</p>
                </div>
              </div>
            </div>
            <div className='border border-gray-400 rounded-lg px-5 py-3 md:px-10 md:py-5'>
              <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 bg-blue-900 p-2 rounded-lg'>
                      <Rocket size={42}  className='text-blue-400'/>
                  </div>
                  <div className='flex flex-col'>
                      <h2 className='text-white text-lg'>Performance Optimized</h2>
                      <p className='text-gray-300'>Delivering lightning-fast web experiences with optimal loading times and smooth interactions.</p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About