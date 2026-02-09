import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { to: isHome ? '#home' : '/#home', label: 'Home' },
    { to: isHome ? '#about' : '/#about', label: 'About' },
    { to: isHome ? '#games' : '/#games', label: 'Games' },
    { to: isHome ? '#team' : '/#team', label: 'Team' },
    { to: isHome ? '#contact' : '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">RAYLEIGH</span>
          <span className="brand-subtitle">STUDIOS</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ to, label }) => (
              <li key={label} className="nav-item">
                {to.startsWith('#') ? (
                  <a className="nav-link" href={to}>
                    {label}
                  </a>
                ) : (
                  <Link className="nav-link" to={to}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
