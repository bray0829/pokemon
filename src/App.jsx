import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import Aleatorio from './Componentes/Aleatorios'
import Capturado from './Componentes/Capturados'
import Favorito from './Componentes/Favoritos'
import Lista from './Componentes/Listas'
import Pokemon from './Componentes/Pokemon'
import Usuario from './Componentes/Usuarios'
import Menu from './Componentes/Menu';
import './App.css'

function App() {

  return (
    <AppProvider>
    <Router>

      <Menu />

      <Routes>
        <Route path="/Aleatorios" element={<Aleatorio />} />
        <Route path="/Capturados" element={<Capturado />} />
        <Route path="/Favoritos" element={<Favorito />} />
        <Route path="/" element={<Lista />} />
        <Route path="/Pokemon/:name" element={<Pokemon />} />
        <Route path="/Usuarios" element={<Usuario />} />
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App