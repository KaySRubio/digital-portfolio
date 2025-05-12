/* This component displays a list of projectCards on a particular topic */
import ProjectCard from './ProjectCard'
import type { Topic } from './types/portfolioTypes';
import { projects } from './data/portfolioData';

import './App.css'

type ProjectListPageProps = {
  topic: Topic;
}

const TopicPage = ({topic}: ProjectListPageProps) => {

  const projectsOnTopic = projects.filter((project) =>
    project.topics.includes(topic.path)
  );

  return (
    <div>
      <p>{topic.title}</p>
      {projectsOnTopic.map(project => ( <ProjectCard key={project.path} project={project} />))}
    </div>
  )
}

export default TopicPage;
