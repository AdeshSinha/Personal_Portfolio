import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function refreshPage() {
  window.location.reload(false);
}

function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhxw7lh', 'template_5m2zyfe', e.target, 'TOkPo7a81K8hpCnXM');
    alert('Message Sent');
    e.target.rest();
      
      
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>adesh.1si19ee003@gmail.com</h5>
            <a href='mailto:adesh.1si19ee003@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icons'/>
            <h4>Whatsapp</h4>
            <h5>+91-8987678182</h5>
            <a href='https://wa.me/+918987678182' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='Name' placeholder='Your Full Name' required />
          <input type='email' name='Email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={refreshPage} >Send Message</button>

        </form>
      
      </div>

    </section>
  )
}

export default contact