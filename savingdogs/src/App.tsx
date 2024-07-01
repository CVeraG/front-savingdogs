import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoPet from './InfoPet';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import LandingPage from './LandingPage';
import InfoAparicion from './InfoAparicion';
import InfoDesaparicion from './InfoDesaparicion';
import RegistroPerdido from './RegistroPerdido';
import RegistroEncontrado from './RegistroEncontrado';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InicioPage from './InicioPage';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/signin" element={<InicioSesion />} />
        <Route path="/signup" element={<Registro />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/infoappear/:dog" element={<InfoAparicion />} />
        <Route path="/infodesappear/:dog" element={<InfoDesaparicion />} />
        <Route path="/perdido" element={<RegistroPerdido />} />
        <Route path="/encontrado" element={<RegistroEncontrado />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
