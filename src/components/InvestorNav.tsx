import { Link, useLocation } from 'react-router-dom';

const InvestorNav = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/positions', label: 'Positions' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="nav-link !opacity-100 !font-medium">
          RA
        </Link>
        
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default InvestorNav;