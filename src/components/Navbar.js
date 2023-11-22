// import "../assets/css/navbar.css";
import logo from "../assets/images/logo.svg";
import React, { useState } from 'react';
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary scroll-smooth border-b-2 border-white flex justify-between items-center w-full z-20 px-8 xl:px-20 lg:px-20 md:px-20 sm:px-10"> {/*add this to fixed top: sticky top-0*/}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/"><img className='w-20 xl:w-32 lg:w-32 md:w-28' src={logo} alt='portfolio logo'></img></a>
        </div>

        {/* Responsive Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-white mx-0 focus:outline-none border-0 hover:text-tertiary hover:bg-primary hover:border-0 text-4xl"
            onClick={toggleNavbar}
          >
            {isOpen ? <IoCloseSharp /> : <IoMenuSharp />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full left-0 px-8 xl:px-20 lg:px-20 md:px-20 sm:px-10 py-5 absolute top-20 md:top-24 sm:top-20 bg-secondary lg:flex lg:items-center lg:relative  lg:w-auto lg:top-0  lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row list-none w-full lg:w-auto">
            <li className="nav-item">
              <a
                href="#about"
                className="text-white xl:text-2xl lg:text-xl px-2 py-2 block lg:p-2 lg:ml-2 hover:text-tertiary"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className="text-white xl:text-2xl lg:text-xl px-2 py-2 block lg:p-2 lg:ml-2 hover:text-tertiary"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="text-white xl:text-2xl lg:text-xl px-2 py-2 block lg:p-2 lg:ml-2 hover:text-tertiary"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="text-white xl:text-2xl lg:text-xl px-2 py-2 block lg:p-2 lg:ml-2 hover:text-tertiary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export {Navbar};
