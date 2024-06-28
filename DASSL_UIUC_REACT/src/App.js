import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import News from './components/News';
import People from './components/People';
import Projects from './components/Projects';
import Publications from './components/Publications';
import JoinUs from './components/JoinUs';
import Home from './components/Home';
import Alumni from './components/Alumni';
import AllPublications from './components/AllPublications';
import AllNews from './components/AllNews';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function MainContent() {
  return (
    <Box sx={{ flex: '1 0 auto', overflowY: 'auto', width: '100%', overflowX: 'hidden' }}>
      <Box id="home" sx={{ scrollMarginTop: '64px', width: '100%' }}>
        <Home />
      </Box>
      <Box id="news" sx={{ scrollMarginTop: '64px', width: '100%' }}>
        <News />
      </Box>
      <Box id="projects" sx={{ scrollMarginTop: '64px', width: '100%' }}>
        <Projects />
      </Box>
      <Box id="publications" sx={{ scrollMarginTop: '64px', width: '100%' }}>
        <Publications />
      </Box>
      <Box id="people" sx={{ scrollMarginTop: '64px', width: '100%' }}>
        <People />
      </Box>
      <Box id="join" sx={{ scrollMarginTop: '64px', width: '100%' }}>
        <JoinUs />
      </Box>
    </Box>
  );
}

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundSize: 'cover', overflowX: 'hidden' }}>
          {isMainPage ? <Navbar /> : <SecondaryNavbar />}
          {!isMainPage && <ScrollToTop />}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route
              path="/all-news"
              element={
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    overflowX: 'hidden',
                  }}
                >
                  <SecondaryNavbar />
                  <AllNews />
                </Box>
              }
            />
            <Route
              path="/all-publications"
              element={
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    overflowX: 'hidden',
                  }}
                >
                  <SecondaryNavbar />
                  <AllPublications />
                </Box>
              }
            />
            <Route
              path="/alumni"
              element={
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    overflowX: 'hidden',
                  }}
                >
                  <SecondaryNavbar />
                  <Alumni />
                </Box>
              }
            />
          </Routes>
        </Box>
    </ThemeProvider>
  );
}

export default App;
