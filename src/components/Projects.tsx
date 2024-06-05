import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  img: { src: string; alt: string };
  category: JSX.Element;
}

const Project: React.FC<ProjectProps> = ({ name, description, link, img, category }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md bg-[#1A2B6B] text-white">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <a href={link} className="block mb-2">
        <img src={img.src} alt={img.alt} className="rounded-md" />
      </a>
      <div>{category}</div>
    </div>
  );
};

interface TagsProps {
  color: string;
  children: React.ReactNode;
}

const Tags: React.FC<TagsProps> = ({ color, children }) => {
  return <span style={{ color }} className="mr-2">{children}</span>;
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="mb-4">
      {title && <h1 className="text-3xl font-semibold mb-4 text-white">{title}</h1>}
      {children}
    </div>
  );
};

const ColorTags = {
  FUCHSIA: '#FF00FF',
  LIME: '#00FF00',
  SKY: '#87CEEB',
  ROSE: '#FF007F',
  VIOLET: '#8A2BE2',
  EMERALD: '#50C878',
  YELLOW: '#FFFF00',
  INDIGO: '#4B0082',
};

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-3 mt-16">
      <div className="section flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl mb-6 text-[#61dafb]">Projects</h1>
      </div>
      <Section title="">
        <div className="flex flex-col gap-6 mr-32 ml-32">
          <Project
            name="Project 1"
            description="Automatisation du déploiement : Développer des scripts CI/CD pour automatiser le déploiement des applications sur des serveurs cloud."
            link="/"
            img={{ src: '/assets/images/project-web-design.png', alt: 'Project logo' }}
            category={
              <>
                <Tags color={ColorTags.FUCHSIA}>Jenkins</Tags>
                <Tags color={ColorTags.LIME}>Docker</Tags>
                <Tags color={ColorTags.SKY}>Kubernetes</Tags>
                <Tags color={ColorTags.ROSE}>Git</Tags>
              </>
            }
          />
          <Project
            name="Project 2"
            description="Surveillance de l'infrastructure : Implémenter des outils de monitoring pour suivre la performance et la disponibilité des systèmes en temps réel."
            link="/"
            img={{ src: '/assets/images/project-fire.png', alt: 'Project logo' }}
            category={
              <>
                <Tags color={ColorTags.VIOLET}>Prometheus</Tags>
                <Tags color={ColorTags.EMERALD}>Grafana</Tags>
                <Tags color={ColorTags.YELLOW}>Zabbix</Tags>
              </>
            }
          />
          <Project
            name="Project 3"
            description="Gestion des configurations : Utiliser Ansible pour automatiser la configuration et la gestion des serveurs en environnement de production."
            link="/"
            img={{ src: '', alt: 'Project Logo' }}
            category={
              <>
                <Tags color={ColorTags.FUCHSIA}>Ansible</Tags>
                <Tags color={ColorTags.LIME}>Linux system administration</Tags>
                <Tags color={ColorTags.ROSE}>Terraform</Tags>
              </>
            }
          />
        </div>
      </Section>
    </div>
  );
};

export default Projects;
