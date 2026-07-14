import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import HowItWorks from './components/HowItWorks'
import OurValuesSection from './components/OurValuesSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <OurServices/>
    <HowItWorks/>
    <OurValuesSection/>
    <Footer/>
    </>
  )
}

export default App