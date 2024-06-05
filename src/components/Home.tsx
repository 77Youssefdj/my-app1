import React from 'react';
import idphoto from './images/your-photo.jpg';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex items-center max-w-4xl mx-auto p-4">
        <div className="flex-1 text-center">
          <h1 className="text-5xl mb-4 text-[#61dafb]">Hi, I'm Youssef</h1>
          <p className="text-xl mb-2"></p>
          <p className="text-lg mb-4"></p>
          <Link to="/formulaire">
          <button className="bg-[#61dafb] text-[#111F44] px-6 py-2 rounded-lg text-lg transition-transform transform hover:scale-105">Formulaire</button>
          </Link>
          <p className="mt-6 text-lg text-[#61dafb] cursor-pointer" onClick={handleScrollDown}>Scroll down ↓</p>
        </div>
        <div className="photo flex-none ml-48">
          <img 
            src={idphoto}
            alt="Y" 
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
