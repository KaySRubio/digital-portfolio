import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '');

  return (
    <nav>
      <Link to="/">Home</Link>
      {crumbs.map((crumb, index) => {
        const path = '/' + crumbs.slice(0, index + 1).join('/');
        return (
          <span key={index}>
            {' / '}
            <Link to={path}>{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</Link>
          </span>
        );
      })}
    </nav>
  );
}