import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
                <h3>TOP ALBUMS</h3>
           <div className = 'navbar-links'>
                <Link to='/'><h3>Albums</h3></Link>
                <Link to='/favorites'><h3>Favorites</h3></Link>
           </div>
        </div>
    )
}

export default Navbar