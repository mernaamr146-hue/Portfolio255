import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Preloader from './components/Preloader'

export default function App() {
  return (
    <>
    <div>
      <Preloader></Preloader>
      <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>

    </div>
    </>
  )
}
