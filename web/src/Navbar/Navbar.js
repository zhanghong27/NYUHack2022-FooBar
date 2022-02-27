import React from 'react'
import { NavbarItems } from './NavbarItems'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { auth, logout } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Navbar() {
  const [user] = useAuthState(auth)

  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <Link to='/' className='NavbarLogo'>
          Dr. OnCall
        </Link>
        <div className='NavbarIcon'></div>
      </div>

      <div className='rightSide'>
        <div className='menuLinks'>
          {NavbarItems.map((item) => {
            if (item.title !== 'Login' && item.title !== 'Signup') {
              return (
                user && (
                  <Link
                    className={item.className}
                    key={item.title}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                )
              )
            } else {
              return (
                !user && (
                  <Link
                    className={item.className}
                    key={item.title}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                )
              )
            }
          })}
          {user && (
            <button
              style={{
                background: 'white',
                border: 'none',
                borderRadius: '5px',
                marginLeft: '25px',
                fontSize: '0.8rem',
                color: '#3F8EFC',
                padding: '5px',
                fontWeight: 'bold',
              }}
              onClick={logout}
            >
              Log Out
            </button>
          )}
        </div>
        <button className='button'>Open</button>
      </div>
    </div>
  )
}
