const publishDate = "April 8, 2026";
const publishDateISO = "2026-04-08";

const titleHooks = [
  "Range, Scope, and What Moves Offers Higher",
  "What the Mid-to-Senior Jump Really Pays For",
  "What Actually Moves the Range",
  "How Leveling Changes the Offer",
  "What the Top of Band Usually Requires"
];

const usCities = [
  {
    name: "New York City",
    slug: "new-york-city",
    marketPageUrl: "/new-york-city-career-coaching/",
    premium: 1.22,
    marketDemand: "high-growth product teams, finance platforms, and enterprise modernization work",
    packageContext:
      "New York City packages usually move quickly from base salary to full package design. Strong candidates should read equity, bonus, and leveling together because the headline salary often hides the real compensation gap."
  },
  {
    name: "San Francisco Bay Area",
    slug: "san-francisco-bay-area",
    marketPageUrl: "/san-francisco-bay-area-career-coaching/",
    premium: 1.28,
    marketDemand: "platform-heavy companies, infra-first startups, and product orgs pricing for leverage",
    packageContext:
      "Bay Area bands are usually pricing both geography and expected leverage. The strongest offers often go to candidates who improve speed, reliability, or decision quality across multiple teams rather than one local problem."
  },
  {
    name: "Seattle",
    slug: "seattle",
    marketPageUrl: "/seattle-career-coaching/",
    premium: 1.15,
    marketDemand: "cloud infrastructure teams, platform modernization, and large-scale systems ownership",
    packageContext:
      "Seattle compensation usually rewards technical depth plus operational judgment. Total package value often shifts on signing, refresh cadence, and whether the role is central to cloud or platform revenue."
  },
  {
    name: "Austin",
    slug: "austin",
    marketPageUrl: "/austin-career-coaching/",
    premium: 1.03,
    marketDemand: "growth-stage software teams, cloud adoption work, and pragmatic scale-up hiring",
    packageContext:
      "Austin often looks moderate compared with coastal hubs, but strong packages still move when the role owns migration quality, product velocity, or team-wide systems improvement."
  },
  {
    name: "Chicago",
    slug: "chicago",
    marketPageUrl: "/chicago-career-coaching/",
    premium: 1.0,
    marketDemand: "enterprise transformation, data-heavy operations, and B2B platform teams",
    packageContext:
      "Chicago salary bands tend to reward candidates who connect technical or operational work to business reliability and execution quality. The strongest negotiations are usually scope-led, not title-led."
  },
  {
    name: "Boston",
    slug: "boston",
    marketPageUrl: "/boston-career-coaching/",
    premium: 1.08,
    marketDemand: "deep-tech product teams, healthcare-adjacent platforms, and senior technical leadership hiring",
    packageContext:
      "Boston packages often rise fastest when the role sits near high-complexity product, research, or regulated workflows. Candidates who can explain precision and scale together usually have more room to negotiate."
  },
  {
    name: "Dallas-Fort Worth",
    slug: "dallas-fort-worth",
    marketPageUrl: "/dallas-fort-worth-career-coaching/",
    premium: 0.98,
    marketDemand: "enterprise operations, cloud transformation, and cross-functional execution roles",
    packageContext:
      "Dallas-Fort Worth bands are often more moderate on paper, but the best offers still jump when the role reduces execution friction across large organizations or revenue-critical systems."
  },
  {
    name: "Houston",
    slug: "houston",
    marketPageUrl: "/houston-career-coaching/",
    premium: 0.97,
    marketDemand: "operations-heavy companies, modernization work, and leadership hires tied to execution quality",
    packageContext:
      "Houston packages often respond well to candidates who can improve resilience, efficiency, or leadership clarity in environments where operations quality matters as much as raw product speed."
  },
  {
    name: "Atlanta",
    slug: "atlanta",
    marketPageUrl: "/atlanta-career-coaching/",
    premium: 0.96,
    marketDemand: "growth-stage SaaS teams, customer-facing platforms, and commercial enablement roles",
    packageContext:
      "Atlanta bands usually move when the role clearly improves growth, customer retention, or internal delivery speed. Strong candidates should negotiate around business leverage, not only market averages."
  },
  {
    name: "Miami",
    slug: "miami",
    marketPageUrl: "/miami-career-coaching/",
    premium: 0.98,
    marketDemand: "fast-moving startups, revenue teams, and hybrid local-remote leadership hiring",
    packageContext:
      "Miami compensation varies more by company type than by title alone. Candidates who can show leverage in ambiguous, fast-moving environments usually create better negotiation pressure."
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    marketPageUrl: "/los-angeles-career-coaching/",
    premium: 1.05,
    marketDemand: "consumer product teams, creative-tech operators, and cross-functional execution roles",
    packageContext:
      "Los Angeles bands tend to widen when the role touches product scale, customer growth, or multi-stakeholder execution. The full package usually matters more than the base salary headline suggests."
  },
  {
    name: "Washington, DC",
    slug: "washington-dc",
    marketPageUrl: "/washington-dc-career-coaching/",
    premium: 1.07,
    marketDemand: "mission-critical systems, security-heavy environments, and leadership roles with high trust requirements",
    packageContext:
      "Washington, DC packages often reward candidates who operate well in regulated, high-accountability settings. Salary negotiations usually improve when you frame the role around trust, risk, and execution quality."
  },
  {
    name: "Denver",
    slug: "denver",
    marketPageUrl: "/denver-career-coaching/",
    premium: 1.0,
    marketDemand: "cloud-native teams, distributed engineering orgs, and practical scale-up hiring",
    packageContext:
      "Denver tends to price pragmatic operators well, especially when the role improves reliability or execution across distributed teams. Candidates should anchor around scope and measurable outcomes."
  },
  {
    name: "San Diego",
    slug: "san-diego",
    marketPageUrl: "/san-diego-career-coaching/",
    premium: 1.02,
    marketDemand: "product-led companies, regulated-tech organizations, and cross-functional builders",
    packageContext:
      "San Diego salary bands usually move fastest when the role combines technical depth with clean stakeholder execution. Strong packages often depend on how visibly your work reduces risk or accelerates delivery."
  },
  {
    name: "Phoenix",
    slug: "phoenix",
    marketPageUrl: "/phoenix-career-coaching/",
    premium: 0.94,
    marketDemand: "operations-led teams, modernization initiatives, and pragmatic growth roles",
    packageContext:
      "Phoenix packages are often less inflated than coastal hubs, but strong candidates still create upside when they can improve operational quality, team efficiency, or revenue-critical execution."
  }
];

