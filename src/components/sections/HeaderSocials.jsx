// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sripriyan-csri-373480260/"><BsLinkedin/></a>
        <a href="https://github.com/Sripriyan-04"><BsGithub/></a>
        <a href="https://www.instagram.com/rmc__sri"><BsInstagram/></a>
        <a href="http://facebook.com/ csripriyan.sripriyan"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
