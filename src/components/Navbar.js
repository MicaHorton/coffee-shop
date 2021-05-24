import React from 'react'
import { Link } from 'gatsby'
import Menu from '../styles/Menu'

const Navbar = () => {
    return (
        <Menu>
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </Menu>
    )
}

export default Navbar
