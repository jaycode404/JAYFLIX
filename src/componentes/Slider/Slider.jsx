import React, { useEffect, useState } from 'react';
import VideoCard from '../Video/VideoCard';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typography from '@mui/material/Typography'; // Importa el componente Typography

const StyledSlider = styled(Slider)`
    width: 100%;
    margin: 0 0 2rem 0;
`;

const StyledDiv = styled.div`
    padding: 1rem;
    height: 17rem;
    margin: 0 0 2rem 0;

`

function VideoSlider() {
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

    // Configuración del slider
    const sliderSettings = {
        infinite: true,
        slidesToShow: 3, // Cambia el número de elementos a mostrar por slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Intervalo de cambio de slide en milisegundos
    };

    // Renderizar los VideoCard para cada elemento en la lista de videos
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
            <Typography variant='h3' sx={{marginLeft: '1rem'}}>Hola</Typography> {/* Agrega el Typography */}
            <StyledSlider {...sliderSettings}>
                {videoCards}
            </StyledSlider>
        </StyledDiv>
    );
}

export default VideoSlider;
