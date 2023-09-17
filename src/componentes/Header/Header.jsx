import React from 'react';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff', // Cambia el color principal a rojo
    },
  },
});

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JAYFLIX
          </Typography>
          <Button color="inherit">Videos</Button>
          <Button color="inherit">Nuevo Video</Button>
          <Button color="inherit">Acerca de</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
