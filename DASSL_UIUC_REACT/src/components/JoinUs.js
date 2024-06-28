import React from 'react';
import { Typography, Box, Grid, Link } from '@mui/material';
import groupImage from "../assets/group.jpg"; 
import gitLogo from "../assets/github.png"; 

function JoinUs() {
  return (
    <Box 
      sx={{
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5b5780',
        color: 'white',
        textAlign: 'left',
        padding: '20px',
        overflowX: 'hidden',
      }}
    >
      <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '12px', borderRadius: '8px' }}>
            Join Us
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ margin: '0 auto', maxWidth: '100%', fontFamily: 'Arial, sans-serif', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px', borderRadius: '8px' }}>
            We are actively looking for strong and self-motivated PhD students to join DASSL at UIUC. Please apply to the UIUC CS PhD program and mention Aishwarya Ganesan (aganesn2@illinois.edu) or Ram Alagappan (ramn@illinois.edu) as potential advisors in your application. UIUC has a stellar systems group (see csrankings) that you can be a part of and contribute.
            <br/><br/>
            At DASSL, you'll gain hands-on experience with advanced system design, contribute to influential research publications, and prepare for a successful career in academia or industry. Explore how high-performance computing and innovative data management can address some of the most challenging problems facing technology today.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <img src={groupImage} alt="Group" style={{ width: '100%', maxWidth: '250px', borderRadius: '50%' }} />
          </Box>  
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px', borderRadius: '8px', mr: 6 }}>
            Quick Links
          </Typography>
          <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px', borderRadius: '8px', mr: 6 }}>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>
              <Link href="#projects" color="inherit" underline="hover">Projects</Link>
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>
              <Link href="#publications" color="inherit" underline="hover">Publications</Link>
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>
              <Link href="#people" color="inherit" underline="hover">People</Link>
            </Typography>
          </Box>
          <Box sx={{ mt: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px', borderRadius: '8px', mr: 6 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
              Software
            </Typography>
            <Box>
              <Link href="https://github.com/dassl-uiuc/" color="inherit" underline="hover">
                <img src={gitLogo} alt="GitHub" style={{ width: '30px', marginRight: '6px' ,borderRadius: '50%' }} />
              </Link>
            </Box>
          </Box>
          <Box sx={{ mt: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px', borderRadius: '8px', mr: 6, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif', color: '#ccc' }}>
              Created by Jason Li <Link href="mailto:jason.ye.li.7@gmail.com" color="inherit">jason.ye.li.7@gmail.com</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JoinUs;
