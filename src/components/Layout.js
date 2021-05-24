import React from 'react'
import styles from './Layout.module.css'
import { Link } from 'gatsby'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main id={styles.main}>{children}</main>
        </div>
    )
}

export default Layout
