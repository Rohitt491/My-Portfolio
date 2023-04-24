import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Heroimage2 from '../components/Heroimage2'
import Aboutcontent from '../components/Aboutcontent'
const About = () => {
  return (
    <div>
 <Header/>
    <Heroimage2 heading='ABOUT' text="React Developer"/>
    <Aboutcontent/>
   <Footer/>
    </div>
  )
}

export default About