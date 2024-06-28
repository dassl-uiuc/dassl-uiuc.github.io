import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../assets/UIUC_Logo.png';

function SecondaryNavbar() {
  const navigate = useNavigate();

  const handleNavigateAndScroll = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Delay to ensure the navigation has completed
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="UIUC DASSL Logo" style={{ height: '40px', marginRight: '10px' }} />
              <Typography variant="h6" component="div">
                UIUC DASSL
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex' }}>
              <Button onClick={() => handleNavigateAndScroll('/', 'home')} color="inherit">
                Home
              </Button>
              <Button onClick={() => navigate('/all-news')} color="inherit" style={{ margin: '0 10px' }}>
                News
              </Button>
              <Button onClick={() => handleNavigateAndScroll('/', 'projects')} color="inherit" style={{ margin: '0 10px' }}>
                Projects
              </Button>
              <Button onClick={() => handleNavigateAndScroll('/', 'publications')} color="inherit" style={{ margin: '0 10px' }}>
                Publications
              </Button>
              <Button onClick={() => handleNavigateAndScroll('/', 'people')} color="inherit" style={{ margin: '0 10px' }}>
                People
              </Button>
              <Button onClick={() => handleNavigateAndScroll('/', 'join')} color="inherit" style={{ margin: '0 10px' }}>
                Join Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default SecondaryNavbar;
