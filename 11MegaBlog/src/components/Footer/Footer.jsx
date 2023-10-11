import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="dark:bg-slate-700 dark:text-white overflow-hidden py-10 bg-gray-400  border-t-2 dark:border-t-yellow-600 border-t-orange-700">
            <div className="flex justify-around items-center px-4">
                <div className="m-6 flex justify-center md:justify-between flex-wrap">
                    <div className="pt-6 md:w-1/2 lg:w-3/12">
                        <div className="flex h-[7rem] items-center flex-col justify-between">
                            <Link className=" inline-flex w-[3rem] items-center">
                                <Logo width="100px" />
                            </Link>
                            <div className=''>
                                <p className="text-center text-sm text-gray-900 dark:text-slate-400">
                                    &copy; Copyright 2023. All Rights Reserved by Megablog.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full flex flex-col items-center">
                            <h3 className=" flex justify-center items-center tracking-px mb-7 text-xs font-semibold uppercase dark:text-gray-400 text-gray-900 cursor-default">
                                Company
                            </h3>
                            <ul className='flex flex-col justify-center items-center'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-center text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full flex flex-col items-center">
                            <h3 className="flex justify-center items-center tracking-px mb-9  text-xs font-semibold uppercase text-gray-900 dark:text-gray-400 cursor-default">
                                Support
                            </h3>
                            <ul className='flex flex-col justify-center items-center'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/my-account"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full flex flex-col items-center">
                            <h3 className="flex justify-center items-center tracking-px mb-9  text-xs font-semibold uppercase text-gray-900 dark:text-gray-400 cursor-default">
                                Legals
                            </h3>
                            <ul className='flex flex-col justify-center items-center'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Footer
