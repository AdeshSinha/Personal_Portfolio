import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I did</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className='services__head'>
            <h3>Photoshop</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Poster:<br></br>Quiz Poster</p> 
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Poster:<br></br>Welcome Freshers Poster</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Magazine:<br></br>LiveWire Magazine</p>
            </li>
            <a href='#about' target='__blank'>Samples</a>
          </ul>
        </article>

        <article className='services'>
          <div className='services__head'>
            <h3>Web Devlopement</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>A personal portfolio website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>A teacher student interaction portal.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>A quiz website.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services__head'>
            <h3>Arduino and Related Projects</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Line following robot.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Bluetooth controlled bot.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>DPDT switch based all train bot.</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Battery Monitoring System.</p>
            </li>
          </ul>
        </article>
      </div>
      

    </section>
  )
}

export default services