import { Link, useLocation } from 'react-router-dom';
import { base_path } from './data/portfolioData';

export default function Breadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '');

  return (
    <nav>
      {location.pathname !== base_path && <div>
        <Link to={base_path}>Home</Link>
        {crumbs.map((crumb, index) => {
          console.log('crumb: ', crumb);
          const path = '/' + crumbs.slice(0, index + 1).join('/');
          return (
            <span key={index}>
              {crumb !== 'digital-portfolio' && ' / '}
              {crumb !== 'digital-portfolio' && 
                <Link to={path}>
                  {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                </Link>}
            </span>
          );
        })}
      </div>}
    </nav>
  );
}