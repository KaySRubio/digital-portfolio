// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import type { Project } from './types/portfolioTypes';
import './App.css'

type ProjectDetailsPageProps = {
  data: Project;
}

const ProjectDetailsPage = ({data}: ProjectDetailsPageProps) => {
  return (
    <p>{data.title}</p>
  )
}

export default ProjectDetailsPage;
