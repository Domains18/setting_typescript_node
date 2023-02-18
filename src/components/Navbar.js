import React from 'react'
import { FcFilledFilter } from 'react-icons/fc'
const Navbar = () => {
  return (
    <>
      <div className='header-nav'>
        <div className='header-nav-logo'>
          <h1>Lelan BookStore</h1>
          <div className="dropdown">
            <button className='dropbtn'>Filter
              {/* <FcFilledFilter className='filter'/> */}
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
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
