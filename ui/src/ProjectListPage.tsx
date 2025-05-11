/* This component displays a list of projectCards on a particular topic */
import { Link } from 'react-router-dom';
import type { ProjectGroup } from './types/portfolioTypes';
import './App.css'

type ProjectListPageProps = {
  data: ProjectGroup;
}

const ProjectListPage = ({data}: ProjectListPageProps) => {
  // console.log('data: ', data);
  return (
    <div>
      <p>{data.title}</p>
      {data.projects.map(project => ( <Link to={project.path} key={project.path}>{project.title}</Link>))}
    </div>
  )
}

export default ProjectListPage;

// <Link to={projectGroup.path}>{projectGroup.title}</Link>
// {data.projects.map(project => ( <p key={project.path}>{project.title}</p>))}