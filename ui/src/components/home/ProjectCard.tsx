import type { Project } from '../../types/portfolioTypes';
import { Link } from 'react-router-dom';
import TechStack from '../projectDescriptions/TechStack';
import type { Theme } from '../../types/portfolioTypes';

type ProjectCardProps = {
  project: Project;
  theme: Theme;
}

const ProjectCard = ({project, theme='light'}: ProjectCardProps) => {
  let projectCardClass;
  let iconClass;
  if(theme === 'light') {
    projectCardClass = 'white-background dark-blue';
    iconClass = 'dark-blue';
  } else {
    projectCardClass = 'dark-blue-background';
    iconClass = 'white';
  }

  const renderProjectImage = () => {
    if(project.mainImage) {
      if(project.mainImage.type === 'svg') {
        const Icon = project.mainImage.src;
        return (
          <span role='img' aria-label={project.mainImage.alt} >
            <Icon className={`project-card-icon-svg ${iconClass}`} />
          </span>
        )
      } else if (project.mainImage.type === 'png' || project.mainImage.type === 'jpg') {
        return (<img className='project-card-icon' src={project.mainImage.src as string} alt={project.mainImage.alt} />)
      }
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
