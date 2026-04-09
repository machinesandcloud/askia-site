const cities = [
  { hubSlug: "houston-career-coaching", label: "Houston", shortLabel: "Houston", market: "energy, healthcare, operations, finance, and growing technical leadership roles" },
  { hubSlug: "new-york-city-career-coaching", label: "New York City", shortLabel: "New York City", market: "finance, product, enterprise technology, and leadership-track roles" },
  { hubSlug: "dallas-fort-worth-career-coaching", label: "Dallas-Fort Worth", shortLabel: "Dallas-Fort Worth", market: "enterprise operations, finance, technology modernization, and leadership roles" },
  { hubSlug: "austin-career-coaching", label: "Austin", shortLabel: "Austin", market: "software, product, startup, and cloud-oriented roles" },
  { hubSlug: "seattle-career-coaching", label: "Seattle", shortLabel: "Seattle", market: "cloud, platform, product, and large-scale systems roles" },
  { hubSlug: "san-francisco-bay-area-career-coaching", label: "San Francisco Bay Area", shortLabel: "the Bay Area", market: "venture-backed tech, product leadership, platform, and AI roles" },
  { hubSlug: "washington-dc-career-coaching", label: "Washington, DC", shortLabel: "Washington, DC", market: "public-sector-adjacent, cybersecurity, consulting, and leadership roles" },
  { hubSlug: "boston-career-coaching", label: "Boston", shortLabel: "Boston", market: "healthcare, life sciences, data, product, and technical leadership roles" },
  { hubSlug: "atlanta-career-coaching", label: "Atlanta", shortLabel: "Atlanta", market: "growth, fintech, enterprise, and go-to-market leadership roles" },
  { hubSlug: "raleigh-durham-career-coaching", label: "Raleigh–Durham", shortLabel: "Raleigh–Durham", market: "engineering, data, biotech, and modern technical roles" },
  { hubSlug: "denver-career-coaching", label: "Denver", shortLabel: "Denver", market: "cloud, product, operations, and distributed-team leadership roles" },
  { hubSlug: "chicago-career-coaching", label: "Chicago", shortLabel: "Chicago", market: "finance, consulting, operations, enterprise technology, and management roles" },
  { hubSlug: "phoenix-career-coaching", label: "Phoenix", shortLabel: "Phoenix", market: "operations, enterprise growth, and modernization-driven roles" },
  { hubSlug: "san-diego-career-coaching", label: "San Diego", shortLabel: "San Diego", market: "product, healthcare-adjacent, technical, and leadership roles" },
  { hubSlug: "los-angeles-career-coaching", label: "Los Angeles", shortLabel: "Los Angeles", market: "consumer product, media-tech, growth, and cross-functional leadership roles" },
  { hubSlug: "miami-career-coaching", label: "Miami", shortLabel: "Miami", market: "startup, finance, growth, operations, and cross-border professional roles" }
];

