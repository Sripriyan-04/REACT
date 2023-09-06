// eslint-disable-next-line no-unused-vars
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
import '../sections/css/header.css'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello Iam </h5>
      <h1>SRIPRIYAN</h1>
      <h5 className="text-light">Frontend Developer</h5>
     <CTA />
     <HeaderSocials />
     <div className="me">
      <img src={ME} alt="me" />
     </div>
     <a href="#contact" className='scroll__down'>Scroll Down</a>

 </div>
   </header>
  )
}

export default Header
