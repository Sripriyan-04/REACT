// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../sections/css/work.css'
import{BiCheck} from 'react-icons/bi'

const Work = () => {
  return (
    <section id='services'>
      <h5> Projects Finished</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
          <p>Lorem ipsum, dolor sit amet consector</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
          <p>Lorem ipsum, dolor sit amet consector</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
          <p>Lorem ipsum, dolor sit amet consector</p>
            </li>
          </ul>

        </article>
       {/*END OF UI/UX */}  

       <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
          <p>Lorem ipsum, dolor sit amet consector</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
          <p>Lorem ipsum, dolor sit amet consector</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
          <p>Lorem ipsum, dolor sit amet consector</p>
            </li>
          </ul>

        </article>
       {/*END OF WEB DEVELOPEMENT */} 
      </div>
    </section>
  )
}

export default Work
