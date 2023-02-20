import React from 'react'
import { HiSearch } from 'react-icons/hi'
const Navbar = () => {
    return (
        <>
            <nav className='bg-slate-200 h-[200px] shadow-xl pt-2'>
                <div className="container flex justify-between pl-2 pr-10 ">
                    <div className="first-sec">
                        <div className="logo">
                            <h1>Lelan Bookshop</h1>
                        </div>
                    </div>
                    <div className="next-sec">
                        <div className="search">
                            <input className="search-input" type="text" placeholder="Search" />
                            <HiSearch className='search-btn'/>
                        </div>
                    </div>
                    <div className="third-sec">
                        <div className="cart">
                            <i className="fas fa-shopping-cart"></i>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar
