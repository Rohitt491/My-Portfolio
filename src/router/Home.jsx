import React from 'react'
import Header from '../components/Header.jsx'
import Heroimage from '../components/Heroimage.jsx'
import Footer from '../components/Footer.jsx'
import Projectcard from '../components/Projectcard.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <Heroimage/>
        <Projectcard/>
        <Footer/>

    </div>
  )
}

export default Home