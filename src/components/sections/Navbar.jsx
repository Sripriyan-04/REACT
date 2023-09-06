// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../sections/css/navbar.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'


const Navbar = () => {
  const[activeNavbar, setactiveNavbar] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setactiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setactiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setactiveNavbar('#experience')} className={activeNavbar === '#experience' ? 'active' : ''}>< BiBook/></a>
      <a href="#services" onClick={() => setactiveNavbar('#services')} className={activeNavbar === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setactiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar
