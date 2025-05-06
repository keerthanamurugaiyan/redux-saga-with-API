// import React from 'react';
// import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { CgMenuHotdog } from "react-icons/cg";

// const hoverStyle = {
//   backgroundColor: '#9F7B73',
//   color: 'white',
// };

// const Navigate = () => {
//   return (
//     <Navbar
//       expand="sm"
//       className="shadow mt-3"
//       style={{
//         backgroundColor: "#40354A",
//         borderRadius: "12px",
//         width: "90%",
//         margin: "0 auto",
//         padding: "10px 20px",
//       }}
//     >
//       <div className="container-fluid px-0">
//         <NavLink to="/" className="navbar-brand text-light fw-bold">
//           Crup Application
//         </NavLink>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavDropdown
//               title={
//                 <span className="text-light fs-3">
//                   <CgMenuHotdog />
//                 </span>
//               }
//               id="basic-nav-dropdown"
//               menuVariant="dark"
//               style={{ position: 'relative' }}
//               renderMenuOnMount={true}
//               popperConfig={{
//                 modifiers: [
//                   {
//                     name: 'offset',
//                     options: {
//                       offset: [0, 10],
//                     },
//                   },
//                 ],
//               }}
//             >
//               <div >
//                 {/* <div style={dropdownMenuStyle}> */}
//                 {/* <NavDropdown.Item
//                   as={NavLink}
//                   to="/notification"
//                   className="text-decoration-none"
//                   style={({ isActive }) =>
//                     isActive ? hoverStyle : {}
//                   }
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
//                     e.currentTarget.style.color = hoverStyle.color;
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.backgroundColor = '';
//                     e.currentTarget.style.color = '';
//                   }}
//                 >
//                   Notifications
//                 </NavDropdown.Item> */}

//                 <NavDropdown.Item
//                   as={NavLink}
//                   to="/notification"
//                   className="text-decoration-none"
//                   style={({ isActive }) => (isActive ? hoverStyle : {})}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
//                     e.currentTarget.style.color = hoverStyle.color;
//                   }}
//                   onMouseLeave={(e) => {
//                     const isActive = e.currentTarget.classList.contains('active');
//                     if (!isActive) {
//                       e.currentTarget.style.backgroundColor = '';
//                       e.currentTarget.style.color = '';
//                     }
//                   }}
//                 >
//                   Notifications
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={NavLink}
//                   to="/file-saver"
//                   className="text-decoration-none"
//                   style={({ isActive }) => (isActive ? hoverStyle : {})}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
//                     e.currentTarget.style.color = hoverStyle.color;
//                   }}
//                   onMouseLeave={(e) => {
//                     const isActive = e.currentTarget.classList.contains('active');
//                     if (!isActive) {
//                       e.currentTarget.style.backgroundColor = '';
//                       e.currentTarget.style.color = '';
//                     }
//                   }}
//                 >
//                   File Download
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   as={NavLink}
//                   to="/cro-pdf"
//                   className="text-decoration-none"
//                   style={({ isActive }) => (isActive ? hoverStyle : {})}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
//                     e.currentTarget.style.color = hoverStyle.color;
//                   }}
//                   onMouseLeave={(e) => {
//                     const isActive = e.currentTarget.classList.contains('active');
//                     if (!isActive) {
//                       e.currentTarget.style.backgroundColor = '';
//                       e.currentTarget.style.color = '';
//                     }
//                   }}
//                 >
//                   CRO PDF
//                 </NavDropdown.Item>
//               </div>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// };

// export default Navigate;








import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { CgMenuHotdog } from "react-icons/cg";

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
        <NavLink to="/" className="navbar-brand text-light fw-bold">
          Crup Application
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

