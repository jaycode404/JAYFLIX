import React from 'react';
import Grid from '@mui/material/Grid';
import VideoCard from '../Video/VideoCard';
import { Typography } from '@mui/material';

export default function Seccion() {
  return (
    <Grid>
      <Typography
        sx={{ marginLeft: '2rem' }}
        variant='h4'>Categoria</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: 'space-around',
          padding: '2rem'
        }}
      >
        <Grid item xs={3}>
          <VideoCard />
        </Grid>
        <Grid item xs={3}>
          <VideoCard />
        </Grid>
        <Grid item xs={3}>
          <VideoCard />
        </Grid>
        <Grid item xs={3}>
          <VideoCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
