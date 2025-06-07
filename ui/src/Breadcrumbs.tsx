import { Link, useLocation } from 'react-router-dom';

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
      {location.pathname !== '/' && <div>
        <Link className={className} to={''}>home</Link>
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
