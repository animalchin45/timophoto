import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = ({ getClassName }) => {
    return (
        <nav className={`header__nav${getClassName()}`}>
            <Link to="/images" className="btn">Images</Link>
            <Link to="/about" className="btn">About</Link>
            <Link to="/contact" className="btn">Contact</Link>
        </nav>
    )
}

export default HeaderNav