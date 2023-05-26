import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
        <a href="/" className="title">
            credit-card-app
        </a>
        <ul>
            <li className="active">
                <a href="/">Home</a>
            </li>
            <li className="active">
                <a href="/">Add card</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar