import React from 'react'
import './about.css'
import ME from '../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <img src={ME} alt="About Image" />

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Graduation</h5>
              <small>BE <br></br>Electrical and Electronics Engineering</small>
            </article>

            <article className='about__card'>
              <SiBookstack className='about__icon'/>
              <h5>Semister</h5>
              <small>Pre-final year<br></br>Current CGPA : 8.09</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Web Devlopement<br></br>Arduino<br></br>Photoshop </small>
            </article>
          </div>

          <p>
            An engineering student seeking opportunity to have a good start in
            the field , keen to learn new technical and non-technical skills . In
            search to pursue a technical career in a progressive organization
            that gives me scope to enhance my knowledge and abilities.

          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>


    </section>
  )
}

export default About