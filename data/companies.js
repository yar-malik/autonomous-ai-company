export const companies = [
  {
    slug: "polsia",
    name: "polsia.ai",
    handle: "@polsia",
    website: "https://polsia.ai",
    xUrl: "https://x.com/polsia",
    tagline:
      "AI that runs your company while you sleep.",
    status: "Live",
    snapshotDate: "2026-03-17",
    summary:
      "Current directory entry seeded from your March 17 snapshot. The structure is ready for richer public metrics as you collect more verified updates.",
    metrics: {
      arr: "$4,461,211",
      activeCompanies: "3,774",
      humanMessages: "373,077",
      tasksCompleted: "147,644",
      emailsSent: "107,500"
    },
    changes: {
      arr: "+30% WoW",
      activeCompanies: "+39% WoW",
      humanMessages: "+52% WoW",
      tasksCompleted: "+58% WoW",
      emailsSent: "+43% WoW"
    },
    highlights: [
      "Annual run rate reported at $4.46M on March 17, 2026.",
      "Active companies reported at 3,774.",
      "Operational volume includes messages, tasks, and emails sent."
    ],
    chart: {
      type: "bars",
      title: "Operational snapshot",
      subtitle: "Public metrics from your March 17, 2026 Polsia screenshot",
      items: [
        { label: "ARR", value: 4461211, displayValue: "$4.46M", change: "+30% WoW" },
        {
          label: "Active companies",
          value: 3774,
          displayValue: "3,774",
          change: "+39% WoW"
        },
        {
          label: "Human messages",
          value: 373077,
          displayValue: "373,077",
          change: "+52% WoW"
        },
        {
          label: "Tasks completed",
          value: 147644,
          displayValue: "147,644",
          change: "+58% WoW"
        },
        {
          label: "Emails sent",
          value: 107500,
          displayValue: "107,500",
          change: "+43% WoW"
        }
      ],
      note:
        "Metrics use different units, so the chart is intended as a public status board rather than a like-for-like business comparison."
    },
    sourceNote: "User-supplied screenshot, dated March 17, 2026"
  },
  {
    slug: "nanocorp",
    name: "Nano Corp",
    handle: "@NanoCorpHQ",
    website: "https://nanocorp.so",
    xUrl: "https://x.com/NanoCorpHQ",
    tagline:
      "Autonomous companies run by AI making money while you sleep.",
    status: "Live",
    snapshotDate: "2026-03-10",
    summary:
      "This entry uses the March 10 screenshot you provided for total companies created. It is marked as a dated snapshot, not a live feed.",
    metrics: {
      companiesCreated: "1,028",
      neonLimit: "1,000",
      progressWindow: "Feb 27 to Mar 9"
    },
    highlights: [
      "Crossed 1,000 total companies created in the March 10 snapshot.",
      "Chart shows acceleration from 34 to 1,028 companies within a few days.",
      "Threshold line indicates a public Neon limit at 1,000."
    ],
    chart: {
      type: "line",
      title: "Total companies created",
      subtitle: "Public growth snapshot shared on March 10, 2026",
      items: [
        { label: "Feb 27", value: 0, displayValue: "0" },
        { label: "Mar 1", value: 0, displayValue: "0" },
        { label: "Mar 2", value: 0, displayValue: "0" },
        { label: "Mar 3", value: 13, displayValue: "13" },
        { label: "Mar 4", value: 34, displayValue: "34" },
        { label: "Mar 5", value: 132, displayValue: "132" },
        { label: "Mar 6", value: 316, displayValue: "316" },
        { label: "Mar 7", value: 612, displayValue: "612" },
        { label: "Mar 8", value: 824, displayValue: "824" },
        { label: "Mar 9", value: 1028, displayValue: "1,028" }
      ],
      threshold: {
        label: "Neon limit",
        value: 1000
      },
      note:
        "Values are taken from the visible labels in the screenshot. Early zero values reflect the chart as shown, not necessarily literal historical zeros."
    },
    sourceNote: "User-supplied screenshot, dated March 10, 2026"
  }
];