const roleDefinitions = [
  {
    role: "Software Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    baseMedian: 160,
    featuredImage: "/assets/blog/offer-range.jpg",
    categories: ["Compensation Mastery", "Software Careers"],
    leverageTheme: "turning shipping speed and code quality into visible business leverage",
    negotiationTheme: "you improve delivery throughput without creating hidden reliability debt",
    drivers: [
      "Owning systems that matter to revenue or product retention",
      "Working across architecture, execution, and incident cleanup instead of only feature tickets",
      "Evidence that your changes improved delivery speed, stability, or product quality",
      "Operating at a level where design judgment matters as much as coding volume"
    ]
  },
  {
    role: "Backend Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    baseMedian: 168,
    featuredImage: "/assets/blog/technical-screen.jpg",
    categories: ["Compensation Mastery", "Software Careers"],
    leverageTheme: "making scale, latency, and service reliability feel lower risk for the business",
    negotiationTheme: "you own hard backend tradeoffs instead of only implementing downstream tickets",
    drivers: [
      "Designing services with clearer reliability and performance tradeoffs",
      "Improving system behavior under load instead of only shipping endpoints",
      "Owning data flow, observability, and operational readiness together",
      "Influencing architecture decisions across multiple services or teams"
    ]
  },
  {
    role: "Frontend Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    baseMedian: 150,
    featuredImage: "/assets/blog/linkedin-headline-formula.jpg",
    categories: ["Compensation Mastery", "Software Careers"],
    leverageTheme: "improving product speed, usability, and trust at the point customers actually feel it",
    negotiationTheme: "your frontend work improves conversion, usability, or product velocity in measurable ways",
    drivers: [
      "Owning performance, accessibility, and design-system consistency together",
      "Improving activation or conversion through better product execution",
      "Working across frontend architecture rather than only local UI tickets",
      "Translating ambiguous product requirements into cleaner shipped outcomes"
    ]
  },
  {
    role: "Full Stack Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    baseMedian: 158,
    featuredImage: "/assets/blog/offer-comparison.jpg",
    categories: ["Compensation Mastery", "Software Careers"],
    leverageTheme: "reducing handoff friction across product, frontend, backend, and release execution",
    negotiationTheme: "you simplify delivery across the stack instead of only covering gaps tactically",
    drivers: [
      "Owning features from interface to service behavior and release quality",
      "Reducing cross-team dependency drag in fast product cycles",
      "Making pragmatic tradeoffs between speed, maintainability, and user impact",
      "Operating independently across several layers of the system"
    ]
  },
  {
    role: "DevOps Engineer",
    rolePageUrl: "/devops-career-coaching/",
    baseMedian: 170,
    featuredImage: "/assets/blog/offer-leverage.jpg",
    categories: ["Compensation Mastery", "Tech Infrastructure"],
    leverageTheme: "improving delivery speed while lowering operational drag across the engineering org",
    negotiationTheme: "your infrastructure work improves delivery reliability and team throughput at the same time",
    drivers: [
      "Owning CI/CD reliability across several teams instead of one isolated service",
      "Strong Terraform, Kubernetes, and cloud tradeoff judgment",
      "Evidence of reducing incident load or deployment risk materially",
      "Platform influence that improves engineering output beyond simple automation"
    ]
  },
  {
    role: "Site Reliability Engineer",
    rolePageUrl: "/devops-career-coaching/",
    baseMedian: 188,
    featuredImage: "/assets/blog/interview-calibration.jpg",
    categories: ["Compensation Mastery", "Tech Infrastructure"],
    leverageTheme: "making reliability a business capability instead of a reactive support function",
    negotiationTheme: "you shape risk and service behavior, not only on-call execution",
    drivers: [
      "Owning reliability strategy instead of only operational execution",
      "Strong incident leadership and post-incident learning systems",
      "Fluency in observability design, SLOs, and failure-mode analysis",
      "Experience balancing reliability, speed, and cost in production systems"
    ]
  },
  {
    role: "Platform Engineer",
    rolePageUrl: "/devops-career-coaching/",
    baseMedian: 192,
    featuredImage: "/assets/blog/manager-vs-staff.jpg",
    categories: ["Compensation Mastery", "Tech Infrastructure"],
    leverageTheme: "making dozens of engineers faster, safer, and easier to support",
    negotiationTheme: "your platform work changes team-wide delivery economics, not just one system",
    drivers: [
      "Owning internal platform standards or paved-road tooling",
      "Improving deployment safety and developer throughput together",
      "Strong platform product thinking across Kubernetes, IaC, and developer workflows",
      "Influencing architecture decisions across several engineering teams"
    ]
  },
  {
    role: "Cloud Engineer",
    rolePageUrl: "/devops-career-coaching/",
    baseMedian: 176,
    featuredImage: "/assets/blog/offer-comparison.jpg",
    categories: ["Compensation Mastery", "Tech Infrastructure"],
    leverageTheme: "helping the business scale without wasting cloud spend or resilience headroom",
    negotiationTheme: "you make cloud architecture decisions that improve cost, resilience, and speed together",
    drivers: [
      "Owning migrations or modernization work with measurable business impact",
      "Balancing reliability, security, and cost in architecture decisions",
      "Strong Terraform, networking, and cloud governance depth",
      "Setting standards across teams instead of only shipping isolated infra tasks"
    ]
  },
  {
    role: "Data Engineer",
    rolePageUrl: "/data-career-coaching/",
    baseMedian: 166,
    featuredImage: "/assets/blog/resume-impact-bullets.jpg",
    categories: ["Compensation Mastery", "Data Careers"],
    leverageTheme: "making data more reliable, timely, and useful for actual business decisions",
    negotiationTheme: "your pipelines and models improve decision speed or analytics quality at scale",
    drivers: [
      "Owning high-trust pipelines instead of only batch-job maintenance",
      "Improving data quality, freshness, and lineage visibility together",
      "Working across warehouses, orchestration, and stakeholder use cases",
      "Reducing analyst and product-team friction with better platform choices"
    ]
  },
  {
    role: "Data Scientist",
    rolePageUrl: "/data-career-coaching/",
    baseMedian: 170,
    featuredImage: "/assets/blog/behavioral-signal.jpg",
    categories: ["Compensation Mastery", "Data Careers"],
    leverageTheme: "turning ambiguous business problems into decisions the company can actually act on",
    negotiationTheme: "your work changes decisions, prioritization, or model-driven performance in measurable ways",
    drivers: [
      "Shipping insights or models that influence product or revenue decisions",
      "Working beyond notebooks into experimentation, deployment, or stakeholder adoption",
      "Translating statistical work into business action cleanly",
      "Owning problem framing instead of only analysis execution"
    ]
  },
  {
    role: "Analytics Engineer",
    rolePageUrl: "/data-career-coaching/",
    baseMedian: 158,
    featuredImage: "/assets/blog/case-study-framework.jpg",
    categories: ["Compensation Mastery", "Data Careers"],
    leverageTheme: "making analytics systems more trustworthy and easier for the business to use",
    negotiationTheme: "you improve reporting quality and decision speed rather than only shipping dbt models",
    drivers: [
      "Owning data modeling quality across multiple stakeholder groups",
      "Improving metric trust and reporting consistency",
      "Working across business logic, warehouse structure, and analyst usability",
      "Reducing decision friction by making analytics easier to trust and consume"
    ]
  },
  {
    role: "Machine Learning Engineer",
    rolePageUrl: "/ai-ml-career-coaching/",
    baseMedian: 198,
    featuredImage: "/assets/blog/system-design-story.jpg",
    categories: ["Compensation Mastery", "AI / ML Careers"],
    leverageTheme: "turning ML systems into production value instead of interesting experiments",
    negotiationTheme: "you own model performance in production, not only experimentation",
    drivers: [
      "Shipping models into production with measurable business impact",
      "Owning inference, monitoring, and reliability rather than only experimentation",
      "Balancing model quality, latency, and cost effectively",
      "Bridging research and engineering execution in a way the company can scale"
    ]
  },
  {
    role: "AI Engineer",
    rolePageUrl: "/ai-ml-career-coaching/",
    baseMedian: 205,
    featuredImage: "/assets/blog/why-top-tech-rejects.jpg",
    categories: ["Compensation Mastery", "AI / ML Careers"],
    leverageTheme: "turning AI capability into workflow leverage, product differentiation, or operational speed",
    negotiationTheme: "your AI work improves real workflows or product outcomes instead of demo value only",
    drivers: [
      "Building AI features that change workflow speed or product value directly",
      "Owning model integration, evaluation, and safety tradeoffs",
      "Balancing inference cost, latency, and product usefulness cleanly",
      "Working across application architecture and model behavior together"
    ]
  },
  {
    role: "Cybersecurity Engineer",
    rolePageUrl: "/cybersecurity-career-coaching/",
    baseMedian: 168,
    featuredImage: "/assets/blog/risk-mitigation-story.jpg",
    categories: ["Compensation Mastery", "Security Careers"],
    leverageTheme: "reducing risk without turning delivery into a constant bottleneck",
    negotiationTheme: "you improve security posture while preserving practical execution speed",
    drivers: [
      "Owning security controls that matter to real business risk",
      "Reducing exposure without making engineering workflows slower than necessary",
      "Working across security architecture, incident response, and implementation detail",
      "Building trust with engineering, leadership, and compliance stakeholders"
    ]
  },
  {
    role: "QA Engineer",
    rolePageUrl: "/qa-career-coaching/",
    baseMedian: 136,
    featuredImage: "/assets/blog/technical-screen.jpg",
    categories: ["Compensation Mastery", "Quality Engineering"],
    leverageTheme: "making product quality more predictable instead of reacting to defects late",
    negotiationTheme: "you improve release confidence and defect prevention, not only test execution volume",
    drivers: [
      "Improving release quality and test confidence across teams",
      "Building automation that reduces manual regression drag",
      "Working upstream on quality signals instead of only downstream bug validation",
      "Helping product and engineering teams ship with fewer surprises"
    ]
  },
  {
    role: "Solutions Architect",
    rolePageUrl: "/solutions-architect-career-coaching/",
    baseMedian: 188,
    featuredImage: "/assets/blog/executive-brief.jpg",
    categories: ["Compensation Mastery", "Customer-Facing Tech"],
    leverageTheme: "helping revenue teams win while keeping technical decisions credible and scalable",
    negotiationTheme: "you translate technical complexity into revenue movement and delivery confidence",
    drivers: [
      "Owning pre-sales or customer architecture with measurable revenue impact",
      "Balancing customer fit, delivery risk, and long-term maintainability",
      "Operating credibly with both technical teams and executive buyers",
      "Reducing ambiguity in complex deals or implementations"
    ]
  },
  {
    role: "Product Manager",
    rolePageUrl: "/product-manager-career-coaching/",
    baseMedian: 180,
    featuredImage: "/assets/blog/role-targeting.jpg",
    categories: ["Compensation Mastery", "Product Careers"],
    leverageTheme: "turning prioritization quality into faster execution and stronger product outcomes",
    negotiationTheme: "your product judgment improves what ships, not only what gets discussed",
    drivers: [
      "Owning product decisions tied to growth, retention, or revenue",
      "Improving prioritization clarity across engineering and leadership",
      "Balancing customer need, business impact, and execution realism",
      "Driving cleaner decision-making in ambiguous environments"
    ]
  },
  {
    role: "Technical Product Manager",
    rolePageUrl: "/product-manager-career-coaching/",
    baseMedian: 194,
    featuredImage: "/assets/blog/case-study-structure.jpg",
    categories: ["Compensation Mastery", "Product Careers"],
    leverageTheme: "reducing product-engineering friction in technically complex bets",
    negotiationTheme: "you can steer complex technical initiatives without losing business clarity",
    drivers: [
      "Owning roadmap tradeoffs in technically complex product areas",
      "Working credibly with senior engineers on architecture and sequencing",
      "Reducing ambiguity around platform, API, or systems-heavy initiatives",
      "Connecting technical constraints to customer and business outcomes clearly"
    ]
  },
  {
    role: "Product Operations Manager",
    rolePageUrl: "/product-ops-career-coaching/",
    baseMedian: 150,
    featuredImage: "/assets/blog/job-search-metrics.jpg",
    categories: ["Compensation Mastery", "Product Careers"],
    leverageTheme: "making product organizations run cleaner, faster, and with less decision drag",
    negotiationTheme: "you improve product execution quality across the org, not only process compliance",
    drivers: [
      "Improving planning, launch, or feedback systems across product teams",
      "Reducing operational drag that slows prioritization or delivery",
      "Building better reporting, workflows, and coordination mechanisms",
      "Helping leaders make product decisions with better visibility"
    ]
  },
  {
    role: "Product Designer",
    rolePageUrl: "/product-design-career-coaching/",
    baseMedian: 160,
    featuredImage: "/assets/blog/portfolio-structure.jpg",
    categories: ["Compensation Mastery", "Design Careers"],
    leverageTheme: "turning design quality into clearer user behavior and stronger product trust",
    negotiationTheme: "your design work improves product outcomes, not only visual polish",
    drivers: [
      "Owning design decisions that change activation, retention, or usability",
      "Working across UX, product strategy, and execution detail together",
      "Improving system consistency without slowing product teams down",
      "Using research and product judgment to shape better shipped outcomes"
    ]
  },
  {
    role: "Engineering Manager",
    rolePageUrl: "/engineering-manager-coaching/",
    baseMedian: 222,
    featuredImage: "/assets/blog/manager-vs-staff.jpg",
    categories: ["Compensation Mastery", "Leadership Signal"],
    leverageTheme: "turning team quality and delivery judgment into durable execution performance",
    negotiationTheme: "you improve output, prioritization, and team health at the same time",
    drivers: [
      "Owning team performance, hiring, and delivery quality together",
      "Making prioritization and staffing decisions that improve execution",
      "Building trust with leadership while protecting team clarity",
      "Running organizations that ship consistently without burning people out"
    ]
  },
  {
    role: "Sales Engineer",
    rolePageUrl: "/sales-engineer-career-coaching/",
    baseMedian: 176,
    featuredImage: "/assets/blog/offer-leverage.jpg",
    categories: ["Compensation Mastery", "Revenue Careers"],
    leverageTheme: "helping revenue close faster without breaking technical trust",
    negotiationTheme: "you increase win rates and deal confidence, not only demo volume",
    drivers: [
      "Owning technical deal support with measurable revenue influence",
      "Handling discovery, objections, and solution framing credibly",
      "Balancing customer fit with internal delivery realism",
      "Helping sales teams move complex deals with lower technical friction"
    ]
  },
  {
    role: "Customer Success Manager",
    rolePageUrl: "/customer-success-career-coaching/",
    baseMedian: 135,
    featuredImage: "/assets/blog/follow-up-strategy.jpg",
    categories: ["Compensation Mastery", "Revenue Careers"],
    leverageTheme: "protecting retention and expansion through clearer customer execution",
    negotiationTheme: "your work changes renewals, expansion, or account health materially",
    drivers: [
      "Owning customer outcomes tied to renewal or expansion",
      "Reducing churn risk through stronger planning and execution",
      "Working across customer, product, and support teams effectively",
      "Making complex accounts feel lower risk for the business"
    ]
  },
  {
    role: "Marketing Manager",
    rolePageUrl: "/marketing-career-coaching/",
    baseMedian: 145,
    featuredImage: "/assets/blog/linkedin-optimization-engineers.jpg",
    categories: ["Compensation Mastery", "Growth Careers"],
    leverageTheme: "turning brand, acquisition, or lifecycle work into measurable pipeline or growth movement",
    negotiationTheme: "your marketing work changes demand quality or revenue movement, not only activity volume",
    drivers: [
      "Owning campaigns or channels tied to measurable growth outcomes",
      "Improving conversion, pipeline, or lifecycle performance",
      "Working across product, sales, and creative teams with clear execution",
      "Making growth bets with strong measurement and iteration discipline"
    ]
  },
  {
    role: "Finance Manager",
    rolePageUrl: "/finance-fpa-career-coaching/",
    baseMedian: 156,
    featuredImage: "/assets/blog/executive-presence.jpg",
    categories: ["Compensation Mastery", "Business & Finance"],
    leverageTheme: "helping the company make better capital and planning decisions under uncertainty",
    negotiationTheme: "you improve planning quality and financial decision speed, not only reporting hygiene",
    drivers: [
      "Owning planning cycles or business reviews that shape company decisions",
      "Improving forecast quality and financial visibility",
      "Working credibly with executives on risk, tradeoffs, and performance",
      "Reducing planning friction across functions with cleaner finance systems"
    ]
  },
  {
    role: "FP&A Analyst",
    rolePageUrl: "/finance-fpa-career-coaching/",
    baseMedian: 132,
    featuredImage: "/assets/blog/executive-brief.jpg",
    categories: ["Compensation Mastery", "Business & Finance"],
    leverageTheme: "making financial clarity easier for operators and leaders to act on",
    negotiationTheme: "your analysis improves planning or resource decisions in measurable ways",
    drivers: [
      "Building models or reporting that leaders actually use in decisions",
      "Improving planning visibility and forecast discipline",
      "Working across finance and business stakeholders with strong clarity",
      "Reducing ambiguity around spending, headcount, or performance"
    ]
  },
  {
    role: "Operations Manager",
    rolePageUrl: "/operations-career-coaching/",
    baseMedian: 142,
    featuredImage: "/assets/blog/90-day-tech-job-system.jpg",
    categories: ["Compensation Mastery", "Operations Careers"],
    leverageTheme: "making the business run with less friction, fewer surprises, and higher execution quality",
    negotiationTheme: "you improve throughput, reliability, or cost efficiency across real workflows",
    drivers: [
      "Owning operational systems that affect execution quality directly",
      "Improving process speed, consistency, or cost discipline",
      "Working across teams to remove repeated bottlenecks",
      "Turning messy execution problems into durable operating systems"
    ]
  },
  {
    role: "Strategy Consultant",
    rolePageUrl: "/strategy-consulting-career-coaching/",
    baseMedian: 172,
    featuredImage: "/assets/blog/case-study-framework.jpg",
    categories: ["Compensation Mastery", "Consulting Careers"],
    leverageTheme: "helping leadership make better strategic calls with less noise and more decision clarity",
    negotiationTheme: "you improve the quality of major decisions, not only slide output",
    drivers: [
      "Owning strategic work with direct executive relevance",
      "Structuring ambiguous problems into clearer choices",
      "Operating credibly with leadership under time pressure",
      "Turning analysis into actual decisions instead of presentation theatre"
    ]
  },
  {
    role: "Supply Chain Manager",
    rolePageUrl: "/supply-chain-career-coaching/",
    baseMedian: 148,
    featuredImage: "/assets/blog/risk-mitigation-story.jpg",
    categories: ["Compensation Mastery", "Operations Careers"],
    leverageTheme: "making execution, inventory, and supplier risk easier for the business to control",
    negotiationTheme: "you improve resilience, cost control, or fulfillment quality at scale",
    drivers: [
      "Owning planning or supplier workflows tied to real business risk",
      "Improving inventory, logistics, or execution reliability",
      "Balancing cost discipline with service-level performance",
      "Operating across messy cross-functional constraints effectively"
    ]
  },
  {
    role: "People Operations Manager",
    rolePageUrl: "/people-ops-career-coaching/",
    baseMedian: 145,
    featuredImage: "/assets/blog/leadership-signal-resume.jpg",
    categories: ["Compensation Mastery", "People Careers"],
    leverageTheme: "making talent systems cleaner, faster, and easier for the business to trust",
    negotiationTheme: "you improve hiring, performance, or people-system execution in ways leaders can feel",
    drivers: [
      "Owning people systems tied to hiring, retention, or performance quality",
      "Improving manager workflows and employee experience together",
      "Reducing operational drag in HR and people processes",
      "Building trust with leadership through clearer people operations execution"
    ]
  }
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatCurrency(value) {
  return `$${Math.round(value / 5) * 5}K`;
}

function buildSalaryBand(median) {
  return {
    low: formatCurrency(median * 0.82),
    median: formatCurrency(median),
    high: `${formatCurrency(median * 1.28)}+`
  };
}

function buildExperienceBands(role, location, median, leverageTheme, negotiationTheme) {
  return [
    {
      level: "Early-career",
      range: `${formatCurrency(median * 0.82)}-${formatCurrency(median * 0.92)}`,
      note: `Early-career ${role.toLowerCase()} offers in ${location} usually land here when the work is execution-heavy and the scope is narrower.`
    },
    {
      level: "Mid-level",
      range: `${formatCurrency(median * 0.92)}-${formatCurrency(median * 1.08)}`,
      note: `${location} mid-level bands usually move once you can show ${leverageTheme}.`
    },
    {
      level: "Senior",
      range: `${formatCurrency(median * 1.08)}-${formatCurrency(median * 1.28)}+`,
      note: `Senior ${role.toLowerCase()} roles usually reach this band when you can prove ${negotiationTheme}.`
    }
  ];
}

function buildMarketSignals(role, city, leverageTheme) {
  return [
    `${city.name} usually pays up when ${role.toLowerCase()} candidates can show ${leverageTheme}.`,
    `The strongest packages in ${city.name} usually cluster around ${city.marketDemand}.`,
    `Candidates who make scope, impact, and business risk visible usually defend stronger salary bands than candidates who only list tools or responsibilities.`
  ];
}

module.exports = roleDefinitions.map((roleDefinition, index) => {
  const city = usCities[index % usCities.length];
  const cityMedian = roleDefinition.baseMedian * city.premium;
  const titleHook = titleHooks[index % titleHooks.length];
  const slug = `${slugify(roleDefinition.role)}-${city.slug}`;

  return {
    slug,
    role: roleDefinition.role,
    rolePageUrl: roleDefinition.rolePageUrl,
    location: city.name,
    marketPageUrl: city.marketPageUrl,
    title: `${roleDefinition.role} Salary in ${city.name}: ${titleHook}`,
    description: `A structured salary guide for ${roleDefinition.role.toLowerCase()} roles in ${city.name}, covering pay bands, experience levels, leverage drivers, and how stronger candidates negotiate above the midpoint.`,
    publishDate,
    publishDateISO,
    updatedDateISO: publishDateISO,
    readTime: "8 min read",
    featuredImage: roleDefinition.featuredImage,
    imageAlt: "Professional coaching and career strategy imagery.",
    featured: false,
    categories: roleDefinition.categories,
    salaryBand: buildSalaryBand(cityMedian),
    experienceBands: buildExperienceBands(
      roleDefinition.role,
      city.name,
      cityMedian,
      roleDefinition.leverageTheme,
      roleDefinition.negotiationTheme
    ),
    salaryDrivers: roleDefinition.drivers,
    marketSignals: buildMarketSignals(roleDefinition.role, city, roleDefinition.leverageTheme),
    costContext: city.packageContext,
    faq: [
      {
        q: `What is a strong ${roleDefinition.role.toLowerCase()} salary in ${city.name}?`,
        a: `The strongest packages usually show up when the role owns meaningful scope, not only a better title. For ${roleDefinition.role.toLowerCase()} roles in ${city.name}, the candidate who can prove business leverage usually negotiates above the midpoint faster.`
      },
      {
        q: `What pushes ${roleDefinition.role.toLowerCase()} pay higher in ${city.name}?`,
        a: `Pay usually moves faster when you can show ${roleDefinition.leverageTheme}. That is what separates mid-band offers from top-band offers in most competitive U.S. markets.`
      },
      {
        q: `How should ${roleDefinition.role.toLowerCase()} candidates negotiate in ${city.name}?`,
        a: `Start with level and scope before debating salary alone. The strongest negotiation case is usually that ${roleDefinition.negotiationTheme}, which supports a stronger package than a title-only benchmark suggests.`
      }
    ]
  };
});
