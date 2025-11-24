import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react'
const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto p-6 md:p-12 animate-smooth'>
      <h1 className='text-blue-500 text-center text-2xl'>Get In Touch</h1>
      <p className='mt-10 text-gray-200 text-center'>Have a project in mind? Let's work together to create something amazing</p>
      <div className='flex flex-col'>
        <div className='mt-10'>
          <h3 className='text-gray-300 text-center text-xl'>Let's Connect</h3>
          <p className='text-gray-300 text-center mt-7'>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12'>
            <div className='flex items-center gap-5'>
              <div className='bg-blue-800/50 rounded-xl p-4'>
                <Mail size={22} className='text-white' />
              </div>
              <div className='flex flex-col'>
                <h4 className='text-gray-400 text-xl'>Email</h4>
                <p className='text-white'>divyansh16rai@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div className='bg-blue-800/50 rounded-xl p-4'>
                <Phone size={22} className='text-white' />
              </div>
              <div className='flex flex-col'>
                <h4 className='text-gray-400 text-xl'>Phone</h4>
                <p className='text-white'>+91 8853166408</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div className='bg-blue-800/50 rounded-xl p-4'>
                <MapPin size={22} className='text-white' />
              </div>
              <div className='flex flex-col'>
                <h4 className='text-gray-400 text-xl'>Location</h4>
                <p className='text-white'>Prayagraj, Uttar Pradesh</p>
              </div>
            </div>
          </div>
          <h3 className='text-gray-300 text-xl mt-10 text-center'>Follow me on</h3>
          <div className='flex gap-10 mt-10 justify-center items-center'>
              <div className='bg-blue-800/50 rounded-xl flex'>
                <a href='https://github.com/Divyansh1Rai6' className='p-5'><Github size={22} className='text-white' /></a>
              </div>
              <div className='bg-blue-800/50 rounded-xl flex'>
                <a href='https://www.linkedin.com/in/divyansh-rai-716562302' className='p-5'><Linkedin size={22} className='text-white' /></a>
              </div>
              <div className='bg-blue-800/50 rounded-xl flex'>
                <a href='https://www.instagram.com/divyanshrai_1_6/' className='p-5'><Instagram size={22} className='text-white' /></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact