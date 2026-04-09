const publishDate = "April 9, 2026";
const publishDateISO = "2026-04-09";

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
    benchmarkOccupation: "Software developers",
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
    benchmarkOccupation: "Software developers",
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
    benchmarkOccupation: "Software developers",
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
    benchmarkOccupation: "Software developers",
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
    benchmarkOccupation: "Software developers / platform-oriented infrastructure roles",
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
    benchmarkOccupation: "Software developers / site reliability and platform operations roles",
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
    benchmarkOccupation: "Software developers / platform engineering roles",
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
    benchmarkOccupation: "Network and computer systems administrators / cloud engineering roles",
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
    benchmarkOccupation: "Data scientists / database architects / data engineering roles",
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
    benchmarkOccupation: "Data scientists",
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
    benchmarkOccupation: "Data scientists / business intelligence and analytics engineering roles",
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
    benchmarkOccupation: "Computer and information research scientists / machine learning engineering roles",
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
    benchmarkOccupation: "Computer and information research scientists / applied AI engineering roles",
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
    benchmarkOccupation: "Information security analysts",
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
    benchmarkOccupation: "Software quality assurance analysts and testers",
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
    benchmarkOccupation: "Computer systems analysts / solutions architecture roles",
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
    benchmarkOccupation: "Project management specialists / product management roles",
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
    benchmarkOccupation: "Project management specialists / technical product management roles",
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
    benchmarkOccupation: "Project management specialists / product operations roles",
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
    benchmarkOccupation: "Web and digital interface designers / product design roles",
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
    benchmarkOccupation: "Computer and information systems managers",
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
    benchmarkOccupation: "Sales engineers",
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
    benchmarkOccupation: "Customer success / account management roles",
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
    benchmarkOccupation: "Marketing managers",
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
    benchmarkOccupation: "Financial managers",
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
    benchmarkOccupation: "Financial analysts",
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
    benchmarkOccupation: "General and operations managers",
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
    benchmarkOccupation: "Management analysts",
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
    benchmarkOccupation: "Logisticians / supply chain management roles",
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
    benchmarkOccupation: "Human resources managers",
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

const sourceReferences = [
  {
    label: "BLS overview of wage data by area and occupation",
    url: "https://www.bls.gov/bls/blswage.htm"
  },
  {
    label: "BLS current metropolitan area occupational wage tables",
    url: "https://www.bls.gov/oes/current/oessrcma.htm"
  },
  {
    label: "BLS OEWS data query system",
    url: "https://data.bls.gov/oes/"
  },
  {
    label: "Levels.fyi compensation benchmarks",
    url: "https://www.levels.fyi/"
  },
  {
    label: "Salary.com salary research",
    url: "https://www.salary.com/"
  }
];

