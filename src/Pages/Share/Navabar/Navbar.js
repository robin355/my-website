import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#ffffff]  lg:pl-[100px] lg:pr-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
              <li><Link to='/home' className='hover:underline hover:text-[#0d6efd]'>Home</Link></li>
              <li tabIndex={0}>
                <Link className="justify-between hover:underline hover:text-[#0d6efd]">
                  Services
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2">
                  <li><Link className=' bg-[#ffffff] hover:underline' to='/web'>Website Development</Link></li>
                  <li><Link className=' bg-[#ffffff] hover:underline' to='/mobile'>Mobile App Development</Link></li>
                  <li><Link className=' bg-[#ffffff] hover:underline' to='/commerce'>E-commerce Solution</Link></li>
                  <li><Link className=' bg-[#ffffff] hover:underline' to='/ui'>UI/UX Design & Dev </Link></li>
                  <li><Link className=' bg-[#ffffff] hover:underline' to='/api'>API Intregration</Link></li>
                  <li><Link className=' bg-[#ffffff] hover:underline' to='/software'>Software Development</Link></li>
                </ul>
              </li>
              <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/project'>Project</Link></li>
              <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/career'>Careers</Link></li>
              <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/about'>About</Link></li>
              <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/ourteam'>Our Team</Link></li>
              <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <Link className="normal-case text-xl">Logo Design</Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/home' className='bg-[#ffffff] hover:underline hover:text-[#0d6efd]'>Home</Link></li>
            <li tabIndex={0}>
              <Link className="justify-between bg-[#ffffff] hover:underline hover:text-[#0d6efd]">
                Services
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </Link>
              <ul className="p-2">
                <li><Link className=' bg-[#ffffff] hover:text-[#0d6efd]' to='/web'>Website Development</Link></li>
                <li><Link className=' bg-[#ffffff] hover:text-[#0d6efd]' to='/mobile'>Mobile App Development</Link></li>
                <li><Link className=' bg-[#ffffff] hover:text-[#0d6efd]' to='/commerce'>E-commerce Solution</Link></li>
                <li><Link className=' bg-[#ffffff] hover:text-[#0d6efd]' to='/ui'>UI/UX Design & Dev </Link></li>
                <li><Link className=' bg-[#ffffff] hover:text-[#0d6efd]' to='/api'>API Intregration</Link></li>
                <li><Link className=' bg-[#ffffff] hover:text-[#0d6efd]' to='/software'>Software Development</Link></li>
              </ul>
            </li>
            <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/project'>Project</Link></li>
            <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/career'>Careers</Link></li>
            <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/about'>About</Link></li>
            <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/ourteam'>Our Team</Link></li>
            <li><Link className=' bg-[#ffffff] hover:underline hover:text-[#0d6efd]' to='/contact'>Contact</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;