import React from 'react';
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
  return (
    <>
      <Banner />
      <VideoSlider/>
      <VideoSlider/>
      <VideoSlider/>
    </>
  );
}


export default App;
