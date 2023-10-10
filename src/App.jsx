import React, { useContext } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
