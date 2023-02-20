import React from 'react'
import Navbar from '../components/Navbar';
import MySwiper from '../components/swiper';
// import SimpleSlider from '../components/Carousel';
const Homepage = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="filter">
        <div className="dropdown">
          <button className="dropbtn"> filter by</button>
          <div className="dropdown-content">
            <a href="#">Grade 1</a>
            <a href="#">Grade 2</a>
            <a href="#">Grade 3</a>
            <a href="#">Grade 4</a>
          </div>
        </div>
      </div>
      <MySwiper />
    </>
  )
}

export default Homepage
