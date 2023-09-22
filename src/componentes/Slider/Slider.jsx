import React, { useEffect, useState } from 'react';
import VideoCard from '../Video/VideoCard';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '@mui/material/Typography';

const StyledSlider = styled(Slider)`
  width: 100%;
  margin: 0 0 2rem 0;
`;

const StyledDiv = styled.div`
  padding: 1rem;
  height: 17rem;
  margin: 0 0 2rem 0;
`;

function VideoSlider({ categoria }) {
  const urlVideos = "http://localhost:3001/videos";

  // Estado para almacenar la lista de videos
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la URL para obtener los videos
    fetch(urlVideos)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error("Error al obtener la información de los videos:", error);
      });
  }, []);

  // Filtrar los videos por la categoría asignada
  const filteredVideos = videos.filter((video) => video.categoria === categoria);
  // Calcula la cantidad de videos en la categoría actual
  const videosEnCategoria = videos.filter((video) => video.categoria === categoria);

  // Calcula la cantidad de elementos a mostrar en el slider
  let slidesToShow = 3; // Por defecto, muestra 3 elementos

  if (videosEnCategoria.length === 1) {
    slidesToShow = 1; // Si solo hay un video, muestra 1 elemento
  } else if (videosEnCategoria.length === 2) {
    slidesToShow = 2; // Si hay dos videos, muestra 2 elementos
  }
  // Configuración del slider
  const sliderSettings = {
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Renderizar los VideoCard para cada elemento en la lista de videos filtrados
  const videoCards = filteredVideos.map((video) => (
    <VideoCard
      width='360px'
      height='230px'
      margin='1rem'
      key={video.id}
      titulo={video.titulo}
      descripcion={video.descripcion}
      url={video.url}
    />
  ));

  return (
    <StyledDiv>
      <Typography variant='h3' sx={{ marginLeft: '1rem' }}>{categoria}</Typography>
      <StyledSlider {...sliderSettings}>
        {videoCards}
      </StyledSlider>
    </StyledDiv>
  );
}

export default VideoSlider;
