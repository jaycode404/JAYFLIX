import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import styled from "styled-components"
import VideoCard from "../Video/VideoCard"


export default function Banner() {
    return (
        <Grid container spacing={2}
            sx={{
                height: '20rem',
                marginTop: '4rem',
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
                <Typography variant='h2'>buenas banner</Typography>
                <Typography variant='body.1'>Tu plataforma favorita para ver contenido de programadores</Typography>
            </Grid>
            <Grid item xs={6} >
                <VideoCard width={'100%'} height={'20rem'}/>
            </Grid>
        </Grid>
    );
}
