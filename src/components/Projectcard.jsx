import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Projectcard = () => {
  return (
    <div className='p-main'>
   <h1 className="heading">Projects</h1>
   <div className="container">

    {/* weather app */}
   <div className="pcard "> 
        <img  src="/images/project6.png" alt="img" />
        <h2 className='p-title'>WEATHER APP</h2>
         <div className="p-detail p-detail1">
            <p>Fully dynamic weather app made using Redux, contextapi, API and useState.fucntions like dynamic icons, temp, date and time with weekdays.</p>
         </div>
            <div className="p-butn dflex">
            <NavLink to='https://weather-app-rohit12.netlify.app/' target='blank' className='butn'>VIEW</NavLink>
            <NavLink to='https://github.com/Rohitt491/weather-app-react' target='blank' className='butn'>GITHUB</NavLink>
            </div>
    </div>

    {/* music player */}
    <div className="pcard">
        <img src="/images/project1.png" alt="img" />
        <h2 className='p-title'>MUSIC PLAYER</h2>
         <div className="p-detail p-detail1">
         <p>My own music player created with the elp of javascript, HTML and CSS with all the functionality like play-pause, next track-back track, volume control bar and a fully functional song time bar.</p>
         </div>
            <div className="p-butn dflex">
            <NavLink to='https://music-player515.netlify.app/' target='blank' className='butn'>VIEW</NavLink>
            <NavLink to='https://github.com/Rohitt491/Music-palyer-JS' target='blank' className='butn'>GITHUB</NavLink>
            </div>
    </div>


     {/* fb login */}
    <div className="pcard">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"alt="img" />
        <h2 className='p-title'>DEMO FACEBOOK LOGIN</h2>
         <div className="p-detail p-detail1">
            <p>It is a demo site of the whole process of login, signup, OTP auth and forget password part of facebook. dynamic site with authentication. login id. "rohitgodara@gmail.com" and paswrd is 'amazon" and the otp is "0000"</p>
         </div>
            <div className="p-butn dflex">
            <NavLink to='https://demo-fblogin-pages.netlify.app/' target='blank' className='butn'>VIEW</NavLink>
            <NavLink to='https://github.com/Rohitt491/Demo-facebook-login' target='blank' className='butn'>GITHUB</NavLink>
            </div>
    </div>


     {/* dictionary app */}
    <div className="pcard">
        <img  src="/images/project2.png" alt="img" />
        <h2 className='p-title'>DICTIONARY APP</h2>
         <div className="p-detail p-detail1">
            <p>online dictionary created in react using a public API and mapping it to get every disreable data from it.</p>
         </div>
            <div className="p-butn dflex">
            <NavLink to='https://dictionary-online.netlify.app/' target='blank' className='butn'>VIEW</NavLink>
            <NavLink to='https://github.com/Rohitt491/DIctionary-app' target='blank' className='butn'>GITHUB</NavLink>
            </div>
    </div>


   {/* countdown app */}
    <div className="pcard">
        <img  src="/images/project4.png" alt="img" />
        <h2 className='p-title'>COUNTDOWN TIMER</h2>
         <div className="p-detail p-detail1">
            <p>It is a minor JS project made using steUp function which increase the number and with javascript i created the functionality of inc and dec the time of timer.</p>
         </div>
            <div className="p-butn dflex">
            <NavLink to='https://random-quote-generator12.netlify.app/' target='blank' className='butn'>VIEW</NavLink>
            <NavLink to='https://github.com/Rohitt491/Random-quote-generator' target='blank' className='butn'>GITHUB</NavLink>
            </div>
    </div>


     {/* todo app */}
    <div className="pcard">
        <img  src="/images/project5.png" alt="img" />
        <h2 className='p-title'>TODO APP</h2>
         <div className="p-detail p-detail1">
            <p>A todo app with edit, delete and remove all function. every time you do any operation you will be automatically get redirected to the input filed where you would another task to do.</p>
         </div>
            <div className="p-butn dflex">
            <NavLink to='https://my-todo-app12.netlify.app/' target='blank' className='butn'>VIEW</NavLink>
            <NavLink to='https://github.com/Rohitt491/todo-app' target='blank' className='butn'>GITHUB</NavLink>
            </div>
    </div>

   </div>
    </div>
  )
}

export default Projectcard