import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './users/Auth'

const Navbar = (props) => (
  <div>
    {Auth.isUserAuthenticated() ? (
      <div>
        <Link to='/account'> Account
        </Link>
        <Link to='/logout'> Logout
        </Link>
      </div>
    ) : (
      <div>
        <Link to='/register'> Register
        </Link>
        <Link to='/login'> Login
        </Link>
      </div>
    )}
  </div>
)

export default Navbar
