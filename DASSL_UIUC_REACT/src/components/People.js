import React from 'react';
import { Typography, Grid, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import defaultPersonImage from '../assets/people/default.jpg'; 
import aishwaryaImg from '../assets/people/aishwarya.jpg'; 
import ramImg from '../assets/people/ram.png'; 

function People() {
  const navigate = useNavigate();
  
  const currentMembers = [
    { name: "Aishwarya Ganesan", role: "Assistant Professor", image: aishwaryaImg },
    { name: "Ram Alagappan", role: "Assistant Professor", image: ramImg },
    { name: "Xuhao Luo", role: "PhD student", image: defaultPersonImage },
    { name: "Henry Zhu", role: "PhD student", image: defaultPersonImage },
    { name: "Shreesha G Bhat", role: "PhD student", image: defaultPersonImage },
    { name: "Jiyu Hu", role: "PhD student", image: defaultPersonImage },
    { name: "Kiran Hombal", role: "PhD student", image: defaultPersonImage },
    { name: "Chaitanya Bhandari", role: "MS student", image: defaultPersonImage },
    { name: "Ramya Bygari", role: "MS student", image: defaultPersonImage },
    { name: "Neil Kaushikkar", role: "undergrad thesis", image: defaultPersonImage }
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: '#f5f5f5' }}>
      <Container sx={{ pt: 5, pb: 5, textAlign: 'center', width: "100%" }}>
        <Typography variant="h4" sx={{ mb: 4, mt: 2, fontWeight: 'bold' }}>
          People
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Faculty
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {currentMembers.slice(0, 2).map((person, index) => (
              <Grid item key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={person.image} alt={person.name} style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>{person.name}</Typography>
                  <Typography variant="body2">{person.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Students
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {currentMembers.slice(2).map((person, index) => (
              <Grid item key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={person.image} alt={person.name} style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>{person.name}</Typography>
                  <Typography variant="body2">{person.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff6600', color: '#fff', fontWeight: 'bold', borderRadius: '20px', px: 4 }}
            onClick={() => navigate('/alumni')}
          >
            View Alumni
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default People;
