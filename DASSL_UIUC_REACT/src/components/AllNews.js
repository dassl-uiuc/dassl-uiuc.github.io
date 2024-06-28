import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { useInView } from 'react-intersection-observer';

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

function AllNews() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ pt: 10, mb: 5, backgroundColor: '#f0f0f0', width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 4, mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
        News
      </Typography>
      <Box ref={ref} sx={{ opacity: inView ? 1 : 0, transition: 'opacity 1s', maxWidth: '1200px', margin: '0 auto' }}>
        {newsItems.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333' }}>
              {item.text}
              {item.link && (
                <>
                  {' '}
                  <Link href={item.link} target="_blank" sx={{ color: '#ff6600', textDecoration: 'underline' }}>
                    {item.linkText}
                  </Link>
                </>
              )}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: '#ccc', mt: 10 }} />
    </Box>
  );
}

export default AllNews;
