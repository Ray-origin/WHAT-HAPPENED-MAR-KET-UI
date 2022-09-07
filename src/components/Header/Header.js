import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
function Header() {
  return (
    <nav>
      <input type={'checkbox'} id="check"></input>
      <label htmlFor='check' className='check-btn'>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </label>
      <span className='logo'>
        <img src="imgs/logo@3x.png" alt='logo'/>
      </span>
      <ul>
        <li><a href='#'>INTRODUCTION</a></li>
        <li><a href='#'>SOLUTION</a></li>
        <li id="RatePlan"><a href='#'>RATE PLAN</a></li>
        <li><a href='#'>LOGIN</a></li>
        <li><a href='#'>APPLY FOR FREE USE</a></li>
      </ul>
    </nav>
  )
}

export default Header