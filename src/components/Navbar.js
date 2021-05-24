import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Menu, MenuItem, MenuIndicator } from '../styles/Menu'

const Navbar = () => {
    const [active, setActive] = useState([false, false, false, false])

    if (typeof window !== `undefined`) {
        const url = window.location.pathname
    }

    useEffect(() => {
        switch (url) {
            case '/':
                setActive([true, false, false, false])
                break
            case '/projects':
                setActive([false, true, false, false])
                break
            case '/blog':
                setActive([false, false, true, false])
                break
            case '/contact':
                setActive([false, false, false, true])
                break
            default:
                break
        }
    }, [url, setActive])

    return (
        <Menu>
            <MenuItem color="orange" active={+active[0]}>
                <Link to="/">About</Link>
            </MenuItem>
            <MenuItem color="green" active={+active[1]}>
                <Link to="/projects">Projects</Link>
            </MenuItem>
            <MenuItem color="red" active={+active[2]}>
                <Link to="/blog">Blog</Link>
            </MenuItem>
            <MenuItem color="purple" active={+active[3]}>
                <Link to="/contact">Contact</Link>
            </MenuItem>

            <MenuIndicator />
        </Menu>
    )
}

export default Navbar
