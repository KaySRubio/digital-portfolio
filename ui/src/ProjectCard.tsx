import './App.css';
import type { Project } from './types/portfolioTypes';
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  project: Project;
  theme: string;
}

const ProjectCard = ({project, theme='white'}: ProjectCardProps) => {
  const Icon = project.icon;

  let projectCardClass;
  let iconClass;
  if(theme === 'white') {
    projectCardClass = 'project-card-white';
    iconClass = 'blue-icon';
  } else {
    projectCardClass = 'project-card-blue';
    iconClass = 'white-icon';
  }

  return (
    <Link className={`project-card ${projectCardClass}`} to={`${project.path}`}>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <Icon className={`project-card-icon ${iconClass}`} />
      <ul>
        {project.techStack.map(tech => (
          <li>
            {typeof tech === 'string' ? tech : <a href={tech.src}>{tech.text}</a>}
          </li>
        ))}
      </ul>

    </Link>
  )
}

export default ProjectCard;
// {projectsOnTopic.map(project => ( <ProjectCard key={project.path} project={project} />))}