import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { helpHttp } from '../../helpers/helpHttp';

function VideoCard({ width, height }) {
    const api = helpHttp();
    const urlVideos = "http://localhost:3001/videos";

    // Estados para almacenar propiedades de 'res'
    const [videoTitulo, setVideoTitulo] = useState("");
    const [videoImagen, setVideoImagen] = useState("");
    const [videoId, setVideoId] = useState("");
    const [videoDescripcion, setVideoDescripcion] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        api.get(urlVideos).then(res => {
            if (res && res.length > 0) {
                const primeraEntrada = res[0];
                setVideoTitulo(primeraEntrada.titulo);
                setVideoImagen(primeraEntrada.imagen);
                setVideoId(primeraEntrada.id);
                setVideoDescripcion(primeraEntrada.descripcion);
                setVideoUrl(primeraEntrada.url);
            }
        });
    }, []);

    return (
        <Card sx={{ width: { width }, height: '20rem' /*  { height } */ }}>
            {/* Imagen o video de portada */}
            <CardMedia
                sx={{ border: 'none', height: `calc(${height} - 2rem)` }}
                className='video__imagen'
                component="iframe"
                src={videoUrl} // Usar la imagen almacenada en el estado
                title="Video title"
            />

            {/* Contenido de la tarjeta */}
            <CardContent
                sx={{
                    padding: '.3rem'
                }}>
                <Typography
                    sx={{
                        fontSize: 14,
                    }}>
                    Título: {videoTitulo} {/* Usar el título almacenado en el estado */}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 14,
                    }}>
                    ID: {videoId} {/* Usar el ID almacenado en el estado */}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 14,
                    }}>
                    Descripción: {videoDescripcion} {/* Usar la descripción almacenada en el estado */}
                </Typography>
                <Typography
                    sx={{
                        fontSize: 14,
                    }}>
                    URL: {videoUrl} {/* Usar la URL almacenada en el estado */}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default VideoCard;
