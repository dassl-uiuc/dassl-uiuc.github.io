# AgileLog figure sources

Source: `~/Desktop/AgileLog.pptx`, supplied for the first DASSL blog article.
Slide numbers below refer to the PowerPoint deck, including hidden slides.

| Asset | Source |
| --- | --- |
| `forkable-log.png` | Diagram from slide 15 |
| `continuous-fork.png` | Diagram from slide 23 |
| `bolt-architecture.png` | Diagram from slide 29 |
| `fork-latency.png` | Slide 32, embedded `ppt/media/image55.png` |
| `parent-performance.png` | Slide 32, embedded `ppt/media/image56.png` |
| `analytics-agent.png` | Slide 33, embedded `ppt/media/image57.png` |
| `restocking-agent.png` | Slide 34, embedded `ppt/media/image58.png` |

The four charts are extracted unchanged from the deck. Diagram regions are
exported from a PDF rendering of the presentation, omitting slide headings and
surrounding prose. The architecture diagram uses Carlito as a fallback for
unavailable Gill Sans fonts to avoid text overflow, with the original server
icons preserved. No chart data was redrawn or estimated.

The article follows the deck's narrative. The repository's
`pdfs/papers/agilelog.pdf` supplies API semantics, experimental setup, and
promotion limitations abbreviated in the talk. In the analytics experiment,
14× mean and approximately 130× p99 latency increases compare Kafka's query
execution phases with its thinking phases, not Kafka directly against Bolt.

Figure 1 was re-exported from a working copy of slide 15 after removing the
PowerPoint group containing the two blue arrows and the “producers” and
“consumers” labels. The original presentation was not modified.
