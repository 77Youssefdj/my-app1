import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <nav className="fixed w-full bg-[#111F44] p-4 shadow-md z-50 px-8"> {/* Adjusted padding */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-[#61dafb] mr-8">{'<Youssef />'}</div> {/* Margin-right for Youssef */}
        <ul className="flex space-x-4 text-white">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
          <li><Link to="education" smooth={true} duration={500} className="cursor-pointer">Education</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
