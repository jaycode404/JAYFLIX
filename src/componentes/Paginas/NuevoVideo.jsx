import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import styled from 'styled-components';
const StyledContenedor = styled.div`
  width: 40%;
  margin: 0 auto;
  height: 40rem;

`
const StyledFieldText = styled(TextField)`
  margin-bottom: 2rem;
  height: 3rem;
`
const StyledSelect = styled(Select)`
  margin-bottom: 2rem;
`
const StyledForm = styled.form`
  height: 40rem;
`

function VideoForm() {
  const [url, setUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');

  const extractYouTubeVideoId = (url) => {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const videoId = extractYouTubeVideoId(url);

    if (!videoId) {
      console.error('URL de video de YouTube no válida');
      return;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const videoData = {
      url: embedUrl, // Usar la URL de embed en lugar de la URL original
      descripcion,
      categoria,
      titulo,
    };

    fetch('https://raw.githubusercontent.com/jaycode404/api_jayflix/main/db.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(videoData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Video enviado con éxito:', data);
        // Mostrar Sweet Alert
        Swal.fire({
          icon: 'success',
          title: 'Enviado Con Éxito',
          text: 'El video se ha enviado con éxito.',
        }).then(() => {
          // Redireccionar a la página de inicio después de hacer clic en "OK" en Sweet Alert
          window.location.href = '/'; // Cambia la URL de redirección según tu configuración
        });
      })
      .catch((error) => {
        console.error('Error al enviar el video:', error);
      });
  };

  return (
    <StyledContenedor>
      <Typography variant='h3' sx={{ textAlign: 'center', margin: '2rem' }}>Nuevo Video</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFieldText
          label="URL de YouTube"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <StyledFieldText
          label="Descripción"
          variant="outlined"
          fullWidth
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Categoría</InputLabel>
          <StyledSelect
            label="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <MenuItem value="FrontEnd">FrontEnd</MenuItem>
            <MenuItem value="BackEnd">BackEnd</MenuItem>
            <MenuItem value="DevOps">DevOps</MenuItem>
            <MenuItem value="Diseño">Diseño</MenuItem>
            {/* Agrega más opciones de categoría si es necesario */}
          </StyledSelect>
        </FormControl>
        <StyledFieldText
          label="Título"
          variant="outlined"
          fullWidth
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </StyledForm>
    </StyledContenedor>
  );
}

export default VideoForm;
