import React from 'react';
import { Typography, Card, CardContent, Container, Link } from '@mui/material';
import backgroundImage from '../assets/layer5.jpg'; // Path to your background image

function Software() {
  return (
    <Container sx={{
      mt: 4,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '16px',
      padding: 3,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white', 
    }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        Software
      </Typography>
      <Card sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
      }}>
        <CardContent>
          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            All our open-source software can be found at our 
            <Link href="https://github.com/dassl-uiuc/" target="_blank" rel="noopener noreferrer" sx={{ ml: 0.5, color: 'blue', textDecoration: 'underline' }}>
              GitHub repository
            </Link>.
            Our portfolio includes innovative projects ranging from distributed systems simulators to educational platforms for understanding system dynamics.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Software;
