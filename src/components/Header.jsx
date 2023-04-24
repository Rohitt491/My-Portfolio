import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
const Header = () => {

  const[Click,Setclick] = useState(false);
  const [color, Setcolor] = useState(false);

  const handleClick = () => Setclick(!Click); 
  
  const Changecolor = () => {
    if (window.scrollY >= 100){
        Setcolor(true);
    }else {
        Setcolor(false);
    }

    window.addEventListener("scroll",Changecolor);

  }

    return (
        <div className={color ? "nav nav-bg" : "nav"}>
            <Link to='/'>
                <h1>Portfolio</h1>
            </Link>

            <div className={Click ? "nav-menu active" : "nav-menu"}>
                <Link to='/'>
                    <h4>Home</h4>
                </Link>
                <Link to='/projects'>
                    <h4>Project</h4>
                </Link>
                <Link to='/about'>
                    <h4>About</h4>
                </Link>
               
            </div>
            <div className='hamburger' onClick={handleClick}>
                {Click ? (<FaTimes size={20} />) : (<FaBars size={20} />)}
            </div>
        </div>
    )
}

export default Header