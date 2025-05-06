import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from './Component/Supscription/Notification';
import FileSaver from './Component/FileSaver/FileSaver';
import HomePage from './Component/Home/Home';
import Layout from './Component/Layout/Outlet';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path="/notification" element={<Notification/>}/>
          <Route path="/file-saver" element={<FileSaver/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;