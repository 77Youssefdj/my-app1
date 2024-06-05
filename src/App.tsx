import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Cv from './screens/cv';
import Formulaire from './screens/formulaire';

function App() {
  return (
    <Router basename="/my-app1">
      <div className="route">
        <Routes>
          <Route path="/" element={<Cv />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Handle unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
