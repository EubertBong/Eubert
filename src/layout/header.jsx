import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();

  const [ isMenu, setIsMenu ] = useState(false);

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top py-0 navbar-transparent" 
      style={{ 
        zIndex: 1050,
        backgroundColor: 'transparent',
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="container-lg">
        <Link className="navbar-brand fs-3 fs-md-4" to="/">
          <span className="fw-bold" style={{ color: '#cd2eff' }}>Eubert Bong</span>
          <span className="fw-bold text-white"> Nocepida</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenu(!isMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenu ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto text-center text-md-start">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/" 
                onClick={() => setIsMenu(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} 
                to="/projects" 
                onClick={() => setIsMenu(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} 
                to="/blogs" 
                onClick={() => setIsMenu(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about" 
                onClick={() => setIsMenu(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact" 
                onClick={() => setIsMenu(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
