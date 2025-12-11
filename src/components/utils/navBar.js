import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar fluid rounded className="bg-gray-800 fixed top-0 left-0 w-full z-10">
      <Navbar.Brand href="#/" className='ml-0 lg:ml-6'>
        <img src="/Lark.png" className="mr-3 h-6 sm:h-9" alt="Company Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black text-gray-300">
          Lark Solutions
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Home
        </Link>
        <Link to="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Projects
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
