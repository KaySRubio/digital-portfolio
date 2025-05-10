// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import './App.css'

type ProjectDetailsPageProps = {
  title: string;
}

const ProjectDetailsPage = ({title}: ProjectDetailsPageProps) => {
  return (
    <p>{title}</p>
  )
}

export default ProjectDetailsPage;
