import React from 'react';
import { Typography, Box, Link, Button, Container } from '@mui/material';
import backgroundImage from '../assets/bg.png';
import { useNavigate } from 'react-router-dom';

const publications = [
  {
    title: "IONIA: High-Performance Replication for Modern Disk-based KV Stores",
    authors: "Yi Xu*, Henry Zhu*, Prashant Pandey, Alex Conway, Rob Johnson, Aishwarya Ganesan, Ramnatthan Alagappan",
    note: "*=co-primary authors. (To Appear) Fast 2024",
    link: "/pdfs/papers/fast24-xu.pdf"
  },
  {
    title: "SplitFT: Fault Tolerance for Disaggregated Datacenters via Remote Memory Logging",
    authors: "Xuhao Luo, Ramnatthan Alagappan, Aishwarya Ganesan",
    note: "(To Appear) EuroSys 2024",
    link: "/pdfs/papers/splitft.pdf"
  },
  {
    title: "Crash Consistency",
    authors: "Ramnatthan Alagappan",
    note: "ACM Research for Practice July 2022, ACM RFP '22, Invited",
    link: "/pdfs/papers/Crash-Consistency.pdf"
  },
  {
    title: "Exploiting Nil-Externalizing Interfaces for Fast Replicated Storage",
    authors: "Aishwarya Ganesan, Ramnatthan Alagappan, Anthony Rebello, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    note: "Transactions on Storage - May 2022, TOS '22, Fast tracked",
    link: "/pdfs/papers/Exploiting-Nil-Externalizing.pdf"
  },
  {
    title: "Automatic Reliability Testing For Cluster Management Controllers",
    authors: "Xudong Sun, Wenqing Luo, Tyler Gu, Aishwarya Ganesan, Ramnatthan Alagappan, Michael Gasch, Lalith Suresh, Tianyin Xu",
    note: "16th USENIX Symposium on Operating Systems Design and Implementation, OSDI '22",
    link: "/pdfs/papers/Automatic-Reliability.pdf"
  },
  {
    title: "Exploiting Nil-Externality for Fast Replicated Storage",
    authors: "Aishwarya Ganesan, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    note: "28th ACM Symposium on Operating Systems Principles, SOSP '21",
    link: "/pdfs/papers/nilext.pdf",
    extraLinks: [
      { label: "Talk Slides", url: "/pdfs/slides/nilext.pdf" },
      { label: "Video - short", url: "https://www.youtube.com/watch?v=vmZ9yMjElVs" },
      { label: "Video - long", url: "https://www.youtube.com/watch?v=uKiG903d5tI" },
      { label: "Code", url: "https://bitbucket.org/aganesan4/skyros/src/master/" }
    ]
  },
  {
    title: "Strong and Efficient Consistency with Consistency-aware Durability",
    authors: "Aishwarya Ganesan, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    note: "Transactions on Storage - Vol. 17, Issue 1, January 2021, TOS '21, Fast tracked",
    link: "/pdfs/papers/cad-tos.pdf"
  },
  {
    title: "Can Applications Recover from fsync Failures?",
    authors: "Anthony Rebello, Yuvraj Patel, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    note: "Transactions on Storage - Vol. 17, Issue 2, June 2021, TOS '21",
    link: "/pdfs/papers/cuttlefs-tos.pdf"
  }
];

function Publications() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      pt: 7,
      px: 3,
      py: 4,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff', 
      textAlign: 'left',
    }}>
      <Typography variant="h4" sx={{ m: 3, fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', textAlign: 'center', pt: 2 }}>
        Recent Publications
      </Typography>
      <Container>
        {publications.map((pub, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 2, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', p: 2 }}>
            <Box sx={{
              backgroundColor: '#ff6600',
              color: '#fff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              fontWeight: 'bold'
            }}>
              {index + 1}
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f5f5f5' }}>
                {pub.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#f5f5f5' }}>
                {pub.authors}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: '#f5f5f5' }}>
                {pub.note}
              </Typography>
              {pub.link && (
                <Link href={pub.link} target="_blank" sx={{ color: '#ff6600', textDecoration: 'underline', mr: 2 }}>
                  [pdf]
                </Link>
              )}
              {pub.extraLinks && pub.extraLinks.map((link, idx) => (
                <Link key={idx} href={link.url} target="_blank" sx={{ color: '#ff6600', textDecoration: 'underline', mr: 2 }}>
                  [{link.label}]
                </Link>
              ))}
            </Box>
          </Box>
        ))}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff6600', color: '#fff', fontWeight: 'bold', borderRadius: '20px', px: 4 }}
            onClick={() => navigate('/all-publications')}
          >
            All Publications
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Publications;
