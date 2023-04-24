import React from 'react'
import { Link } from 'react-router-dom'

const Heroimage = () => {
    return (
        <div className='image-main'>

            <div className='mask'>
                <img className='bg-img' src="images/bg-img2.jpeg" alt="image" />
            </div>

          

                <div className='content'>
                    <p>HI, I'M A ROHIT GODARA</p>
                    <h1>React Developer</h1>

                <div className='butn-div'>
                <Link to="projects" className='butn'>Projects</Link>
                <Link to="images/resume 22.04.pdf" target='blank' download='Rohit godara resume' className='butn-light'>RESUME</Link>
                </div>    
                </div>
            
               

                

           
        </div>
    )
}

export default Heroimage