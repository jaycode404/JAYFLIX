import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener los datos de la URL
    fetch('http://localhost:3001/videos')
      .then((response) => response.json())
      .then((data) => {
        // Almacena los datos en el estado
        setVideos(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleDeleteVideo = (videoId) => {
    // Mostrar una alerta de confirmación antes de eliminar el video
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
        // Realiza una solicitud HTTP para eliminar el video con el ID especificado
        fetch(`http://localhost:3001/videos/${videoId}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then(() => {
            // Elimina el video del estado
            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
          })
          .catch((error) => {
            console.error('Error al eliminar el video:', error);
          });
      }
    });
  };

  const width = "300px"
  const height = "150px"
  return (
    <div>
      <h1>Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h2>{video.titulo}</h2>
            <p>{video.descripcion}</p>
            <iframe
              width={width}
              height={height}
              src={video.url}
              title={video.titulo} // Usa el título del video como título del iframe
              frameBorder="0"
            ></iframe>
            <button onClick={() => handleDeleteVideo(video.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videos;
