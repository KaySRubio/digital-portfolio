
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import ProjectListPage from './TopicPage';
import ScrollToTop from './ScrollToTop';
import ProjectDetailsPage from '../projectDescriptions/ProjectDetailsPage';
import Notecards from '../vocab/Notecards';
import { topics, projects } from '../../data/portfolioData';

const Wrapper = () => {
  return (
    <div className='page-wrapper'>
      <div className='content'>
        <Menu />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path={'notecards'} element={<Notecards />} />
          {topics.map(topic => (
            <React.Fragment key={topic.path}>
              <Route 
                path={topic.path}
                element={<ProjectListPage topic={topic} />} 
              />
              {/* nested routes within topics for individual projects */}
              {projects
                .filter(project => project.topics.includes(topic.path))
                .map(project => (
                  <Route 
                    key={project.path}
                    path={`${topic.path}/${project.path}`} 
                    element={<ProjectDetailsPage project={project} />} 
                  />
              ))}
            </React.Fragment>
          ))}
          
          {/* individual projects can also be accessed without being underneath a topic */}
          {projects.map(project => (
              <Route 
                key={project.path}
                path={project.path} 
                element={<ProjectDetailsPage project={project} />} 
              />
          ))}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Wrapper;

