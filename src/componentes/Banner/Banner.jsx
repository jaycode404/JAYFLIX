import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const spanStyle = {
  color: "#ff0000", // Cambia este color a tu elección
};

export default function Banner() {
  const urlVideos = "https://raw.githubusercontent.com/jaycode404/api_jayflix/main/db.json";

  // Estado para almacenar la lista de videos
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realizar la solicitud GET a la URL para obtener la lista de videos
    fetch(urlVideos)
      .then((response) => response.json())
      .then((data) => {
        // Obtener la lista de videos desde la estructura de datos
        const videoList = data.videos || []; // Asegurarse de que exista "videos" en los datos

        setVideos(videoList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de videos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "20rem",
        marginTop: "2rem",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h2">
          El mejor contenido para <span style={spanStyle}>Coders</span>
        </Typography>

        <Typography variant="body.1">
          Tu plataforma favorita para ver contenido de programadores
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
          padding: "1rem",
          borderRadius: ".3rem",
        }}
      >
        {loading ? (
          <p>Cargando video...</p>
        ) : (
          <iframe
            width="100%"
            height="300"
            src={videos.length > 0 ? videos[videos.length - 1].url : ""}
            title="Último Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </Grid>
    </Grid>
  );
}
