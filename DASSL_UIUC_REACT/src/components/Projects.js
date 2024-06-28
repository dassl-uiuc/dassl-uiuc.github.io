import React from 'react';
import { Typography, Grid, Box, Container } from '@mui/material';
import icon4 from "../assets/icon4.webp";
import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.webp";

function Projects() {
  const projects = [
    {
      title: "Rethinking distributed protocols with storage in mind",
      description: "Description",
      icon: icon1
    },
    {
      title: "Storage systems for disaggregated data centers",
      description: "Description",
      icon: icon2
    },
    {
      title: "Applying ML advances to systems",
      description: "Description",
      icon: icon3
    },
    {
      title: "Storage systems for emerging hardware",
      description: "Description",
      icon: icon4
    }
  ];

  return (
    <Box sx={{
      width: '100%',
      pt: 10,
      pb: 8,
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      minHeight: '80vh',
      paddingX: 1
    }}>
      <Typography variant="h4" sx={{
        color: '#333',
        fontWeight: 'bold',
        mb: 4
      }}>
        Projects
      </Typography> 
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={5} lg={3} key={index}>
              <Box sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                padding: 3,
                height: '100%'
              }}>
                <img src={project.icon} alt={`${project.title} icon`} style={{ height: '70px', marginBottom: '16px' }} />
                <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold', mb: 2 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ff6600', fontWeight: 'bold' }}>
                  Learn More
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
