import Link from 'next/link';
import React from 'react';
import { LuGlobe } from "react-icons/lu";
import ToggleButton from './../../../components/ui/ToggleButton';
import { Button } from '@/components/ui/button';

const Nabvar = () => {
    const navlinks = <>
    <li><Link className='font-bold text-base dark:text-black' href="/">Explore</Link></li>
    <li><Link className='font-bold text-base dark:text-black' href="/">Learn</Link></li>
    <li><Link className='font-bold text-base dark:text-black' href="/">Individuals</Link></li>
    <li><Link className='font-bold text-base dark:text-black' href="/">Businesses</Link></li>
    <li><Link className='font-bold text-base dark:text-black' href="/">Developers</Link></li>
    <li><Link className='font-bold text-base dark:text-black' href="/">Company</Link></li>
    </>
    return (
        <div className="navbar  border-b-2 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost dark:text-black lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-blue-600 text-3xl">coinbase</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
            <ToggleButton />
            <LuGlobe size={30} className='mr-2 dark:text-black hidden lg:block' />
                <a className='p-6 mr-2 hidden lg:block  rounded-full  btn  font-semibold'>Sing In</a>
                <Button className='p-6 mr-2 bg-blue-600 font-semibold  rounded-full'>Sing Up</Button>
                
            </div>
        </div>
    );
};

export default Nabvar;