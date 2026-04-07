const cities = require("./cities.json").items;

const roleLinkSets = {
  technical: [
    { label: "DevOps & SRE coaching", url: "/devops-career-coaching/" },
    { label: "Software engineer coaching", url: "/software-engineer-career-coaching/" },
    { label: "Product manager coaching", url: "/product-manager-career-coaching/" },
    { label: "Engineering manager coaching", url: "/engineering-manager-coaching/" }
  ],
  enterprise: [
    { label: "Operations coaching", url: "/operations-career-coaching/" },
    { label: "Finance & FP&A coaching", url: "/finance-fpa-career-coaching/" },
    { label: "Project / Program coaching", url: "/project-program-management-coaching/" },
    { label: "Supply chain coaching", url: "/supply-chain-career-coaching/" }
  ],
  business: [
    { label: "Product manager coaching", url: "/product-manager-career-coaching/" },
    { label: "Strategy & consulting coaching", url: "/strategy-consulting-career-coaching/" },
    { label: "Finance & FP&A coaching", url: "/finance-fpa-career-coaching/" },
    { label: "Operations coaching", url: "/operations-career-coaching/" }
  ],
  growth: [
    { label: "Marketing & growth coaching", url: "/marketing-career-coaching/" },
    { label: "Sales coaching", url: "/sales-career-coaching/" },
    { label: "Product manager coaching", url: "/product-manager-career-coaching/" },
    { label: "Operations coaching", url: "/operations-career-coaching/" }
  ],
  publicSector: [
    { label: "Cybersecurity coaching", url: "/cybersecurity-career-coaching/" },
    { label: "Project / Program coaching", url: "/project-program-management-coaching/" },
    { label: "Strategy & consulting coaching", url: "/strategy-consulting-career-coaching/" },
    { label: "Operations coaching", url: "/operations-career-coaching/" }
  ],
  healthcare: [
    { label: "Healthcare administration coaching", url: "/healthcare-administration-career-coaching/" },
    { label: "Data coaching", url: "/data-career-coaching/" },
    { label: "Product manager coaching", url: "/product-manager-career-coaching/" },
    { label: "Engineering manager coaching", url: "/engineering-manager-coaching/" }
  ]
};

const serviceLinkSets = {
  default: [
    { label: "Interview preparation", url: "/interview-prep/" },
    { label: "Salary negotiation", url: "/salary-negotiation/" },
    { label: "Resume writing", url: "/resume-writing/" },
    { label: "LinkedIn optimization", url: "/linkedin-optimization/" }
  ],
  leadership: [
    { label: "Interview preparation", url: "/interview-prep/" },
    { label: "Salary negotiation", url: "/salary-negotiation/" },
    { label: "Executive coaching", url: "/services/" },
    { label: "LinkedIn optimization", url: "/linkedin-optimization/" }
  ]
};

const defaults = {
  marketLine:
    "This market usually rewards candidates who are clear about level, measurable impact, and the kind of role they want next.",
  focusAreas: [
    "Role targeting for $100K-$350K opportunities",
    "Resume and LinkedIn positioning that makes impact easier to read",
    "Interview and offer strategy for higher-signal hiring loops"
  ],
  comparisonLine:
    "If you are comparing career coaches in this market, the real question is not who sounds the most motivational. It is who can help you turn your work into hiring signal that actually changes recruiter and hiring-manager behavior.",
  marketThemes: [
    "faster role targeting and level calibration",
    "clearer proof of scope, outcomes, and leadership",
    "stronger interview and negotiation performance"
  ],
  bestFor: [
    "mid-career professionals stuck below the level they should be targeting",
    "senior candidates who need stronger market signal",
    "operators, managers, and specialists preparing for a sharper search"
  ],
  roleLinks: roleLinkSets.technical,
  serviceLinks: serviceLinkSets.default
};

function makeProfile(cityName, content) {
  return {
    marketLine: content.marketLine,
    focusAreas: content.focusAreas,
    comparisonLine: content.comparisonLine,
    marketThemes: content.marketThemes,
    bestFor: content.bestFor,
    roleLinks: content.roleLinks,
    serviceLinks: content.serviceLinks
  };
}

