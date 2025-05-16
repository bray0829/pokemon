import { useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import { supabase } from "./supabase";
import Aleatorio from './Componentes/Aleatorios'
import Capturado from './Componentes/Capturados'
import Favorito from './Componentes/Favoritos'
import Lista from './Componentes/Listas'
import Pokemon from './Componentes/Pokemon'
import Usuarios from './Componentes/Usuarios'
import Menu from './Componentes/Menu';
import './App.css'
import Login from './Componentes/login';
import Registro from './Componentes/Registro';

    function App() {
      const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
    async function verificarSesion() {
    const { data: { session } } = await supabase.auth.getSession();
    setUsuario(session?.user || null);
    setCargando(false);
    }
    verificarSesion();

    // Escucha cambios en la sesión
    supabase.auth.onAuthStateChange((_event, session) => {

    setUsuario(session?.user || null);
    });
    }, []);

    if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
    <Router>

      {usuario && <Menu />}

<Routes>
<Route path="/" element={usuario ? <Lista /> : <Navigate to="/login"/>} />

<Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />

<Route path="/aleatorios" element={usuario ? <Aleatorio /> :<Navigate to="/login" />} />

<Route path="/capturados" element={usuario ? <Capturado /> :<Navigate to="/login" />} />

<Route path="/favoritos" element={usuario ? <Favorito /> :<Navigate to="/login" />} />

<Route path="/Pokemon/:name" element={usuario ? <Pokemon /> :<Navigate to="/login" />} />

<Route path="/login" element={<Login/>} />
<Route path="/registro" element={<Registro/>} />

</Routes>

</Router>

</AppProvider>

);
}
export default App;