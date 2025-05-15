import { Link, useLocation } from 'react-router-dom';
import { base_path } from './data/portfolioData';

type BreadcrumbsProps = {
  className: string;
}

export default function Breadcrumbs({className}: BreadcrumbsProps) {
  const location = useLocation();

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '');

  return (
    <nav className={`${className} breadcrumbs`}>
      {location.pathname !== base_path && <div>
        <Link className={className} to={base_path}>home</Link>
        {crumbs.map((crumb, index) => {
          const path = '/' + crumbs.slice(0, index + 1).join('/');
          return (
            <span key={index}>
              {crumb !== 'digital-portfolio' && ' / '}
              {crumb !== 'digital-portfolio' && 
                <Link className={className} to={path}>
                  {crumb}
                </Link>}
            </span>
          );
        })}
      </div>}
    </nav>
  );
}
// Optional: make first letter capital {crumb.charAt(0).toUpperCase() + crumb.slice(1)}