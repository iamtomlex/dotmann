import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  // const { pathname } = useLocation()
  // console.log(pathname)
  const ROUTES = {
    HOME: '/',
  }

  const nav = [
    {
      display: 'Home',
      path: '/',
    },
    {
      display: 'About us',
      path: '/about',
    },
    {
      display: 'Event badging ',
      path: '/event',
    },
    {
      display: 'Project badging ',
      path: '/project',
    },
  ]


  return (
    <div className='nav'>
      <div className='nav-bar'>
        <img src='/logo.svg' alt='logo' className='nav-logo' />
        <div className='right'>
          <ul className='nav-links'>
            {nav.map((e, i) => (
              <li key={i} className='nav-link'>
                <NavLink to={e.path}>{e.display}</NavLink>
              </li>
            ))}
          </ul>
          <button className='nav-btn'>Apply for a badge</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
