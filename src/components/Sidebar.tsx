import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed ml-16 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 text-[#61dafb] p-4">
      <a href="https://www.linkedin.com" className="text-2xl" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.github.com" className="text-2xl" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.medium.com" className="text-2xl" target="_blank" rel="noopener noreferrer">
        <FaMedium />
      </a>
      <a href="https://www.youtube.com" className="text-2xl" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="mailto:email@example.com" className="text-2xl">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default Sidebar;
