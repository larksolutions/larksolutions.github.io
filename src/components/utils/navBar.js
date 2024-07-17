import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  return (
    <Navbar fluid rounded className="bg-gray-800 fixed top-0 left-0 w-full z-10">
      <Navbar.Brand href="/" className='ml-0 lg:ml-6'>
        <img src="/Lark.png" className="mr-3 h-6 sm:h-9" alt="Company Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black text-gray-300">
          Lark Solutions
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