function techHub(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} hiring tends to reward candidates who can make technical depth, ownership, and business impact obvious early in the process.`,
    focusAreas: [
      `career coaching for ${cityName} professionals targeting engineering, platform, product, data, or staff-plus roles`,
      "clearer positioning for both local opportunities and high-signal remote roles",
      "interview and negotiation support for premium compensation bands"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, the highest-value difference is whether the coach can sharpen your signal for a market that often calibrates hard on scope, systems thinking, and leverage.`,
    marketThemes: [
      "tighter technical and leadership positioning",
      "cleaner stories around scale, architecture, and ownership",
      "stronger interview and compensation performance in high-bar hiring loops"
    ],
    bestFor: [
      `software, platform, cloud, product, data, and engineering leadership candidates in ${cityName}`,
      "professionals defending senior, staff, or management-level positioning",
      "candidates who need a sharper story before starting another interview cycle"
    ],
    roleLinks: roleLinkSets.technical,
    serviceLinks: serviceLinkSets.leadership
  });
}

function financeStrategy(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} usually rewards candidates who can connect scope, business judgment, and leadership signal without sounding broad or inflated.`,
    focusAreas: [
      `career coaching for ${cityName} professionals in strategy, finance, operations, product, and leadership tracks`,
      "positioning that makes decision-making range and business impact easier to trust",
      "interview and offer strategy for competitive, high-judgment hiring loops"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, a better question is whether they can help you sound more decisive, commercially aware, and level-appropriate from the first read onward.`,
    marketThemes: [
      "clearer level and business relevance",
      "more credible executive and stakeholder framing",
      "tighter compensation positioning for premium markets"
    ],
    bestFor: [
      `finance, consulting, product, operations, and leadership candidates in ${cityName}`,
      "professionals operating in competitive interview environments",
      "candidates who need stronger senior or executive-ready storytelling"
    ],
    roleLinks: roleLinkSets.business,
    serviceLinks: serviceLinkSets.leadership
  });
}

function enterpriseOps(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} often rewards candidates who can show operational range, measurable outcomes, and leadership breadth across complex organizations.`,
    focusAreas: [
      `career coaching for ${cityName} professionals in operations, enterprise technology, finance, supply chain, and management tracks`,
      "cleaner positioning for larger-scope ownership and cross-functional work",
      "offer strategy for candidates moving above title-based expectations"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, the real separator is whether they can help you translate heavy execution into clean leadership and market signal.`,
    marketThemes: [
      "stronger proof of scope and operational scale",
      "clearer promotion and level-readiness positioning",
      "better negotiation when role complexity exceeds the title"
    ],
    bestFor: [
      `operations, enterprise, finance, and management candidates in ${cityName}`,
      "senior ICs and managers aiming for broader ownership",
      "professionals whose results are stronger than the way they currently present them"
    ],
    roleLinks: roleLinkSets.enterprise,
    serviceLinks: serviceLinkSets.default
  });
}

function growthCreative(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} usually rewards candidates who can connect growth, execution, and business outcomes clearly rather than sounding broad, creative-only, or tactical.`,
    focusAreas: [
      `career coaching for ${cityName} professionals in growth, marketing, sales, operations, product, and hybrid leadership roles`,
      "positioning that turns broad experience into a cleaner next-role story",
      "interview and compensation strategy for faster-moving growth markets"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, the most useful difference is whether the coach can reduce noise in your story and make your value easy to read.`,
    marketThemes: [
      "clearer market positioning for broad operators",
      "better translation of growth, product, and revenue impact",
      "stronger interview and salary confidence"
    ],
    bestFor: [
      `marketing, sales, product, operations, and leadership candidates in ${cityName}`,
      "professionals repositioning for higher-paying strategy or management roles",
      "candidates who need more structure in the way they present breadth"
    ],
    roleLinks: roleLinkSets.growth,
    serviceLinks: serviceLinkSets.default
  });
}

