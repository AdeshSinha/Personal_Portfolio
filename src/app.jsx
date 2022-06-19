import React from 'react'
import Headder from './Headder/headder.jsx'
import Nav from './Nav/nav.jsx'
import About from './About/About.jsx'
import Experience from './Experience/experience.jsx'
import Services from './Services/services.jsx'
import Portfolio from './Portfolio/portfolio.jsx'
import Contact from './Contact/contact.jsx'
import Fotter from './Fotter/fotter.jsx'

const app = () => {
  return (
    <div>
      <Headder />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Fotter />

    </div>
  )
}

export default app
