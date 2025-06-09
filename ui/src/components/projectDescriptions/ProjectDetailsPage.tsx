// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import type { Project } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';

type ProjectDetailsPageProps = {
  project: Project;
}

const ProjectDetailsPage = ({project}: ProjectDetailsPageProps) => {

  console.log('project: ', project);

  // TODO if project_details is empty, displays the Coming Soon page
  return (
    <div className='project-details'>
      <h1>{project.title}</h1>
      <p className='project-date'>{project.date}</p>
      {project.project_details.map((componentData, index) => (
        renderComponent(componentData, index)
      ))}
    </div>
  )
}

export default ProjectDetailsPage;
