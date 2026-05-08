// Shared content for all three portfolio directions.
// Numbers are placeholders — Megan can edit inline.

window.MeganData = {
  name: "Megan Fiato",
  role: "Field Marketing",
  location: "Charlotte, NC",
  pitch: "Field marketing that turns conferences into closed-won pipeline.",
  longPitch:
    "I run end-to-end event programs for fintech \u2014 from booth to follow-up \u2014 and I lean on AI to do the work of a team of three.",
  email: "meganfiato@gmail.com",
  // ── PHOTOS ─────────────────────────────────────────────────────────
  // Drop image files into a `photos/` folder next to index.html.
  // Any value left as null shows the striped placeholder. Use any
  // image format (.jpg, .png, .webp). Keep portraits ~1200×1600,
  // event photos ~1600×2000.
  photos: {
    portrait: "photos/portrait.jpg",
    events: {
      ase:     "photos/ase.jpg",      // Affiliate Summit East
      nfcc:    "photos/nfcc.jpg",     // NFCC Connect
      acdr:    "photos/acdr.jpg",     // ACDR Conference
      iapda:   "photos/iapda.png",    // IAPDA Connect
      asw:     "photos/asw.jpg",     // Affiliate Summit West
      fintech: "photos/fintech.png",  // Fintech Meetup
    },
  },

  links: {
    linkedin: {
      label: "linkedin.com/in/megan-fiato",
      url: "https://www.linkedin.com/in/megan-fiato-378152185/",
    },
    instagram: {
      label: "@megforarray",
      url: "https://www.instagram.com/megforarray/",
    },
  },

  metrics: [
    { value: "$5.2M+", label: "Sourced pipeline", note: "FY24 \u2192 FY25" },
    { value: "6", label: "Conferences executed", note: "11 months" },
    { value: "412", label: "Qualified meetings", note: "On-site + post-event" },
    { value: "38%", label: "Meeting \u2192 opp rate", note: "vs. 22% benchmark" },
    { value: "1.9x", label: "Output per AI workflow", note: "vs. manual baseline" },
    { value: "94", label: "NPS, internal sales team", note: "Q4 pulse" },
  ],

  events: [
    {
      id: "ase",
      name: "Affiliate Summit East",
      city: "New York, NY",
      date: "Aug 2025",
      audience: "Fintech affiliates, partner marketers",
      pipeline: "$1.4M",
      meetings: 92,
      role: "Lead, end-to-end",
      kpi: "+38% partner-sourced pipeline",
      blurb:
        "Owned booth, content, and 1:1 outreach. Built a custom GPT that briefed reps on every booked meeting in under 30 seconds.",
      tag: "Partnerships",
    },
    {
      id: "nfcc",
      name: "NFCC Connect",
      city: "Orlando, FL",
      date: "Jun 2025",
      audience: "Credit counseling agencies, nonprofits",
      pipeline: "$680K",
      meetings: 41,
      role: "Lead",
      kpi: "11 SQOs in 60 days",
      blurb:
        "Mission-led audience. Reframed the pitch around outcomes, not features \u2014 closed the highest meeting-to-opp rate of the year.",
      tag: "Nonprofit",
    },
    {
      id: "acdr",
      name: "ACDR Conference",
      city: "Las Vegas, NV",
      date: "Apr 2025",
      audience: "Debt resolution providers, servicers",
      pipeline: "$910K",
      meetings: 64,
      role: "Lead",
      kpi: "2 enterprise logos sourced",
      blurb:
        "Pre-event: scraped attendee list and ran a Gong-fed account-prioritization model. Walked in with 22 named targets.",
      tag: "Enterprise",
    },
    {
      id: "iapda",
      name: "IAPDA Connect",
      city: "Nashville, TN",
      date: "Mar 2025",
      audience: "Professional debt arbitrators",
      pipeline: "$420K",
      meetings: 28,
      role: "Lead",
      kpi: "9 partner intros, 4 active",
      blurb:
        "Smaller, higher-trust room. Hosted a private dinner around a single thesis \u2014 became the highest-converting touch of the program.",
      tag: "Niche",
    },
    {
      id: "asw",
      name: "Affiliate Summit West",
      city: "Las Vegas, NV",
      date: "Jan 2025",
      audience: "Performance marketers, fintech",
      pipeline: "$1.1M",
      meetings: 118,
      role: "Co-lead",
      kpi: "Top 3 booth, by meetings",
      blurb:
        "Highest-volume event of the year. Built an AI agent that drafted 118 personalized recap emails in the 48 hours after.",
      tag: "Volume",
    },
    {
      id: "fintech",
      name: "Fintech Meetup",
      city: "Las Vegas, NV",
      date: "Mar 2025",
      audience: "Banks, credit unions, fintechs",
      pipeline: "$690K",
      meetings: 69,
      role: "Lead",
      kpi: "27 banks/CUs in pipeline",
      blurb:
        "The big one. Used the platform's matching tool plus a custom scoring layer to triage 300+ inbound asks down to a real schedule.",
      tag: "Banking",
    },
  ],

  skills: {
    "Field & event marketing": [
      "Conference strategy",
      "Booth design & ops",
      "Pre/post-event campaigns",
      "Executive dinners",
      "Sponsorship negotiation",
    ],
    "Pipeline & GTM": [
      "ABM",
      "Sales enablement",
      "Pipeline forecasting",
      "Attribution",
      "Cross-functional alignment",
    ],
    "AI workflows": [
      "Custom GPTs",
      "Prompt engineering",
      "Agent orchestration",
      "Competitive intel automation",
      "Recap generation",
    ],
    "Stack": [
      "Salesforce",
      "Gong",
      "Swan",
      "ChatGPT / Claude",
      "HubSpot",
      "Outreach",
      "Notion",
      "Figma",
    ],
  },

  aiWorkflows: [
    {
      tool: "Swan",
      use: "Pre-event prospecting",
      detail:
        "Triggers a research brief on every attendee on Megan's calendar \u2014 last funding round, recent press, ICP fit \u2014 piped into Salesforce as a meeting note.",
    },
    {
      tool: "Gong",
      use: "Account prioritization",
      detail:
        "Pulls deal-stage signals and unanswered objections from sales calls. Megan turns the patterns into the booth's talk track every quarter.",
    },
    {
      tool: "ChatGPT (custom GPTs)",
      use: "Sales agents",
      detail:
        "Three GPTs Megan built: one drafts post-event recaps in the rep's voice, one writes competitive battlecards, one stress-tests messaging against a synthetic CFO persona.",
    },
  ],

  testimonials: [
    {
      quote:
        "Megan has been such a strong addition to our team. She brings a consistently positive attitude and approaches every challenge with a problem-solving mindset. No matter what comes up, she stays focused on finding a path forward and getting things done. She's also great to collaborate with — proactive, communicative, and always willing to jump in where needed. On top of her work, she brings great energy to the team and makes it a better place to be. She's someone you can count on, and I'm really glad to have her on the team.",
      name: "Senior Director of Demand Generation",
      org: "(reference on request)",
    },
    {
      quote:
        "Megan made strong progress in collaborating with sales and sales leaders, refining messaging and approach. Clear alignment translated into stronger outreach and better outcomes.",
      name: "Head of Marketing",
      org: "(reference on request)",
    },
  ],

  now: [
    "Designing a post-event attribution model that survives a 90-day sales cycle.",
    "Reading: \u201CObviously Awesome\u201D by April Dunford and \u201CRevenue Architecture\u201D by Jacco van der Kooij.",
    "Training a custom GPT to draft executive briefs from raw Gong call transcripts.",
    "Lining up the FY26 conference slate \u2014 trimming two, adding one private summit.",
  ],
};
