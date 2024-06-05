import React, { useState } from 'react';

const EducationAndExperience: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'education' | 'experience'>('education');

  const educationContent = (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
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
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
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
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <h3 className="flex mb-1 font-semibold text-white">Software Engineer at XYZ Corp</h3>
        <time className="flex font-normal text-white">2022-Present</time>
        <p className="flex mb-4 text-base font-normal text-white">
          Responsible for developing and maintaining web applications, collaborating with cross-functional teams, and ensuring the scalability and performance of applications.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <h3 className="flex mb-1 font-semibold text-white">Data Analyst at ABC Inc</h3>
        <time className="flex font-normal text-white">2020-2022</time>
        <p className="flex text-base font-normal text-white">
          Analyzed large datasets to provide actionable insights, created dashboards and reports, and worked on data visualization projects.
        </p>
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <h3 className="flex mb-1 font-semibold text-white">Intern at DEF Ltd</h3>
        <time className="flex font-normal text-white">2018-2019</time>
        <p className="flex text-base font-normal text-white">
          Assisted in the development of data pipelines, performed data cleaning and preprocessing, and supported senior data scientists in various projects.
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
