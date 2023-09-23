import React, { useEffect, useState } from 'react';
import VideoCard from '../Video/VideoCard';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '@mui/material/Typography';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Slider.css';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slider-arrow prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slider-arrow next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

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
  const urlVideos = "https://raw.githubusercontent.com/jaycode404/api_jayflix/main/db.json";

  // Estado para almacenar la lista de videos
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la URL para obtener los datos
    fetch(urlVideos)
      .then((response) => response.json())
      .then((data) => {
        // Verifica que los datos tengan la estructura adecuada antes de mapear
        if (data && Array.isArray(data.videos)) {
          setVideos(data.videos.filter((video) => video.categoria === categoria));
        } else {
          console.error("Los datos no tienen la estructura adecuada:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la información de los videos:", error);
      });
  }, [categoria]);

 // Calcula la cantidad de videos disponibles
const numVideos = videos.length;

// Configura slidesToShow para ser 1 si hay 1 video, 2 si hay 2, o máximo 3
const slidesToShow = numVideos === 1 ? 1 : Math.min(3, numVideos);

const sliderSettings = {
  infinite: true,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};
  const videoCards = videos.map((video) => (
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
