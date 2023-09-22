import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AppBar, Toolbar, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';

const theme = createTheme();

const ContenedorVideos = styled.div`
  width: 100%;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem;
  padding: 1rem;
`;

const ContenedorDiv = styled.div`
  padding: 0.5rem;
  width: calc(25% - 1rem); /* Calcula el 25% del ancho de la pantalla y resta 1rem de espacio entre elementos */
`;

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/videos')
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleDeleteVideo = (videoId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/videos/${videoId}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then(() => {
            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
          })
          .catch((error) => {
            console.error('Error al eliminar el video:', error);
          });
      }
    });
  };

  const width = '250px';
  const height = '150px';

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: '2rem', width: '100%', overflow: 'hidden' }}>
        <Typography variant='h2' sx={{ padding: '1rem' }}>Videos</Typography>
        <ContenedorVideos>
          {videos.map((video) => (
            <ContenedorDiv key={video.id}>
              <h2 style={{ margin: '0', height: '2rem', width: width, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{video.titulo}</h2>
              <p style={{ margin: '0', height: '2rem', width: width, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{video.descripcion}</p>
              <iframe
                width={width}
                height={height}
                src={video.url}
                title={video.titulo}
                frameBorder="0"
              ></iframe>
              <Button style={{ color: '#ff0000' }} onClick={() => handleDeleteVideo(video.id)}>Borrar</Button>
            </ContenedorDiv>
          ))}
        </ContenedorVideos>
      </div>
    </ThemeProvider>
  );
}


export default Videos;
