import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Topnavigation from './component/Topnavigation';
import Dashboard from './component/Dashboard';
import CreateAd from './component/CreateAd';
import TextAd from './component/TextAd';
import MediaAd from './component/MediaAd'; 

function App() {
  return (
    <BrowserRouter>
      <Topnavigation />
      <Routes>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/createad" element={<CreateAd />} />
  <Route path="/textad" element={<TextAd />} />
  <Route path="/mediaad" element={<MediaAd />} />
  <Route path="/*" element={<Navigate to="/dashboard" />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
