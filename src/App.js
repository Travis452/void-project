
import { UploadProvider } from './context/UploadContext.js';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Upload from './pages/Upload.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
function App() {
  return (
    <UploadProvider>
      <div className="App">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>





      </div>
    </UploadProvider>
  );
}

export default App;
