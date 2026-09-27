# AgileLog figure sources

## Conceptual diagrams (Figures 1–3)

Source: `~/Desktop/AgileLog.pptx`. Slide numbers include hidden slides.

| Asset | Source |
| --- | --- |
| `forkable-log.png` | Diagram from slide 15 |
| `continuous-fork.png` | Diagram from slide 23 |
| `bolt-architecture.png` | Diagram from slide 29 |

Diagram regions are exported from a PDF rendering, omitting slide headings and
surrounding prose. The architecture diagram uses Carlito as a fallback for
unavailable Gill Sans fonts, with the original server icons preserved.
Figure 1 omits the source group containing the two blue arrows and the
“producers” and “consumers” labels. The original presentation is unchanged.

## Updated evaluation plots (Figures 4–7)

Source: `~/Desktop/agilelog-ram.pdf`, exported September 27, 2026. These replace
the older charts extracted from the PowerPoint deck. PDF pages below are
one-based; the slide numbers printed on the pages are zero-based.

| Asset | PDF page (printed slide) | Export region, PDF points |
| --- | --- | --- |
| `fork-latency.png` | 37 (36) | (110, 140)–(735, 519) |
| `parent-performance.png` | 38 (37) | (14, 190)–(941, 425), plus legend |
| `analytics-agent.png` | 39 (38), top; 46 (45), bottom | (35, 230)–(900, 425); (135, 125)–(755, 432) |
| `restocking-agent.png` | 48 (47) | (34, 177)–(933, 425) |

Plots are rendered directly from the PDF at 2× resolution. No plotted data,
axes, or annotations are redrawn or estimated. The analytics timeline and
per-phase summary are composed vertically into one image. Figure 5 adds a
legend identifying orange as `naive-cfork` and green as `Bolt`, as confirmed
by the author; the plot itself is unchanged.

Figure 5 now measures parent **metadata** throughput and latency with 10, 100,
and 1,000 cForks. It replaces the old end-to-end plots for 0, 10, and 100 cForks
with one or 32 root logs. Its third panel has a logarithmic latency axis.
Figure 6 retains the 14× mean and 130.8× p99 ratios comparing Kafka's query
execution phase with its thinking phase, not Kafka directly against Bolt.
Figure 7 now shows Kafka's consumer failure near 27 seconds; its two panels
have different time windows.

The repository's `pdfs/papers/agilelog.pdf` supplies the API semantics and
experimental details abbreviated in the presentation.