const benchmarkEvidenceBySlug = {
  "software-engineer-new-york-city": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 New York, NY software engineer page shows a base-salary midpoint of $161,157, with a published range from $89,328 to $232,974.",
      points: [
        "Source page: Software Engineer salary in New York, NY",
        "Published range: $89,328 to $232,974",
        "Reported base-salary midpoint: $161,157"
      ],
      sourceLabel: "Salary.com: Software Engineer Salary in New York, NY",
      sourceUrl: "https://www.salary.com/research/salary/general/software-engineer-salary/new-york-ny",
      sourceDate: "March 01, 2026"
    }
  },
  "frontend-engineer-seattle": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Seattle, WA frontend developer page shows an average salary of $121,150, with a 25th-75th percentile range of $112,447 to $132,120.",
      points: [
        "Closest public title used: Frontend Developer",
        "Average salary: $121,150",
        "25th-75th percentile range: $112,447 to $132,120"
      ],
      sourceLabel: "Salary.com: Frontend Developer Salary in Seattle, WA",
      sourceUrl: "https://www.salary.com/research/salary/offering/frontend-developer-salary/seattle-wa",
      sourceDate: "March 01, 2026"
    }
  },
  "devops-engineer-chicago": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's February 1, 2026 Chicago, IL DevOps Engineer page reports a median around $106,650, with the 25th-75th percentile range at $93,386 to $121,868.",
      points: [
        "Reported median salary: $106,650",
        "25th-75th percentile range: $93,386 to $121,868",
        "Experience and specialization are listed as major drivers"
      ],
      sourceLabel: "Salary.com: DevOps Engineer Salary in Chicago, IL",
      sourceUrl: "https://www.salary.com/research/salary/standard/devops-engineer-salary/chicago-il",
      sourceDate: "February 01, 2026"
    }
  },
  "cloud-engineer-houston": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Houston, TX Cloud Engineer page reports an average salary of $107,058, with a 25th-75th percentile range of $96,422 to $117,121.",
      points: [
        "Average salary: $107,058",
        "25th-75th percentile range: $96,422 to $117,121",
        "Top earners on the page are listed at $126,283"
      ],
      sourceLabel: "Salary.com: Cloud Engineer Salary in Houston, TX",
      sourceUrl: "https://www.salary.com/research/salary/listing/cloud-engineer-salary/houston-tx",
      sourceDate: "March 01, 2026"
    }
  },
  "backend-engineer-san-francisco-bay-area": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's January 1, 2026 San Francisco, CA backend software engineer page shows an average salary of $160,185, with a 25th-75th percentile range of $147,706 to $174,102.",
      points: [
        "Closest public title used: Backend Software Engineer",
        "Average salary: $160,185",
        "25th-75th percentile range: $147,706 to $174,102"
      ],
      sourceLabel: "Salary.com: Backend Software Engineer Salary in San Francisco, CA",
      sourceUrl: "https://www.salary.com/research/salary/listing/backend-software-engineer-salary/san-francisco-ca",
      sourceDate: "January 01, 2026"
    }
  },
  "full-stack-engineer-austin": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Austin, TX full stack software engineer page shows an average salary of $128,238, with a 25th-75th percentile range of $118,190 to $139,281.",
      points: [
        "Closest public title used: Full Stack Software Engineer",
        "Average salary: $128,238",
        "25th-75th percentile range: $118,190 to $139,281"
      ],
      sourceLabel: "Salary.com: Full Stack Software Engineer Salary in Austin, TX",
      sourceUrl: "https://www.salary.com/research/salary/listing/full-stack-software-engineer-salary/austin-tx",
      sourceDate: "March 01, 2026"
    }
  },
  "site-reliability-engineer-boston": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "The closest current public benchmark I found is Salary.com's March 1, 2026 Reliability Engineer V page for Boston, MA, which reports an average salary of $180,331 and a 25th-75th percentile range of $172,367 to $189,162.",
      points: [
        "Closest public title used: Reliability Engineer V",
        "Average salary: $180,331",
        "25th-75th percentile range: $172,367 to $189,162"
      ],
      sourceLabel: "Salary.com: Reliability Engineer V Salary in Boston, MA",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/reliability-engineer-v-salary/boston-ma",
      sourceDate: "March 01, 2026"
    }
  },
  "product-manager-san-francisco-bay-area": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 San Francisco, CA product manager page lists an average salary of $193,224 and shows title-specific benchmarks from Product Manager I through Product Manager VI.",
      points: [
        "Average product manager salary: $193,224",
        "Product Manager III listed at $167,609",
        "Product Management Manager listed at $198,167"
      ],
      sourceLabel: "Salary.com: Product Manager Salaries in San Francisco, CA",
      sourceUrl: "https://www1.salary.com/CA/San-Francisco/Product-Manager-Salary.html",
      sourceDate: "March 01, 2026"
    }
  },
  "engineering-manager-boston": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "The closest current public benchmark I found is Salary.com's March 1, 2026 Software Systems Engineering Manager page for Boston, MA, which reports an average salary of $168,256 and a 25th-75th percentile range of $156,826 to $183,738.",
      points: [
        "Closest public title used: Software Systems Engineering Manager",
        "Average salary: $168,256",
        "25th-75th percentile range: $156,826 to $183,738"
      ],
      sourceLabel: "Salary.com: Software Systems Engineering Manager Salary in Boston, MA",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/software-systems-engineering-manager-salary/boston-ma",
      sourceDate: "March 01, 2026"
    }
  },
  "data-engineer-atlanta": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's April 1, 2026 Atlanta, GA data engineer page shows an average salary of $120,490, with a 25th-75th percentile range of $111,407 to $131,761.",
      points: [
        "Average salary: $120,490",
        "25th-75th percentile range: $111,407 to $131,761",
        "90th percentile listed at $142,023"
      ],
      sourceLabel: "Salary.com: Data Engineer Salary in Atlanta, GA",
      sourceUrl: "https://www.salary.com/research/salary/listing/data-engineer-salary/atlanta-ga",
      sourceDate: "April 01, 2026"
    }
  },
  "data-scientist-miami": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's December 1, 2025 Miami, FL data scientist page reports a median salary of $93,694, with an average range from $83,656 to $103,410.",
      points: [
        "Reported median salary: $93,694",
        "25th-75th percentile range: $83,656 to $103,410",
        "The page labels this figure as a median based on Global Salary IQ data"
      ],
      sourceLabel: "Salary.com: Data Scientist Salary in Miami, FL",
      sourceUrl: "https://www.salary.com/research/salary/standard/data-scientist-salary/miami-fl",
      sourceDate: "December 01, 2025"
    }
  },
  "ai-engineer-denver": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "The closest current public benchmark I found is Salary.com's March 1, 2026 AI Engineer V page for Denver, CO, which reports an average salary of $179,633 and a 25th-75th percentile range of $164,187 to $189,666.",
      points: [
        "Closest public title used: AI Engineer V",
        "Average salary: $179,633",
        "25th-75th percentile range: $164,187 to $189,666"
      ],
      sourceLabel: "Salary.com: AI Engineer V Salary in Denver, CO",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/ai-engineer-v-salary/denver-co",
      sourceDate: "March 01, 2026"
    }
  },
  "qa-engineer-phoenix": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's December 1, 2025 Phoenix, AZ QA engineer page reports a median salary of $87,470, with an average range from $80,712 to $94,939.",
      points: [
        "Reported median salary: $87,470",
        "25th-75th percentile range: $80,712 to $94,939",
        "Expert-level QA engineer salary on the page is listed at $91,372"
      ],
      sourceLabel: "Salary.com: QA Engineer Salary in Phoenix, AZ",
      sourceUrl: "https://www.salary.com/research/salary/standard/qa-engineer-salary/phoenix-az",
      sourceDate: "December 01, 2025"
    }
  },
  "solutions-architect-new-york-city": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's December 1, 2025 New York solution architect page reports a statewide average salary of $137,068, and its city breakout lists New York, NY at $149,419.",
      points: [
        "Closest public title used: Solution Architect",
        "New York state average on the page: $137,068",
        "New York, NY city value listed on the page: $149,419"
      ],
      sourceLabel: "Salary.com: Solution Architect Salary in New York",
      sourceUrl: "https://www.salary.com/research/salary/listing/solution-architect-salary/ny",
      sourceDate: "December 01, 2025"
    }
  },
  "technical-product-manager-seattle": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Seattle, WA technical product manager page shows an average salary of $142,929, with a 25th-75th percentile range of $133,194 to $156,343.",
      points: [
        "Average salary: $142,929",
        "25th-75th percentile range: $133,194 to $156,343",
        "90th percentile listed at $168,555"
      ],
      sourceLabel: "Salary.com: Technical Product Manager Salary in Seattle, WA",
      sourceUrl: "https://www.salary.com/research/salary/posting/technical-product-manager-salary/seattle-wa",
      sourceDate: "March 01, 2026"
    }
  },
  "product-designer-chicago": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Chicago, IL product designer page shows an average salary of $116,089, with a 25th-75th percentile range of $106,997 to $129,161.",
      points: [
        "Average salary: $116,089",
        "25th-75th percentile range: $106,997 to $129,161",
        "90th percentile listed at $141,061"
      ],
      sourceLabel: "Salary.com: Product Designer Salary in Chicago, IL",
      sourceUrl: "https://www.salary.com/research/salary/listing/product-designer-salary/chicago-il",
      sourceDate: "March 01, 2026"
    }
  },
  "sales-engineer-dallas-fort-worth": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Dallas, TX sales engineer page reports an average salary of $99,228, with a 25th-75th percentile range of $88,805 to $111,575.",
      points: [
        "Average salary: $99,228",
        "25th-75th percentile range: $88,805 to $111,575",
        "The page frames this figure as the median in its narrative copy"
      ],
      sourceLabel: "Salary.com: Sales Engineer Salary in Dallas, TX",
      sourceUrl: "https://www.salary.com/research/salary/standard/sales-engineer-salary/dallas-tx",
      sourceDate: "March 01, 2026"
    }
  },
  "finance-manager-miami": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Miami, FL finance manager page shows an average salary of $125,260, with a 25th-75th percentile range of $114,028 to $133,489.",
      points: [
        "Average salary: $125,260",
        "25th-75th percentile range: $114,028 to $133,489",
        "90th percentile listed at $140,980"
      ],
      sourceLabel: "Salary.com: Finance Manager Salary in Miami, FL",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/finanace-manager-salary/miami-fl",
      sourceDate: "March 01, 2026"
    }
  },
  "customer-success-manager-houston": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Houston, TX customer success manager page shows an average salary of $113,844, with a 25th-75th percentile range of $99,826 to $129,806.",
      points: [
        "Average salary: $113,844",
        "25th-75th percentile range: $99,826 to $129,806",
        "90th percentile listed at $144,339"
      ],
      sourceLabel: "Salary.com: Customer Success Manager Salary in Houston, TX",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/customer-success-manager-salary/houston-tx",
      sourceDate: "March 01, 2026"
    }
  },
  "marketing-manager-atlanta": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "The closest current public benchmark I found is Salary.com's April 1, 2026 Marketing Manager B2B page for Atlanta, GA, which reports an average salary of $122,992 and a 25th-75th percentile range of $111,404 to $134,252.",
      points: [
        "Closest public title used: Marketing Manager B2B",
        "Average salary: $122,992",
        "25th-75th percentile range: $111,404 to $134,252"
      ],
      sourceLabel: "Salary.com: Marketing Manager B2B Salary in Atlanta, GA",
      sourceUrl: "https://www.salary.com/research/salary/listing/marketing-manager-b2b-salary/atlanta-ga",
      sourceDate: "April 01, 2026"
    }
  },
  "operations-manager-washington-dc": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 Washington, DC operations manager page shows an average salary of $118,099, with a 25th-75th percentile range of $104,111 to $132,786.",
      points: [
        "Average salary: $118,099",
        "25th-75th percentile range: $104,111 to $132,786",
        "90th percentile listed at $146,158"
      ],
      sourceLabel: "Salary.com: Operations Manager Salary in Washington, DC",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/operations-manager-salary/washington-dc",
      sourceDate: "March 01, 2026"
    }
  },
  "supply-chain-manager-san-diego": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "Salary.com's March 1, 2026 San Diego, CA supply chain manager page shows an average salary of $140,966, with a 25th-75th percentile range of $126,390 to $154,624.",
      points: [
        "Average salary: $140,966",
        "25th-75th percentile range: $126,390 to $154,624",
        "90th percentile listed at $167,059"
      ],
      sourceLabel: "Salary.com: Supply Chain Manager Salary in San Diego, CA",
      sourceUrl: "https://www.salary.com/research/salary/benchmark/supply-chain-manager-salary/san-diego-ca",
      sourceDate: "March 01, 2026"
    }
  },
  "people-operations-manager-phoenix": {
    benchmarkEvidence: {
      title: "Current public benchmark snapshot",
      summary:
        "The closest current public benchmark I found is Salary.com's March 1, 2026 Senior People Operations Manager page for Phoenix, AZ, which reports an average salary of $139,188 and a 25th-75th percentile range of $124,579 to $150,211.",
      points: [
        "Closest public title used: Senior People Operations Manager",
        "Average salary: $139,188",
        "25th-75th percentile range: $124,579 to $150,211"
      ],
      sourceLabel: "Salary.com: Senior People Operations Manager Salary in Phoenix, AZ",
      sourceUrl: "https://www.salary.com/research/salary/posting/senior-people-operations-manager-salary/phoenix-az",
      sourceDate: "March 01, 2026"
    }
  }
};

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
    benchmarkOccupation: roleDefinition.benchmarkOccupation,
    quickAnswer: `${roleDefinition.role} salaries in ${city.name} usually move fastest when the role owns more leverage than the title alone suggests.`,
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
    methodology: {
      summary:
        `This guide is a directional planning range, not a guaranteed market quote. Askia models the range from role baseline, city premium, scope expectations, and public wage benchmarks, then uses ${roleDefinition.benchmarkOccupation.toLowerCase()} as the closest public benchmark family when official datasets do not map perfectly to employer-specific titles.`,
      notes: [
        "Lower band usually reflects narrower execution scope, earlier tenure, or less business-critical ownership.",
        "Midpoint usually reflects fully credible market-fit candidates who meet expectations for the title and location.",
        "Upper band usually requires stronger scope, clearer business leverage, and a package that may include bonus, equity, or signing components."
      ]
    },
    sourceReferences,
    ...(benchmarkEvidenceBySlug[slug] || {}),
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
      },
      {
        q: `Where do these ${roleDefinition.role.toLowerCase()} salary estimates for ${city.name} come from?`,
        a: `These pages use Askia planning ranges triangulated against public wage datasets, current metropolitan wage tables, and live compensation research sources. The benchmark family for this page is ${roleDefinition.benchmarkOccupation.toLowerCase()}.`
      }
    ]
  };
});
