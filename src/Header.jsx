import React from 'react'
import './index.css'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

function Header() {

  return (
    <>
      <div className="Header">
        <div className="HeaderIconsBox">
          <SocialIcon url='https://github.com' href='https://github.com/donaldanixon' style={{ height: 40, width: 40 }} />
          <SocialIcon url='https://linkedin.com' href='https://www.linkedin.com/in/donald-nixon-a3768374/' style={{ height: 40, width: 40 }}   />
          <SocialIcon network='email' style={{ height: 40, width: 40 }} bgColor="RGBA(22, 22, 22, 0.5)" href='mailto:donaldanixon@gmail.com' />
        </div>
      </div>
    </>
  )
}

export default Header
