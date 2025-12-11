import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Archive from './components/Archive';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
