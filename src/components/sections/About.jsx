// eslint-disable-next-line no-unused-vars
import React from 'react'
import './css/about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image"/>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years Learning</small>
      </article>

      <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>lets start</small>

          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>1+ completed</small>

          </article>
        </div>

        <p>
          I Am Sripriyan , And now Iam Pursuing B.tech-Information Technology third year at Paavai Enginnering College. 
        </p>

        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About