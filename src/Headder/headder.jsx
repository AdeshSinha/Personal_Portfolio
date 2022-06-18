import React from 'react';
import './headder.css';
import CV from '../assets/cv.pdf'
import ME from '../assets/me.png' 
import HeaderSocials from './HeaderSocials';

const headder = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h5>Hello I'm</h5>
        <h1>Adesh Sinha</h1>
        <h5 className='text-light'>Web Developer </h5>
        
        <div className='cv'>

          <a href={CV} download className='btn'>Download Resume</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
        <HeaderSocials/>
        
        <div className="me">
           <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
     
    </header>
    
  )
}

export default headder




