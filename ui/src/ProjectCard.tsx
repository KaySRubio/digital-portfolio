import './App.css';
import type { Project } from './types/portfolioTypes';
import { Link } from 'react-router-dom';
import TechStack from './projectDetailsComponents/TechStack';

type ProjectCardProps = {
  project: Project;
  theme: string;
}

const ProjectCard = ({project, theme='white'}: ProjectCardProps) => {
  // const Icon = project.iconComponent;

  let projectCardClass;
  let iconClass;
  if(theme === 'white') {
    projectCardClass = 'white-background dark-blue';
    iconClass = 'dark-blue';
  } else {
    projectCardClass = 'dark-blue-background';
    iconClass = 'white';
  }

  const renderProjectImage = () => {
    if(project.mainImage.type === 'svg') {
      const Icon = project.mainImage.src;
      return (
        <span role='img' aria-label={project.mainImage.alt} >
          <Icon className={`project-card-icon-svg ${iconClass}`} />
        </span>
      )
    } else {
      return (<img className='project-card-icon' src={project.mainImage.src as string} alt={project.mainImage.alt} />)
    }
  }

  return (
    <Link className={`project-card ${projectCardClass}`} to={`${project.path}`}>
      <h3>{project.short_title}</h3>
      <p>{project.desc}</p>
      {project.mainImage && renderProjectImage()}
      {project.projectCardTechStack && <TechStack techList={project.projectCardTechStack} className='project-card-tech-stack-row' />}
      {project.techStack && <ul>
        {project.techStack.map((tech, index) => (
          <li key={index}>
            {tech}
          </li>
        ))}
      </ul>}
    </Link>
  )
}

export default ProjectCard;