const pageTypes = [
  {
    slugPrefix: "career-counselor",
    title: (city) => `Career Counselor in ${city.label} for High-Performing Professionals`,
    metaTitle: (city) => `Career Counselor ${city.label} | Askia`,
    metaDescription: (city) => `A ${city.shortLabel} career counselor page for professionals who want sharper positioning, stronger interviews, and clearer next-role strategy.`,
    schemaName: (city) => `Career counselor in ${city.label}`,
    schemaDescription: (city) => `Career counseling and coaching for ${city.shortLabel} professionals targeting stronger roles, better interviews, and higher compensation.`,
    schemaServiceType: "Career counseling",
    eyebrow: "Local Intent",
    h1: (city) => `Need a career counselor in ${city.label}, not generic advice?`,
    subtitle: (city) => `Askia helps experienced professionals in ${city.shortLabel} turn broad experience into a clearer next-role strategy, stronger interview signal, and better offer leverage.`,
    intro: (city) => `People searching for a career counselor in ${city.label} are usually not looking for motivation alone. They need clarity around what role to target next, how to present their experience, and how to stop wasting cycles on weak-fit opportunities in ${city.market}.`,
    sections: (city) => [
      {
        title: `What this ${city.shortLabel} page is meant to solve`,
        body: `This page is built for professionals who want practical help with role targeting, market positioning, and execution. If your experience is stronger than the way it currently reads on paper or in interviews, this is the right kind of problem to solve first in ${city.shortLabel}.`
      },
      {
        title: "When career counseling beats generic career advice",
        body: `The right ${city.label} career counselor should help you identify the next role you can actually defend, rebuild the way your impact reads, and pressure-test the plan before you spend another month applying into noise.`
      }
    ],
    bullets: (city) => [
      `Role targeting for local ${city.shortLabel} and national-remote paths`,
      "Resume, LinkedIn, and interview clarity in one coaching flow",
      "Clearer level calibration before you start another search cycle"
    ],
    primaryLink: (city) => `/${city.hubSlug}/`,
    primaryLabel: (city) => `See ${city.shortLabel} career coaching`,
    secondaryLink: "/land-your-next-role/",
    secondaryLabel: "Book a strategy call",
    relatedLinks: (city) => [
      { label: `${city.shortLabel} career coaching hub`, url: `/${city.hubSlug}/` },
      { label: "Interview prep", url: "/interview-prep/" },
      { label: "Resume writing", url: "/resume-writing/" }
    ],
    quickAnswer: (city) => `If you need a ${city.label} career counselor, the highest-value version of that search usually means clearer role targeting, stronger materials, and better interview execution rather than generic motivation.`,
    bestFit: (city) => [
      `Mid-career and senior professionals in ${city.shortLabel}`,
      "Candidates with strong experience but weak market signal",
      "People balancing local and national role targets"
    ]
  },
  {
    slugPrefix: "executive-career-coach",
    title: (city) => `Executive Career Coach in ${city.label} for Senior Leaders and VP-Level Candidates`,
    metaTitle: (city) => `Executive Career Coach ${city.label} | Askia`,
    metaDescription: (city) => `Executive career coaching in ${city.shortLabel} for senior leaders, directors, and VP-level candidates targeting higher-scope roles and stronger offers.`,
    schemaName: (city) => `Executive career coach in ${city.label}`,
    schemaDescription: (city) => `Executive career coaching for ${city.shortLabel} leaders targeting director, VP, and enterprise leadership roles.`,
    schemaServiceType: "Executive career coaching",
    eyebrow: "Executive Track",
    h1: (city) => `Executive career coach in ${city.label} for leaders targeting larger scope`,
    subtitle: "For directors, VPs, and senior operators who need stronger positioning, sharper leadership signal, and more control in high-stakes searches.",
    intro: (city) => `Executive career coaching in ${city.label} has to do more than improve confidence. It has to tighten your leadership narrative, clarify the outcomes you actually own, and help you present scope, judgment, and influence in a way boards, founders, and hiring leaders trust quickly.`,
    sections: (city) => [
      {
        title: "What executive coaching should improve first",
        body: "At senior levels, the highest-leverage fix is usually not more content. It is sharper framing: what changed because of your leadership, how broad the system or business scope really was, and why your next move should be bigger than your current title."
      },
      {
        title: `Why ${city.shortLabel} executive candidates need a sharper narrative`,
        body: `Leadership roles in ${city.shortLabel} often sit across ${city.market}. That means your story needs to sound commercially credible, not only accomplished.`
      }
    ],
    bullets: () => [
      "Director, VP, and senior leadership positioning",
      "Executive interview preparation and narrative tightening",
      "Confidential support for compensation and transition decisions"
    ],
    primaryLink: "/executive-coaching/",
    primaryLabel: "See executive coaching",
    secondaryLink: (city) => `/${city.hubSlug}/`,
    secondaryLabel: (city) => `Explore ${city.shortLabel} hub`,
    relatedLinks: (city) => [
      { label: "Executive coaching", url: "/executive-coaching/" },
      { label: "Salary negotiation", url: "/salary-negotiation/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `If you are searching for an executive career coach in ${city.label}, the right page should help you tighten leadership narrative, clarify scope, and position for director, VP, or broader executive roles.`,
    bestFit: () => [
      "Directors and VPs preparing for higher-scope searches",
      "Senior operators needing stronger executive signal",
      "Leaders navigating confidential transitions or negotiations"
    ]
  },
  {
    slugPrefix: "resume-writer",
    title: (city) => `Resume Writer in ${city.label} for High-Signal Professional Positioning`,
    metaTitle: (city) => `Resume Writer ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} resume writing for professionals who need stronger callbacks, clearer seniority signal, and sharper impact framing.`,
    schemaName: (city) => `Resume writer in ${city.label}`,
    schemaDescription: (city) => `Resume writing and resume review for ${city.shortLabel} professionals targeting stronger interviews and higher-scope roles.`,
    schemaServiceType: "Resume writing",
    eyebrow: "Local Service Page",
    h1: (city) => `Resume writer in ${city.label} for professionals who should be getting more callbacks`,
    subtitle: (city) => `A ${city.shortLabel}-focused resume page for candidates whose experience is strong but whose current resume undersells scope, results, or level.`,
    intro: (city) => `People searching for a resume writer in ${city.label} usually want one thing: a resume that finally makes their value obvious. The right fix is not prettier formatting. It is clearer impact, sharper level signal, and a story that aligns with the roles you should actually be targeting.`,
    sections: (city) => [
      {
        title: "What changes after a resume rewrite",
        body: `A stronger resume makes your scope readable fast. It shows what changed because of your work, not just what you were responsible for. That matters in ${city.shortLabel} markets where candidates often have broad operational or technical backgrounds that read too vaguely on paper.`
      },
      {
        title: "When to choose resume writing over DIY editing",
        body: "If your experience spans leadership, systems, cross-functional work, or large environments, the hard part is not writing bullets. It is choosing the right evidence and framing it so recruiters and hiring managers calibrate you correctly."
      }
    ],
    bullets: () => [
      "Results-focused rewrite, not cosmetic editing",
      "Clearer seniority and ownership signal",
      "Built to support local and national searches"
    ],
    primaryLink: "/resume-writing/",
    primaryLabel: "See resume writing",
    secondaryLink: "/linkedin-optimization/",
    secondaryLabel: "Pair with LinkedIn",
    relatedLinks: (city) => [
      { label: "Resume writing", url: "/resume-writing/" },
      { label: "LinkedIn optimization", url: "/linkedin-optimization/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `If you are looking for a resume writer in ${city.label}, the strongest result should improve impact framing, level clarity, and interview conversion rather than just formatting.`,
    bestFit: () => [
      "Candidates getting too few callbacks",
      "Professionals targeting higher-scope roles",
      "Searches where the resume is underselling ownership or results"
    ]
  },
  {
    slugPrefix: "linkedin-profile-writer",
    title: (city) => `LinkedIn Profile Writer in ${city.label} for Better Recruiter Signal`,
    metaTitle: (city) => `LinkedIn Profile Writer ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} LinkedIn optimization for professionals who want stronger recruiter visibility, cleaner positioning, and more inbound opportunities.`,
    schemaName: (city) => `LinkedIn profile writer in ${city.label}`,
    schemaDescription: (city) => `LinkedIn profile writing and optimization for ${city.shortLabel} professionals targeting stronger recruiter visibility.`,
    schemaServiceType: "LinkedIn optimization",
    eyebrow: "Local Service Page",
    h1: (city) => `LinkedIn profile writer in ${city.label} for stronger inbound opportunities`,
    subtitle: "When your LinkedIn profile is vague, generic, or harder to trust than your actual experience, recruiters move on fast.",
    intro: (city) => `A LinkedIn profile writer in ${city.label} should help you do more than rewrite a headline. The real goal is better recruiter search visibility, stronger positioning, and a faster understanding of the scope you bring.`,
    sections: (city) => [
      {
        title: `Why LinkedIn matters in ${city.shortLabel} and beyond`,
        body: `A lot of ${city.shortLabel} candidates are balancing local opportunities with national or remote roles. That makes LinkedIn even more important because it often becomes the first filter before your resume gets a serious read.`
      },
      {
        title: "What a stronger profile should do",
        body: "It should make your role target obvious, your level easier to read, and your experience more credible at a glance. That is what creates more useful inbound, not just more profile views."
      }
    ],
    bullets: () => [
      "Headline, About, and experience positioning",
      "Recruiter-search alignment without sounding stuffed",
      "Stronger match between profile, resume, and target role"
    ],
    primaryLink: "/linkedin-optimization/",
    primaryLabel: "See LinkedIn optimization",
    secondaryLink: "/resume-writing/",
    secondaryLabel: "Add resume support",
    relatedLinks: (city) => [
      { label: "LinkedIn optimization", url: "/linkedin-optimization/" },
      { label: "Resume writing", url: "/resume-writing/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `A LinkedIn profile writer in ${city.label} should improve recruiter visibility, profile credibility, and alignment between your profile, resume, and target role.`,
    bestFit: () => [
      "Candidates relying on recruiter search and inbound",
      "Professionals with vague or generic LinkedIn profiles",
      "Searches that need better local plus remote-market positioning"
    ]
  },
  {
    slugPrefix: "interview-coaching",
    title: (city) => `Interview Coaching in ${city.label} for Stronger Final-Round Conversion`,
    metaTitle: (city) => `Interview Coaching ${city.label} | Askia`,
    metaDescription: (city) => `Interview coaching in ${city.shortLabel} for professionals who want cleaner stories, stronger answers, and better conversion in high-stakes interview loops.`,
    schemaName: (city) => `Interview coaching in ${city.label}`,
    schemaDescription: (city) => `Interview coaching and mock interview support for ${city.shortLabel} professionals targeting stronger offer conversion.`,
    schemaServiceType: "Interview coaching",
    eyebrow: "Local Service Page",
    h1: (city) => `Interview coaching in ${city.label} for professionals who are too good to keep stalling at final rounds`,
    subtitle: "Sharpen your answers, structure your stories, and turn broad experience into high-signal interview performance.",
    intro: (city) => `Interview coaching in ${city.label} should help you do more than practice talking. It should make your examples tighter, your level signal clearer, and your decision-making easier for interviewers to trust.`,
    sections: () => [
      {
        title: "What local interview prep should focus on",
        body: "The highest-leverage fix is usually not more volume. It is better structure. Stronger candidates tend to lose interviews because their stories ramble, undersell scope, or miss the tradeoff the interviewer is actually testing."
      },
      {
        title: "Mock interviews are useful when they mirror real calibration",
        body: "Practice becomes valuable when it pressure-tests how you sound at your target level, not when it simply repeats generic prompts."
      }
    ],
    bullets: () => [
      "Behavioral and technical interview calibration",
      "Stronger story structure and decision framing",
      "Mock interview support tied to real target roles"
    ],
    primaryLink: "/interview-prep/",
    primaryLabel: "See interview prep",
    secondaryLink: "/mock-interviews/",
    secondaryLabel: "See mock interviews",
    relatedLinks: (city) => [
      { label: "Interview prep", url: "/interview-prep/" },
      { label: "Mock interviews", url: "/mock-interviews/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `Interview coaching in ${city.label} should help you sound clearer, tighter, and more level-appropriate in high-stakes interview loops.`,
    bestFit: () => [
      "Candidates getting interviews but not offers",
      "Professionals who ramble or undersell scope in answers",
      "Technical and behavioral loops needing better calibration"
    ]
  },
  {
    slugPrefix: "salary-negotiation-coach",
    title: (city) => `Salary Negotiation Coach in ${city.label} for Better Offer Outcomes`,
    metaTitle: (city) => `Salary Negotiation Coach ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} salary negotiation coaching for professionals who want stronger compensation positioning, clearer asks, and better offer leverage.`,
    schemaName: (city) => `Salary negotiation coach in ${city.label}`,
    schemaDescription: (city) => `Salary negotiation coaching for ${city.shortLabel} professionals targeting stronger compensation outcomes.`,
    schemaServiceType: "Salary negotiation coaching",
    eyebrow: "Local Service Page",
    h1: (city) => `Salary negotiation coach in ${city.label} for candidates who know they are leaving money on the table`,
    subtitle: "Build a stronger compensation story, not just a higher number.",
    intro: (city) => `A salary negotiation coach in ${city.label} should help you understand the package, clarify your leverage, and present the case for a stronger offer without sounding improvised or emotional.`,
    sections: (city) => [
      {
        title: "Why negotiation starts before the offer call",
        body: "The strongest negotiations usually come from earlier positioning. If your scope, level, and outcomes are not clear, the company anchors lower. Good negotiation work starts by fixing that story before the final ask."
      },
      {
        title: `Why ${city.shortLabel} candidates need local and national calibration`,
        body: `A lot of professionals in ${city.shortLabel} are comparing local offers against national market expectations or remote alternatives. That makes package framing and level clarity especially important.`
      }
    ],
    bullets: () => [
      "Base, bonus, equity, and package framing",
      "Scripts and practice before the negotiation starts",
      "Clearer leverage story for stronger counteroffers"
    ],
    primaryLink: "/salary-negotiation/",
    primaryLabel: "See salary negotiation",
    secondaryLink: "/blog/salary/",
    secondaryLabel: "Browse salary guides",
    relatedLinks: (city) => [
      { label: "Salary negotiation", url: "/salary-negotiation/" },
      { label: "Salary guides", url: "/blog/salary/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `A salary negotiation coach in ${city.label} should help you clarify leverage, strengthen package framing, and negotiate from a better anchor before and after the formal offer.`,
    bestFit: () => [
      "Candidates approaching offer stage",
      "Professionals comparing local and national compensation bands",
      "Searches where package framing matters as much as base salary"
    ]
  },
  {
    slugPrefix: "job-search-coach",
    title: (city) => `Job Search Coach in ${city.label} for Sharper Search Systems`,
    metaTitle: (city) => `Job Search Coach ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} job search coaching for professionals who want better role targeting, stronger networking strategy, and fewer wasted applications.`,
    schemaName: (city) => `Job search coach in ${city.label}`,
    schemaDescription: (city) => `Job search coaching for ${city.shortLabel} professionals targeting stronger role alignment and faster interview momentum.`,
    schemaServiceType: "Job search coaching",
    eyebrow: "Local Service Page",
    h1: (city) => `Job search coach in ${city.label} for professionals who need a better system, not more applications`,
    subtitle: "If the search feels noisy, slow, or unfocused, the fix is usually strategy before effort.",
    intro: (city) => `Job search coaching in ${city.label} should help you choose the right roles, tighten the target list, and improve how your materials and outreach convert. More applications rarely fix weak targeting.`,
    sections: (city) => [
      {
        title: "What a sharper search system changes",
        body: "It reduces low-fit applications, improves recruiter response quality, and makes networking and referrals more useful because the role target is clearer."
      },
      {
        title: `Why ${city.shortLabel} searches often split across local and remote paths`,
        body: "That is exactly why the search system matters. You need one clear narrative that works for local employers and for broader national roles without sounding confused."
      }
    ],
    bullets: () => [
      "Role targeting and market segmentation",
      "Networking and outreach strategy",
      "Search metrics that show what to fix next"
    ],
    primaryLink: "/job-search-game-plan/",
    primaryLabel: "See job search game plan",
    secondaryLink: (city) => `/${city.hubSlug}/`,
    secondaryLabel: (city) => `See ${city.shortLabel} hub`,
    relatedLinks: (city) => [
      { label: "Job search game plan", url: "/job-search-game-plan/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` },
      { label: "LinkedIn optimization", url: "/linkedin-optimization/" }
    ],
    quickAnswer: (city) => `A job search coach in ${city.label} should help you tighten targeting, improve search systems, and reduce low-fit applications rather than simply push more volume.`,
    bestFit: () => [
      "Candidates with noisy or stalled searches",
      "Professionals balancing local and remote opportunities",
      "Searches needing better networking and role-target strategy"
    ]
  },
  {
    slugPrefix: "career-change-coach",
    title: (city) => `Career Change Coach in ${city.label} for Mid-Career and Transition Candidates`,
    metaTitle: (city) => `Career Change Coach ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} career change coaching for professionals planning a pivot, a higher-scope transition, or a smarter next-role move.`,
    schemaName: (city) => `Career change coach in ${city.label}`,
    schemaDescription: (city) => `Career change and career transition coaching for ${city.shortLabel} professionals planning a stronger next move.`,
    schemaServiceType: "Career transition coaching",
    eyebrow: "Transition Intent",
    h1: (city) => `Career change coach in ${city.label} for professionals who need a stronger pivot strategy`,
    subtitle: "Change works better when the transition story is credible, not just hopeful.",
    intro: (city) => `Career change coaching in ${city.label} should help you identify what parts of your background still transfer, what role target is actually defendable, and how to communicate the pivot without sounding like a risk.`,
    sections: (city) => [
      {
        title: "What makes a transition credible",
        body: "The strongest transitions reuse real evidence. They connect your prior scope, judgment, and results to the next role instead of trying to erase your previous experience."
      },
      {
        title: `Why ${city.shortLabel} pivots often involve industry translation`,
        body: `Many local professionals are moving across ${city.market}. The right story has to make that move feel logical quickly.`
      }
    ],
    bullets: () => [
      "Transition strategy and target-role selection",
      "Resume and interview positioning for pivots",
      "Cleaner story for reduced-risk hiring perception"
    ],
    primaryLink: "/land-your-next-role/",
    primaryLabel: "See transition support",
    secondaryLink: (city) => `/${city.hubSlug}/`,
    secondaryLabel: (city) => `See ${city.shortLabel} hub`,
    relatedLinks: (city) => [
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` },
      { label: "Resume writing", url: "/resume-writing/" },
      { label: "Interview prep", url: "/interview-prep/" }
    ],
    quickAnswer: (city) => `A career change coach in ${city.label} should help you build a credible transition story, choose a defendable target role, and reduce hiring risk in the way the pivot is presented.`,
    bestFit: () => [
      "Mid-career pivots",
      "Industry translators and adjacent-role moves",
      "Candidates unsure which next role is realistic"
    ]
  },
  {
    slugPrefix: "outplacement",
    title: (city) => `Outplacement Support in ${city.label} for Laid-Off and Reorg-Affected Professionals`,
    metaTitle: (city) => `Outplacement ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} outplacement and reemployment support for professionals affected by layoffs, reorganizations, or sudden job-search transitions.`,
    schemaName: (city) => `Outplacement support in ${city.label}`,
    schemaDescription: (city) => `Outplacement and job-search support for ${city.shortLabel} professionals navigating layoffs, reorgs, or urgent career transitions.`,
    schemaServiceType: "Outplacement support",
    eyebrow: "Event-Driven Search",
    h1: (city) => `Outplacement support in ${city.label} for professionals who need traction quickly`,
    subtitle: "When the change was not planned, the search still needs a calm, structured system.",
    intro: (city) => `Outplacement support in ${city.label} should help candidates stabilize the story fast, update positioning, and move into a more focused search before panic turns into low-signal applications.`,
    sections: () => [
      {
        title: "What matters most after a layoff or reorg",
        body: "Speed matters, but clarity matters more. The search gets stronger when you define the next role, tighten the materials, and fix how the transition is explained before recruiters start asking questions."
      },
      {
        title: "This page is built for urgency without chaos",
        body: "Candidates in sudden transitions usually need a cleaner narrative, sharper interview prep, and a more focused search sequence than generic job-search advice provides."
      }
    ],
    bullets: () => [
      "Search reset after layoffs or reorganizations",
      "Transition narrative and material fixes",
      "Fast prioritization for next-step momentum"
    ],
    primaryLink: "/land-your-next-role/",
    primaryLabel: "Get transition support",
    secondaryLink: "/job-search-game-plan/",
    secondaryLabel: "See job search system",
    relatedLinks: (city) => [
      { label: "Land your next role", url: "/land-your-next-role/" },
      { label: "Job search game plan", url: "/job-search-game-plan/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `Outplacement support in ${city.label} should stabilize the story quickly, sharpen materials, and get the search moving without panic-driven applications.`,
    bestFit: () => [
      "Layoff and reorg transitions",
      "Candidates needing fast narrative and material fixes",
      "Searches that need structure under time pressure"
    ]
  },
  {
    slugPrefix: "ai-ml-career-coaching",
    title: (city) => `AI and ML Career Coaching in ${city.label} for Applied AI Professionals`,
    metaTitle: (city) => `AI ML Career Coaching ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} AI and ML career coaching for professionals who need stronger positioning, clearer impact stories, and higher-scope role targeting.`,
    schemaName: (city) => `AI and ML career coaching in ${city.label}`,
    schemaDescription: (city) => `Career coaching for AI and ML professionals in ${city.shortLabel} targeting stronger roles and clearer market signal.`,
    schemaServiceType: "AI and ML career coaching",
    eyebrow: "Local Niche Page",
    h1: (city) => `AI and ML career coaching in ${city.label} for candidates who need stronger applied-impact signal`,
    subtitle: "For AI and ML professionals whose technical depth is real but whose market narrative still reads too abstract or too research-heavy.",
    intro: () => `This page is built for lower-volume but higher-conversion local niche intent: AI and ML professionals who need a clearer applied story, stronger role targeting, and better interview positioning.`,
    sections: (city) => [
      {
        title: "What makes AI and ML positioning harder",
        body: "A lot of strong candidates talk about models, tools, and experimentation without making the workflow, product, or business impact obvious. That weakens both interviews and compensation conversations."
      },
      {
        title: `Why a ${city.shortLabel} AI page still matters`,
        body: "Local-intent searches still convert well when the offer also supports national and remote paths. This page captures that traffic and routes it into the broader specialty offer."
      }
    ],
    bullets: () => [
      "Applied AI and ML positioning, not hype language",
      "Better translation from model work to business leverage",
      "Stronger interview and compensation framing"
    ],
    primaryLink: "/ai-ml-career-coaching/",
    primaryLabel: "See AI & ML coaching",
    secondaryLink: (city) => `/${city.hubSlug}/`,
    secondaryLabel: (city) => `See ${city.shortLabel} hub`,
    relatedLinks: (city) => [
      { label: "AI & ML coaching", url: "/ai-ml-career-coaching/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` },
      { label: "Interview guides", url: "/blog/interview/" }
    ],
    quickAnswer: (city) => `AI and ML career coaching in ${city.label} should help candidates translate technical depth into clearer applied-impact, interview, and compensation signal.`,
    bestFit: () => [
      "AI engineers and ML engineers",
      "Applied scientists and adjacent technical candidates",
      "Searches needing less hype and more business relevance"
    ]
  },
  {
    slugPrefix: "career-coaching-for-engineers",
    title: (city) => `Career Coaching for Engineers in ${city.label}`,
    metaTitle: (city) => `Career Coaching for Engineers ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} career coaching for engineers across software, platform, cloud, data, and technical leadership tracks.`,
    schemaName: (city) => `Career coaching for engineers in ${city.label}`,
    schemaDescription: (city) => `Career coaching for engineers in ${city.shortLabel} across software, infrastructure, data, and leadership tracks.`,
    schemaServiceType: "Engineering career coaching",
    eyebrow: "Local Niche Page",
    h1: (city) => `Career coaching for engineers in ${city.label} who need stronger level and scope signal`,
    subtitle: "For engineers whose work is stronger than the way it currently reads in resumes, profiles, and interviews.",
    intro: (city) => `Career coaching for engineers in ${city.label} should help you present scope, systems thinking, and business impact in a way hiring managers trust quickly. That is usually the difference between 'strong engineer' and 'clear next-level hire.'`,
    sections: (city) => [
      {
        title: "Why engineers get undersold",
        body: "Technical work is easy to reduce to tools, tickets, or architecture jargon. The stronger story usually shows what changed, what was at stake, and how broad the ownership really was."
      },
      {
        title: `Why ${city.shortLabel} engineering candidates often need dual-market positioning`,
        body: "Many local engineers are targeting both city employers and national remote roles. The story needs to work in both contexts without becoming generic."
      }
    ],
    bullets: () => [
      "Software, DevOps, platform, data, and engineering leadership support",
      "Level calibration for senior, staff, and management tracks",
      "Stronger materials and interview performance"
    ],
    primaryLink: "/software-engineer-career-coaching/",
    primaryLabel: "See software engineer coaching",
    secondaryLink: "/devops-career-coaching/",
    secondaryLabel: "See DevOps & SRE coaching",
    relatedLinks: (city) => [
      { label: "Software engineer coaching", url: "/software-engineer-career-coaching/" },
      { label: "DevOps & SRE coaching", url: "/devops-career-coaching/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `Career coaching for engineers in ${city.label} should make scope, systems thinking, and business impact easier for hiring managers to read quickly.`,
    bestFit: () => [
      "Software, platform, cloud, and data engineers",
      "Senior, staff, and management-track candidates",
      "Searches where level and scope are being underestimated"
    ]
  },
  {
    slugPrefix: "career-coaching-for-legal-compliance",
    title: (city) => `Legal and Compliance Career Coaching in ${city.label}`,
    metaTitle: (city) => `Legal Compliance Career Coaching ${city.label} | Askia`,
    metaDescription: (city) => `${city.shortLabel} legal and compliance career coaching for professionals who need stronger governance, risk, and leadership positioning.`,
    schemaName: (city) => `Legal and compliance career coaching in ${city.label}`,
    schemaDescription: (city) => `Career coaching for legal and compliance professionals in ${city.shortLabel} targeting stronger roles and clearer leadership signal.`,
    schemaServiceType: "Legal and compliance career coaching",
    eyebrow: "Local Niche Page",
    h1: (city) => `Legal and compliance career coaching in ${city.label} for professionals who need stronger governance and leadership signal`,
    subtitle: "For legal and compliance candidates whose work is credible but whose positioning still sounds narrower than the role they should be targeting.",
    intro: (city) => `Legal and compliance career coaching in ${city.label} is a high-intent niche because the right story has to sound strategic, commercial, and trustworthy at the same time. That is hard to do with generic career advice.`,
    sections: () => [
      {
        title: "What strong legal and compliance positioning looks like",
        body: "It should make governance, risk judgment, stakeholder management, and business influence visible. Those are usually the signals that separate a strong operator from a higher-scope hire."
      },
      {
        title: "Why this local niche page matters",
        body: "This page turns Askia's existing legal and compliance specialty into a local-intent conversion page instead of relying on a national page alone."
      }
    ],
    bullets: () => [
      "Governance, risk, and stakeholder-positioning support",
      "Clearer seniority and leadership framing",
      "Better interviews and stronger compensation stories"
    ],
    primaryLink: "/legal-compliance-career-coaching/",
    primaryLabel: "See legal & compliance coaching",
    secondaryLink: (city) => `/${city.hubSlug}/`,
    secondaryLabel: (city) => `See ${city.shortLabel} hub`,
    relatedLinks: (city) => [
      { label: "Legal & compliance coaching", url: "/legal-compliance-career-coaching/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` },
      { label: "Salary negotiation", url: "/salary-negotiation/" }
    ],
    quickAnswer: (city) => `Legal and compliance career coaching in ${city.label} should improve governance, risk, and stakeholder-positioning signal so the candidate reads as stronger and more strategic.`,
    bestFit: () => [
      "Legal, compliance, governance, and risk professionals",
      "Mid-career and senior candidates aiming higher",
      "Searches needing stronger leadership and business framing"
    ]
  },
  {
    slugPrefix: "career-coaches",
    title: (city) => `Career Coaches in ${city.label}: How to Choose the Right Fit`,
    metaTitle: (city) => `Career Coaches ${city.label} | Askia`,
    metaDescription: (city) => `Compare career coaches in ${city.shortLabel} and learn what actually matters when choosing a coaching service for stronger roles and better offers.`,
    schemaName: (city) => `Career coaches in ${city.label}`,
    schemaDescription: (city) => `Career coaching comparison page for professionals evaluating career coaches in ${city.shortLabel}.`,
    schemaServiceType: "Career coaching services",
    eyebrow: "Commercial Intent",
    h1: (city) => `Career coaches in ${city.label}: what actually matters when choosing one`,
    subtitle: "Not all local coaching pages solve the same problem. This one is built to help you choose based on fit, signal quality, and the kind of outcome you need.",
    intro: (city) => `People searching for career coaches in ${city.label} are usually comparing style, services, and credibility. The highest-value difference is whether the coach can help you target the right role, tighten your market signal, and improve actual conversion in the search.`,
    sections: (city) => [
      { title: `What to compare among career coaches in ${city.shortLabel}`, body: "The useful comparison is not personality alone. It is role targeting, materials, interview support, compensation strategy, and whether the advice is specific enough to change your search outcomes." },
      { title: "How Askia fits into that choice", body: "Askia is strongest for experienced professionals who need a sharper, more strategic search story rather than broad accountability or mindset-first support." }
    ],
    bullets: () => ["Clearer fit signals", "Service-specific routing", "Faster path to the right coaching page"],
    primaryLink: (city) => `/${city.hubSlug}/`,
    primaryLabel: (city) => `See ${city.shortLabel} career coaching`,
    secondaryLink: "/land-your-next-role/",
    secondaryLabel: "Book a strategy call",
    relatedLinks: (city) => [
      { label: `${city.shortLabel} career coaching hub`, url: `/${city.hubSlug}/` },
      { label: "Resume writing", url: "/resume-writing/" },
      { label: "Interview prep", url: "/interview-prep/" }
    ],
    quickAnswer: (city) => `The best career coaches in ${city.label} are usually the ones who can help you choose the right target role, improve how your value reads, and raise conversion in interviews and offers.`,
    bestFit: () => ["People comparing multiple coaching options", "Searches with commercial comparison intent", "Candidates who want role- and service-specific clarity"]
  },
  {
    slugPrefix: "career-coaching-services",
    title: (city) => `Career Coaching Services in ${city.label}`,
    metaTitle: (city) => `Career Coaching Services ${city.label} | Askia`,
    metaDescription: (city) => `Career coaching services in ${city.shortLabel} covering role targeting, resume, LinkedIn, interview prep, and salary negotiation support.`,
    schemaName: (city) => `Career coaching services in ${city.label}`,
    schemaDescription: (city) => `Career coaching services page for ${city.shortLabel} professionals across search, interview, and offer stages.`,
    schemaServiceType: "Career coaching services",
    eyebrow: "Service Intent",
    h1: (city) => `Career coaching services in ${city.label} for professionals targeting stronger roles`,
    subtitle: "A local service-intent page that makes the core coaching offer easier to understand and compare.",
    intro: (city) => `Career coaching services in ${city.label} usually need to answer one question fast: what exactly do you get, and which part of the search does it fix first? This page is built to route that intent clearly.`,
    sections: () => [
      { title: "What sits inside career coaching services", body: "The strongest offer usually combines role targeting, resume and LinkedIn positioning, interview prep, and salary negotiation rather than treating each part of the search as unrelated." },
      { title: "Why service clarity matters", body: "Many candidates know they need help but do not know whether the problem is targeting, materials, interviews, or offers. A strong local services page should make that path easy to understand." }
    ],
    bullets: () => ["Role-targeting support", "Materials and interview services", "Negotiation and transition strategy"],
    primaryLink: "/services/",
    primaryLabel: "See all services",
    secondaryLink: (city) => `/${city.hubSlug}/`,
    secondaryLabel: (city) => `See ${city.shortLabel} hub`,
    relatedLinks: (city) => [
      { label: "Services", url: "/services/" },
      { label: `${city.shortLabel} career coaching hub`, url: `/${city.hubSlug}/` },
      { label: "Land your next role", url: "/land-your-next-role/" }
    ],
    quickAnswer: (city) => `Career coaching services in ${city.label} should cover the full job-search funnel: role targeting, materials, interview performance, and compensation strategy.`,
    bestFit: () => ["People searching for services rather than a single deliverable", "Candidates unsure what kind of support they need", "Searches with direct local buying intent"]
  },
  {
    slugPrefix: "resume-writing-services",
    title: (city) => `Resume Writing Services in ${city.label}`,
    metaTitle: (city) => `Resume Writing Services ${city.label} | Askia`,
    metaDescription: (city) => `Resume writing services in ${city.shortLabel} for professionals who need stronger callbacks, clearer impact, and better-level positioning.`,
    schemaName: (city) => `Resume writing services in ${city.label}`,
    schemaDescription: (city) => `Resume writing services page for ${city.shortLabel} professionals targeting stronger interviews.`,
    schemaServiceType: "Resume writing services",
    eyebrow: "Service Intent",
    h1: (city) => `Resume writing services in ${city.label} for stronger callback rates`,
    subtitle: "When the issue is not effort but how your value reads on paper.",
    intro: (city) => `Resume writing services in ${city.label} should focus on impact, scope, and level clarity. The point is not just to improve the document. It is to improve the way the market calibrates you.`,
    sections: () => [
      { title: "What strong resume services should improve", body: "A better resume should make your results easier to trust, your ownership easier to see, and your target role easier to defend." },
      { title: "Why exact service pages matter", body: "Many candidates search for the deliverable first. A dedicated page helps capture that intent without forcing the user through a broader career-coaching explanation first." }
    ],
    bullets: () => ["Impact-driven resume rewrite", "Stronger seniority and ownership signal", "Built to support interviews, not just applications"],
    primaryLink: "/resume-writing/",
    primaryLabel: "See resume writing",
    secondaryLink: "/linkedin-optimization/",
    secondaryLabel: "Pair with LinkedIn",
    relatedLinks: (city) => [
      { label: "Resume writing", url: "/resume-writing/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` },
      { label: "LinkedIn optimization", url: "/linkedin-optimization/" }
    ],
    quickAnswer: (city) => `Resume writing services in ${city.label} should make your impact and level obvious quickly enough to improve callback quality and recruiter trust.`,
    bestFit: () => ["Candidates with low callback rates", "Professionals whose experience reads too generically", "Searches where the resume is the first obvious bottleneck"]
  },
  {
    slugPrefix: "interview-prep-services",
    title: (city) => `Interview Prep Services in ${city.label}`,
    metaTitle: (city) => `Interview Prep Services ${city.label} | Askia`,
    metaDescription: (city) => `Interview prep services in ${city.shortLabel} for professionals who want stronger story structure, clearer answers, and better offer conversion.`,
    schemaName: (city) => `Interview prep services in ${city.label}`,
    schemaDescription: (city) => `Interview prep services page for ${city.shortLabel} professionals targeting stronger interview conversion.`,
    schemaServiceType: "Interview prep services",
    eyebrow: "Service Intent",
    h1: (city) => `Interview prep services in ${city.label} for stronger conversion`,
    subtitle: "Useful prep should improve how you sound, not just how much you rehearse.",
    intro: (city) => `Interview prep services in ${city.label} should help candidates tighten stories, answer with better structure, and sound more level-appropriate under pressure.`,
    sections: () => [
      { title: "What interview prep should actually fix", body: "The strongest prep improves clarity, tradeoff framing, and the relevance of your examples. It should not just create more repetition." },
      { title: "Why service-intent pages matter here", body: "A lot of candidates search for interview prep as a deliverable. A dedicated local page makes that intent easier to capture and route." }
    ],
    bullets: () => ["Behavioral and technical answer structure", "Mock interview and calibration support", "Better final-round conversion"],
    primaryLink: "/interview-prep/",
    primaryLabel: "See interview prep",
    secondaryLink: "/mock-interviews/",
    secondaryLabel: "See mock interviews",
    relatedLinks: (city) => [
      { label: "Interview prep", url: "/interview-prep/" },
      { label: "Mock interviews", url: "/mock-interviews/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `Interview prep services in ${city.label} should improve story quality, level calibration, and how clearly your judgment comes through in interviews.`,
    bestFit: () => ["Candidates getting interviews but not offers", "Professionals who need better story structure", "Loops where technical and behavioral signal both matter"]
  },
  {
    slugPrefix: "linkedin-optimization-services",
    title: (city) => `LinkedIn Optimization Services in ${city.label}`,
    metaTitle: (city) => `LinkedIn Optimization Services ${city.label} | Askia`,
    metaDescription: (city) => `LinkedIn optimization services in ${city.shortLabel} for professionals who want stronger recruiter search visibility and more credible positioning.`,
    schemaName: (city) => `LinkedIn optimization services in ${city.label}`,
    schemaDescription: (city) => `LinkedIn optimization services page for ${city.shortLabel} professionals targeting stronger recruiter visibility.`,
    schemaServiceType: "LinkedIn optimization services",
    eyebrow: "Service Intent",
    h1: (city) => `LinkedIn optimization services in ${city.label} for better recruiter visibility`,
    subtitle: "A focused local page for candidates who know the profile is underperforming.",
    intro: (city) => `LinkedIn optimization services in ${city.label} should make recruiter search visibility, role positioning, and profile credibility meaningfully stronger rather than simply rewriting a few lines.`,
    sections: () => [
      { title: "What LinkedIn optimization should do", body: "It should improve first-read clarity, align the profile to the right target role, and make the profile work with the resume rather than against it." },
      { title: "Why this deserves its own page", body: "LinkedIn often functions like a live screening surface. Local service-intent pages help capture people searching for that deliverable directly." }
    ],
    bullets: () => ["Profile positioning", "Recruiter-search alignment", "Better profile and resume consistency"],
    primaryLink: "/linkedin-optimization/",
    primaryLabel: "See LinkedIn optimization",
    secondaryLink: "/resume-writing/",
    secondaryLabel: "Add resume support",
    relatedLinks: (city) => [
      { label: "LinkedIn optimization", url: "/linkedin-optimization/" },
      { label: "Resume writing", url: "/resume-writing/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `LinkedIn optimization services in ${city.label} should improve how recruiters find you and how quickly they trust your level and role fit.`,
    bestFit: () => ["Candidates relying on recruiter inbound", "Searches with weak profile visibility", "Professionals needing profile and resume alignment"]
  },
  {
    slugPrefix: "salary-negotiation-services",
    title: (city) => `Salary Negotiation Services in ${city.label}`,
    metaTitle: (city) => `Salary Negotiation Services ${city.label} | Askia`,
    metaDescription: (city) => `Salary negotiation services in ${city.shortLabel} for professionals who want stronger package framing, better scripts, and better offer outcomes.`,
    schemaName: (city) => `Salary negotiation services in ${city.label}`,
    schemaDescription: (city) => `Salary negotiation services page for ${city.shortLabel} professionals targeting stronger compensation outcomes.`,
    schemaServiceType: "Salary negotiation services",
    eyebrow: "Service Intent",
    h1: (city) => `Salary negotiation services in ${city.label} for stronger package outcomes`,
    subtitle: "For candidates who want more than a one-line counteroffer script.",
    intro: (city) => `Salary negotiation services in ${city.label} should improve your compensation story, your package framing, and your confidence in the actual negotiation conversation.`,
    sections: () => [
      { title: "What good negotiation support covers", body: "The strongest service covers timing, package components, level framing, market anchors, and how to make the ask sound credible rather than reactive." },
      { title: "Why a dedicated page matters", body: "Many candidates search for negotiation help only when they feel the offer pressure. A direct local page captures that urgency more cleanly." }
    ],
    bullets: () => ["Package strategy", "Scripts and practice", "Clearer leverage and stronger asks"],
    primaryLink: "/salary-negotiation/",
    primaryLabel: "See salary negotiation",
    secondaryLink: "/blog/salary/",
    secondaryLabel: "Browse salary guides",
    relatedLinks: (city) => [
      { label: "Salary negotiation", url: "/salary-negotiation/" },
      { label: "Salary guides", url: "/blog/salary/" },
      { label: `${city.shortLabel} career coaching`, url: `/${city.hubSlug}/` }
    ],
    quickAnswer: (city) => `Salary negotiation services in ${city.label} should strengthen the package narrative before and during the final conversation so the ask sounds earned and well-framed.`,
    bestFit: () => ["Candidates at offer stage", "Professionals comparing package components", "Searches where local and national pay anchors conflict"]
  }
];

const defaultFaq = (entry) => [
  {
    q: `Is this page only for people searching in ${entry.cityLabel}?`,
    a: `No. The page targets ${entry.cityLabel} local-intent searches, but the coaching itself can support both local and broader national or remote opportunities.`
  },
  {
    q: `What should I do next if this is the right fit?`,
    a: "Use the primary page linked here to review the main service or niche offer, then book a strategy call if you want help choosing the strongest next move."
  }
];

function resolve(value, city) {
  return typeof value === "function" ? value(city) : value;
}

module.exports = cities.flatMap((city) => {
  const cityBaseSlug = city.hubSlug.replace(/-career-coaching$/, "");

  return pageTypes.map((pageType) => {
    const slug = `${pageType.slugPrefix}-${cityBaseSlug}`;
    return {
      slug,
      cityLabel: city.label,
      hubSlug: city.hubSlug,
      title: pageType.title(city),
      metaTitle: pageType.metaTitle(city),
      metaDescription: pageType.metaDescription(city),
      schemaName: pageType.schemaName(city),
      schemaDescription: pageType.schemaDescription(city),
      schemaServiceType: pageType.schemaServiceType,
      eyebrow: pageType.eyebrow,
      h1: pageType.h1(city),
      subtitle: resolve(pageType.subtitle, city),
      intro: resolve(pageType.intro, city),
      sections: resolve(pageType.sections, city),
      bullets: resolve(pageType.bullets, city),
      primaryLink: resolve(pageType.primaryLink, city),
      primaryLabel: resolve(pageType.primaryLabel, city),
      secondaryLink: resolve(pageType.secondaryLink, city),
      secondaryLabel: resolve(pageType.secondaryLabel, city),
      relatedLinks: pageType.relatedLinks(city),
      quickAnswer: resolve(pageType.quickAnswer, city),
      bestFit: resolve(pageType.bestFit, city),
      faq: defaultFaq({ cityLabel: city.label })
    };
  });
});