function publicSector(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} hiring often rewards candidates who can make strategy, execution, stakeholder management, and trust signals easy to understand quickly.`,
    focusAreas: [
      `career coaching for ${cityName} professionals in cybersecurity, consulting, program leadership, operations, and public-sector-adjacent work`,
      "positioning that translates mission-driven or regulated work into stronger market signal",
      "interview and offer strategy for candidates moving between local, federal, and private-sector paths"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, focus on whether they can help you frame complexity, accountability, and stakeholder management in a way that feels commercially credible.`,
    marketThemes: [
      "clearer strategy and leadership framing",
      "better translation between regulated and private-sector environments",
      "stronger executive presence in interview settings"
    ],
    bestFor: [
      `cybersecurity, consulting, program, operations, and leadership candidates in ${cityName}`,
      "professionals moving between public-sector and private-sector hiring loops",
      "candidates who need tighter communication around ownership and influence"
    ],
    roleLinks: roleLinkSets.publicSector,
    serviceLinks: serviceLinkSets.leadership
  });
}

function healthcareKnowledge(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} tends to reward candidates who can combine technical or domain depth with calm, credible leadership signal.`,
    focusAreas: [
      `career coaching for ${cityName} professionals in healthcare, biotech, data, product, technical leadership, and knowledge-heavy environments`,
      "positioning that makes expertise easier to trust without overselling",
      "interview and offer strategy for high-bar hiring environments"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, the useful distinction is whether they can help you turn dense expertise into a clear story that still feels senior and commercial.`,
    marketThemes: [
      "clearer expertise-to-impact translation",
      "stronger leadership signal in knowledge-heavy markets",
      "better positioning for senior and cross-functional roles"
    ],
    bestFor: [
      `healthcare, biotech, data, product, and leadership candidates in ${cityName}`,
      "professionals whose expertise is strong but hard to summarize",
      "candidates aiming for higher-scope roles in demanding markets"
    ],
    roleLinks: roleLinkSets.healthcare,
    serviceLinks: serviceLinkSets.leadership
  });
}

function regionalGeneral(cityName) {
  return makeProfile(cityName, {
    marketLine:
      `${cityName} often rewards candidates who are specific about the role they want next, the outcomes they own, and the level they should actually target.`,
    focusAreas: [
      `career coaching for ${cityName} professionals across technical, business, operations, and leadership tracks`,
      "clearer positioning for local opportunities without closing off remote options",
      "interview and offer strategy that raises confidence and conversion quality"
    ],
    comparisonLine:
      `If you are comparing career coaches in ${cityName}, the best option is usually the one that helps you move from generic experience to a sharper and more trusted market story.`,
    marketThemes: [
      "cleaner next-role targeting",
      "more credible impact and scope framing",
      "stronger interview and negotiation execution"
    ],
    bestFor: [
      `mid-career and senior professionals in ${cityName} who need sharper signal`,
      "operators, managers, and specialists aiming for better-fit roles",
      "candidates balancing local searches with remote opportunities"
    ],
    roleLinks: roleLinkSets.business,
    serviceLinks: serviceLinkSets.default
  });
}

