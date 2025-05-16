// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import React from 'react';
import Table from './Table';
import DisclosurePanel from './DisclosurePanel';
import TechStack from './TechStack';
import type { Project, ProjectDetailComponent } from '../types/portfolioTypes';
import './projectDetails.css'

type ProjectDetailsPageProps = {
  project: Project;
}

const ProjectDetailsPage = ({project}: ProjectDetailsPageProps) => {

  // loops through project_details array and renders each item as a component with that data
  // if project_details is empty, displays the Coming Soon page
  // TODO
  const renderComponent = (data: ProjectDetailComponent, key: number | null = null) => {
    let returnComponent;
    let children;

    switch(data.type) {
      case 'h2':
      case 'h3':
      case 'h4':
        returnComponent = React.createElement(data.type, {key: key}, data.text);
        break;
      case 'text':
        returnComponent = <span key={key}>{data.text}</span>
        break;
      case 'p':
        returnComponent = <p key={key}>{data.text}</p>
        break;
      case 'a':
        returnComponent = (<a key={key} href={data.href}>{data.text}</a>);
        break;
      case 'img':
        returnComponent = (<img key={key} src={data.src} className={data.className ? data.className : 'default-img'} />);
        break;
      case 'table':
        returnComponent = <Table key={key} data={data} />
        break;
      case 'ul':
      case 'ol':
        children = data.elements.map((el, index) => (<li key={index}>
          {renderComponent(el, key)}
        </li>))
        returnComponent = React.createElement(data.type, {key: key}, children)
        break;
      case 'div':
        returnComponent = (
          <div className={data.className} key={key}>
            {data.elements.map((el, key) => renderComponent(el, key))}
          </div>
        )
        break;
      case 'DisclosurePanel':
        returnComponent = (
          <DisclosurePanel title={data.title} index={key}>
            {data.elements.map((el, key) => renderComponent(el, key))}
          </DisclosurePanel>
        )
        break;
      case 'TechStack':
        returnComponent = (
          <TechStack techList={data.techList} index={key} className='project-details-tech-stack-row' />
        )
        break;
      default:
        returnComponent = (<div key={key}></div>);
    } 
    return (
      returnComponent
    )
  }

  return (
    <div className='project-details'>
      <h1>{project.title}</h1>
      <p className='project-date'>{project.date}</p>
      {project.project_details.map((componentData, index) => (
        renderComponent(componentData, index)
      ))}
    </div>
  )
}

export default ProjectDetailsPage;
// {visibleProjectsOnTopic.map(project => ( <ProjectCard key={project.path} project={project} theme='blue' />))}
