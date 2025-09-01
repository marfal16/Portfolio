import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const hamburgerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <nav className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-white text-gray-700 shadow-md z-50">
      <div className="max-w-5xl w-full flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-600">Maria Falanga</h1>
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-orange-600 transition duration-300 ease-in-out">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-600 transition duration-300 ease-in-out">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-orange-600 transition duration-300 ease-in-out">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-600 transition duration-300 ease-in-out">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-600 transition duration-300 ease-in-out">Contacts</a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl">
        {!nav ? hamburgerIcon : closeIcon}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center space-y-6 text-4xl"
        }
      >
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="#home">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="#about">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="#skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="#projects">Projects</a>
        </li>
        <li className="py-6 text-4xl">
          <a onClick={handleClick} href="#contact">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