const profileBySlug = {
  "houston-career-coaching": enterpriseOps,
  "new-york-city-career-coaching": financeStrategy,
  "los-angeles-career-coaching": growthCreative,
  "chicago-career-coaching": financeStrategy,
  "dallas-fort-worth-career-coaching": enterpriseOps,
  "san-francisco-bay-area-career-coaching": techHub,
  "austin-career-coaching": techHub,
  "seattle-career-coaching": techHub,
  "boston-career-coaching": healthcareKnowledge,
  "washington-dc-career-coaching": publicSector,
  "atlanta-career-coaching": growthCreative,
  "miami-career-coaching": growthCreative,
  "denver-career-coaching": techHub,
  "phoenix-career-coaching": growthCreative,
  "philadelphia-career-coaching": financeStrategy,
  "minneapolis-st-paul-career-coaching": healthcareKnowledge,
  "san-diego-career-coaching": techHub,
  "detroit-career-coaching": enterpriseOps,
  "tampa-st-petersburg-career-coaching": growthCreative,
  "orlando-career-coaching": growthCreative,
  "raleigh-durham-career-coaching": techHub,
  "charlotte-career-coaching": financeStrategy,
  "nashville-career-coaching": healthcareKnowledge,
  "columbus-career-coaching": enterpriseOps,
  "cleveland-career-coaching": enterpriseOps,
  "cincinnati-career-coaching": enterpriseOps,
  "pittsburgh-career-coaching": financeStrategy,
  "st-louis-career-coaching": enterpriseOps,
  "kansas-city-career-coaching": enterpriseOps,
  "indianapolis-career-coaching": enterpriseOps,
  "milwaukee-career-coaching": enterpriseOps,
  "new-orleans-career-coaching": healthcareKnowledge,
  "san-antonio-career-coaching": enterpriseOps,
  "portland-career-coaching": techHub,
  "sacramento-career-coaching": publicSector,
  "las-vegas-career-coaching": growthCreative,
  "salt-lake-city-career-coaching": techHub,
  "baltimore-career-coaching": publicSector,
  "richmond-career-coaching": publicSector,
  "virginia-beach-career-coaching": publicSector,
  "jacksonville-career-coaching": growthCreative,
  "memphis-career-coaching": enterpriseOps,
  "oklahoma-city-career-coaching": enterpriseOps,
  "albuquerque-career-coaching": regionalGeneral,
  "bakersfield-career-coaching": enterpriseOps,
  "baton-rouge-career-coaching": enterpriseOps,
  "charleston-career-coaching": growthCreative,
  "des-moines-career-coaching": enterpriseOps,
  "el-paso-career-coaching": enterpriseOps,
  "fort-lauderdale-career-coaching": growthCreative,
  "fresno-career-coaching": enterpriseOps,
  "greenville-career-coaching": enterpriseOps,
  "honolulu-career-coaching": growthCreative,
  "jersey-city-career-coaching": financeStrategy,
  "long-island-career-coaching": financeStrategy,
  "louisville-career-coaching": enterpriseOps,
  "madison-career-coaching": healthcareKnowledge,
  "birmingham-career-coaching": enterpriseOps,
  "hartford-career-coaching": financeStrategy,
  "new-haven-career-coaching": healthcareKnowledge,
  "newark-career-coaching": financeStrategy,
  "norfolk-career-coaching": publicSector,
  "providence-career-coaching": healthcareKnowledge,
  "buffalo-career-coaching": financeStrategy,
  "rochester-career-coaching": healthcareKnowledge,
  "colorado-springs-career-coaching": publicSector,
  "boise-career-coaching": techHub,
  "oakland-career-coaching": techHub,
  "reno-career-coaching": techHub,
  "albany-career-coaching": publicSector,
  "omaha-career-coaching": enterpriseOps,
  "grand-rapids-career-coaching": enterpriseOps,
  "harrisburg-career-coaching": publicSector,
  "portland-me-career-coaching": healthcareKnowledge,
  "myrtle-beach-career-coaching": growthCreative,
  "riverside-san-bernardino-career-coaching": growthCreative,
  "san-jose-career-coaching": techHub,
  "san-juan-career-coaching": growthCreative,
  "scottsdale-career-coaching": growthCreative,
  "spokane-career-coaching": regionalGeneral,
  "tucson-career-coaching": growthCreative,
  "tulsa-career-coaching": enterpriseOps,
  "west-palm-beach-career-coaching": growthCreative,
  "wichita-career-coaching": enterpriseOps,
  "wilmington-career-coaching": regionalGeneral,
  "greenville-spartanburg-anderson-career-coaching": enterpriseOps,
  "fayetteville-ar-career-coaching": enterpriseOps,
  "fort-wayne-career-coaching": enterpriseOps,
  "pensacola-career-coaching": publicSector,
  "columbia-sc-career-coaching": publicSector
};

