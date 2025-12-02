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
  const pageTitle = `Kay Rubio Portfolio showing ${topic.title}`;

  return (
    <div>
      <title>{pageTitle}</title>
      <meta name="description" content={`Software engineering portfolio showing ${topic.title}. Includes live demos and GitHub links.`} />
      <h1 className='topic-page-title'>{topic.title}</h1>
      <p className='topic-page-directions'>Click on a project below to view</p>
      <div className='project-card-container'>
      {visibleProjectsOnTopic.map(project => ( <ProjectCard key={project.path} project={project} theme='dark' />))}
      </div>
    </div>
  )
}

export default TopicPage;
