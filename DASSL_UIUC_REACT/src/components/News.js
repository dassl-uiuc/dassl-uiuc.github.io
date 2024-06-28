import React, { useState, useEffect } from 'react';
import { Typography, Box, Link } from '@mui/material';

function News() {
  const newsItems = [
    { text: "Ram Alagappan wins the NSF CAREER Award!" },
    { text: "Aishwarya Ganesan wins the NSF CAREER Award!" },
    { text: "Our work on high-performance KV-store replication will appear in Fast '24. Congrats Henry!" },
    { text: "Congrats Xuhao on clearing his PhD qualification exam!" },
    { text: "Our work on disaggregated storage fault-tolerance will appear in EuroSys '24. Congrats Xuhao!" },
    { 
      text: "Aishwarya and Ram were interviewed by TigerBeetle's CEO Joran, and Chaitanya (who interned there) - ",
      link: "https://www.youtube.com/watch?v=1rArr0yb3zg&t=2s",
      linkText: "Watch the video."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        setFade(true);
      }, 1000); // Duration of the fade out transition
    }, 10000); // Change text every 10 seconds

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <Box sx={{
      padding: '8px 16px',
      backgroundColor: 'black',
      color: 'white',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      height: '30px' // Adjust as needed
    }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', mr: 1 }}>
        News:
      </Typography>
      <Box sx={{
        position: 'relative',
        height: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      }}>
        {newsItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              whiteSpace: 'nowrap',
              opacity: currentIndex === index && fade ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.5rem' }}>
              {item.text}
              {item.link && (
                <Link href={item.link} sx={{ color: 'lightblue', textDecoration: 'underline', ml: 0.5 }} target="_blank" rel="noopener">
                  {item.linkText}
                </Link>
              )}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default News;
