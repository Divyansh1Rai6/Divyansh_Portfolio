import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sides/Navbar'
import Footer from './sides/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : (
        <>
        <Navbar />
        <main className='pt-16'>
        <Outlet />
        </main>
        <Footer />
        </>
      ),
      children : [
          {index: true, element: <Home />},
          {path : '/about', element: <About />},
          {path :'/contact', element: <Contact />},
          {path : '/project', element: <Projects />},
          {path :'/skill', element :<Skills />},
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
