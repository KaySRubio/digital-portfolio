// This component shows details about an individual project
// by rendering the projectPageComponents from the projectPageData array
import React from 'react';
import Table from './Table';
import DisclosurePanel from './DisclosurePanel';
import DemoBoard from './demoComponents/DemoBoard';
import TechStack from './TechStack';
import GoalAndGithub from './GoalAndGithub';
import type { Project, ProjectDetailComponent } from '../types/portfolioTypes';
import './projectDetails.css'

type ProjectDetailsPageProps = {
  project: Project;
}

const ProjectDetailsPage = ({project}: ProjectDetailsPageProps) => {

  // loops through project_details array and renders each item as a component with that data
  // TODO if project_details is empty, displays the Coming Soon page
  const renderComponent = (data: ProjectDetailComponent, key: number | null = null) => {
    let returnComponent;
    let children;
    let el;
    let Icon;

    switch(data.type) {
      case 'h2':
      case 'h3':
      case 'h4':
        returnComponent = React.createElement(data.type, { key }, data.text);
        break;
      case 'text':
        returnComponent = <span key={key}>{data.text}</span>
        break;
      case 'p':
        returnComponent = <p key={key} className={data.className}>{data.text}</p>
        break;
      case 'a':
        if(data.text) {
          returnComponent = (<a key={key} href={data.href}>{data.text}</a>);
        } else if (data.children) {
          children = data.children.map((element, index) => {
            return (renderComponent(element, index))})
          returnComponent = (<div key={key}>{children}</div>)
        }
        break;
      case 'img':
        returnComponent = (<img key={key} src={data.src} className={data.className ? data.className : 'default-img'} />);
        break;
      case 'table':
        returnComponent = <Table key={key} data={data} />
        break;
      case 'ul':
      case 'ol':
        children = data.childGroup.map((childGroup, index) => {
          return (
          <li key={index} className={data.className}>
            { childGroup.map((el, i) => renderComponent(el, i)) }
          </li>
        )})
        returnComponent = React.createElement(data.type, {key: key}, children)
        break;
      case 'div':
        children = data.childGroup.map((el, i) => renderComponent(el, i))
        returnComponent = (<div key={key} className={data.className}>{children}</div>)
        break;
      case 'GoalAndGithub':
        children = data.childGroup.map((el, i) => renderComponent(el, i))
        returnComponent = (<GoalAndGithub key={key} className={data.className} href={data.href}>{children}</GoalAndGithub>)
        break;
      case 'DisclosurePanel':
        el = renderComponent(data.title, key);
        returnComponent = (
          <DisclosurePanel key={key} title={el} index={key} >
            { data.children.map((el, idx) => renderComponent(el, idx))}
          </DisclosurePanel>
        )
        break;
      case 'TechStack':
        returnComponent = (
          <TechStack key={key} techList={data.techList} className='project-details-tech-stack-row' />
        )
        break;
      case 'svg':
        Icon = data.src;
        returnComponent = (
          <span key={key} role='img' aria-label={data.alt} >
            <Icon className={data.className} />
          </span>
        )
        break;
      case 'DemoBoard':
        returnComponent = <DemoBoard key={key} data={data} />
        break;
      default:
        returnComponent = null;
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
