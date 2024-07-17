import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './components/Home';
import Archive from './components/Archive';


function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