const citySpecific = {
  "houston-career-coaching": {
    marketLine:
      "Houston tends to reward candidates who can position themselves clearly across energy, healthcare, operations, finance, and growing tech-adjacent leadership tracks.",
    focusAreas: [
      "career coaching for Houston professionals navigating energy, healthcare, operations, and technical leadership markets",
      "cleaner positioning for local and remote roles without underselling scope",
      "offer strategy for candidates moving into higher-paying or more strategic work"
    ],
    comparisonLine:
      "If you are comparing career coaches in Houston, the highest-value difference is whether the coach can actually sharpen your positioning for the Houston market and for the remote or national roles Houston professionals increasingly target.",
    marketThemes: [
      "leadership-ready positioning for Houston-based operators and technical professionals",
      "better interview signal for energy, healthcare, enterprise, and growth roles",
      "higher-confidence negotiation when the role scope is larger than the title suggests"
    ],
    bestFor: [
      "engineering, operations, healthcare, finance, and enterprise candidates in Houston",
      "professionals trying to move from local-market compensation into stronger national bands",
      "senior candidates who need a clearer story than 'I have done a lot'"
    ],
    keywordSupport:
      "If you searched for career coach Houston, career coaching Houston TX, or career counselor Houston, this page is designed to act as the main Houston hub and route you to the right service-specific page quickly.",
    roleLinks: [
      { label: "DevOps & SRE coaching", url: "/devops-career-coaching/" },
      { label: "Operations coaching", url: "/operations-career-coaching/" },
      { label: "Healthcare administration coaching", url: "/healthcare-administration-career-coaching/" },
      { label: "Finance & FP&A coaching", url: "/finance-fpa-career-coaching/" }
    ],
    localClusterLinks: [
      { label: "Career counselor Houston", url: "/career-counselor-houston/" },
      { label: "Executive career coach Houston", url: "/executive-career-coach-houston/" },
      { label: "Resume writer Houston", url: "/resume-writer-houston/" },
      { label: "LinkedIn profile writer Houston", url: "/linkedin-profile-writer-houston/" },
      { label: "Interview coaching Houston", url: "/interview-coaching-houston/" },
      { label: "Salary negotiation coach Houston", url: "/salary-negotiation-coach-houston/" },
      { label: "Job search coach Houston", url: "/job-search-coach-houston/" },
      { label: "Career change coach Houston", url: "/career-change-coach-houston/" },
      { label: "Outplacement Houston", url: "/outplacement-houston/" },
      { label: "AI/ML career coaching Houston", url: "/ai-ml-career-coaching-houston/" },
      { label: "Career coaching for engineers Houston", url: "/career-coaching-for-engineers-houston/" },
      { label: "Legal & compliance coaching Houston", url: "/career-coaching-for-legal-compliance-houston/" }
    ]
  },
  "new-york-city-career-coaching": {
    marketLine:
      "New York City hiring tends to move quickly for candidates who can make scope, business relevance, and level signal obvious in the first read and the first conversation."
  },
  "los-angeles-career-coaching": {
    marketLine:
      "Los Angeles hiring often responds to candidates who can connect creative, operational, product, and business outcomes clearly rather than sounding broad and unstructured."
  },
  "san-francisco-bay-area-career-coaching": {
    marketLine:
      "The Bay Area usually rewards sharper technical and leadership signal because companies are often calibrating for scope, systems thinking, and premium compensation at the same time."
  },
  "austin-career-coaching": {
    marketLine:
      "Austin tends to reward candidates with clear product, engineering, startup, and growth-market positioning, especially when they can show both execution and leverage."
  },
  "seattle-career-coaching": {
    marketLine:
      "Seattle hiring often favors candidates who can combine technical depth with clean communication around ownership, cloud systems, product impact, and scale."
  },
  "washington-dc-career-coaching": {
    marketLine:
      "Washington, DC tends to reward candidates who can make strategy, leadership, policy-adjacent, consulting, and public-sector technology signal easy to trust."
  },
  "boston-career-coaching": {
    marketLine:
      "Boston hiring usually rewards candidates who can combine technical depth, healthcare or life-sciences context, and clean leadership signal in one story."
  },
  "chicago-career-coaching": {
    marketLine:
      "Chicago tends to reward clear leadership and business relevance across finance, consulting, operations, product, and enterprise technology roles."
  },
  "atlanta-career-coaching": {
    marketLine:
      "Atlanta hiring usually responds well to candidates who can bridge execution, growth, and leadership signal across enterprise, fintech, operations, and go-to-market roles."
  },
  "miami-career-coaching": {
    marketLine:
      "Miami tends to reward candidates who can move between growth, operations, startup, finance, and cross-border or remote-market narratives clearly."
  },
  "dallas-fort-worth-career-coaching": {
    marketLine:
      "Dallas-Fort Worth often rewards candidates who can show operational scale, leadership range, and the ability to move across enterprise environments cleanly."
  }
};

const generated = cities.reduce((acc, city) => {
  const profileFactory = profileBySlug[city.slug] || regionalGeneral;
  acc[city.slug] = {
    ...profileFactory(city.label),
    ...(citySpecific[city.slug] || {})
  };
  return acc;
}, {});

module.exports = {
  default: defaults,
  ...generated
};
