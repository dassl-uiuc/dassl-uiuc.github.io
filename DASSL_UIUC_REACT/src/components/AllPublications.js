import React from 'react';
import { Typography, Box, Container, Link } from '@mui/material';
import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';

const fadeIn = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in;
`;

const publications = {
  2024: [
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
    }
  ],
  2022: [
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
    }
  ],
  2021: [
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
    },
    {
      title: "The Storage Hierarchy is Not a Hierarchy: Optimizing Caching on Modern Storage Devices with Orthus",
      authors: "Kan Wu, Zhihan Guo, Guanzhou Hu, Kaiwei Tu, Ramnatthan Alagappan, Rathijit Sen, Kwanghyun Park, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "19th USENIX Conference on File and Storage Technologies, FAST '21",
      link: "/pdfs/papers/mfc.pdf"
    },
    {
      title: "Reasoning about modern datacenter infrastructures using partial histories",
      authors: "Xudong Sun, Lalith Suresh, Aishwarya Ganesan, Ramnatthan Alagappan, Michael Gasch, Lilia Tang, Tianyin Xu",
      note: "18th Workshop on Hot Topics in Operating Systems, HotOS '21",
      link: "/pdfs/papers/sieve-hotos.pdf"
    },
    {
      title: "The Storage Hierarchy is Not a Hierarchy: Optimizing Caching on Modern Storage Devices with Orthus",
      authors: "Kan Wu, Zhihan Guo, Guanzhou Hu, Kaiwei Tu, Ramnatthan Alagappan, Rathijit Sen, Kwanghyun Park, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "Non-Volatile Memory Workshop 2021, NVMW '21",
      link: "/pdfs/papers/mfc-nvmw.pdf"
    }
  ],
  2020: [
    {
      title: "From Wisckey to Bourbon: A Learned Index for Log-structured Merge Trees",
      authors: "Yifan Dai, Yien Xu, Aishwarya Ganesan, Ramnatthan Alagappan, Brian Kroth, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "Proceedings of the 14th Symposium on Operating System and Design Implementation, OSDI '20",
      link: "/pdfs/papers/bourbon.pdf"
    },
    {
      title: "Can Applications Recover from fsync Failures?",
      authors: "Anthony Rebello, Yuvraj Patel, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "The 2020 USENIX Annual Technical Conference, ATC '20, Invited to Transactions on Storage",
      link: "/pdfs/papers/cuttlefs.pdf"
    },
    {
      title: "Strong and Efficient Consistency with Consistency-aware Durability",
      authors: "Aishwarya Ganesan, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "18th USENIX Conference on File and Storage Technologies, FAST '20, Best Paper Award, Invited to Transactions on Storage",
      link: "/pdfs/papers/cad.pdf"
    },
    {
      title: "Too Many Knobs to Tune? Towards Faster Database Tuning by Pre-selecting Important Knobs",
      authors: "Konstantinos Kannelis, Ramnatthan Alagappan, Shivaram Venkataraman",
      note: "15th Workshop on Hot Topics in Storage and File Systems, HotStorage '20",
      link: "/pdfs/papers/knob-hotstorage.pdf"
    }
  ],
  2019: [
    {
      title: "Protocol-Aware Recovery for Consensus-based Storage",
      authors: "Ramnatthan Alagappan, Aishwarya Ganesan, Eric Lee, Aws Albarghouthi, Vijay Chidambaram, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "The 2019 USENIX Annual Technical Conference, Usenix ATC '19, Best of the Rest",
      link: "/pdfs/papers/protocol-aware-recovery.pdf"
    },
    {
      title: "Getting More Performance with Polymorphism from Emerging Memory Technologies",
      authors: "Iyswarya Narayanan, Aishwarya Ganesan, Anirudh Badam, Sriram Govindan, Bikash Sharma, Anand Sivasubramaniam",
      note: "In Proceedings of the 12th ACM International Conference on Systems and Storage, SYSTOR '19",
      link: "/pdfs/papers/polymorphism-performance.pdf"
    }
  ],
  2018: [
    {
      title: "Fault-Tolerance, Fast and Slow: Exploiting Failure Asynchrony in Distributed Systems",
      authors: "Ramnatthan Alagappan, Aishwarya Ganesan, Jing Liu, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "Proceedings of the 13th Symposium on Operating System and Design Implementation, OSDI '18",
      link: "/pdfs/papers/fault-tolerance-fast-slow.pdf"
    },
    {
      title: "Protocol-Aware Recovery for Consensus-Based Distributed Storage",
      authors: "Ramnatthan Alagappan, Aishwarya Ganesan, Eric Lee, Aws Albarghouthi, Vijay Chidambaram, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "Transactions on Storage - Vol. 14, Issue 3, October 2018, TOS '18, Fast tracked",
      link: "/pdfs/papers/protocol-aware-recovery-tos18.pdf"
    }
  ],
  2017: [
    {
      title: "Application Crash Consistency and Performance with CCFS",
      authors: "Thanumalayan Sankaranarayana Pillai, Ramnatthan Alagappan, Lanyue Lu, Vijay Chidambaram, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "The 2017 USENIX Annual Technical Conference, Usenix ATC '17, Best of the Rest",
      link: "/pdfs/papers/ccfs-atc17.pdf"
    },
    {
      title: "Atomic In-Place Updates for Non-Volatile Main Memories with KaminoTx",
      authors: "Amir Saman Memaripour, Anirudh Badam, Amar Phanishayee, Yanqi Zhou, Ramnatthan Alagappan, Karin Strauss, Steven Swanson",
      note: "Proceedings of the Twelfth European Conference on Computer Systems, EuroSys '17",
      link: "/pdfs/papers/kamino.pdf"
    },
    {
      title: "Redundancy Does Not Imply Fault Tolerance: Analysis of Distributed Storage Reactions to Single Errors and Corruptions",
      authors: "Aishwarya Ganesan, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
      note: "Transactions on Storage - Vol. 13, Issue 3, September 2017, TOS '17, Fast tracked",
      link: "/pdfs/papers/redundancy-does-not-imply-fault-tolerance-tos17.pdf"
    }
  ],
  // Additional years can be added in a similar manner
};

function AllPublications() {

  
  return (
    <Box sx={{ pt: 10, pb: 5, pl: 10, backgroundColor: '#f0f0f0', width: '100%',}}>
      <Typography variant="h4" sx={{ mb: 4, mt: 2,pr:10, fontWeight: 'bold', textAlign: 'center' }}>
        All Publications
      </Typography>
      {Object.entries(publications)
        .sort((a, b) => b[0] - a[0])
        .map(([year, papers], index) => (
          <Box key={index} css={fadeIn} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              YEAR: {year}
            </Typography>
            {papers.map((paper, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
                  {paper.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {paper.authors}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>
                  {paper.note}
                </Typography>
                {paper.link && (
                  <Link href={paper.link} target="_blank" sx={{ color: '#ff6600', textDecoration: 'underline', mr: 2 }}>
                    [pdf]
                  </Link>
                )}
                {paper.extraLinks && paper.extraLinks.map((extra, idx) => (
                  <Link key={idx} href={extra.url} target="_blank" sx={{ color: '#ff6600', textDecoration: 'underline', mr: 2 }}>
                    [{extra.label}]
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        ))}
    </Box>
  );
}

export default AllPublications;
