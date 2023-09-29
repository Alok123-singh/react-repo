import React from 'react'
import '../index.css'
import Logo from '../Pictures/logo.jpg'
import {Link, NavLink} from 'react-router-dom'


function Header() {
    return (
        <div className='... flex flex-wrap justify-around items-center p-3 text-white bg-blue-500'>
            <Link to="/" className='... ml-7'>
                <img src={Logo} alt=''  className='... w-20 h-20 rounded-md' />
            </Link>
            
            <div className='... bg-green-400 m-4 p-4 rounded-lg ml-3'>
                <ul className='... flex justify-center items-center'>
                    <li>
                        <NavLink 
                        to="/"
                        className={({isActive}) => 
                            `${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='... ml-4'>
                        <NavLink 
                        to="/about"
                        className={({isActive}) =>
                            `${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='... ml-4'>
                        <NavLink 
                        to="/contact"
                        className={({isActive}) =>
                            `${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className='... ml-4'>
                        <NavLink 
                        to="/github"
                        className={({isActive}) =>
                            `${isActive ? "text-orange-700" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                        >
                            GitHub
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='... ml-[-6rem]'>
                <Link
                    to="#"
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
                <Link
                    to="#"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Get started
                </Link>
            </div>
        
        </div>
    )
}

export default Header
