import React from 'react'
import { HiSearch } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';

import { useState } from 'react';
const Navbar = () => {

    const [search, setSearch] = useState(0);
    const increaseQuan = () => {
        setSearch(search + 1);
    }

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
                            <FaShoppingCart className="shopping-cart" onClick={increaseQuan}/>
                            <span>{search}</span>
                        </div>
                    </div>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Books</li>
                        <li>Authors</li>
                        <li>Categories</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div> 
            </nav>
        </>
    )
}

export default Navbar
