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
  aiSummary:
    "Career coaching in this market works best when it sharpens role targeting, makes your impact easier to trust, and improves how clearly your level reads in interviews and compensation conversations.",
  hiringSignals: [
    "clear ownership and measurable outcomes instead of broad responsibility lists",
    "level calibration that matches the scope you actually operated at",
    "interview stories that show judgment, tradeoffs, and business impact"
  ],
  chooseAskia: [
    "you need sharper positioning, not generic motivation",
    "your experience is strong but your market signal is uneven",
    "you want one coaching system across resume, LinkedIn, interviews, and negotiation"
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
    aiSummary:
      "Career coaching in Houston works best when it helps you translate broad energy, healthcare, operations, enterprise, or technical experience into a clearer higher-paying target role with stronger local and national-market signal.",
    hiringSignals: [
      "proof of measurable business impact across complex operational or technical environments",
      "cleaner level signal for candidates whose scope is larger than their title suggests",
      "a story that works for both Houston employers and remote or national opportunities"
    ],
    chooseAskia: [
      "you need sharper positioning for Houston plus remote-market opportunities",
      "your background spans operations, healthcare, finance, or technical leadership and reads too broadly",
      "you want coaching that ties together materials, interviews, and offer strategy"
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
      { label: "Career coaches Houston", url: "/career-coaches-houston/" },
      { label: "Career coaching services Houston", url: "/career-coaching-services-houston/" },
      { label: "Executive career coach Houston", url: "/executive-career-coach-houston/" },
      { label: "Resume writer Houston", url: "/resume-writer-houston/" },
      { label: "Resume writing services Houston", url: "/resume-writing-services-houston/" },
      { label: "LinkedIn profile writer Houston", url: "/linkedin-profile-writer-houston/" },
      { label: "LinkedIn optimization services Houston", url: "/linkedin-optimization-services-houston/" },
      { label: "Interview coaching Houston", url: "/interview-coaching-houston/" },
      { label: "Interview prep services Houston", url: "/interview-prep-services-houston/" },
      { label: "Salary negotiation coach Houston", url: "/salary-negotiation-coach-houston/" },
      { label: "Salary negotiation services Houston", url: "/salary-negotiation-services-houston/" },
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
      "New York City hiring tends to move quickly for candidates who can make scope, business relevance, and level signal obvious in the first read and the first conversation.",
    aiSummary:
      "Career coaching in New York City is most valuable when it helps you present seniority, decision-making range, and commercial relevance quickly enough for high-speed finance, product, consulting, and enterprise hiring loops.",
    hiringSignals: [
      "business relevance that is obvious in the first read, not buried in the details",
      "leadership and ownership framing that matches premium-market expectations",
      "interview stories that sound decisive, concise, and commercially credible"
    ],
    chooseAskia: [
      "you are targeting competitive high-judgment roles and need stronger executive-ready signal",
      "your background is strong but still reads too broad or too tactical",
      "you want cleaner positioning before high-stakes interviews and compensation conversations"
    ]
  },
  "los-angeles-career-coaching": {
    marketLine:
      "Los Angeles hiring often responds to candidates who can connect creative, operational, product, and business outcomes clearly rather than sounding broad and unstructured.",
    aiSummary:
      "Career coaching in Los Angeles works best when it turns broad creative, consumer, product, media-tech, and operations experience into a cleaner leadership story with stronger market focus.",
    hiringSignals: [
      "clear business outcomes behind creative, consumer, or cross-functional work",
      "positioning that reduces noise for candidates with broad or hybrid backgrounds",
      "interview stories that connect execution range to product, growth, or leadership value"
    ],
    chooseAskia: [
      "you work across creative, product, operations, media-tech, or growth environments",
      "your background is interesting but still reads too broad or unstructured",
      "you want better positioning before higher-scope interviews or compensation conversations"
    ]
  },
  "san-francisco-bay-area-career-coaching": {
    marketLine:
      "The Bay Area usually rewards sharper technical and leadership signal because companies are often calibrating for scope, systems thinking, and premium compensation at the same time.",
    aiSummary:
      "Career coaching in the Bay Area needs to make systems thinking, product or infrastructure leverage, and high-bar level calibration obvious fast enough for premium technical hiring loops.",
    hiringSignals: [
      "scope and systems thinking that clearly exceed ordinary senior execution",
      "clean translation from technical depth into product or business leverage",
      "compensation positioning that matches staff-plus, management, or premium IC paths"
    ],
    chooseAskia: [
      "you are aiming for staff, management, or premium technical roles",
      "your architecture, platform, or product work is real but not reading clearly enough",
      "you need better interview and negotiation calibration for high-comp markets"
    ]
  },
  "austin-career-coaching": {
    marketLine:
      "Austin tends to reward candidates with clear product, engineering, startup, and growth-market positioning, especially when they can show both execution and leverage.",
    aiSummary:
      "Career coaching in Austin works best when it sharpens startup, product, growth, and engineering signal without making your story sound noisy, inflated, or spread across too many directions.",
    hiringSignals: [
      "clear role targeting in markets where candidates often span product, engineering, and growth work",
      "evidence of leverage, ownership, and pace rather than task-heavy descriptions",
      "positioning that works for both Austin companies and national remote searches"
    ],
    chooseAskia: [
      "you have broad startup or cross-functional experience that needs a cleaner narrative",
      "you want stronger signal for product, engineering, or growth-track roles",
      "you need one story that works locally and nationally without losing credibility"
    ]
  },
  "seattle-career-coaching": {
    marketLine:
      "Seattle hiring often favors candidates who can combine technical depth with clean communication around ownership, cloud systems, product impact, and scale.",
    aiSummary:
      "Career coaching in Seattle should improve how clearly you communicate technical depth, cloud or platform ownership, and product or business impact in high-bar hiring environments.",
    hiringSignals: [
      "clear ownership over systems, scale, reliability, or platform decisions",
      "communication strong enough to make technical judgment easy to trust",
      "interview examples that connect engineering depth to business outcomes"
    ],
    chooseAskia: [
      "you are in cloud, platform, product, or engineering leadership roles",
      "your technical background is strong but the communication signal is uneven",
      "you need better story structure before final-round or leveling interviews"
    ]
  },
  "washington-dc-career-coaching": {
    marketLine:
      "Washington, DC tends to reward candidates who can make strategy, leadership, policy-adjacent, consulting, and public-sector technology signal easy to trust.",
    aiSummary:
      "Career coaching in Washington, DC works best when it helps you translate strategy, stakeholder management, consulting, cybersecurity, and policy-adjacent work into cleaner executive-ready market signal.",
    hiringSignals: [
      "communication that makes strategy, influence, and stakeholder management easy to trust",
      "clean translation between public-sector, consulting, and private-sector contexts",
      "interview examples that show accountability, judgment, and high-stakes decision-making"
    ],
    chooseAskia: [
      "you work in consulting, cybersecurity, program leadership, or policy-adjacent environments",
      "your background is strong but too dense, regulated, or mission-heavy on paper",
      "you need better positioning for both DC and broader national opportunities"
    ]
  },
  "boston-career-coaching": {
    marketLine:
      "Boston hiring usually rewards candidates who can combine technical depth, healthcare or life-sciences context, and clean leadership signal in one story.",
    aiSummary:
      "Career coaching in Boston is most useful when it helps you make technical, healthcare, biotech, data, or product expertise sound commercially relevant and senior enough for demanding hiring loops.",
    hiringSignals: [
      "clear translation from deep expertise into business or organizational impact",
      "leadership signal that sounds credible in knowledge-heavy environments",
      "stories that connect analytical depth with cross-functional influence"
    ],
    chooseAskia: [
      "you are in healthcare, biotech, data, product, or technical leadership roles",
      "your expertise is strong but difficult to summarize cleanly",
      "you need better positioning for higher-scope roles in high-bar markets"
    ]
  },
  "chicago-career-coaching": {
    marketLine:
      "Chicago tends to reward clear leadership and business relevance across finance, consulting, operations, product, and enterprise technology roles.",
    aiSummary:
      "Career coaching in Chicago works best when it sharpens leadership, operational scale, and business relevance across finance, consulting, product, and enterprise environments.",
    hiringSignals: [
      "clear proof of ownership across complex business and operational systems",
      "leadership framing that feels commercially grounded rather than inflated",
      "interview answers that show judgment, prioritization, and execution range"
    ],
    chooseAskia: [
      "you are targeting finance, consulting, operations, product, or enterprise technology roles",
      "your experience is broad but still underselling scope or commercial relevance",
      "you need stronger promotion-ready or management-track signal"
    ]
  },
  "atlanta-career-coaching": {
    marketLine:
      "Atlanta hiring usually responds well to candidates who can bridge execution, growth, and leadership signal across enterprise, fintech, operations, and go-to-market roles.",
    aiSummary:
      "Career coaching in Atlanta works best when it turns broad growth, enterprise, fintech, sales, or operations experience into a tighter leadership story with clearer next-role positioning.",
    hiringSignals: [
      "evidence of revenue, growth, operations, or delivery impact that feels easy to trust",
      "clear translation from broad execution into management or strategic value",
      "positioning that works for Atlanta employers and fast-moving national searches"
    ],
    chooseAskia: [
      "you work across growth, fintech, operations, enterprise, or go-to-market roles",
      "your background spans several functions and currently reads too broad",
      "you want stronger interview and salary-confidence before the next move"
    ]
  },
  "miami-career-coaching": {
    marketLine:
      "Miami tends to reward candidates who can move between growth, operations, startup, finance, and cross-border or remote-market narratives clearly.",
    aiSummary:
      "Career coaching in Miami is most effective when it clarifies growth, startup, finance, operations, and cross-border experience into one story that feels focused and high-value.",
    hiringSignals: [
      "a narrative strong enough to connect local opportunities with national or remote-market ambition",
      "clear business value for candidates whose work spans several industries or markets",
      "interview and compensation stories that feel focused rather than opportunistic"
    ],
    chooseAskia: [
      "you have startup, finance, operations, or cross-border experience that needs cleaner framing",
      "you want a stronger story for both Miami and remote-market opportunities",
      "you need better signal before interviews, compensation conversations, or a pivot"
    ]
  },
  "dallas-fort-worth-career-coaching": {
    marketLine:
      "Dallas-Fort Worth often rewards candidates who can show operational scale, leadership range, and the ability to move across enterprise environments cleanly.",
    aiSummary:
      "Career coaching in Dallas-Fort Worth works best when it sharpens operational scale, enterprise credibility, and leadership range for candidates targeting larger-scope business or technical roles.",
    hiringSignals: [
      "clear evidence of scale, complexity, and ownership across enterprise environments",
      "leadership framing that makes broader scope feel earned and credible",
      "compensation positioning for candidates whose role complexity exceeds the current title"
    ],
    chooseAskia: [
      "you work in enterprise operations, finance, technology modernization, or management tracks",
      "your background is strong but still underselling scale or leadership breadth",
      "you need better market signal before stepping into larger-scope roles"
    ]
  },
  "raleigh-durham-career-coaching": {
    marketLine:
      "Raleigh–Durham hiring tends to reward candidates who can make technical depth, ownership, and business impact obvious early in the process.",
    aiSummary:
      "Career coaching in Raleigh-Durham is most valuable when it sharpens engineering, data, biotech, and technical-leadership signal without letting the story get too narrow or too academic.",
    hiringSignals: [
      "clear ownership and measurable outcomes across engineering, data, or biotech work",
      "technical depth translated into practical business or organizational value",
      "positioning that supports both local employers and broader national opportunities"
    ],
    chooseAskia: [
      "you are in engineering, data, biotech, or technical leadership roles",
      "your work is strong but the market story is still too technical or too diffuse",
      "you need stronger interview and compensation signal for the next move"
    ]
  },
  "denver-career-coaching": {
    marketLine:
      "Denver hiring often rewards candidates who can combine technical depth with clean communication around ownership, cloud systems, product impact, and scale.",
    aiSummary:
      "Career coaching in Denver works best when it sharpens cloud, product, operations, and technical-leadership signal for candidates balancing local and distributed-market opportunities.",
    hiringSignals: [
      "clear communication around scale, ownership, and business impact",
      "positioning that works for both Denver employers and remote-first teams",
      "interview stories that make technical judgment and leadership range easy to trust"
    ],
    chooseAskia: [
      "you work in cloud, product, operations, or technical leadership roles",
      "your market signal is weaker than the scope of your actual work",
      "you need one story that works locally and across distributed hiring loops"
    ]
  },
  "phoenix-career-coaching": {
    marketLine:
      "Phoenix tends to reward candidates who can move between growth, operations, startup, finance, and cross-border or remote-market narratives clearly.",
    aiSummary:
      "Career coaching in Phoenix is most useful when it sharpens operational scale, modernization work, and leadership credibility for candidates targeting stronger business or technical roles.",
    hiringSignals: [
      "evidence of ownership across operations, enterprise change, or modernization efforts",
      "a clearer leadership story for candidates whose work spans execution and management",
      "positioning that makes broader scope and stronger compensation easier to defend"
    ],
    chooseAskia: [
      "you work in operations, enterprise growth, modernization, or management-track roles",
      "your experience is solid but underselling scale or leadership breadth",
      "you want stronger interviews and offers without sounding inflated"
    ]
  },
  "san-diego-career-coaching": {
    marketLine:
      "San Diego hiring usually rewards candidates who can combine technical depth, healthcare or life-sciences context, and clean leadership signal in one story.",
    aiSummary:
      "Career coaching in San Diego works best when it helps you connect product, healthcare-adjacent, technical, and leadership experience into a stronger next-role narrative.",
    hiringSignals: [
      "clear translation from technical or domain depth into product or business value",
      "leadership signal that feels credible in technical and healthcare-adjacent markets",
      "stories that connect execution quality with cross-functional impact"
    ],
    chooseAskia: [
      "you work in product, healthcare-adjacent, technical, or leadership roles",
      "your expertise is strong but still reading too narrowly or too tactically",
      "you need better positioning for higher-scope roles and cleaner interviews"
    ]
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

const clusterCitySlugs = new Set([
  "houston-career-coaching",
  "new-york-city-career-coaching",
  "dallas-fort-worth-career-coaching",
  "austin-career-coaching",
  "seattle-career-coaching",
  "san-francisco-bay-area-career-coaching",
  "washington-dc-career-coaching",
  "boston-career-coaching",
  "atlanta-career-coaching",
  "raleigh-durham-career-coaching",
  "denver-career-coaching",
  "chicago-career-coaching",
  "phoenix-career-coaching",
  "san-diego-career-coaching",
  "los-angeles-career-coaching",
  "miami-career-coaching"
]);

function buildLocalClusterLinks(city) {
  const base = city.slug.replace(/-career-coaching$/, "");
  return [
    { label: `Career counselor ${city.label}`, url: `/career-counselor-${base}/` },
    { label: `Career coaches ${city.label}`, url: `/career-coaches-${base}/` },
    { label: `Career coaching services ${city.label}`, url: `/career-coaching-services-${base}/` },
    { label: `Executive career coach ${city.label}`, url: `/executive-career-coach-${base}/` },
    { label: `Resume writer ${city.label}`, url: `/resume-writer-${base}/` },
    { label: `Resume writing services ${city.label}`, url: `/resume-writing-services-${base}/` },
    { label: `LinkedIn profile writer ${city.label}`, url: `/linkedin-profile-writer-${base}/` },
    { label: `LinkedIn optimization services ${city.label}`, url: `/linkedin-optimization-services-${base}/` },
    { label: `Interview coaching ${city.label}`, url: `/interview-coaching-${base}/` },
    { label: `Interview prep services ${city.label}`, url: `/interview-prep-services-${base}/` },
    { label: `Salary negotiation coach ${city.label}`, url: `/salary-negotiation-coach-${base}/` },
    { label: `Salary negotiation services ${city.label}`, url: `/salary-negotiation-services-${base}/` },
    { label: `Job search coach ${city.label}`, url: `/job-search-coach-${base}/` },
    { label: `Career change coach ${city.label}`, url: `/career-change-coach-${base}/` },
    { label: `Outplacement ${city.label}`, url: `/outplacement-${base}/` },
    { label: `AI/ML career coaching ${city.label}`, url: `/ai-ml-career-coaching-${base}/` },
    { label: `Career coaching for engineers ${city.label}`, url: `/career-coaching-for-engineers-${base}/` },
    { label: `Legal & compliance coaching ${city.label}`, url: `/career-coaching-for-legal-compliance-${base}/` }
  ];
}

for (const city of cities) {
  if (!clusterCitySlugs.has(city.slug)) continue;
  generated[city.slug] = {
    ...generated[city.slug],
    keywordSupport:
      `If you searched for career coach ${city.label}, career coaching ${city.label}, or career counselor ${city.label}, this page is designed to act as the main ${city.label} hub and route you to the right service-specific page quickly.`,
    localClusterLinks: buildLocalClusterLinks(city)
  };
}

module.exports = {
  default: defaults,
  ...generated
};
