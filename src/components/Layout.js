import React from 'react'
import Navbar from './Navbar'
import Container from '../styles/Container'

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <main>{children}</main>
        </Container>
    )
}

export default Layout
