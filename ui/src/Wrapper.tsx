
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import ProjectListPage from './TopicPage';
import ProjectDetailsPage from './projectDetailsComponents/ProjectDetailsPage';
import { topics, projects, base_path } from './data/portfolioData';

import './App.css'

const Wrapper = () => {
  return (
    <div className='page-wrapper'>
      <div className='content'>
        <Menu />
        <Routes>
          <Route path={base_path} element={<Home />} />
          {topics.map(topic => (
            <React.Fragment key={topic.path}>
              <Route 
                path={`${base_path}${topic.path}`} 
                element={<ProjectListPage topic={topic} />} 
              />
              {/* nested routes within topics for individual projects */}
              {projects
                .filter(project => project.topics.includes(topic.path))
                .map(project => (
                  <Route 
                    key={project.path}
                    path={`${base_path}${topic.path}/${project.path}`} 
                    element={<ProjectDetailsPage project={project} />} 
                  />
              ))}
            </React.Fragment>
          ))}
          {/* individual projects can also be accessed without being underneath a topic */}
          {projects.map(project => (
              <Route 
                key={project.path}
                path={`${base_path}${project.path}`} 
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

