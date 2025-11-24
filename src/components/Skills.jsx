import React from 'react'

const Skills = () => {
  return (
    <div className='max-w-7xl mx-auto p-6 md:p-12 animate-smooth'>
      <h1 className='text-2xl text-blue-500 text-center'>Skills & Expertise</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-3 py-1 md:px-5 md:py-3 mt-5'>
          <div className='border border-gray-400 rounded-xl'>
              <div className='flex justify-center p-2 mt-2 items-center'>
                  <h3 className='text-center text-white text-xl'>Frontend Development</h3>
                  </div>
                  <div className='grid grid-cols-1'> 
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                        <h4 className='text-gray-300'>React & Node.js</h4>
                        <p className='text-blue-500'>95%</p>
                        </div>
                        <div className='mb-5'>
                        <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                        </div>
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                        <h4 className='text-gray-300'>Javascript</h4>
                        <p className='text-blue-500'>90%</p>
                      </div>
                      <div className='mb-5'>
                        <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                      </div>
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                          <h4 className='text-gray-300'>HTML5 & CSS3</h4>
                          <p className='text-blue-500'>95%</p>
                      </div>
                      <div className='mb-5'>
                          <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                      </div>
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                          <h4 className='text-gray-300'>Tailwind CSS</h4>
                          <p className='text-blue-500'>90%</p>
                      </div>
                      <div className='mb-5'>
                          <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                      </div>
                  </div>
              
          </div>
          <div className='border border-gray-400 rounded-xl'>
              <div className='flex justify-center p-2 mt-2 items-center'>
                  <h3 className='text-center text-white text-xl'>Tools & Workflow</h3>
                  </div>
                  <div className='grid grid-cols-1'> 
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                        <h4 className='text-gray-300'>Git & GitHub</h4>
                        <p className='text-blue-500'>90%</p>
                        </div>
                        <div className='mb-5'>
                        <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                        </div>
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                        <h4 className='text-gray-300'>Webpack/Vite</h4>
                        <p className='text-blue-500'>80%</p>
                      </div>
                      <div className='mb-5'>
                        <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                      </div>
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                          <h4 className='text-gray-300'>Responsive Design</h4>
                          <p className='text-blue-500'>95%</p>
                      </div>
                      <div className='mb-5'>
                          <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                      </div>
                      <div className='flex px-4 py-2 md:px-8 md:py-4 justify-between'>
                          <h4 className='text-gray-300'>Performance Optimization</h4>
                          <p className='text-blue-500'>85%</p>
                      </div>
                      <div className='mb-5'>
                          <hr className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 p-1 mx-3 md:mx-6 rounded-lg'></hr>
                      </div>
                  </div>
          </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'> 
          <h3 className='text-gray-300 text-xl text-center'>Also experienced with</h3>
          <div className=' mt-5 flex flex-wrap justify-center gap-3 md:gap-5'>
            <span className='border border-gray-400 rounded-2xl p-2 md:p-3 text-white'>Java</span>
            <span className='border border-gray-400 rounded-2xl p-2 md:p-3 text-white'>C</span>
            <span className='border border-gray-400 rounded-2xl p-2 md:p-3 text-white'>Figma</span>
            <span className='border border-gray-400 rounded-2xl p-2 md:p-3 text-white'>Accessibility (A11y)</span>
            <span className='border border-gray-400 rounded-2xl p-2 md:p-3 text-white'>SEO</span>
            <span className='border border-gray-400 rounded-2xl p-2 md:p-3 text-white'>Visual Studio Code (VS Code)</span>
          </div>
      </div>
    </div>
  )
}

export default Skills