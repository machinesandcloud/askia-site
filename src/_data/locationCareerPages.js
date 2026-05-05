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
  signalPoints: [
    "your next-role target is narrow enough that recruiters can place you quickly",
    "your materials make scope, level, and measurable outcomes easy to trust",
    "your interview stories connect tradeoffs, judgment, and business impact clearly"
  ],
  commonMistakes: [
    "treating broad experience as a strength without translating it into a cleaner target role",
    "using one story for local opportunities, remote roles, and promotions even when the market reads them differently",
    "trying to fix weak conversion with more activity instead of better positioning"
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
  },
  "philadelphia-career-coaching": {
    marketLine:
      "Philadelphia tends to reward candidates who can clearly connect healthcare, life sciences, financial services, and enterprise operations work to leadership and business value.",
    aiSummary:
      "Career coaching in Philadelphia works best when it helps you translate healthcare, academic medical center, pharma, financial services, or enterprise experience into a sharper leadership and market story.",
    hiringSignals: [
      "clear proof of business impact behind healthcare, pharma, finance, or enterprise work",
      "leadership framing that feels credible across regulated and knowledge-heavy environments",
      "interview stories that connect domain expertise to organizational or commercial outcomes"
    ],
    chooseAskia: [
      "you work in healthcare, life sciences, financial services, or enterprise operations",
      "your expertise is deep but still reads too narrowly or too technically",
      "you need better positioning before senior-level interviews or compensation conversations"
    ]
  },
  "minneapolis-st-paul-career-coaching": {
    marketLine:
      "Minneapolis–St. Paul tends to favor candidates who can combine healthcare, medical device, financial services, and enterprise leadership credibility in one focused story.",
    aiSummary:
      "Career coaching in Minneapolis-St. Paul is most effective when it sharpens healthcare, medical device, FSI, retail, and enterprise signal for candidates targeting higher-scope leadership or technical roles.",
    hiringSignals: [
      "clear business impact behind healthcare, device, retail, or enterprise work",
      "leadership and ownership framing that holds up in regulated and precision-driven environments",
      "positioning that works for both local employers and distributed national teams"
    ],
    chooseAskia: [
      "you work in healthcare, medical device, financial services, or enterprise leadership",
      "your background is strong but still reads too broad or too execution-heavy",
      "you want better interview and salary signal before the next move"
    ]
  },
  "detroit-career-coaching": {
    marketLine:
      "Detroit rewards candidates who can make operational scale, technical leadership, and manufacturing or automotive transformation experience read clearly at the next level.",
    aiSummary:
      "Career coaching in Detroit works best when it helps you translate automotive, manufacturing, supply chain, and enterprise technology experience into a cleaner leadership and modernization story.",
    hiringSignals: [
      "evidence of operational scale, transformation ownership, and measurable business impact",
      "leadership framing that bridges legacy manufacturing expertise and modern technology strategy",
      "positioning that communicates next-level scope rather than just deeper execution"
    ],
    chooseAskia: [
      "you work in automotive, manufacturing, supply chain, or enterprise technology transformation",
      "your background is strong but still framed around tasks rather than outcomes and leadership",
      "you need sharper signal before stepping into broader roles or higher comp conversations"
    ]
  },
  "tampa-st-petersburg-career-coaching": {
    marketLine:
      "Tampa–St. Petersburg tends to reward candidates who can show growth, operations, financial services, and technology leadership clearly in a market where remote opportunity expands the competitive set.",
    aiSummary:
      "Career coaching in Tampa-St. Petersburg works best when it sharpens financial services, healthcare, operations, and growth-market signal for candidates targeting both local and distributed opportunities.",
    hiringSignals: [
      "clear business outcomes behind financial services, healthcare, or operations work",
      "positioning that works equally well for Tampa employers and remote-first national teams",
      "interview stories that make leadership range and commercial impact easy to trust"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, operations, or technology roles",
      "your background reads too broad or too execution-heavy for the next target level",
      "you want stronger positioning for both Tampa and remote-market opportunities"
    ]
  },
  "orlando-career-coaching": {
    marketLine:
      "Orlando tends to favor candidates who can connect hospitality technology, healthcare, defense, operations, and growth-market experience to leadership and business value.",
    aiSummary:
      "Career coaching in Orlando is most effective when it sharpens hospitality tech, healthcare, defense, simulation, and operations signal for candidates moving into higher-scope roles.",
    hiringSignals: [
      "evidence of operational impact in complex, multi-stakeholder, or technology-driven environments",
      "clear translation from execution-heavy backgrounds into leadership and business credibility",
      "positioning that works for both local Orlando roles and distributed national searches"
    ],
    chooseAskia: [
      "you work in hospitality tech, healthcare, defense, operations, or enterprise growth roles",
      "your experience is broad but still underselling leadership scope or business value",
      "you need better market signal before a promotion conversation or a lateral move"
    ]
  },
  "charlotte-career-coaching": {
    marketLine:
      "Charlotte tends to reward candidates who can communicate financial services, fintech, operations, and enterprise leadership credibility clearly and quickly.",
    aiSummary:
      "Career coaching in Charlotte works best when it sharpens financial services, fintech, operations, and enterprise technology positioning for candidates targeting senior and high-comp roles.",
    hiringSignals: [
      "clear proof of business impact across financial services, fintech, or enterprise operations",
      "leadership framing that makes scope and judgment obvious without sounding inflated",
      "interview stories that connect domain expertise to organizational or commercial outcomes"
    ],
    chooseAskia: [
      "you work in financial services, fintech, operations, or enterprise technology",
      "your background is strong but still reads too narrow or too execution-focused",
      "you want better signal before high-stakes interviews or compensation negotiations"
    ]
  },
  "nashville-career-coaching": {
    marketLine:
      "Nashville tends to reward candidates who can make healthcare, technology, operations, and entrepreneurial leadership experience sound commercially credible and senior.",
    aiSummary:
      "Career coaching in Nashville works best when it helps you connect healthcare, health tech, operations, and enterprise experience into a sharper leadership and market narrative.",
    hiringSignals: [
      "clear evidence of business impact in healthcare, health tech, or enterprise environments",
      "leadership framing that bridges operational execution and strategic value",
      "interview stories that translate sector expertise into commercially credible outcomes"
    ],
    chooseAskia: [
      "you work in healthcare, health tech, operations, or entrepreneurial leadership",
      "your experience is deep but still reads too narrow or too technically focused",
      "you need better positioning before stepping into broader roles or executive conversations"
    ]
  },
  "columbus-career-coaching": {
    marketLine:
      "Columbus tends to reward candidates who can connect financial services, healthcare, technology, and operations leadership to clear business and organizational outcomes.",
    aiSummary:
      "Career coaching in Columbus works best when it sharpens financial services, healthcare, operations, and enterprise technology signal for candidates targeting senior management and leadership tracks.",
    hiringSignals: [
      "evidence of operational scale and leadership impact in regulated or enterprise environments",
      "clear business value behind financial services, healthcare, or technology work",
      "positioning that makes higher-scope ambition feel earned and credible"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, technology, or enterprise operations",
      "your background is strong but still reads too tactical or too execution-focused",
      "you need cleaner positioning before management-track interviews or comp conversations"
    ]
  },
  "cleveland-career-coaching": {
    marketLine:
      "Cleveland tends to favor candidates who can communicate operational leadership, healthcare, manufacturing, and enterprise technology value clearly for higher-scope roles.",
    aiSummary:
      "Career coaching in Cleveland works best when it translates healthcare, manufacturing, operations, and financial services experience into a sharper leadership and business impact story.",
    hiringSignals: [
      "clear ownership and measurable outcomes across operational or enterprise environments",
      "leadership framing that makes scale, complexity, and business value obvious",
      "positioning that works for both Cleveland employers and broader national searches"
    ],
    chooseAskia: [
      "you work in healthcare, manufacturing, operations, or financial services",
      "your experience is broad but underselling scope, leadership, or business impact",
      "you want better market signal before a promotion, transition, or offer conversation"
    ]
  },
  "cincinnati-career-coaching": {
    marketLine:
      "Cincinnati tends to reward candidates who can connect enterprise operations, consumer goods, financial services, and healthcare leadership to clear next-level business value.",
    aiSummary:
      "Career coaching in Cincinnati is most effective when it sharpens enterprise operations, consumer goods, financial services, and healthcare signal for candidates moving into broader leadership.",
    hiringSignals: [
      "evidence of business impact behind operations, consumer, or financial services work",
      "leadership framing that makes scope and organizational value easy to trust",
      "interview stories that connect execution depth to strategic or commercial outcomes"
    ],
    chooseAskia: [
      "you work in enterprise operations, consumer goods, financial services, or healthcare",
      "your background is solid but still reading too broadly or too execution-focused",
      "you need stronger positioning before leadership track or compensation conversations"
    ]
  },
  "pittsburgh-career-coaching": {
    marketLine:
      "Pittsburgh tends to favor candidates who can make robotics, AI, healthcare, financial services, and advanced manufacturing leadership experience sound commercially credible.",
    aiSummary:
      "Career coaching in Pittsburgh works best when it helps you connect robotics, AI research, healthcare, financial services, and advanced technology experience into a sharper market narrative.",
    hiringSignals: [
      "clear translation from technical research or domain expertise into commercial business value",
      "leadership framing credible in both academic and enterprise hiring environments",
      "positioning that works for both Pittsburgh employers and national or remote-first roles"
    ],
    chooseAskia: [
      "you work in robotics, AI, healthcare, financial services, or advanced technology",
      "your background has depth but still reads too research-oriented or too narrow",
      "you need better positioning before high-bar interviews or senior comp conversations"
    ]
  },
  "st-louis-career-coaching": {
    marketLine:
      "St. Louis tends to reward candidates who can communicate financial services, healthcare, agribusiness, and enterprise operations leadership with clear scope and business credibility.",
    aiSummary:
      "Career coaching in St. Louis is most effective when it sharpens financial services, healthcare, agribusiness, and enterprise operations positioning for candidates targeting senior leadership roles.",
    hiringSignals: [
      "evidence of operational scale and business impact across regulated or enterprise environments",
      "leadership framing that makes scope and commercial value obvious quickly",
      "stories that connect deep sector expertise to organizational and financial outcomes"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, agribusiness, or enterprise operations",
      "your experience is strong but still underselling leadership scope or business value",
      "you want better interview and salary signal before the next career move"
    ]
  },
  "kansas-city-career-coaching": {
    marketLine:
      "Kansas City tends to reward candidates who can translate financial services, healthcare, supply chain, and technology operations experience into clear leadership and business value.",
    aiSummary:
      "Career coaching in Kansas City works best when it helps you frame financial services, healthcare, logistics, and enterprise technology experience as leadership-ready and commercially relevant.",
    hiringSignals: [
      "clear proof of business impact across operations, financial services, or healthcare work",
      "leadership framing that bridges operational depth and strategic executive value",
      "positioning that works for Kansas City employers and distributed national teams"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, supply chain, or technology operations",
      "your background reads too task-focused for the leadership role you're targeting",
      "you need stronger market signal before a promotion or transition conversation"
    ]
  },
  "indianapolis-career-coaching": {
    marketLine:
      "Indianapolis tends to reward candidates who can make healthcare, life sciences, logistics, and enterprise operations leadership read clearly and commercially credible.",
    aiSummary:
      "Career coaching in Indianapolis is most effective when it sharpens healthcare, life sciences, logistics, and enterprise operations signal for candidates targeting higher-scope leadership roles.",
    hiringSignals: [
      "evidence of business and operational impact in healthcare, logistics, or enterprise environments",
      "leadership framing that makes scope and organizational value feel earned",
      "stories that connect sector depth to measurable business or financial outcomes"
    ],
    chooseAskia: [
      "you work in healthcare, life sciences, logistics, or enterprise operations",
      "your background is strong but still reads too execution-focused for the next level",
      "you need better positioning before leadership interviews or compensation conversations"
    ]
  },
  "milwaukee-career-coaching": {
    marketLine:
      "Milwaukee tends to favor candidates who can connect manufacturing, healthcare, financial services, and enterprise operations to clear leadership and business impact narratives.",
    aiSummary:
      "Career coaching in Milwaukee works best when it helps translate manufacturing, healthcare, and financial services experience into a stronger leadership story for candidates targeting senior roles.",
    hiringSignals: [
      "clear evidence of business impact across manufacturing, healthcare, or financial environments",
      "leadership framing that makes operational scale and decision-making range obvious",
      "positioning that supports both local Milwaukee employers and broader remote opportunities"
    ],
    chooseAskia: [
      "you work in manufacturing, healthcare, financial services, or enterprise operations",
      "your background is solid but underselling leadership scope or commercial relevance",
      "you want stronger positioning before a promotion track or job search launch"
    ]
  },
  "new-orleans-career-coaching": {
    marketLine:
      "New Orleans tends to reward candidates who can connect energy, maritime, tourism operations, healthcare, and entrepreneurial leadership to clear business value.",
    aiSummary:
      "Career coaching in New Orleans works best when it sharpens energy, maritime, healthcare, and hospitality operations positioning for candidates targeting higher-scope leadership and stronger compensation.",
    hiringSignals: [
      "clear business outcomes behind energy, maritime, healthcare, or tourism operations work",
      "leadership framing that bridges execution-heavy backgrounds and strategic value",
      "positioning that works for both local New Orleans roles and distributed national searches"
    ],
    chooseAskia: [
      "you work in energy, maritime, healthcare, or hospitality operations",
      "your background spans several sectors and currently reads too broadly",
      "you need better market signal before a leadership transition or compensation conversation"
    ]
  },
  "san-antonio-career-coaching": {
    marketLine:
      "San Antonio tends to reward candidates who can translate military, cybersecurity, healthcare, and government services experience into clear civilian leadership and business value.",
    aiSummary:
      "Career coaching in San Antonio works best when it helps you frame military transition, cybersecurity, healthcare, and government services experience as commercially credible leadership.",
    hiringSignals: [
      "clear translation from military or government experience into private-sector leadership value",
      "business and organizational outcomes behind cybersecurity, healthcare, or operations work",
      "positioning that makes the career transition story feel deliberate and credible"
    ],
    chooseAskia: [
      "you are transitioning from military or government into private-sector leadership",
      "you work in cybersecurity, healthcare, or government services and need cleaner positioning",
      "you want better market signal before higher-scope interviews or comp conversations"
    ]
  },
  "portland-career-coaching": {
    marketLine:
      "Portland tends to reward candidates who can combine technical depth, product and platform ownership, sustainability values, and leadership credibility into one focused story.",
    aiSummary:
      "Career coaching in Portland works best when it sharpens product, engineering, sustainability, and mission-driven leadership signal for candidates targeting higher-scope roles in the Pacific Northwest.",
    hiringSignals: [
      "clear ownership over product, platform, or engineering systems with measurable impact",
      "leadership signal that combines technical credibility with values-aligned communication",
      "positioning that works for both Portland companies and distributed remote-first teams"
    ],
    chooseAskia: [
      "you work in product, engineering, sustainability, or mission-driven leadership",
      "your background is strong but still reads too broad or too technically dense",
      "you need stronger interview and compensation signal for the next move"
    ]
  },
  "sacramento-career-coaching": {
    marketLine:
      "Sacramento tends to reward candidates who can make government, healthcare, technology, and public-sector leadership experience read clearly and credibly for both public and private employers.",
    aiSummary:
      "Career coaching in Sacramento works best when it helps you translate government, healthcare, public administration, and technology experience into sharper leadership signal for private and public-sector hiring.",
    hiringSignals: [
      "clear translation from public-sector or government experience into private-sector leadership value",
      "business and organizational outcomes behind technology, healthcare, or public administration work",
      "positioning that bridges public and private markets for candidates making a sector transition"
    ],
    chooseAskia: [
      "you are transitioning from public-sector or government roles into private-sector leadership",
      "you work in healthcare, technology, or public administration and need cleaner positioning",
      "you need better market signal before higher-scope interviews or compensation negotiations"
    ]
  },
  "las-vegas-career-coaching": {
    marketLine:
      "Las Vegas tends to reward candidates who can connect hospitality technology, operations, real estate, and enterprise leadership to clear business value beyond the entertainment sector.",
    aiSummary:
      "Career coaching in Las Vegas works best when it helps you translate hospitality, entertainment operations, real estate, and technology experience into a broader leadership story with stronger national-market signal.",
    hiringSignals: [
      "clear business outcomes behind hospitality, operations, real estate, or technology work",
      "leadership framing that transfers credibly beyond hospitality into enterprise or tech roles",
      "positioning that works for both Las Vegas employers and remote national opportunities"
    ],
    chooseAskia: [
      "you work in hospitality, entertainment operations, real estate, or enterprise technology",
      "your background reads too industry-specific to transfer cleanly to broader markets",
      "you want stronger positioning for cross-sector moves or national remote opportunities"
    ]
  },
  "salt-lake-city-career-coaching": {
    marketLine:
      "Salt Lake City tends to reward candidates who can make technology, financial services, outdoor industry, and enterprise leadership experience sound focused, ambitious, and commercially credible.",
    aiSummary:
      "Career coaching in Salt Lake City works best when it sharpens tech, fintech, outdoor industry, and enterprise leadership signal for candidates competing in a fast-growing market with national remote ambitions.",
    hiringSignals: [
      "clear ownership and business impact across technology, financial services, or enterprise environments",
      "leadership signal credible for both local SLC employers and distributed national teams",
      "positioning that communicates ambition and scope without sounding inflated"
    ],
    chooseAskia: [
      "you work in technology, fintech, outdoor industry, or enterprise leadership",
      "your background is strong but still reading too narrowly for the next target level",
      "you need better signal before senior interviews, leadership transitions, or comp negotiations"
    ]
  },
  "baltimore-career-coaching": {
    marketLine:
      "Baltimore tends to reward candidates who can make cybersecurity, biotech, healthcare, government, and defense leadership experience sound credible across both public and private markets.",
    aiSummary:
      "Career coaching in Baltimore works best when it helps you translate cybersecurity, biotech, healthcare, government, and defense experience into sharper leadership positioning for private and federal markets.",
    hiringSignals: [
      "clear translation from government or defense experience into commercially credible leadership",
      "business and mission impact behind cybersecurity, biotech, or healthcare work",
      "positioning that bridges public-sector and private-sector hiring environments"
    ],
    chooseAskia: [
      "you work in cybersecurity, biotech, healthcare, government, or defense",
      "your background spans public and private markets and needs cleaner framing",
      "you need better positioning before senior roles or cross-sector career transitions"
    ]
  },
  "richmond-career-coaching": {
    marketLine:
      "Richmond tends to reward candidates who can connect financial services, government, healthcare, and corporate operations experience to clear leadership and business value.",
    aiSummary:
      "Career coaching in Richmond works best when it sharpens financial services, government, healthcare, and corporate operations signal for candidates targeting senior leadership or better compensation.",
    hiringSignals: [
      "evidence of business impact across financial services, government, or healthcare work",
      "leadership framing that makes scope and organizational value feel credible",
      "positioning that works for both Richmond employers and broader regional or remote opportunities"
    ],
    chooseAskia: [
      "you work in financial services, government, healthcare, or corporate operations",
      "your background is solid but underselling leadership scope or business relevance",
      "you need stronger market signal before a promotion track or job search launch"
    ]
  },
  "virginia-beach-career-coaching": {
    marketLine:
      "Virginia Beach tends to reward candidates who can translate defense, military, government, and operations leadership into clear private-sector and commercial value.",
    aiSummary:
      "Career coaching in Virginia Beach is most effective when it helps you frame military transition, defense, government, and operations experience as commercially credible leadership for private-sector employers.",
    hiringSignals: [
      "clear translation from military or defense experience into private-sector leadership value",
      "organizational and operational outcomes behind government or defense work",
      "positioning that makes the military-to-civilian transition story feel deliberate and credible"
    ],
    chooseAskia: [
      "you are transitioning from military, defense, or government into private-sector leadership",
      "your background has strong operational depth but reads too narrowly outside your sector",
      "you need better positioning before private-sector interviews or compensation conversations"
    ]
  },
  "jacksonville-career-coaching": {
    marketLine:
      "Jacksonville tends to reward candidates who can make financial services, healthcare, logistics, and military transition experience sound commercially credible at the next leadership level.",
    aiSummary:
      "Career coaching in Jacksonville works best when it sharpens financial services, healthcare, logistics, and military-to-civilian transition signal for candidates targeting higher-scope roles.",
    hiringSignals: [
      "clear business outcomes behind financial services, healthcare, or logistics work",
      "leadership framing that bridges military or government experience and private-sector expectations",
      "positioning that works for Jacksonville employers and distributed national opportunities"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, logistics, or military transition",
      "your background reads too task-focused for the leadership level you are targeting",
      "you need stronger positioning before higher-comp conversations or senior interviews"
    ]
  },
  "memphis-career-coaching": {
    marketLine:
      "Memphis tends to reward candidates who can connect logistics, supply chain, healthcare, and enterprise operations experience to clear leadership and organizational value.",
    aiSummary:
      "Career coaching in Memphis works best when it sharpens logistics, supply chain, healthcare, and enterprise operations signal for candidates targeting senior leadership and better compensation.",
    hiringSignals: [
      "evidence of business and operational impact across logistics, supply chain, or healthcare work",
      "leadership framing that makes scope, complexity, and organizational value obvious",
      "positioning that connects operational depth to strategic and commercial outcomes"
    ],
    chooseAskia: [
      "you work in logistics, supply chain, healthcare, or enterprise operations",
      "your background is strong but still reading too execution-heavy for the next level",
      "you want better signal before leadership track interviews or compensation negotiations"
    ]
  },
  "oklahoma-city-career-coaching": {
    marketLine:
      "Oklahoma City tends to reward candidates who can connect energy, government, aerospace, healthcare, and enterprise operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in Oklahoma City works best when it sharpens energy, government, aerospace, and enterprise operations signal for candidates targeting higher-scope leadership and stronger market positioning.",
    hiringSignals: [
      "clear business outcomes behind energy, government, aerospace, or enterprise operations work",
      "leadership framing that bridges sector-specific execution and broader commercial credibility",
      "positioning that works for Oklahoma City employers and national remote opportunities"
    ],
    chooseAskia: [
      "you work in energy, government, aerospace, or enterprise operations",
      "your background reads too sector-specific to transfer cleanly to broader markets",
      "you need better market signal before a leadership transition or comp conversation"
    ]
  },
  "albuquerque-career-coaching": {
    marketLine:
      "Albuquerque tends to favor candidates who can translate government, defense, healthcare, and national laboratory experience into clear leadership and commercial credibility.",
    aiSummary:
      "Career coaching in Albuquerque works best when it helps you translate government, defense, national laboratory, and healthcare experience into a sharper narrative for private-sector and leadership roles.",
    hiringSignals: [
      "clear translation from defense, government, or research experience into commercial leadership value",
      "business and mission outcomes behind national laboratory, healthcare, or government work",
      "positioning that bridges government and private-sector hiring environments effectively"
    ],
    chooseAskia: [
      "you work in government, defense, national laboratories, or healthcare",
      "your background is strong in sector expertise but needs cleaner private-sector framing",
      "you need better positioning before cross-sector moves or senior leadership interviews"
    ]
  },
  "bakersfield-career-coaching": {
    marketLine:
      "Bakersfield tends to reward candidates who can connect energy, agriculture, operations, and logistics leadership to clear business value for employers inside and outside the Central Valley.",
    aiSummary:
      "Career coaching in Bakersfield works best when it helps you translate energy, agriculture, logistics, and operations experience into a stronger leadership story for local and national-market opportunities.",
    hiringSignals: [
      "evidence of operational scale and business impact in energy, agriculture, or logistics environments",
      "leadership framing that makes scope and commercial value clear for employers outside the sector",
      "positioning that works for both Central Valley employers and broader California or remote opportunities"
    ],
    chooseAskia: [
      "you work in energy, agriculture, logistics, or operations in the Central Valley",
      "your background reads too industry-specific to transfer cleanly to broader markets",
      "you need stronger positioning before a cross-sector move or leadership transition"
    ]
  },
  "baton-rouge-career-coaching": {
    marketLine:
      "Baton Rouge tends to reward candidates who can make petrochemical, energy, government, healthcare, and enterprise operations leadership sound commercially credible beyond the local market.",
    aiSummary:
      "Career coaching in Baton Rouge works best when it sharpens energy, petrochemical, government, and healthcare signal for candidates targeting higher-scope leadership or broader market opportunities.",
    hiringSignals: [
      "clear business outcomes behind energy, petrochemical, government, or healthcare work",
      "leadership framing that bridges sector-specific execution and broader commercial value",
      "positioning that works for both local Baton Rouge employers and national opportunities"
    ],
    chooseAskia: [
      "you work in energy, petrochemical, government, healthcare, or enterprise operations",
      "your background reads too locally focused for the broader leadership roles you're targeting",
      "you need better positioning before senior interviews or cross-sector career transitions"
    ]
  },
  "charleston-career-coaching": {
    marketLine:
      "Charleston tends to reward candidates who can connect manufacturing, aerospace, defense, healthcare, and technology operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in Charleston works best when it sharpens aerospace, defense, manufacturing, healthcare, and technology signal for candidates targeting leadership roles in a growing mid-tier market.",
    hiringSignals: [
      "evidence of business and operational impact in aerospace, manufacturing, defense, or healthcare",
      "leadership framing that makes scope and value obvious for employers in high-precision environments",
      "positioning that supports both Charleston employers and national remote or regional opportunities"
    ],
    chooseAskia: [
      "you work in aerospace, defense, manufacturing, healthcare, or technology",
      "your background is solid but underselling leadership scope or commercial relevance",
      "you need better signal before a promotion conversation or transition into a broader role"
    ]
  },
  "des-moines-career-coaching": {
    marketLine:
      "Des Moines tends to favor candidates who can connect financial services, insurance, agriculture, and enterprise operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in Des Moines works best when it sharpens financial services, insurance, agribusiness, and enterprise operations signal for candidates targeting senior leadership and stronger compensation.",
    hiringSignals: [
      "clear business outcomes behind financial services, insurance, or enterprise operations work",
      "leadership framing that makes scope, complexity, and organizational value obvious",
      "positioning that communicates credibly for both local Des Moines and national employers"
    ],
    chooseAskia: [
      "you work in financial services, insurance, agribusiness, or enterprise operations",
      "your background is strong but still reading too narrowly for the leadership level you want",
      "you need cleaner positioning before promotion-track or senior-role interviews"
    ]
  },
  "el-paso-career-coaching": {
    marketLine:
      "El Paso tends to reward candidates who can translate military, government, cross-border operations, and healthcare leadership into clear commercial value for local and national employers.",
    aiSummary:
      "Career coaching in El Paso is most effective when it helps you frame military transition, border operations, government, and healthcare experience as commercially credible leadership for private-sector hiring.",
    hiringSignals: [
      "clear translation from military or government experience into private-sector leadership value",
      "business outcomes behind cross-border operations, healthcare, or logistics work",
      "positioning that bridges government and private-sector hiring with a coherent narrative"
    ],
    chooseAskia: [
      "you are transitioning from military, government, or cross-border operations into private-sector roles",
      "your background has strong operational depth but needs cleaner commercial framing",
      "you need better positioning before private-sector leadership interviews or comp conversations"
    ]
  },
  "fort-lauderdale-career-coaching": {
    marketLine:
      "Fort Lauderdale tends to reward candidates who can connect financial services, marine industry, healthcare, real estate, and operations leadership to clear business value.",
    aiSummary:
      "Career coaching in Fort Lauderdale works best when it sharpens financial services, marine, healthcare, real estate, and operations signal for candidates targeting higher-scope leadership and stronger compensation.",
    hiringSignals: [
      "clear business outcomes behind financial services, marine, healthcare, or real estate work",
      "leadership framing that makes scope and commercial value easy to trust",
      "positioning that works for Fort Lauderdale employers and remote or national opportunities"
    ],
    chooseAskia: [
      "you work in financial services, marine industry, healthcare, real estate, or operations",
      "your background is strong but still reads too narrowly for the next level",
      "you need better signal before high-stakes interviews or compensation conversations"
    ]
  },
  "fresno-career-coaching": {
    marketLine:
      "Fresno tends to reward candidates who can connect agriculture, healthcare, government, and enterprise operations to clear leadership and business value for employers inside and outside the Central Valley.",
    aiSummary:
      "Career coaching in Fresno works best when it helps you translate agriculture, healthcare, government, and operations experience into a stronger leadership story for local and national-market opportunities.",
    hiringSignals: [
      "evidence of business and operational impact in agriculture, healthcare, or government environments",
      "leadership framing that makes scope clear for employers outside the Central Valley",
      "positioning that bridges local Fresno employers and broader California or remote opportunities"
    ],
    chooseAskia: [
      "you work in agriculture, healthcare, government, or enterprise operations",
      "your background reads too sector-specific to transfer cleanly to broader leadership roles",
      "you need stronger positioning before a cross-sector move or leadership transition"
    ]
  },
  "greenville-career-coaching": {
    marketLine:
      "Greenville tends to reward candidates who can connect manufacturing, automotive, healthcare, and enterprise operations leadership to clear business value.",
    aiSummary:
      "Career coaching in Greenville works best when it sharpens automotive, manufacturing, healthcare, and enterprise operations signal for candidates targeting leadership and better compensation in a growing market.",
    hiringSignals: [
      "clear evidence of business impact in manufacturing, automotive, or healthcare environments",
      "leadership framing that makes operational scale and execution range obvious",
      "positioning that supports both Greenville employers and national or remote opportunities"
    ],
    chooseAskia: [
      "you work in manufacturing, automotive, healthcare, or enterprise operations",
      "your background is strong but still reading too execution-heavy for leadership roles",
      "you need better signal before a promotion conversation or job search launch"
    ]
  },
  "honolulu-career-coaching": {
    marketLine:
      "Honolulu tends to reward candidates who can make government, defense, healthcare, tourism operations, and technology leadership experience sound credible for both local and mainland employers.",
    aiSummary:
      "Career coaching in Honolulu works best when it helps you frame government, defense, tourism, healthcare, and technology experience for both local Hawaii opportunities and mainland or remote-market roles.",
    hiringSignals: [
      "clear translation from government, defense, or tourism experience into broader leadership value",
      "business and organizational outcomes behind Hawaii-specific or public-sector work",
      "positioning that bridges the local Hawaii market and national or remote-first opportunities"
    ],
    chooseAskia: [
      "you work in government, defense, healthcare, tourism, or technology in Hawaii",
      "you are targeting mainland or remote roles and need positioning that transfers cleanly",
      "you need better market signal before a cross-market move or senior leadership conversation"
    ]
  },
  "jersey-city-career-coaching": {
    marketLine:
      "Jersey City tends to reward candidates who can combine financial services, fintech, technology, and operations leadership credibility with the speed and rigor of New York–adjacent hiring.",
    aiSummary:
      "Career coaching in Jersey City works best when it sharpens financial services, fintech, technology, and operations signal for candidates competing in the New York metro market.",
    hiringSignals: [
      "business relevance that is obvious in the first read for high-speed financial or tech hiring loops",
      "leadership and ownership framing that matches New York metro market expectations",
      "interview stories that sound decisive, commercially grounded, and senior"
    ],
    chooseAskia: [
      "you work in financial services, fintech, technology, or operations in the NYC metro area",
      "your background is strong but still reads too broadly or too tactically for target roles",
      "you need sharper signal before high-stakes New York metro interviews or comp negotiations"
    ]
  },
  "long-island-career-coaching": {
    marketLine:
      "Long Island tends to reward candidates who can make financial services, healthcare, defense, and enterprise technology leadership experience sound credible in both local and New York metro markets.",
    aiSummary:
      "Career coaching in Long Island works best when it sharpens financial services, healthcare, defense, and enterprise technology signal for candidates competing across the New York metro area.",
    hiringSignals: [
      "clear business impact behind financial services, healthcare, defense, or enterprise work",
      "leadership framing credible for both Long Island employers and broader NYC metro opportunities",
      "positioning that makes scope and executive-level value easy to trust"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, defense, or enterprise technology on Long Island",
      "your background reads too narrowly for the broader NYC metro roles you are targeting",
      "you need better signal before senior interviews or compensation conversations"
    ]
  },
  "louisville-career-coaching": {
    marketLine:
      "Louisville tends to reward candidates who can connect healthcare, logistics, manufacturing, and enterprise operations leadership to clear business and organizational value.",
    aiSummary:
      "Career coaching in Louisville works best when it sharpens healthcare, logistics, manufacturing, and enterprise operations signal for candidates targeting senior leadership and stronger compensation.",
    hiringSignals: [
      "evidence of operational scale and business impact in healthcare, logistics, or manufacturing",
      "leadership framing that makes scope, decision range, and organizational value easy to trust",
      "positioning that works for Louisville employers and broader regional or national opportunities"
    ],
    chooseAskia: [
      "you work in healthcare, logistics, manufacturing, or enterprise operations",
      "your background is strong but still underselling leadership scope or commercial relevance",
      "you need better positioning before a promotion track or transition into a broader role"
    ]
  },
  "madison-career-coaching": {
    marketLine:
      "Madison tends to reward candidates who can combine academic, biotech, healthcare, and technology leadership with clear commercial and organizational credibility.",
    aiSummary:
      "Career coaching in Madison works best when it helps you translate academic, biotech, healthcare, and technology expertise into a sharper leadership story for both research-driven and commercial employers.",
    hiringSignals: [
      "clear translation from academic or research backgrounds into commercial leadership value",
      "business and organizational outcomes behind biotech, healthcare, or technology work",
      "positioning that works for both Madison's research economy and broader private-sector hiring"
    ],
    chooseAskia: [
      "you work in academia, biotech, healthcare, or technology",
      "your expertise is deep but still reads too research-oriented or too narrowly focused",
      "you need better commercial framing before private-sector or senior leadership interviews"
    ]
  },
  "birmingham-career-coaching": {
    marketLine:
      "Birmingham tends to reward candidates who can make healthcare, financial services, manufacturing, and enterprise operations leadership experience sound commercially credible at the next level.",
    aiSummary:
      "Career coaching in Birmingham works best when it sharpens healthcare, financial services, manufacturing, and enterprise operations signal for candidates targeting senior leadership and better compensation.",
    hiringSignals: [
      "clear business impact behind healthcare, financial services, or manufacturing work",
      "leadership framing that makes scope and executive-level value obvious quickly",
      "positioning that works for Birmingham employers and national remote or regional opportunities"
    ],
    chooseAskia: [
      "you work in healthcare, financial services, manufacturing, or enterprise operations",
      "your background is solid but underselling leadership scope or business relevance",
      "you need stronger positioning before a promotion conversation or job search launch"
    ]
  },
  "hartford-career-coaching": {
    marketLine:
      "Hartford tends to reward candidates who can connect insurance, financial services, healthcare, and aerospace leadership to clear business and organizational value.",
    aiSummary:
      "Career coaching in Hartford works best when it sharpens insurance, financial services, healthcare, and aerospace signal for candidates targeting senior leadership and stronger compensation in a concentrated-sector market.",
    hiringSignals: [
      "clear business outcomes behind insurance, financial services, healthcare, or aerospace work",
      "leadership framing credible in regulated and knowledge-heavy environments",
      "positioning that bridges deep sector expertise and broader executive-level credibility"
    ],
    chooseAskia: [
      "you work in insurance, financial services, healthcare, or aerospace",
      "your background is strong but still reads too narrowly for the senior roles you want",
      "you need better market signal before leadership interviews or compensation conversations"
    ]
  },
  "new-haven-career-coaching": {
    marketLine:
      "New Haven tends to reward candidates who can translate academic, biomedical research, healthcare, and technology experience into clear commercial and leadership credibility.",
    aiSummary:
      "Career coaching in New Haven is most effective when it helps you bridge academic or research depth and commercial leadership credibility for candidates transitioning from Yale or academic medical environments.",
    hiringSignals: [
      "clear translation from academic or research environments into commercial leadership value",
      "business and organizational outcomes behind biomedical, healthcare, or technology work",
      "positioning that works for both New Haven research employers and broader private-sector hiring"
    ],
    chooseAskia: [
      "you are transitioning from academia, biomedical research, or healthcare into commercial leadership",
      "your expertise is deep but needs cleaner commercial and market framing",
      "you need better positioning before private-sector or senior-level interviews"
    ]
  },
  "newark-career-coaching": {
    marketLine:
      "Newark tends to reward candidates who can make financial services, pharmaceutical, technology, and operations leadership experience sound credible in the competitive New York metro market.",
    aiSummary:
      "Career coaching in Newark works best when it sharpens financial services, pharmaceutical, technology, and operations signal for candidates competing across the New York metro hiring landscape.",
    hiringSignals: [
      "business relevance that holds up for high-speed New York metro hiring",
      "leadership and ownership framing that feels commercially grounded and senior",
      "interview stories that connect domain expertise to organizational and financial outcomes"
    ],
    chooseAskia: [
      "you work in financial services, pharma, technology, or operations in the NYC metro area",
      "your background reads too broadly or too tactically for the roles you are targeting",
      "you need sharper signal before high-stakes metro-area interviews or comp negotiations"
    ]
  },
  "norfolk-career-coaching": {
    marketLine:
      "Norfolk tends to reward candidates who can translate military, defense, maritime, and government experience into clear civilian leadership and commercial value.",
    aiSummary:
      "Career coaching in Norfolk works best when it helps you frame military transition, defense, maritime, and government experience as commercially credible leadership for private-sector and federal civilian employers.",
    hiringSignals: [
      "clear translation from military or defense experience into private-sector leadership value",
      "organizational and mission outcomes behind maritime, government, or defense work",
      "positioning that makes the military-to-civilian career transition feel deliberate"
    ],
    chooseAskia: [
      "you are transitioning from military, defense, or maritime into civilian leadership roles",
      "your background has strong operational depth but needs cleaner commercial framing",
      "you need better positioning before private-sector or federal civilian leadership interviews"
    ]
  },
  "providence-career-coaching": {
    marketLine:
      "Providence tends to reward candidates who can connect healthcare, biotech, financial services, and creative industries leadership to clear business and organizational value.",
    aiSummary:
      "Career coaching in Providence works best when it sharpens healthcare, biotech, financial services, and creative sector signal for candidates targeting leadership roles across New England.",
    hiringSignals: [
      "clear business outcomes behind healthcare, biotech, financial services, or creative industry work",
      "leadership framing that makes scope and organizational value feel credible across sectors",
      "positioning that works for Providence employers and broader New England or remote opportunities"
    ],
    chooseAskia: [
      "you work in healthcare, biotech, financial services, or creative industries",
      "your background is solid but underselling leadership scope or business relevance",
      "you need better signal before a promotion track or transition into a broader leadership role"
    ]
  },
  "buffalo-career-coaching": {
    marketLine:
      "Buffalo tends to reward candidates who can make healthcare, financial services, manufacturing, and enterprise operations leadership sound commercially credible at the next level.",
    aiSummary:
      "Career coaching in Buffalo works best when it sharpens healthcare, financial services, manufacturing, and enterprise operations signal for candidates targeting senior leadership and stronger compensation.",
    hiringSignals: [
      "evidence of business and operational impact in healthcare, financial services, or manufacturing",
      "leadership framing that makes scope, complexity, and organizational value easy to trust",
      "positioning that supports both Buffalo employers and broader regional or remote opportunities"
    ],
    chooseAskia: [
      "you work in healthcare, financial services, manufacturing, or enterprise operations",
      "your background is strong but still reading too execution-heavy for leadership roles",
      "you need better positioning before senior interviews or compensation conversations"
    ]
  },
  "rochester-career-coaching": {
    marketLine:
      "Rochester tends to reward candidates who can translate optics, imaging, healthcare, financial services, and enterprise technology experience into clear leadership and commercial credibility.",
    aiSummary:
      "Career coaching in Rochester works best when it sharpens optics, imaging, healthcare, financial services, and enterprise technology signal for candidates targeting leadership roles in a precision-driven market.",
    hiringSignals: [
      "clear translation from technical or domain expertise into commercial leadership value",
      "business and organizational outcomes behind optics, imaging, healthcare, or tech work",
      "positioning that works for both Rochester employers and broader national or remote opportunities"
    ],
    chooseAskia: [
      "you work in optics, imaging, healthcare, financial services, or enterprise technology",
      "your technical depth is strong but needs cleaner commercial and leadership framing",
      "you need better positioning before senior-level interviews or compensation negotiations"
    ]
  },
  "colorado-springs-career-coaching": {
    marketLine:
      "Colorado Springs tends to reward candidates who can translate defense, military, aerospace, cybersecurity, and technology leadership into clear commercial and private-sector value.",
    aiSummary:
      "Career coaching in Colorado Springs is most effective when it helps you frame military transition, defense, aerospace, and cybersecurity experience as commercially credible leadership for private-sector and federal civilian hiring.",
    hiringSignals: [
      "clear translation from military, defense, or aerospace experience into private-sector leadership value",
      "business and organizational outcomes behind cybersecurity, defense, or technology work",
      "positioning that makes the government-to-private-sector transition feel credible and deliberate"
    ],
    chooseAskia: [
      "you are transitioning from military, defense, or aerospace into civilian or private-sector leadership",
      "you work in cybersecurity, technology, or defense and need cleaner commercial positioning",
      "you need better market signal before cross-sector interviews or comp conversations"
    ]
  },
  "boise-career-coaching": {
    marketLine:
      "Boise tends to reward candidates who can make technology, manufacturing, healthcare, and enterprise operations leadership sound credible in a fast-growing market with national remote ambitions.",
    aiSummary:
      "Career coaching in Boise works best when it sharpens technology, manufacturing, healthcare, and enterprise leadership signal for candidates competing in a rapidly growing market and targeting both local and national opportunities.",
    hiringSignals: [
      "clear ownership and business impact across technology, manufacturing, or healthcare environments",
      "leadership signal credible for both Boise employers and distributed national remote teams",
      "positioning that communicates ambition and scope for a market where talent competition is intensifying"
    ],
    chooseAskia: [
      "you work in technology, manufacturing, healthcare, or enterprise operations in Boise",
      "your background is strong but still reading too narrowly for the target level you want",
      "you need better signal before senior interviews, leadership transitions, or comp negotiations"
    ]
  },
  "oakland-career-coaching": {
    marketLine:
      "Oakland tends to reward candidates who can combine Bay Area technical depth, social impact orientation, and startup or enterprise leadership into one focused, credible story.",
    aiSummary:
      "Career coaching in Oakland works best when it helps you connect Bay Area technical, social-impact, and startup experience into a sharper leadership story for both Oakland and broader Bay Area opportunities.",
    hiringSignals: [
      "clear technical or organizational impact with a values-aligned or mission-driven narrative",
      "leadership signal that holds up in high-bar Bay Area hiring environments",
      "positioning that works for Oakland companies, Bay Area employers, and remote-first teams"
    ],
    chooseAskia: [
      "you work in technology, social impact, or startup environments in the Oakland or Bay Area market",
      "your background spans technical, mission, and business functions and needs cleaner framing",
      "you need better signal before premium Bay Area interviews or compensation conversations"
    ]
  },
  "reno-career-coaching": {
    marketLine:
      "Reno tends to reward candidates who can connect technology, gaming, logistics, financial services, and enterprise operations to clear leadership and business value in a rapidly growing market.",
    aiSummary:
      "Career coaching in Reno works best when it sharpens technology, gaming, logistics, financial services, and enterprise operations signal for candidates competing in a fast-growing Nevada market.",
    hiringSignals: [
      "clear business outcomes behind technology, gaming, logistics, or financial services work",
      "leadership framing credible for both Reno employers and distributed national teams",
      "positioning that communicates scope and commercial value in a talent-competitive environment"
    ],
    chooseAskia: [
      "you work in technology, gaming, logistics, financial services, or enterprise operations in the Reno area",
      "your background is solid but underselling leadership scope or commercial relevance",
      "you need better market signal before senior interviews or compensation conversations"
    ]
  },
  "albany-career-coaching": {
    marketLine:
      "Albany tends to reward candidates who can make government, healthcare, financial services, and technology leadership experience sound commercially credible for both public and private employers.",
    aiSummary:
      "Career coaching in Albany works best when it helps you translate government, healthcare, financial services, and technology experience into sharper leadership signal for both public and private-sector hiring.",
    hiringSignals: [
      "clear translation from government or public-sector experience into private-sector leadership value",
      "business and organizational outcomes behind healthcare, financial services, or technology work",
      "positioning that bridges public and private-sector environments for candidates making sector transitions"
    ],
    chooseAskia: [
      "you work in government, healthcare, financial services, or technology in the Albany area",
      "your background spans public and private markets and needs cleaner framing",
      "you need better positioning before cross-sector moves or senior leadership interviews"
    ]
  },
  "omaha-career-coaching": {
    marketLine:
      "Omaha tends to reward candidates who can connect financial services, insurance, healthcare, and enterprise operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in Omaha works best when it sharpens financial services, insurance, healthcare, and enterprise operations signal for candidates targeting senior leadership and stronger compensation.",
    hiringSignals: [
      "evidence of business impact across financial services, insurance, or enterprise operations work",
      "leadership framing that makes scope, complexity, and organizational value obvious quickly",
      "positioning that communicates credibly for both Omaha and national or remote employers"
    ],
    chooseAskia: [
      "you work in financial services, insurance, healthcare, or enterprise operations",
      "your background is solid but still reading too narrowly for the leadership level you want",
      "you need cleaner positioning before promotion-track or senior-role interviews"
    ]
  },
  "grand-rapids-career-coaching": {
    marketLine:
      "Grand Rapids tends to reward candidates who can connect manufacturing, healthcare, financial services, and enterprise operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in Grand Rapids works best when it sharpens manufacturing, healthcare, financial services, and enterprise operations signal for candidates targeting senior leadership in a growing Midwest market.",
    hiringSignals: [
      "clear evidence of business impact in manufacturing, healthcare, or financial environments",
      "leadership framing that makes operational scale and decision range obvious",
      "positioning that supports Grand Rapids employers and broader Michigan or national opportunities"
    ],
    chooseAskia: [
      "you work in manufacturing, healthcare, financial services, or enterprise operations",
      "your background is strong but still reading too execution-heavy for the next leadership level",
      "you need better signal before a promotion conversation or job search launch"
    ]
  },
  "harrisburg-career-coaching": {
    marketLine:
      "Harrisburg tends to reward candidates who can make government, healthcare, financial services, and enterprise operations leadership experience sound credible for both public and private employers.",
    aiSummary:
      "Career coaching in Harrisburg is most effective when it helps you translate government, healthcare, financial services, and operations experience into sharper leadership signal for private and public-sector hiring.",
    hiringSignals: [
      "clear translation from government or public-sector experience into private-sector leadership value",
      "business and organizational outcomes behind healthcare, financial services, or operations work",
      "positioning that bridges public and private-sector hiring environments"
    ],
    chooseAskia: [
      "you work in government, healthcare, financial services, or enterprise operations",
      "your background spans public and private sectors and needs cleaner framing",
      "you need better positioning before cross-sector moves or senior leadership interviews"
    ]
  },
  "portland-me-career-coaching": {
    marketLine:
      "Portland, Maine tends to reward candidates who can connect healthcare, financial services, maritime, and technology leadership to clear business value in a market where remote opportunity broadens the competitive set.",
    aiSummary:
      "Career coaching in Portland, Maine works best when it sharpens healthcare, financial services, maritime, and technology signal for candidates targeting both local and distributed national opportunities.",
    hiringSignals: [
      "clear business outcomes behind healthcare, financial services, or technology work",
      "leadership framing that positions candidates credibly for both local and remote national roles",
      "positioning that makes scope and commercial value obvious for employers outside the local market"
    ],
    chooseAskia: [
      "you work in healthcare, financial services, maritime, or technology in Maine",
      "you are targeting remote or national roles and need positioning that transfers cleanly",
      "you need better market signal before a cross-market move or senior leadership conversation"
    ]
  },
  "myrtle-beach-career-coaching": {
    marketLine:
      "Myrtle Beach tends to reward candidates who can connect hospitality, healthcare, real estate, and operations leadership to clear business value for both local and broader regional employers.",
    aiSummary:
      "Career coaching in Myrtle Beach works best when it sharpens hospitality, healthcare, real estate, and operations signal for candidates targeting leadership roles locally and in broader regional markets.",
    hiringSignals: [
      "clear business outcomes behind hospitality, healthcare, real estate, or operations work",
      "leadership framing that transfers credibly outside the hospitality sector",
      "positioning that works for both Myrtle Beach employers and broader Southeast regional opportunities"
    ],
    chooseAskia: [
      "you work in hospitality, healthcare, real estate, or operations",
      "your background reads too industry-specific to transfer cleanly to broader leadership roles",
      "you need stronger positioning before a cross-sector move or leadership transition"
    ]
  },
  "riverside-san-bernardino-career-coaching": {
    marketLine:
      "The Inland Empire tends to reward candidates who can connect logistics, healthcare, education, and enterprise operations to clear leadership and business value for employers across Southern California.",
    aiSummary:
      "Career coaching in the Riverside-San Bernardino area works best when it sharpens logistics, healthcare, education, and enterprise operations signal for candidates targeting leadership roles across the Inland Empire and broader Southern California.",
    hiringSignals: [
      "evidence of business and operational impact in logistics, healthcare, or enterprise environments",
      "leadership framing that makes scope clear for employers across Southern California",
      "positioning that bridges Inland Empire employers and broader LA or national opportunities"
    ],
    chooseAskia: [
      "you work in logistics, healthcare, education, or enterprise operations in the Inland Empire",
      "your background reads too locally focused for the broader Southern California roles you want",
      "you need better signal before a leadership transition or cross-market job search"
    ]
  },
  "san-jose-career-coaching": {
    marketLine:
      "San Jose tends to reward candidates who can make technical depth, product or engineering leadership, and high-bar level calibration obvious fast enough for premium Silicon Valley hiring loops.",
    aiSummary:
      "Career coaching in San Jose works best when it sharpens engineering, product, and technical leadership signal for candidates competing in the most demanding high-comp tech hiring environment in the country.",
    hiringSignals: [
      "scope and systems thinking that clearly signal staff-plus or principal-level contribution",
      "clean translation from technical depth into product, platform, or business leverage",
      "compensation positioning that matches staff, management, or premium IC expectations in Silicon Valley"
    ],
    chooseAskia: [
      "you are targeting staff, management, or high-comp technical roles in Silicon Valley",
      "your technical work is real but not reading clearly enough for the leveling you want",
      "you need better interview and negotiation calibration for one of the highest-comp markets in tech"
    ]
  },
  "san-juan-career-coaching": {
    marketLine:
      "San Juan tends to reward candidates who can translate financial services, healthcare, government, and cross-border operations experience into clear leadership and commercial value for local and mainland employers.",
    aiSummary:
      "Career coaching in San Juan works best when it helps you frame financial services, healthcare, government, and cross-border operations experience for both local Puerto Rico opportunities and mainland US markets.",
    hiringSignals: [
      "clear translation from bilingual or cross-border experience into broader commercial leadership value",
      "business outcomes behind financial services, healthcare, or government work in Puerto Rico",
      "positioning that bridges the local Puerto Rico market and mainland US opportunities"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, government, or cross-border operations in Puerto Rico",
      "you are targeting mainland US roles and need positioning that transfers cleanly",
      "you need better market signal before a cross-market move or leadership conversation"
    ]
  },
  "scottsdale-career-coaching": {
    marketLine:
      "Scottsdale tends to reward candidates who can connect financial services, healthcare, technology, real estate, and enterprise operations to clear leadership and business value in the Phoenix metro.",
    aiSummary:
      "Career coaching in Scottsdale works best when it sharpens financial services, healthcare, technology, real estate, and enterprise operations signal for candidates targeting senior leadership in the Phoenix metro.",
    hiringSignals: [
      "clear business outcomes behind financial services, healthcare, technology, or real estate work",
      "leadership framing that makes scope and commercial value easy to trust in a premium market",
      "positioning that works for Scottsdale and broader Phoenix metro and national employers"
    ],
    chooseAskia: [
      "you work in financial services, healthcare, technology, real estate, or enterprise operations",
      "your background is strong but still reading too narrowly for the next leadership level",
      "you need better signal before senior interviews or high-comp conversations in the Phoenix metro"
    ]
  },
  "spokane-career-coaching": {
    marketLine:
      "Spokane tends to reward candidates who can connect healthcare, government, education, manufacturing, and technology leadership to clear business value in the Inland Northwest.",
    aiSummary:
      "Career coaching in Spokane works best when it sharpens healthcare, government, education, manufacturing, and technology signal for candidates targeting leadership roles locally and in broader Pacific Northwest markets.",
    hiringSignals: [
      "evidence of operational impact across healthcare, government, education, or manufacturing environments",
      "leadership framing that makes scope and organizational value clear for regional and national employers",
      "positioning that supports both Spokane employers and broader Pacific Northwest or remote opportunities"
    ],
    chooseAskia: [
      "you work in healthcare, government, education, manufacturing, or technology in the Spokane area",
      "your background is solid but needs cleaner leadership framing for the next level",
      "you need better signal before a promotion conversation or regional job search"
    ]
  },
  "tucson-career-coaching": {
    marketLine:
      "Tucson tends to reward candidates who can translate defense, aerospace, healthcare, education, and government experience into clear leadership and commercial credibility for local and national employers.",
    aiSummary:
      "Career coaching in Tucson works best when it sharpens defense, aerospace, healthcare, education, and government signal for candidates targeting leadership roles locally and in broader markets.",
    hiringSignals: [
      "clear translation from defense, aerospace, or government experience into commercial leadership value",
      "business and organizational outcomes behind healthcare, education, or technology work",
      "positioning that bridges local Tucson employers and broader national or remote opportunities"
    ],
    chooseAskia: [
      "you work in defense, aerospace, healthcare, education, or government in Tucson",
      "your background reads too sector-specific to transfer cleanly to broader leadership roles",
      "you need stronger positioning before a cross-sector move or senior leadership conversation"
    ]
  },
  "tulsa-career-coaching": {
    marketLine:
      "Tulsa tends to reward candidates who can connect energy, aerospace, manufacturing, and enterprise operations to clear leadership and business value for local and national employers.",
    aiSummary:
      "Career coaching in Tulsa works best when it sharpens energy, aerospace, manufacturing, and enterprise operations signal for candidates targeting higher-scope leadership and stronger compensation.",
    hiringSignals: [
      "evidence of business and operational impact in energy, aerospace, or manufacturing environments",
      "leadership framing that bridges sector-specific execution and broader commercial credibility",
      "positioning that works for Tulsa employers and national or remote opportunities"
    ],
    chooseAskia: [
      "you work in energy, aerospace, manufacturing, or enterprise operations in Tulsa",
      "your background reads too sector-specific for the broader leadership roles you are targeting",
      "you need better market signal before a leadership transition or comp conversation"
    ]
  },
  "west-palm-beach-career-coaching": {
    marketLine:
      "West Palm Beach tends to reward candidates who can connect financial services, real estate, healthcare, and operations leadership to clear business value in a growing high-net-worth market.",
    aiSummary:
      "Career coaching in West Palm Beach works best when it sharpens financial services, real estate, healthcare, and enterprise operations signal for candidates targeting senior leadership and stronger compensation.",
    hiringSignals: [
      "clear business outcomes behind financial services, real estate, healthcare, or operations work",
      "leadership framing that makes scope and commercial value easy to trust in a premium market",
      "positioning that works for West Palm Beach employers and broader South Florida opportunities"
    ],
    chooseAskia: [
      "you work in financial services, real estate, healthcare, or enterprise operations",
      "your background is strong but still reading too narrowly for the next leadership level",
      "you need better signal before high-stakes interviews or compensation conversations"
    ]
  },
  "wichita-career-coaching": {
    marketLine:
      "Wichita tends to reward candidates who can connect aerospace, manufacturing, healthcare, and enterprise operations to clear leadership and business value for local and national employers.",
    aiSummary:
      "Career coaching in Wichita works best when it sharpens aerospace, manufacturing, healthcare, and enterprise operations signal for candidates targeting senior leadership in a precision-driven market.",
    hiringSignals: [
      "evidence of business and operational impact in aerospace, manufacturing, or healthcare environments",
      "leadership framing that makes scope and execution range obvious to outside employers",
      "positioning that bridges local Wichita employers and broader national or remote opportunities"
    ],
    chooseAskia: [
      "you work in aerospace, manufacturing, healthcare, or enterprise operations in Wichita",
      "your background reads too sector-specific to transfer cleanly to broader leadership roles",
      "you need stronger positioning before a cross-sector move or leadership transition"
    ]
  },
  "wilmington-career-coaching": {
    marketLine:
      "Wilmington tends to reward candidates who can make financial services, pharmaceutical, healthcare, and corporate services leadership experience sound commercially credible in a competitive mid-Atlantic market.",
    aiSummary:
      "Career coaching in Wilmington works best when it sharpens financial services, pharmaceutical, healthcare, and corporate services signal for candidates targeting senior leadership in the Delaware and broader mid-Atlantic market.",
    hiringSignals: [
      "clear business outcomes behind financial services, pharmaceutical, or healthcare work",
      "leadership framing that makes scope and commercial value credible in regulated environments",
      "positioning that works for Wilmington employers and broader mid-Atlantic or national opportunities"
    ],
    chooseAskia: [
      "you work in financial services, pharmaceutical, healthcare, or corporate services in the Wilmington area",
      "your background is strong but still reading too narrowly for senior leadership roles",
      "you need better signal before high-stakes interviews or compensation conversations"
    ]
  },
  "greenville-spartanburg-anderson-career-coaching": {
    marketLine:
      "The Greenville-Spartanburg-Anderson area tends to reward candidates who can connect automotive, manufacturing, healthcare, and enterprise operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in the Greenville-Spartanburg-Anderson area works best when it sharpens automotive, manufacturing, healthcare, and enterprise operations signal for candidates targeting leadership roles in a growing Upstate South Carolina market.",
    hiringSignals: [
      "evidence of business and operational impact in automotive, manufacturing, or healthcare environments",
      "leadership framing that makes scope and organizational value obvious for inside and outside sector employers",
      "positioning that supports both local Upstate employers and broader national or regional opportunities"
    ],
    chooseAskia: [
      "you work in automotive, manufacturing, healthcare, or enterprise operations in Upstate South Carolina",
      "your background reads too execution-heavy for the leadership level you are targeting",
      "you need better signal before a promotion conversation or broader job search launch"
    ]
  },
  "fayetteville-ar-career-coaching": {
    marketLine:
      "Fayetteville, Arkansas tends to reward candidates who can connect retail supply chain, technology, healthcare, and enterprise operations to clear leadership and business value in the Northwest Arkansas corridor.",
    aiSummary:
      "Career coaching in Fayetteville, Arkansas works best when it sharpens retail supply chain, technology, healthcare, and enterprise operations signal for candidates targeting leadership roles in the Walmart headquarters ecosystem and broader regional markets.",
    hiringSignals: [
      "evidence of operational scale and commercial impact in retail supply chain, technology, or healthcare",
      "leadership framing credible for Walmart-adjacent and broader enterprise hiring environments",
      "positioning that works for Northwest Arkansas employers and national or remote opportunities"
    ],
    chooseAskia: [
      "you work in retail supply chain, technology, healthcare, or enterprise operations in Northwest Arkansas",
      "your background is strong but needs cleaner leadership framing for Walmart-adjacent or enterprise roles",
      "you need better market signal before a promotion track or leadership transition"
    ]
  },
  "fort-wayne-career-coaching": {
    marketLine:
      "Fort Wayne tends to reward candidates who can connect manufacturing, healthcare, financial services, and enterprise operations to clear leadership and business value.",
    aiSummary:
      "Career coaching in Fort Wayne works best when it sharpens manufacturing, healthcare, financial services, and enterprise operations signal for candidates targeting senior leadership in a growing Midwest market.",
    hiringSignals: [
      "clear evidence of business impact in manufacturing, healthcare, or financial environments",
      "leadership framing that makes operational scale and execution range easy to trust",
      "positioning that supports Fort Wayne employers and broader Indiana or national opportunities"
    ],
    chooseAskia: [
      "you work in manufacturing, healthcare, financial services, or enterprise operations in Fort Wayne",
      "your background reads too execution-heavy for the leadership level you want",
      "you need better signal before a promotion conversation or job search launch"
    ]
  },
  "pensacola-career-coaching": {
    marketLine:
      "Pensacola tends to reward candidates who can translate military, defense, healthcare, and government experience into clear civilian leadership and commercial value for both local and national employers.",
    aiSummary:
      "Career coaching in Pensacola is most effective when it helps you frame military transition, defense, healthcare, and government experience as commercially credible leadership for private-sector and federal civilian hiring.",
    hiringSignals: [
      "clear translation from military or defense experience into private-sector leadership value",
      "organizational and mission outcomes behind government, healthcare, or defense work",
      "positioning that makes the military-to-civilian career transition feel credible and deliberate"
    ],
    chooseAskia: [
      "you are transitioning from military, defense, or government into civilian leadership roles",
      "your operational background is strong but needs cleaner commercial framing for private-sector hiring",
      "you need better positioning before private-sector leadership interviews or compensation conversations"
    ]
  },
  "columbia-sc-career-coaching": {
    marketLine:
      "Columbia, SC tends to reward candidates who can connect government, healthcare, financial services, education, and manufacturing to clear leadership and business value in the Midlands market.",
    aiSummary:
      "Career coaching in Columbia, South Carolina works best when it sharpens government, healthcare, financial services, education, and manufacturing signal for candidates targeting senior leadership and better compensation.",
    hiringSignals: [
      "evidence of business and organizational impact in government, healthcare, or financial services work",
      "leadership framing that makes scope and commercial value obvious for local and regional employers",
      "positioning that works for Columbia employers and broader South Carolina or national opportunities"
    ],
    chooseAskia: [
      "you work in government, healthcare, financial services, education, or manufacturing in Columbia, SC",
      "your background is solid but underselling leadership scope or business relevance",
      "you need better signal before a promotion conversation or transition into a broader role"
    ]
  }
};

