import React from 'react'
import{Button} from './Button';
import './HeroSection.css';
import '../App.css';
import bg from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-conntainer'>
    <video className='background-video' autoPlay loop muted>
    <source  
      src={bg}
      type="video/mp4"
    />
   
  </video>
        
       <div className='Adventure'>
       <h1>ADVENTURE AWAITS</h1>
       <p>What are you waiting for? </p>
       <div className='hero-btn'>
           <Button className="btns" buttonStyle='btn--outline'
           buttonSize='btn--large'>GET STARTED</Button>

           <Button className="btns" buttonStyle='btn--primary'
           buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/></Button>
       </div>

       </div> 


    </div>
  )
}

export default HeroSection