import { Typography } from '@mui/material';
import React from 'react';

function AcercaDe() {
  return (
    <div style={{padding: '2rem'}}>
      <h1>Nosotros</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" sx={{lineHeight: '2rem', width: '60%'}}>
          En JAYFLIX, nuestra misión es simplificar tu camino hacia el dominio de la programación. Nos dedicamos a recopilar los mejores tutoriales de programación de la web, organizándolos de manera accesible y ordenada. Ya no tendrás que perder tiempo buscando tutoriales dispersos en línea. Ofrecemos una amplia gama de recursos de programación, desde principiantes hasta niveles avanzados, para que puedas aprender, mejorar tus habilidades y resolver problemas de manera eficiente. Únete a nuestra comunidad y acelera tu desarrollo como programador con acceso rápido a los recursos de mayor calidad.
        </Typography>
      </div>
    </div>
  );
}

export default AcercaDe;

