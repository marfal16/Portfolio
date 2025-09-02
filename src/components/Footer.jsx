import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Maria Falanga. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:mariafalanga00@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com/in/maria-falanga-74836918b/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/marfal16" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
