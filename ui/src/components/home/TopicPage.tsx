/* This component displays a list of projectCards on a particular topic */
import ProjectCard from './ProjectCard'
import type { Topic } from '../../types/portfolioTypes';
import { projects } from '../../data/portfolioData';

type ProjectListPageProps = {
  topic: Topic;
}

const TopicPage = ({topic}: ProjectListPageProps) => {

  const visibleProjectsOnTopic = projects.filter((project) =>
    project.topics.includes(topic.path) && project.visible
  );

  return (
    <div>
      <h1 className='topic-page-title'>{topic.title}</h1>
      <div className='project-card-container'>
      {visibleProjectsOnTopic.map(project => ( <ProjectCard key={project.path} project={project} theme='blue' />))}
      </div>
    </div>
  )
}

export default TopicPage;
