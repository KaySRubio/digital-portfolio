import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard'
// https://nearform.com/open-source/nuka-carousel/docs/api/navigation
import { Carousel, } from 'nuka-carousel';

const FeaturedProjects = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  // find only the featured projects from the projectList
  const featured_projects = projects
  .filter(project => project.featured);

  return (
    <div>
      <div className="featured-projects-section" onClick={() => setAutoPlay(false)}>
        <h2>Featured Projects</h2>
        <Carousel 
          autoplay={autoPlay}
          showDots={true}
          showArrows={true}
          scrollDistance='slide'
          wrapMode='wrap'
        >
          {featured_projects.map(project => ( <ProjectCard key={project.path} project={project} theme='dark' />))}
        </Carousel>
      </div>
    </div>
  )
}

export default FeaturedProjects;
