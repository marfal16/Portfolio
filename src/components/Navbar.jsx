import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contact" },
  ];

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
<nav
  className={`fixed w-full h-[80px] flex justify-center items-center px-4 z-50 transition-all duration-300
    ${scrolled
      ? "bg-blue-900/80 shadow-md"
      : "bg-blue-950/20 backdrop-blur-sm"
    }`}
>
  <div className="max-w-5xl w-full flex justify-between items-center font-roboto">
    <h1 className={`text-2xl md:text-3xl font-roboto transition-colors duration-300 ${
      scrolled ? "text-white" : "text-blue-950"
    }`}>
      Maria Falanga
    </h1>

    {/* Desktop links */}
    <ul className="hidden md:flex space-x-6 text-lg font-medium">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.href}
            className={`transition-colors duration-300 ${
              scrolled ? "text-white hover:text-orange-400" : "text-blue-950 hover:text-orange-400"
            }`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>


    {/* Hamburger */}
    <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-white">
      {!nav ? hamburgerIcon : closeIcon}
    </div>

    {/* Mobile menu */}
    <AnimatePresence>
      {nav && (
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center space-y-6 text-4xl"
        >
          {links.map((link, i) => (
            <li key={i} className="py-6 text-4xl">
              <a onClick={handleClick} href={link.href} className="hover:text-orange-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>
</nav>

  );
};

export default Navbar;
