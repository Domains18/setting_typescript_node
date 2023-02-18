import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='header-nav'>
        <div className='header-nav-logo'>
          <h1>Lelan BookStore</h1>
          <div className="filter">
            <div className="dropdown">
              <span>Filter</span>
              <div className="dropdown-content">
                <a href="#">All</a>
                <a href="#">Action</a>
                <a href="#">Adventure</a>
                <a href="#">Comedy</a>
                <a href="#">Drama</a>
                <a href="#">Fantasy</a>
                <a href="#">Horror</a>
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className='header-nav-menu'>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
