import React from 'react';
import { Typography, Box } from '@mui/material';
import backgroundImage from '../assets/bg8.jpg';

function Home() {
  return (
    <Box 
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: '100%', // Adjust this value to zoom out more
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px', fontFamily: 'Montserrat, sans-serif' }}>
        Distributed and Storage Systems Lab
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontStyle: 'italic', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', marginTop: '20px', fontFamily: 'Roboto, sans-serif' }}>
        Driving Innovation in Distributed Systems and Storage Solutions
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ maxWidth: '80%', margin: '20px auto', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px',  fontFamily: 'Roboto, sans-serif' }}>
        The Distributed and Storage Systems Lab (DASSL) at the University of Illinois at Urbana-Champaign focuses on 
        designing and developing robust, high-performance software systems that form the core of our modern computing 
        infrastructure. Our research spans distributed systems, storage systems, and real-world application implications, 
        making systems more reliable, scalable, and efficient. Our collaborative environment, coupled with cutting-edge 
        resources, drives innovation and advancement in computational technology.
      </Typography>
    </Box>
  );
}

export default Home;
