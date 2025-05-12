
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import ProjectListPage from './TopicPage';
import ProjectDetailsPage from './ProjectDetailsPage';
// import { projectList, base_path } from './data/portfolioData';
import { topics, projects, base_path } from './data/portfolioData';
import Breadcrumbs from './Breadcrumbs';

import './App.css'

const Wrapper = () => {
  return (
    <div>
      <Menu />
      <Breadcrumbs />
      <Routes>
        <Route path={base_path} element={<Home />} />
        {topics.map(topic => (
          <React.Fragment key={topic.path}>
            <Route 
              path={`${base_path}${topic.path}`} 
              element={<ProjectListPage topic={topic} />} 
            />
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
        
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Wrapper;

/*
           {projects.map(project => (
              <Route 
                key={project.title}
                // path={`${base_path}${project.path}/${project.path}`} 
                path={`${base_path}${topic.path}/${project.path}`} 
                element={<ProjectDetailsPage data={project} />} 
              />
            ))}
*/

/*
        {projectList.map(projectGroup => (
          <React.Fragment key={projectGroup.path}>
            <Route 
              path={`${base_path}${projectGroup.path}`} 
              element={<ProjectListPage data={projectGroup} />} 
            />
            {projectGroup.projects.map(project => (
              <Route 
                key={project.title}
                path={`${base_path}${projectGroup.path}/${project.path}`} 
                element={<ProjectDetailsPage data={project} />} 
              />
            ))}
          </React.Fragment>
        ))}
*/

