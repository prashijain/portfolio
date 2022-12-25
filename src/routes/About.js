import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
         <Navbar />
         <CenterImg heading ="About" text = "I am a Full Stack Developer"/>
        <AboutContent />
        <Footer/>
        </div>
  )
}

export default About