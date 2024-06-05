import React from 'react';
import astronaute from './images/astronaute.png';
const About: React.FC = () => {
  return (
    <div> 
      <div className='items-center text-center bg-[#111F44] text-white'>
        <h1 className="text-4xl mb-4 text-[#61dafb]">About Me</h1>
      </div>
      <div className="section min-h-screen flex flex-col lg:flex-row justify-center items-center text-left bg-[#111F44] text-white px-8">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="italic text-lg mr-32 ml-32 mb-4"></p>
          <p className="text-lg mr-32 ml-32 mb-4">
          </p>
          <p className="text-lg mr-32 ml-32 mb-4">
          I am a second-year engineering student specializing in Networks and Telecommunications at the Ecole Mohammadia d'Ingénieurs in Rabat. My academic journey and professional experiences have equipped me with a robust skill set in IT, cybersecurity, and project management.
develop this a bit more.</p>
          <p className="text-lg mr-32 ml-32">
          With a robust foundation in engineering, a diverse skill set, and a passion for innovation, I am driven to leverage my experiences to contribute to technological advancements and impactful projects. I invite you to connect with me on LinkedIn to learn more about my journey and explore potential collaborations.          
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <img src={astronaute} alt="Astronaut with laptop" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
