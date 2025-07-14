// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import type { Project } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';

type ProjectDetailsPageProps = {
  project: Project;
}

const ProjectDetailsPage = ({project}: ProjectDetailsPageProps) => {
  return (
    <div className='project-details'>
      <div className='project-details-restricted-width'>
        <h1>{project.title}</h1>
        <p className='project-date'>{project.date}</p>
      </div>
      {project.project_details.length === 0 && 
      <h1>{project.title} Coming Soon!</h1>
      }
      {project.project_details.map((componentData, index) => (
        renderComponent(componentData, index)
      ))}
    </div>
  )
}

export default ProjectDetailsPage;
