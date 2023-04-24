import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Heroimage2 from '../components/Heroimage2'
import Projectcard from '../components/Projectcard'

const Projects = (props) => {
  return (
   <div>
    <Header/>
    <Heroimage2 heading='PROJECTS' text="Some of my recent works"/>
    <Projectcard/>
   <Footer/>
   </div>
  )
}

export default Projects