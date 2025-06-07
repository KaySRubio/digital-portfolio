import React from 'react';
import get from 'lodash.get';
import type { ProjectDetailComponent } from '../types/portfolioTypes';
import Table from '../components/projectDescriptions/Table';
import DisclosurePanel from '../components/projectDescriptions/DisclosurePanel';
import DemoBoard from '../components/visualAudioDemo/DemoBoard';
import TechStack from '../components/projectDescriptions/TechStack';
import GoalAndGithub from '../components/projectDescriptions/GoalAndGithub';

// loops through project_details array and renders each item as a component with that data
export const renderComponent = (data: ProjectDetailComponent, key: number | null = null, resultData?: any) => {
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
      case 'textFromPath':
        if(resultData) {
          el = get(resultData, data.path, 'Error: Could not find data from path')
        } else {
          el = 'Error: Could not find data'
        }
        returnComponent = <span key={key}>{el}</span>
        break;
      default:
        returnComponent = null;
    } 
  return returnComponent;
};