// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import type { Project } from './types/portfolioTypes';
import './App.css'

type ProjectDetailsPageProps = {
  project: Project;
}

const ProjectDetailsPage = ({project}: ProjectDetailsPageProps) => {
  return (
    <p>{project.title}</p>
  )
}

export default ProjectDetailsPage;
