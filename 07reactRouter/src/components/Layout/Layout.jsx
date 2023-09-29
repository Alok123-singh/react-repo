import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import '../index.css'

function Layout() {
    return (
        <div className='... flex flex-col justify-between'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;