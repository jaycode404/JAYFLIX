import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function VideoCard({ width, height, margin, id, titulo, descripcion, url }) {
    // Verifica si video es undefined antes de usarlo

    return (
        <div>
            <Card sx={{ width: { width }, height: { height }, margin: {margin}, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)' }}>
                {/* Imagen o video de portada */}
                <CardMedia
                    component="iframe"
                    sx={{
                        border: 'none',
                        aspectRatio: '16/9', // Mantener una relación de aspecto 16:9 para el iframe
                    }}
                    src={url}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></CardMedia>

                {/* Contenido de la tarjeta */}
                <CardContent
                    sx={{
                        padding: '.3rem'
                    }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: 14,
                        }}>
                        Título: {titulo}
                    </Typography>
                    {/* <Typography
                        sx={{
                            fontSize: 14,
                        }}>
                        ID: {id}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                        }}>
                        Descripción: {descripcion}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                        }}>
                        URL: {url}
                    </Typography> */}
                </CardContent>
            </Card>
        </div>
    );
}

export default VideoCard;
