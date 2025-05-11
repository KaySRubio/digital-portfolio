
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import ProjectListPage from './ProjectListPage';
import ProjectDetailsPage from './ProjectDetailsPage';
import { projectList } from './data/portfolioData';
import Breadcrumbs from './Breadcrumbs';

import './App.css'

const Wrapper = () => {
  return (
    <div>
      <Menu />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        {projectList.map(projectGroup => (
          <React.Fragment key={projectGroup.path}>
            <Route 
              path={`/${projectGroup.path}`} 
              element={<ProjectListPage data={projectGroup} />} 
            />
            {projectGroup.projects.map(project => (
              <Route 
                key={project.title}
                path={`${projectGroup.path}/${project.path}`} 
                element={<ProjectDetailsPage data={project} />} 
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

