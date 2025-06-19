import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes className="app">
        <Route path="/" Component={Home} exact />
        <Route Component={NasaPhoto} path="/nasaphoto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
