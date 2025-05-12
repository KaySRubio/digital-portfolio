import './App.css';
import type { Project } from './types/portfolioTypes';
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
  const Icon = project.icon;

  return (
    <Link className="project-card" to={project.path}>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <Icon className='project-card-icon' />
      
    </Link>
  )
}

export default ProjectCard;