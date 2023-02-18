import React from 'react'

const Navbar = () => {
  return (
    <div className='header-nav'>
      <div className='header-nav-logo'>
        <h1>Lelan BookStore</h1>
      </div>
      
      <div className='header-nav-menu'>
        <ul>
        <hr />
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="search-bar">
        <input className='search' type="text" placeholder="Search" />
      </div>
      <hr />
    </div>
  )
}

export default Navbar
