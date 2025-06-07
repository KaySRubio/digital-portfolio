import { Link } from 'react-router-dom';
import { topics, base_path, projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {

    // find only the featured projects from the projectList
    const featured_projects = projects
    .filter(project => project.featured);

  return (
    <div>
      <div className="featured-projects-section">
        <h2>Featured Projects</h2>
        <div className='project-card-container'>
          {featured_projects.map(project => ( <ProjectCard key={project.path} project={project} theme='white' />))}
        </div>
      </div>
      <div className="featured-projects-section">
        <h2>See more projects</h2>
        <div className='project-icon-row'>
          {topics.map(topic => {
          const Icon = topic.iconComponent;
          return (
            <Link to={`${base_path}${topic.path}`} key={topic.title} className={`large-menu-button white`}>
              <Icon className={`large-menu-icon white`} />
              See all {topic.title}
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects;