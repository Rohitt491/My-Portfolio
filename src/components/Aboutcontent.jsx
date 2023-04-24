import React from 'react'
import { Link } from 'react-router-dom'

const Aboutcontent = () => {
  return (
    <div className='about-main'>
    <div className='left'>
        <h1>Who Am I?</h1>
        <p>Im a react Developer. I create responsive and secure websites.</p>
        <Link to="images/resume 22.04.pdf" target='blank' download='Rohit godara resume'>
          <button  className='butn'>RESUME</button>  </Link>
    </div>
    <div className="right">
        <div className="img-box">
            <div className="img1">
                <img src="/images/about1.png" className='img' alt="image"/>
            </div>

            <div className="img2">
                <img src="/images/about2.png" className='img' alt="image"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutcontent