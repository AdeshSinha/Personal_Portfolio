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
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services__head'>
            <h3>Web Devlopement</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services__head'>
            <h3>Arduino</h3>
          </div>

          <ul className='services__list'>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icons'/>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
            </li>
          </ul>
        </article>
      </div>
      

    </section>
  )
}

export default services