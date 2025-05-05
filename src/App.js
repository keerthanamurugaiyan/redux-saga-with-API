import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from './Component/Supscription/Notification';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/hlo" element={<Hlo/>}/> */}
          {/* <Route path="/filesaver" element={<FileSaverComponent/>}/> */}
          {/* <Route path="/notification" element={<ProductForm/>}/> */}
          <Route path="/" element={<Notification/>}/>
          {/* <Route path="/s" element={<FormikVsUseFormik/>}/> */}
          {/* <Route path="/downloadpdf" element={<CroModalViewer/>}/> */}
          {/* <Route path="/workout" element={<Workout/>}/> */}
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;