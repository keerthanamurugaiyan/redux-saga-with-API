import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { CgMenuHotdog } from "react-icons/cg";
import logo from "../Assets/logo.png";

const hoverStyle = {
  '/': {
    bg: 'linear-gradient(135deg, #e8d9f3, #d6c3ee)',
    hover: {
      backgroundColor: '#B59ED5',
      color: 'white',
    },
  },
  '/notification': {
    bg: 'linear-gradient(135deg, #FFF1D0, #FFD700)',
    hover: {
      backgroundColor: '#E6B800',
      color: '#000',
    },
  },
  '/file-saver': {
    bg: 'linear-gradient(135deg, #D0F0C0, #90EE90)',
    hover: {
      backgroundColor: '#AC757B',
      color: '#fff',
    },
  },
  '/cro-pdf': {
    bg: 'linear-gradient(135deg, #D0E7FF, #87CEEB)',
    hover: {
      backgroundColor: '#5BA4E5',
      color: '#fff',
    },
  },
};

const routeItems = [
  { to: '/notification', label: 'Notifications' },
  { to: '/file-saver', label: 'File Download' },
  { to: '/cro-pdf', label: 'CRO PDF' },
];

const Navigate = () => {
  const location = useLocation();

  const currentHover = hoverStyle[location.pathname]?.hover || {
    backgroundColor: '#9F7B73',
    color: 'white',
  };

  const getNavbarStyle = () => {
    switch (location.pathname) {
      case '/notification': return '#5D6C5B';
      case '/file-saver': return '#293B3C';
      case '/cro-pdf': return '#2C3D5C';
      default: return '#40354A';
    }
  };

  return (
    <Navbar
      expand="sm"
      className="shadow mt-3"
      style={{
        backgroundColor: getNavbarStyle(),
        borderRadius: "12px",
        width: "90%",
        margin: "0 auto",
        padding: "10px 20px",
      }}
    >
      <div className="container-fluid px-0">
        <NavLink to="/" className="navbar-brand">
          <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain', color: "whitesmoke" }}
            />
          </div>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={<span className="text-light fs-3"><CgMenuHotdog /></span>}
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              {routeItems.map(({ to, label }) => (
                <NavDropdown.Item
                  key={to}
                  as={NavLink}
                  to={to}
                  className="text-decoration-none"
                  style={({ isActive }) =>
                    isActive ? currentHover : undefined
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentHover.backgroundColor;
                    e.currentTarget.style.color = currentHover.color;
                  }}
                  onMouseLeave={(e) => {
                    const isActive = e.currentTarget.classList.contains('active');
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                    }
                  }}
                >
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigate;