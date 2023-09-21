import React from 'react';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { Link } from 'react-router-dom'; // Importa Link desde React Router
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
        {/* Usa Link para redirigir a la página de inicio */}
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          JAYFLIX
        </Typography>
        <Button color="inherit" component={Link} to="/videos">
          Videos
        </Button>
        <Button color="inherit" component={Link} to="/nuevo-video">
          Nuevo Video
        </Button>
        <Button color="inherit" component={Link} to="/acerca-de">
          Acerca de
        </Button>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
  );
}

export default NavBar;
