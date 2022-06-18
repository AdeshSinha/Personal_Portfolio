import React from 'react'
import './fotter.css'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const fotter = () => {
  return (
    <fotter>
      <a href='#' className='footer__logo'>   </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com' target='_blank'><FiInstagram/></a>
        <a href='https://twitter.com' target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AdeshSinha. All rights reserved.</small>
      </div>
    </fotter>
  )
}


export default fotter