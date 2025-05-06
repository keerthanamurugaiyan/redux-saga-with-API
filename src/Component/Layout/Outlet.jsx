// import React from 'react';
// import Navigate from './Navigate';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     // <div>
//        <div
//       style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #e8d9f3, #d6c3ee)',
//         overflowX: 'hidden',
//       }}
//     >
//       <Navigate />
//       {/* <div className=" d-flex justify-content-center mt-3"> */}
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;









import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigate from './Navigate';
import Footer from './Footer';
import FloatingHearts from './FloatingHearts';

const routeBackgrounds = {
  '/': 'linear-gradient(135deg, #e8d9f3, #d6c3ee)',          // home
  '/notification': '#DED3B2', // yellowish
  '/file-saver': '#AD8C85',   // greenish
  '/cro-pdf': 'linear-gradient(135deg, #D0E7FF, #87CEEB)',      // bluish
};

const Layout = () => {
  const { pathname } = useLocation();
  const background = routeBackgrounds[pathname] || 'linear-gradient(135deg, #e8d9f3, #d6c3ee)';

  return (
    <div
      style={{
        minHeight: '100vh',
        background,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FloatingHearts />
      <Navigate />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


