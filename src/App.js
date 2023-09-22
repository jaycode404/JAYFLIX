import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from './componentes/Header/Header';
import Banner from './componentes/Banner/Banner';
import MySlider from './componentes/Slider/Slider';
import Videos from './componentes/Paginas/Videos';
import NuevoVideo from './componentes/Paginas/NuevoVideo';
import AcercaDe from './componentes/Paginas/AcercaDe';
import Seccion from './componentes/Seccion/Seccion';
import './App.css';
import VideoSlider from './componentes/Slider/Slider';

function App() {
  return (
    <Router>
      <NavBar className='componente__uno' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const urlVideos = "http://localhost:3001/videos";

  // Estado para almacenar la lista de categorías disponibles
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la URL para obtener la lista de categorías
    fetch(urlVideos)
      .then((response) => response.json())
      .then((data) => {
        // Obtener las categorías únicas de los videos
        const categoriasUnicas = [...new Set(data.map((video) => video.categoria))];
        setCategorias(categoriasUnicas);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de categorías:", error);
      });
  }, []);

  return (
    <>
      <Banner />
      {categorias.map((categoria) => (
        <VideoSlider key={categoria} categoria={categoria} />
      ))}
    </>
  );
}

export default App;
