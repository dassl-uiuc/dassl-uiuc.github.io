import React from 'react';
import { Typography, Grid, Container, Box } from '@mui/material';
import defaultPersonImage from '../assets/people/default.jpg';

function Alumni() {
  const alumni = [
    { name: "Wenqing Luo", role: "MS Thesis; First Employment: Apple", image: defaultPersonImage },
    { name: "Shubhi Jain", role: "MCS student", image: defaultPersonImage },
    { name: "Abhi Wangoo", role: "undergrad", image: defaultPersonImage },
    { name: "Akul Gupta", role: "undergrad", image: defaultPersonImage },
    { name: "Amaan Khan", role: "undergrad", image: defaultPersonImage }
  ];

  return (
    <Box sx={{ pt: 12, mb: 5, textAlign: 'center', backgroundColor: '#f0f0f0', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Alumni
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {alumni.map((person, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={person.image} alt={person.name} style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1, color: '#ff6600' }}>
                {person.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#333' }}>
                {person.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: '#ccc', mt: 5 }} />
    </Box>
  );
}

export default Alumni;
