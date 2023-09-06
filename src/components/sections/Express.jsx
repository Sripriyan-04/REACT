// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../sections/css/experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'
const Express = () => {
  return (
    <section id='experience'>
      <h5>MY SKILLS</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
           </div>
            </article>
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
           <small className='text-light'>Intermediate</small>
           </div>
            </article>
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>REACT</h4>
           <small className='text-light'>Intermediate</small>
          </div>
            </article>
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon' />
           <div>
           <h4>UI/UX DESIGNER</h4>
           <small className='text-light'>Experienced</small>
           </div>
            </article>
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>TAILWIND</h4>
           <small className='text-light'>Beginer</small>
           </div>
            </article>
           
          </div>
        </div> 
        {/* END OF FRONTEND */}

        <div className="experience__backend">
       
        <h3> Backend Developement</h3>
          <div className="experience__content">
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>JAVASCRIPT</h4>
           <small className='text-light'>Beginer</small>
           </div>
            </article>
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MySQL</h4>
           <small className='text-light'>Beginer</small>
           </div>
            </article>
            < article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>NodeJS</h4>
           <small className='text-light'>Beginer</small>
           </div>
            </article>
          
           
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Express
