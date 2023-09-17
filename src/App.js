import React from 'react';
import VideoCard from './componentes/Video/VideoCard';
import NavBar from './componentes/Header/Header';
import Seccion from './componentes/Seccion/Seccion';
import Banner from './componentes/Banner/Banner';
import MySlider from './componentes/Slider/Slider';
import './App.css'
function App() {
  return (
    <>
      <NavBar className='componente__uno' />
      <Banner />
      <MySlider />
      <MySlider/>
      <MySlider />
    </>
  );
}

export default App;
