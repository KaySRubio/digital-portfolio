import './App.css';
import type { Project } from './types/portfolioTypes';
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  project: Project;
  theme: string;
}

const ProjectCard = ({project, theme='white'}: ProjectCardProps) => {
  const Icon = project.iconComponent;

  let projectCardClass;
  let iconClass;
  if(theme === 'white') {
    projectCardClass = 'white-background';
    iconClass = 'blue-icon';
  } else {
    projectCardClass = 'dark-blue-background';
    iconClass = 'white-icon';
  }

  return (
    <Link className={`project-card ${projectCardClass}`} to={`${project.path}`}>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      {Icon && <Icon className={`project-card-icon-svg ${iconClass}`} /> }
      {project.icon && <img className='project-card-icon' src={project.icon} />}
      <ul>
        {project.techStack.map((tech, index) => (
          <li key={index}>
            {typeof tech === 'string' ? tech : tech.text}
          </li>
        ))}
      </ul>
    </Link>
  )
}

export default ProjectCard;
// originally planned to use links, but can't use a link inside another link
// {typeof tech === 'string' ? tech : <a href={tech.src}>{tech.text}</a>}
