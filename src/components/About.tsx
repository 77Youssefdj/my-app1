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
          <p className="italic text-lg mr-32 ml-32 mb-4">« The world is one big data problem. »</p>
          <p className="text-lg mr-32 ml-32 mb-4">
            This quote encapsulates the reason and passion that has driven my journey into the realms of network, DevOps, and cloud computing. With a background in applied mathematics, I am currently pursuing a data science and engineering master's degree. I am dedicated to streamlining network operations, automating cloud infrastructure, and ensuring seamless integration of data workflows for insightful analysis.
          </p>
          <p className="text-lg mr-32 ml-32 mb-4">
            My expertise spans Python, R, SQL, network automation, cloud orchestration, designing and implementing infrastructure as code with technologies like Terraform, Ansible, Kubernetes, and utilizing cloud platforms such as GCP, AWS, and Azure.
          </p>
          <p className="text-lg mr-32 ml-32">
            If you are seeking a dedicated network DevOps engineer passionate about leveraging the power of cloud and automation, let's connect and explore how we can make a difference together, one problem at a time.
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
