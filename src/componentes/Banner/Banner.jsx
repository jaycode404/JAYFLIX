import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import styled from "styled-components"
import VideoCard from "../Video/VideoCard"

const spanStyle = {
    color: '#ff0000', // Cambia este color a tu elección
  };
  

export default function Banner() {
    return (
        <Grid container spacing={2}
            sx={{
                height: '20rem',
                marginTop: '2rem',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Grid
                item xs={4}
                sx={{
                    width: '100%'
                }}
            >
                <Typography variant='h2'>
                    El mejor contenido para <span style={spanStyle}>Coders</span>
                </Typography>

                <Typography variant='body.1'>Tu plataforma favorita para ver contenido de programadores</Typography>
            </Grid>
            <Grid item xs={6} sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', padding: '1rem', borderRadius: '.3rem' }}>
                <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/xNRJwmlRBNU"
                    title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </Grid>

        </Grid>
    );
}
