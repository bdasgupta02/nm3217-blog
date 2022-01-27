import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import PageWrapper from './components/PageWrapper';
const Placeholder = () => (<PageWrapper><div>This is a placeholder page</div><div style={{ width: '1px', height: '3000px' }}></div></PageWrapper>)

function App() {
  return (
    <Router>
      <div style={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
        <Routes>

          {/* Add pages here with Routes */}
          <Route path="/assignments" element={<Placeholder />} />
          <Route path="/assignment/:id" element={<Placeholder />} />
          <Route path="/lecture_exercises" element={<Placeholder />} />
          <Route path="/lecture_exercise/:id" element={<Placeholder />} />
          <Route path="/final_project" element={<Placeholder />} />

          {/* Keep the last one for the home page */}
          <Route path="/" element={<Placeholder />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;
