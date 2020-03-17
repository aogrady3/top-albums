import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h3>TOP ALBUMS</h3>
           </div>
           <div className = 'navbar-links'>
                <Link to='/'>Top Albums</Link>
                <Link to='/favorites'>Favorites</Link>
           </div>
        </div>
    )
}

export default Navbar