import React from 'react'
import { FaGithub, FaHome, FaMailBulk, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">

                <div className='left'>
                    <div className='loaction'>
                        <h4>
                            <FaHome size={20} style={{ color: 'white', marginRight: '20px' }} />
                            Sector 22, Noida
                        </h4>
                    </div>
                    {/* <div className='adress'>
                    <p>Sector 22</p>
                    <p>Noida</p>
                </div> */}
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: 'white', marginRight: '20px' }} />
                            <a href="tel:+917710740056" style={{ textDecoration: 'none', color: 'white' }}>7710740056</a>
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaMailBulk size={20} style={{ color: 'white', marginRight: '20px' }} />
                            <a href="mailto:rohtigodara491@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>rohitgodara491@gmail.com</a>
                        </h4>
                    </div>
                </div>


                <div className='right'>
                    <h4>About Me</h4>
                    <p>Hi, I'm rohit godara. I'm fresher and an aspiring react developer eager to learn and show my skills. i have a good command on HTML, CSS, javascript, bootstrap and React js technologies.</p>
                    <div className='social-icons'>
                        <Link to='https://github.com/Rohitt491' target='blank'>
                        <FaGithub size={30}
                         style={{ color: 'white', marginRight: "10px" }} />
                        </Link>

                        <Link to='https://www.linkedin.com/in/rohit-godara-16555321a/' target='blank'>
                        <FaLinkedin size={30}style={{ color: 'white', marginRight: "10px" }} />
                        </Link>
                        
                        <Link to='https://wa.me/+917710740056' target='blank'>
                        <FaWhatsapp size={30}
                            style={{ color: 'white', marginRight: "10px" }} />

                        </Link>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer