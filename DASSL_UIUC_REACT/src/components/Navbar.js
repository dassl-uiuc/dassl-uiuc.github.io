import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/UIUC_Logo.png';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
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
              <ScrollLink to="home" smooth={true} duration={500}>
                <Button color="inherit">Home</Button>
              </ScrollLink>
              <Button component={RouterLink} to="/all-news" color="inherit" style={{ margin: '0 10px' }}>
                News
              </Button>
              <ScrollLink to="projects" smooth={true} duration={500} style={{ margin: '0 10px' }}>
                <Button color="inherit">Projects</Button>
              </ScrollLink>
              <ScrollLink to="publications" smooth={true} duration={500} style={{ margin: '0 10px' }}>
                <Button color="inherit">Publications</Button>
              </ScrollLink>
              <ScrollLink to="people" smooth={true} duration={500} style={{ margin: '0 10px' }}>
                <Button color="inherit">People</Button>
              </ScrollLink>
              <ScrollLink to="join" smooth={true} duration={500} style={{ margin: '0 10px' }}>
                <Button color="inherit">Join Us</Button>
              </ScrollLink>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
