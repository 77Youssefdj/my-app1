import React, { useState } from 'react';

const EducationAndExperience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'education' | 'experience'>('education');

  const educationContent = (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          
        </span>
        <h3 className="flex mb-1 font-semibold text-white"> Cycle ingénieur, Génie Réseaux et télécommunications.                                                                    </h3>
        <time className="flex font-normal text-white">2022-2025</time>
        <p className="flex mb-4 text-base font-normal text-white">
        École Mohammadia d'ingénieurs, Rabat
        </p>
        <p className="flex text-base font-normal text-white">
          Skills: Cloud Computing, Big data, SGBD ORACLE, SQL et NoSQL, VMware(Vcenter,Vsphere), Cisco IOS.

        </p>
      </li>
      
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          
        </span>
        <h3 className="flex mb-1 font-semibold text-white">Classes préparatoires scientifiques Mathématiques Physique (MP). </h3>
        <time className="flex font-normal text-white">2020-2022</time>
        <p className="flex text-base font-normal text-white">
        CPGE 
        </p>
        <p className="flex text-base font-normal text-white">
          Skills: 
        </p>
      </li>
    </ol>
  );

  const experienceContent = (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          
        </span>
        <h3 className="flex mb-1 font-semibold text-white">Software Engineer at XYZ Corp</h3>
        <time className="flex font-normal text-white">2022-Present</time>
        <p className="flex mb-4 text-base font-normal text-white">
          Responsible for developing and maintaining web applications, collaborating with cross-functional teams, and ensuring the scalability and performance of applications.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          
        </span>
        <h3 className="flex mb-1 font-semibold text-white">Technical and Financial Advisor at EMInnov</h3>
        <time className="flex font-normal text-white">2022-2023</time>
        <p className="flex text-base font-normal text-white">
        Contributed to the logistics and organization of events, participated in hackathons focusing on AI and electronics.

        </p>
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          
        </span>
        <h3 className="flex mb-1 font-semibold text-white"> Intern at KAZINOV</h3>
        <time className="flex font-normal text-white">Juin-2023</time>
        <p className="flex text-base font-normal text-white">
        Participated in the renovation and digitization of a 60/22kV substation using PCCN technology, managing various interfaces related to substation operations.
        </p>
      </li>
    </ol>
  );

  return (
    <div className="section min-h-screen flex flex-col justify-center items-center text-center bg-[#111F44] text-white">
      <div className="flex space-x-10 mb-10">
        <h1 
          className={`text-4xl mb-4 ${selectedTab === 'education' ? 'text-[#61dafb]' : 'text-white'}`} 
          onClick={() => setSelectedTab('education')}
        >
          Education
        </h1>
        <h1 
          className={`text-4xl mb-4 ${selectedTab === 'experience' ? 'text-[#61dafb]' : 'text-white'}`} 
          onClick={() => setSelectedTab('experience')}
        >
          Experience
        </h1>
      </div>
      <div className="w-full max-w-4xl flex relative">
        {selectedTab === 'education' ? educationContent : experienceContent}
      </div>
    </div>
  );
};

export default EducationAndExperience;
