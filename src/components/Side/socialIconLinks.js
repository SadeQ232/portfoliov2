import React from "react"
import {FaFacebook,FaTwitter,FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'

const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/SadeQ232" target="_blank" rel="noopener noreferrer">
        <FaGithub height={'31.665px'} width={'31.665px'} className={iconClasses}/>
        </a>
      <a href="https://www.linkedin.com/in/septian-librianto-355b6a241/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin height={'31.665px'} width={'31.665px'} className={iconClasses}/>
      </a>
      {/* <a href="https://twitter.com/_hari_bhandari" target="_blank" rel="noopener noreferrer">
        <FaTwitter height={'31.665px'} width={'31.665px'} className={iconClasses}/>
      </a> */}
      <a href="https://instagram.com/septianlibrianto?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
        <FaInstagram height={'31.665px'} width={'31.665px'} className={iconClasses}/>
      </a>
      <a href="https://www.facebook.com/septian.librianto/" target="_blank" rel="noopener noreferrer">
        <FaFacebook height={'31.665px'} width={'31.665px'} className={iconClasses}/>
      </a>
    </>
  )
}

export default SocialIconLinks
