export const companies = [
  {
    slug: "polsia",
    rank: 1,
    name: "polsia.ai",
    handle: "@polsia",
    website: "https://polsia.ai",
    xUrl: "https://x.com/polsia",
    founder: "Malik Ashraf",
    founderInitials: "MA",
    companyInitials: "P",
    companyColor: "linear-gradient(135deg, #5b6cff, #7d54ff)",
    tagline: "AI that runs your company while you sleep.",
    status: "Live",
    snapshotDate: "2026-03-17",
    primaryMetricLabel: "MRR",
    primaryMetricValue: "$371,767",
    growthLabel: "WoW",
    growthValue: "+30%",
    growthDirection: "up",
    summary:
      "Derived from the March 17, 2026 snapshot using the reported $4.46M ARR.",
    metrics: {
      arr: "$4,461,211",
      activeCompanies: "3,774",
      humanMessages: "373,077",
      tasksCompleted: "147,644",
      emailsSent: "107,500"
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
        "MRR on the leaderboard is estimated from ARR divided by 12. The full snapshot below preserves the original public figures."
    },
    sourceNote: "User-supplied screenshot, dated March 17, 2026"
  },
  {
    slug: "feltsense",
    rank: 2,
    name: "Feltsense",
    handle: "feltsense.com",
    website: "https://feltsense.com/",
    xUrl: null,
    founder: "Team undisclosed",
    founderInitials: "FS",
    companyInitials: "F",
    companyColor: "linear-gradient(135deg, #1fb981, #1f7f68)",
    tagline: "AI agents as fully autonomous founders.",
    status: "Beta",
    snapshotDate: "2026-03-20",
    primaryMetricLabel: "Seed",
    primaryMetricValue: "$5.1M",
    growthLabel: "Status",
    growthValue: "Beta",
    growthDirection: "flat",
    summary:
      "Added from the public Feltsense homepage snapshot on March 20, 2026.",
    metrics: {
      seedClosed: "$5.1M",
      status: "Beta",
      hiring: "Yes"
    },
    highlights: [
      "Homepage states $5.1M seed closed.",
      "Describes the product direction as AI agents acting as fully autonomous founders.",
      "The site invites users to join beta and indicates the team is hiring."
    ],
    chart: {
      type: "bars",
      title: "Public company snapshot",
      subtitle: "Official homepage information captured on March 20, 2026",
      items: [
        {
          label: "Seed closed",
          value: 5100000,
          displayValue: "$5.1M",
          change: "Homepage callout"
        }
      ],
      note:
        "Feltsense currently exposes positioning and funding on the homepage, but not operating revenue or company-count metrics."
    },
    sourceNote: "Official Feltsense homepage, viewed March 20, 2026"
  },
  {
    slug: "nanocorp",
    rank: 3,
    name: "Nano Corp",
    handle: "@NanoCorpHQ",
    website: "https://nanocorp.so",
    xUrl: "https://x.com/NanoCorpHQ",
    founder: "Nano Corp",
    founderInitials: "NC",
    companyInitials: "N",
    companyColor: "linear-gradient(135deg, #22252b, #696f7d)",
    tagline: "Autonomous companies run by AI making money while you sleep.",
    status: "Live",
    snapshotDate: "2026-03-10",
    primaryMetricLabel: "Companies built",
    primaryMetricValue: "1,028",
    growthLabel: "Milestone",
    growthValue: "+2.8%",
    growthDirection: "up",
    summary:
      "This entry uses the March 10 screenshot you provided for total companies created.",
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
        "Growth value on the leaderboard reflects the margin above the visible 1,000 threshold in the screenshot."
    },
    sourceNote: "User-supplied screenshot, dated March 10, 2026"
  }
];