const generated = cities.reduce((acc, city) => {
  const profileFactory = profileBySlug[city.slug] || regionalGeneral;
  const profile = profileFactory(city.label);
  acc[city.slug] = {
    ...profile,
    ...(citySpecific[city.slug] || {})
  };
  return acc;
}, {});

function buildHubSignalPoints(city, profile) {
  const roleCopy = (profile.roleLinks || []).slice(0, 2).map((item) => item.label.toLowerCase());
  return [
    `Candidates in ${city.label} usually convert faster when their target role reads clearly across ${city.market}.`,
    roleCopy.length
      ? `The strongest stories make adjacent targets like ${roleCopy.join(" and ")} feel deliberate instead of scattered.`
      : `The strongest stories make scope, level, and next-role direction feel deliberate instead of scattered.`,
    "The best local-market signal usually combines sharper materials, cleaner interview framing, and a compensation story that matches the target level."
  ];
}

function buildHubCommonMistakes(city, profile) {
  const serviceCopy = (profile.serviceLinks || []).slice(0, 2).map((item) => item.label.toLowerCase());
  return [
    `Applying to ${city.label} and remote roles with the same vague positioning even when the market calibrates differently.`,
    serviceCopy.length
      ? `Treating ${serviceCopy.join(" and ")} as separate problems when the real issue is the consistency of the full market story.`
      : "Treating resume, interview, and compensation problems as unrelated when the real issue is usually signal consistency.",
    "Explaining experience chronologically instead of making the next role, scope, and business value obvious in the first read."
  ];
}

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
  "miami-career-coaching",
  "philadelphia-career-coaching",
  "minneapolis-st-paul-career-coaching",
  "detroit-career-coaching",
  "tampa-st-petersburg-career-coaching",
  "orlando-career-coaching",
  "charlotte-career-coaching",
  "nashville-career-coaching",
  "columbus-career-coaching",
  "cleveland-career-coaching",
  "cincinnati-career-coaching",
  "pittsburgh-career-coaching",
  "st-louis-career-coaching",
  "kansas-city-career-coaching",
  "indianapolis-career-coaching",
  "milwaukee-career-coaching",
  "new-orleans-career-coaching",
  "san-antonio-career-coaching",
  "portland-career-coaching",
  "sacramento-career-coaching",
  "las-vegas-career-coaching",
  "salt-lake-city-career-coaching",
  "baltimore-career-coaching",
  "richmond-career-coaching",
  "virginia-beach-career-coaching",
  "jacksonville-career-coaching",
  "memphis-career-coaching",
  "oklahoma-city-career-coaching",
  "albuquerque-career-coaching",
  "bakersfield-career-coaching",
  "baton-rouge-career-coaching",
  "charleston-career-coaching",
  "des-moines-career-coaching",
  "el-paso-career-coaching",
  "fort-lauderdale-career-coaching",
  "fresno-career-coaching",
  "greenville-career-coaching",
  "honolulu-career-coaching",
  "jersey-city-career-coaching",
  "long-island-career-coaching",
  "louisville-career-coaching",
  "madison-career-coaching",
  "birmingham-career-coaching",
  "hartford-career-coaching",
  "new-haven-career-coaching",
  "newark-career-coaching",
  "norfolk-career-coaching",
  "providence-career-coaching",
  "buffalo-career-coaching",
  "rochester-career-coaching",
  "colorado-springs-career-coaching",
  "boise-career-coaching",
  "oakland-career-coaching",
  "reno-career-coaching",
  "albany-career-coaching",
  "omaha-career-coaching",
  "grand-rapids-career-coaching",
  "harrisburg-career-coaching",
  "portland-me-career-coaching",
  "myrtle-beach-career-coaching",
  "riverside-san-bernardino-career-coaching",
  "san-jose-career-coaching",
  "san-juan-career-coaching",
  "scottsdale-career-coaching",
  "spokane-career-coaching",
  "tucson-career-coaching",
  "tulsa-career-coaching",
  "west-palm-beach-career-coaching",
  "wichita-career-coaching",
  "wilmington-career-coaching",
  "greenville-spartanburg-anderson-career-coaching",
  "fayetteville-ar-career-coaching",
  "fort-wayne-career-coaching",
  "pensacola-career-coaching",
  "columbia-sc-career-coaching"
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
    signalPoints: generated[city.slug].signalPoints || buildHubSignalPoints(city, generated[city.slug]),
    commonMistakes: generated[city.slug].commonMistakes || buildHubCommonMistakes(city, generated[city.slug]),
    keywordSupport:
      `If you searched for career coach ${city.label}, career coaching ${city.label}, or career counselor ${city.label}, this page is designed to act as the main ${city.label} hub and route you to the right service-specific page quickly.`,
    localClusterLinks: buildLocalClusterLinks(city)
  };
}

for (const city of cities) {
  if (generated[city.slug].signalPoints && generated[city.slug].commonMistakes) continue;
  generated[city.slug] = {
    ...generated[city.slug],
    signalPoints: generated[city.slug].signalPoints || buildHubSignalPoints(city, generated[city.slug]),
    commonMistakes: generated[city.slug].commonMistakes || buildHubCommonMistakes(city, generated[city.slug])
  };
}

module.exports = {
  default: defaults,
  ...generated
};
