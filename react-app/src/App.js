import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import SchemaSelectionPage from './Pages/SchemaSelectionPage'
import NoPage from './Pages/NoPage'
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} /> {/* Root URL when the app is accessed*/}
          <Route path="/LandingPage" element={<LandingPage />} /> {/* To make sure this path is also valid, without the root path*/}
          <Route path="/SchemaSelectionPage" element={<SchemaSelectionPage />} /> 
          <Route path="*" element={<NoPage />} /> {/*Anything other than what is already defined*/}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
