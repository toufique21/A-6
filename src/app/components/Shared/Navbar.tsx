"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/logo.png'
import Link from 'next/link';
import useWorkout from '@/hooks/useWorkout';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const { plan, saved } = useWorkout();
    const pathname = usePathname();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    const links = <>
        <li><Link className={`${isWorkoutActive ? "text-[#ccff00] bg-[#576c0e69] rounded-3xl" : "" }`} href='/'>Workouts</Link></li>
        <li><Link className={`${isPlanActive ? "text-[#ccff00] bg-[#576c0e69] rounded-3xl" : "" }`} href='/my-plan'>Plan</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-xs shadow-gray-800 container mx-auto bg-black px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div>
                        <Image src={logo} alt='' width={30} height={10} />
                    </div>
                    <Link href='/' className="font-anton font-bold text-2xl uppercase leading-[0.85] tracking-tight text-white">FITLOG</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3 text-sm">
                <div className='text-white'>
                    <Link className='p-2' href="/my-plan">Plan   <span className='text-black border-[0.5] rounded-full p-1 border-gray-600 bg-[#ccff00]'>{plan.length}</span></Link>
                </div>
                <div className='text-white'>
                    <Link href="/my-plan">Saved <span className='border-[0.5] rounded-full p-1 border-gray-600'>{saved.length}</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;