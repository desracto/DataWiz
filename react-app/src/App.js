import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page Imports
import LandingPage from './Pages/LandingPage'
import SchemaSelectionPage from './Pages/SchemaSelectionPage'
import LogInPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import NotFound from './Pages/NotFound'
import QuizFilters from './Pages/QuizFilters'
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} /> {/* Root URL when the app is accessed*/}
          <Route path="/LandingPage" element={<LandingPage />} /> {/* To make sure this path is also valid, without the root path*/}
          <Route path="/SchemaSelectionPage" element={<SchemaSelectionPage />} /> 
          <Route path="/LogIn" element={<LogInPage/>} />
          <Route path="/SignUp" element={<SignUpPage/>} />
          <Route path="/QuizFilters/" element={<QuizFilters/>} />
          <Route path="*" element={<NotFound />} /> {/*Anything other than what is already defined*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
