const publishDate = "April 8, 2026";
const publishDateISO = "2026-04-08";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const roleDefinitions = [
  {
    role: "Software Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    topic: "Software Engineer Interview Questions",
    title: "Software Engineer Interview Questions: What Strong Candidates Prepare For",
    description:
      "A structured software engineering interview guide covering common technical and behavioral prompts, stronger answer framing, and the mistakes that flatten seniority signal.",
    featuredImage: "/assets/blog/technical-screen.jpg",
    categories: ["Interview Intelligence", "Software Careers"],
    intro:
      "Software engineering interviews usually fail when candidates explain implementation detail without showing judgment. Strong answers make tradeoffs, constraints, and outcome quality visible.",
    basics: [
      ["How would you design and ship a feature with incomplete requirements?", "The strongest answers show how you clarify scope, reduce ambiguity, and protect delivery quality instead of jumping straight into code."],
      ["What makes code maintainable over time?", "Interviewers want to hear how you balance readability, extensibility, testing, and the cost of over-engineering."],
      ["How do you debug a production issue that is not reproducible locally?", "Better answers show ordered thinking around logs, telemetry, rollback risk, and narrowing the search space."],
    ],
    advanced: [
      ["Tell me about a technical tradeoff you defended under pressure.", "Good answers make the constraints explicit, explain the chosen path, and show the real consequence of the decision."],
      ["How do you decide when to refactor versus ship?", "Senior candidates explain timing, risk, and how the decision affects future velocity rather than treating refactoring as always good or always bad."],
      ["How do you influence design quality when several engineers disagree?", "This is usually a question about reasoning quality, not only consensus style."],
    ],
    mistakes: [
      "Answering with frameworks or languages instead of decision logic",
      "Skipping constraints that shaped the choice",
      "Treating system quality as separate from delivery speed",
      "Using examples with no measurable outcome or lesson",
    ],
  },
  {
    role: "Backend Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    topic: "Backend Engineer Interview Questions",
    title: "Backend Engineer Interview Questions: How to Answer with Systems Judgment",
    description:
      "A backend engineering interview guide covering service design, performance, reliability, and the answer patterns that usually separate stronger candidates.",
    featuredImage: "/assets/blog/system-design-story.jpg",
    categories: ["Interview Intelligence", "Software Careers"],
    intro:
      "Backend interviews usually test whether you understand service behavior under load, dependency risk, and system tradeoffs, not only APIs and database syntax.",
    basics: [
      ["How do you design a reliable API for internal and external consumers?", "A strong answer covers contract clarity, versioning, observability, and how you reduce downstream surprises."],
      ["When would you denormalize data?", "Interviewers want tradeoff reasoning around performance, consistency, and operational cost."],
      ["How do you investigate latency growth in a service?", "Better answers move through traffic patterns, dependencies, resource contention, and measurement before proposing fixes."],
    ],
    advanced: [
      ["How would you scale a backend that becomes a shared dependency across teams?", "Senior answers show architectural thinking, failure-mode awareness, and organizational impact together."],
      ["What makes a backend design resilient rather than just functional?", "Good answers connect retries, idempotency, observability, and degradation strategy to actual service behavior."],
      ["Tell me about a time you improved a backend system without rewriting everything.", "The strongest examples show sequencing, risk control, and real impact."],
    ],
    mistakes: [
      "Talking about databases and queues with no system-level tradeoff",
      "Ignoring dependency risk and operational complexity",
      "Treating scale as only a throughput problem",
      "Using architecture language with no implementation consequence",
    ],
  },
  {
    role: "Frontend Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    topic: "Frontend Engineer Interview Questions",
    title: "Frontend Engineer Interview Questions: What High-Signal Answers Usually Include",
    description:
      "A frontend interview guide covering UI architecture, performance, usability, and the answer patterns that make candidates sound more senior.",
    featuredImage: "/assets/blog/linkedin-headline-formula.jpg",
    categories: ["Interview Intelligence", "Software Careers"],
    intro:
      "Frontend interviews are rarely only about components. Strong candidates connect implementation choices to usability, performance, and product quality.",
    basics: [
      ["How do you think about state management in a growing application?", "The best answers show restraint, clarity, and how state decisions affect maintainability over time."],
      ["What causes frontends to feel slow even when they technically load?", "Interviewers want performance thinking tied to user perception, rendering cost, and interaction quality."],
      ["How do you work with designers when implementation constraints appear late?", "Good answers show collaboration and practical tradeoffs instead of blame-shifting."],
    ],
    advanced: [
      ["How would you improve a frontend codebase with rising delivery friction?", "Senior answers show system-level thinking around architecture, tooling, and team workflow."],
      ["Tell me about a design or UI decision that improved product outcomes.", "Strong answers tie frontend work to conversion, retention, or usability signal."],
      ["How do you balance accessibility with speed and product pressure?", "Good answers make the tradeoff visible instead of treating accessibility as optional or absolute."],
    ],
    mistakes: [
      "Talking about frameworks without explaining product or user impact",
      "Ignoring accessibility and performance until the end of the answer",
      "Treating design collaboration like handoff work only",
      "Using aesthetic language without business or usability consequence",
    ],
  },
  {
    role: "Full Stack Engineer",
    rolePageUrl: "/software-engineer-career-coaching/",
    topic: "Full Stack Engineer Interview Questions",
    title: "Full Stack Engineer Interview Questions: How to Sound Broader Without Sounding Shallow",
    description:
      "A full stack interview guide covering cross-layer questions, answer structure, and the mistakes that make versatile candidates sound unfocused.",
    featuredImage: "/assets/blog/offer-comparison.jpg",
    categories: ["Interview Intelligence", "Software Careers"],
    intro:
      "Full stack interviews usually test whether you can make good decisions across product, frontend, backend, and delivery constraints without becoming superficial in each layer.",
    basics: [
      ["How do you decide where a problem should be solved in the stack?", "A strong answer explains user impact, architectural fit, and long-term maintenance cost."],
      ["What changes when a feature touches several services and the UI?", "Interviewers want to hear coordination, sequencing, and risk awareness across layers."],
      ["How do you keep velocity when context switching between frontend and backend work?", "Better answers show systems for reducing handoff friction and keeping quality stable."],
    ],
    advanced: [
      ["Tell me about a cross-stack project you led from ambiguity to launch.", "The best answers show prioritization, architecture, collaboration, and measurable results."],
      ["How do you avoid becoming a bottleneck as a broad engineer?", "Senior answers focus on leverage, documentation, and better system boundaries."],
      ["When should a full stack engineer specialize instead of covering the gap?", "Good answers make the tradeoff between flexibility and depth explicit."],
    ],
    mistakes: [
      "Sounding generalist without showing depth anywhere",
      "Treating breadth like doing more tickets",
      "Skipping sequencing and dependency management",
      "Using examples where impact is vague across the stack",
    ],
  },
  {
    role: "DevOps Engineer",
    rolePageUrl: "/devops-career-coaching/",
    topic: "DevOps Engineer Interview Questions",
    title: "DevOps Engineer Interview Questions: What Strong Candidates Prepare For",
    description:
      "A structured DevOps interview guide with common question patterns, sample answer framing, and the mistakes that usually weaken senior-candidate signal.",
    featuredImage: "/assets/blog/technical-screen.jpg",
    categories: ["Interview Intelligence", "Tech Infrastructure"],
    intro:
      "Strong DevOps interviews rarely fail on tools alone. They usually break when the candidate cannot explain tradeoffs, delivery reliability, and platform impact clearly enough.",
    basics: [
      ["How would you describe a mature CI/CD pipeline?", "A strong answer covers speed, rollback safety, test reliability, change visibility, and how the pipeline reduces risk instead of only automating steps."],
      ["What is the difference between configuration management and infrastructure as code?", "Interviewers want conceptual clarity and practical examples, not just naming Terraform and Ansible."],
      ["How do you decide what should be automated first?", "The best answers focus on repetitive friction, reliability gains, and the highest leverage across teams."],
    ],
    advanced: [
      ["Tell me about a time you reduced deployment risk without slowing delivery.", "Good answers show a real tradeoff between speed and safety, the change you made, and how you measured the result."],
      ["How would you improve an on-call environment with high alert fatigue?", "Interviewers are looking for signal quality, operational trust, and a plan that improves response without creating blind spots."],
      ["How do you think about platform standards across multiple product teams?", "Senior answers show judgment around consistency, local team autonomy, and the cost of over-centralization."],
    ],
    mistakes: [
      "Talking in tool lists instead of decision logic",
      "Skipping the tradeoff behind architecture or operational choices",
      "Answering like an administrator when the role expects systems judgment",
      "Using incident stories with no measurable result or lesson",
    ],
  },
  {
    role: "Site Reliability Engineer",
    rolePageUrl: "/devops-career-coaching/",
    topic: "Site Reliability Engineer Interview Questions",
    title: "Site Reliability Engineer Interview Questions: What Reliability-Focused Interviewers Want",
    description:
      "A practical SRE interview guide covering core question types, better answer structures, and the mistakes that make reliability experience sound shallower than it is.",
    featuredImage: "/assets/blog/interview-storytelling-framework.jpg",
    categories: ["Interview Intelligence", "Tech Infrastructure"],
    intro:
      "SRE interviews usually test whether you can reason about failure, reliability economics, and production risk without sounding reactive or tool-bound.",
    basics: [
      ["What makes an SLO useful instead of decorative?", "The strongest answers connect SLOs to user impact, team behavior, and real operational tradeoffs."],
      ["How do you think about on-call quality?", "Interviewers want to hear signal quality, ownership clarity, and how on-call loops drive better systems instead of just more endurance."],
      ["How do you approach incident reviews?", "Good answers show learning quality, recurrence reduction, and systems thinking rather than blame allocation."],
    ],
    advanced: [
      ["How would you reduce recurring incidents without freezing delivery?", "Senior answers show prioritization, risk framing, and practical sequencing."],
      ["What failure mode would worry you most in a shared service?", "The best candidates identify the highest-risk mode and explain why it matters most."],
      ["Tell me about a reliability investment that changed team behavior.", "Strong answers show how your work altered engineering decisions, not only dashboards."],
    ],
    mistakes: [
      "Answering as if SRE is only on-call support",
      "Using reliability language without failure-mode reasoning",
      "Ignoring cost or velocity implications of reliability decisions",
      "Treating postmortems as documentation instead of change mechanisms",
    ],
  },
  {
    role: "Platform Engineer",
    rolePageUrl: "/devops-career-coaching/",
    topic: "Platform Engineer Interview Questions",
    title: "Platform Engineer Interview Questions: What Strong Answers Usually Include",
    description:
      "A practical platform engineering interview guide covering common question patterns, higher-signal answer framing, and the tradeoffs that usually separate senior candidates.",
    featuredImage: "/assets/blog/portfolio-structure.jpg",
    categories: ["Interview Intelligence", "Tech Infrastructure"],
    intro:
      "Platform engineering interviews usually test whether you can improve engineering systems at scale, not just whether you can operate infrastructure competently.",
    basics: [
      ["What problem should an internal platform solve first?", "The strongest answers focus on repeated friction across teams and developer leverage, not platform novelty."],
      ["How do you decide what belongs in the paved road?", "Interviewers usually want tradeoff thinking around consistency, local autonomy, and operational cost."],
      ["How would you measure platform success?", "Good answers connect platform work to developer speed, reliability, and reduced cognitive load."],
    ],
    advanced: [
      ["How do you prevent platform teams from becoming ticket factories?", "Senior answers show product thinking, service boundaries, and platform adoption strategy."],
      ["Tell me about a platform decision that improved delivery across multiple teams.", "The strongest stories show leverage, tradeoffs, and a measurable team-wide result."],
      ["How would you handle disagreement between product teams and a platform standard?", "This is usually a question about influence, not only architecture."],
    ],
    mistakes: [
      "Talking about infrastructure components without the developer or business outcome",
      "Treating platform work like centralized operations support",
      "Ignoring adoption, trust, and usability in platform design answers",
      "Using technical detail with no systems-level tradeoff",
    ],
  },
  {
    role: "Cloud Engineer",
    rolePageUrl: "/devops-career-coaching/",
    topic: "Cloud Engineer Interview Questions",
    title: "Cloud Engineer Interview Questions: How to Answer Beyond the Tooling Layer",
    description:
      "A cloud engineering interview guide covering common technical and scenario-based questions, with stronger answer framing and the mistakes that usually weaken seniority signal.",
    featuredImage: "/assets/blog/offer-range.jpg",
    categories: ["Interview Intelligence", "Tech Infrastructure"],
    intro:
      "Cloud interviews rarely fail because the candidate has never touched AWS, Azure, or GCP. They fail when the candidate cannot explain architecture choices, migration logic, or cost-risk tradeoffs clearly enough.",
    basics: [
      ["How do you choose managed services versus self-managed infrastructure?", "The best answers focus on operational burden, control, speed, and business risk."],
      ["What is the first thing you review in a cloud architecture?", "Good answers often start with reliability, security, and the system's real constraints before specific services."],
      ["How do you think about cloud cost in engineering decisions?", "Interviewers want cost awareness embedded in architecture, not tacked on afterward."],
    ],
    advanced: [
      ["Tell me about a cloud migration you would de-risk before execution.", "Strong answers show sequencing, rollback thinking, observability, and stakeholder alignment."],
      ["How would you troubleshoot recurring performance issues in a cloud-native system?", "The best answers move through traffic behavior, dependencies, resource patterns, and measurement before jumping to fixes."],
      ["How do you balance security controls with developer speed?", "Senior answers make the tradeoff explicit instead of pretending there is no tension."],
    ],
    mistakes: [
      "Naming cloud services without explaining why they fit the system",
      "Skipping cost and operational burden in architecture answers",
      "Treating migration questions like simple lift-and-shift exercises",
      "Using security language with no implementation or decision detail",
    ],
  },
  {
    role: "Data Engineer",
    rolePageUrl: "/data-career-coaching/",
    topic: "Data Engineer Interview Questions",
    title: "Data Engineer Interview Questions: What Strong Pipeline and Platform Answers Sound Like",
    description:
      "A data engineering interview guide covering pipelines, modeling, quality, and the answer structures that make candidates sound more senior.",
    featuredImage: "/assets/blog/resume-impact-bullets.jpg",
    categories: ["Interview Intelligence", "Data Careers"],
    intro:
      "Data engineering interviews usually test whether you can build reliable data systems under real business pressure, not only whether you know warehouses or orchestration tools.",
    basics: [
      ["How do you design a reliable pipeline?", "Strong answers cover data contracts, monitoring, recovery, and how downstream users experience failures."],
      ["What makes a data model useful instead of technically neat?", "Interviewers want business usability, metric trust, and long-term maintainability together."],
      ["How do you investigate bad data with unclear provenance?", "Better answers show a structured path through lineage, dependencies, freshness, and stakeholder impact."],
    ],
    advanced: [
      ["How would you reduce repeated data quality incidents?", "Senior answers show system design, ownership clarity, and better preventive controls."],
      ["Tell me about a data platform improvement that changed business decisions.", "The strongest stories connect engineering work to decision quality or execution speed."],
      ["How do you balance speed with trust in analytics systems?", "Good answers make the reliability-versus-velocity tradeoff explicit."],
    ],
    mistakes: [
      "Talking about tools instead of data trust and business use",
      "Ignoring downstream stakeholder impact",
      "Treating data quality as cleanup instead of system design",
      "Using pipeline examples with no consequence for the business",
    ],
  },
  {
    role: "Data Scientist",
    rolePageUrl: "/data-career-coaching/",
    topic: "Data Scientist Interview Questions",
    title: "Data Scientist Interview Questions: How to Answer Beyond the Analysis",
    description:
      "A data science interview guide covering experimentation, business framing, and the answer patterns that separate strong candidates from smart but fuzzy ones.",
    featuredImage: "/assets/blog/behavioral-signal.jpg",
    categories: ["Interview Intelligence", "Data Careers"],
    intro:
      "Data science interviews usually test whether your analysis changes decisions. Strong candidates make problem framing, assumptions, and decision consequences visible.",
    basics: [
      ["How do you choose a metric for an ambiguous business problem?", "Interviewers want to hear framing quality, tradeoffs, and how the metric drives action."],
      ["What makes an experiment trustworthy?", "A strong answer covers design quality, bias, sample concerns, and what would make the result unusable."],
      ["How do you explain uncertainty to non-technical stakeholders?", "Better answers show judgment and communication, not only statistical correctness."],
    ],
    advanced: [
      ["Tell me about a model or analysis that changed a product decision.", "The best answers show business context, reasoning quality, and what changed because of your work."],
      ["How do you push back when a requested analysis is misleading?", "Senior answers show judgment, stakeholder handling, and practical alternatives."],
      ["What matters more: model accuracy or adoption?", "Good answers explain the tradeoff instead of picking one in the abstract."],
    ],
    mistakes: [
      "Explaining methods without saying what decision they informed",
      "Treating business framing as separate from analytical rigor",
      "Using perfect-world language around experiments or models",
      "Skipping stakeholder influence in success stories",
    ],
  },
  {
    role: "Analytics Engineer",
    rolePageUrl: "/data-career-coaching/",
    topic: "Analytics Engineer Interview Questions",
    title: "Analytics Engineer Interview Questions: What Interviewers Want Beyond dbt Vocabulary",
    description:
      "An analytics engineering interview guide covering semantic modeling, metric trust, and the answer patterns that signal real business impact.",
    featuredImage: "/assets/blog/case-study-framework.jpg",
    categories: ["Interview Intelligence", "Data Careers"],
    intro:
      "Analytics engineering interviews usually test whether you can make data more trustworthy and useful for the business, not only whether you can write transformations.",
    basics: [
      ["How do you model data for long-term reporting trust?", "The best answers connect business definitions, warehouse structure, and stakeholder usability."],
      ["What makes a metric layer succeed or fail?", "Interviewers want to hear adoption, consistency, and how teams actually consume data."],
      ["How do you handle conflicting metric definitions across teams?", "Good answers show alignment work, business judgment, and implementation discipline."],
    ],
    advanced: [
      ["Tell me about a modeling decision that improved decision speed.", "Strong answers connect analytics engineering to real business execution."],
      ["How do you balance quick stakeholder asks with long-term data quality?", "Senior answers show prioritization and durable systems thinking."],
      ["What would you fix first in a low-trust BI environment?", "The strongest answers identify the highest-leverage trust problems, not just tooling upgrades."],
    ],
    mistakes: [
      "Talking about dbt or SQL with no business context",
      "Ignoring trust, semantics, and stakeholder adoption",
      "Treating analytics requests as tickets instead of decision support",
      "Using examples where downstream impact is unclear",
    ],
  },
  {
    role: "Machine Learning Engineer",
    rolePageUrl: "/ai-ml-career-coaching/",
    topic: "Machine Learning Engineer Interview Questions",
    title: "Machine Learning Engineer Interview Questions: How to Answer with Production Judgment",
    description:
      "An ML engineering interview guide covering model deployment, reliability, and the answer patterns that make candidates sound production-ready.",
    featuredImage: "/assets/blog/system-design-story.jpg",
    categories: ["Interview Intelligence", "AI / ML Careers"],
    intro:
      "Machine learning engineering interviews usually test whether you can move from experimentation to durable production systems without losing model value.",
    basics: [
      ["What changes when a model moves from experimentation to production?", "A strong answer covers monitoring, latency, data drift, failure handling, and business usage."],
      ["How do you choose between model complexity and operational simplicity?", "Interviewers want a real tradeoff discussion, not a generic accuracy answer."],
      ["How do you detect and respond to model degradation?", "Better answers show measurement quality, feedback loops, and operational ownership."],
    ],
    advanced: [
      ["Tell me about a production ML system you improved.", "Strong answers make tradeoffs, deployment constraints, and measurable outcomes visible."],
      ["How do you think about inference cost versus product value?", "Senior candidates explain economics and product usefulness together."],
      ["What makes ML infrastructure trustworthy for other teams?", "Good answers connect platform quality to model velocity and operational clarity."],
    ],
    mistakes: [
      "Talking about model metrics without deployment consequences",
      "Ignoring data quality and monitoring in production answers",
      "Treating ML engineering like pure experimentation",
      "Using research language where operational ownership is expected",
    ],
  },
  {
    role: "AI Engineer",
    rolePageUrl: "/ai-ml-career-coaching/",
    topic: "AI Engineer Interview Questions",
    title: "AI Engineer Interview Questions: What Strong Product and Workflow Answers Sound Like",
    description:
      "An AI engineering interview guide covering model integration, evaluation, and the answer patterns that show real product judgment.",
    featuredImage: "/assets/blog/why-top-tech-rejects.jpg",
    categories: ["Interview Intelligence", "AI / ML Careers"],
    intro:
      "AI engineering interviews usually test whether you can turn model capability into useful product or workflow outcomes without ignoring reliability, cost, or trust.",
    basics: [
      ["How do you evaluate whether an AI feature is actually useful?", "The best answers connect evaluation quality to user behavior, workflow fit, and product constraints."],
      ["What changes when you add an LLM to an existing workflow?", "Interviewers want system thinking, not only prompt tactics."],
      ["How do you manage hallucination or trust risk?", "Better answers show evaluation, guardrails, and where human judgment belongs."],
    ],
    advanced: [
      ["Tell me about an AI feature you would not ship.", "Strong answers show restraint, product judgment, and risk awareness."],
      ["How do you balance model quality, latency, and cost?", "Senior answers make the product tradeoff explicit rather than choosing one axis blindly."],
      ["How do you know whether an AI workflow deserves deeper platform investment?", "Good answers connect user value, reliability, and leverage at the system level."],
    ],
    mistakes: [
      "Answering with model names instead of workflow reasoning",
      "Ignoring trust, evaluation, or operational cost",
      "Treating prompts as the whole system",
      "Using hype language where product judgment is expected",
    ],
  },
  {
    role: "Cybersecurity Engineer",
    rolePageUrl: "/cybersecurity-career-coaching/",
    topic: "Cybersecurity Engineer Interview Questions",
    title: "Cybersecurity Engineer Interview Questions: How to Answer Beyond Controls and Checklists",
    description:
      "A cybersecurity interview guide covering risk, implementation, and the answer patterns that make candidates sound more strategic and credible.",
    featuredImage: "/assets/blog/risk-mitigation-story.jpg",
    categories: ["Interview Intelligence", "Security Careers"],
    intro:
      "Cybersecurity interviews usually test whether you can reduce real business risk without creating unworkable delivery friction.",
    basics: [
      ["How do you prioritize security work in a fast-moving environment?", "Strong answers connect risk severity, business context, and practical sequencing."],
      ["What makes a control effective instead of performative?", "Interviewers want impact, adoption, and real-world implementation quality."],
      ["How do you handle a known vulnerability with no clean fix?", "Better answers show risk framing, mitigation paths, and communication quality."],
    ],
    advanced: [
      ["Tell me about a security improvement that changed engineering behavior.", "The best answers show adoption and trust, not only policy changes."],
      ["How do you balance security with speed?", "Senior candidates explain where to automate, where to gate, and how to preserve trust."],
      ["What does a strong incident response answer include?", "Good answers connect containment, communication, learning, and system improvements."],
    ],
    mistakes: [
      "Answering with controls instead of business risk",
      "Treating security as separate from developer workflow",
      "Ignoring stakeholder trust and adoption",
      "Using policy language with no implementation detail",
    ],
  },
  {
    role: "QA Engineer",
    rolePageUrl: "/qa-career-coaching/",
    topic: "QA Engineer Interview Questions",
    title: "QA Engineer Interview Questions: What Strong Quality Answers Usually Include",
    description:
      "A QA interview guide covering quality strategy, automation, and the answer patterns that make candidates sound more than reactive testers.",
    featuredImage: "/assets/blog/technical-screen.jpg",
    categories: ["Interview Intelligence", "Quality Engineering"],
    intro:
      "QA interviews usually test whether you can improve release confidence and quality systems, not only whether you can find bugs after the fact.",
    basics: [
      ["How do you decide what should be automated first?", "The strongest answers focus on release risk, regression cost, and long-term leverage."],
      ["What makes a test strategy effective?", "Interviewers want to hear coverage logic, feedback speed, and where different test layers fit."],
      ["How do you work with engineers when quality is slipping?", "Good answers show influence and systems thinking, not only defect reporting."],
    ],
    advanced: [
      ["Tell me about a quality improvement that changed release behavior.", "Strong answers connect better testing or process work to measurable delivery outcomes."],
      ["How do you reduce flaky tests without slowing the team down?", "Senior answers make reliability, trust, and workflow impact visible."],
      ["How do you think about quality upstream?", "The best candidates explain prevention and better engineering behavior, not just more test cases."],
    ],
    mistakes: [
      "Treating QA as bug-finding only",
      "Answering with tool names instead of risk logic",
      "Ignoring developer trust in automation",
      "Using examples where quality impact is vague",
    ],
  },
  {
    role: "Solutions Architect",
    rolePageUrl: "/solutions-architect-career-coaching/",
    topic: "Solutions Architect Interview Questions",
    title: "Solutions Architect Interview Questions: How to Answer with Technical and Commercial Credibility",
    description:
      "A solutions architect interview guide covering customer architecture, tradeoffs, and the answer patterns that usually land better with mixed technical and business panels.",
    featuredImage: "/assets/blog/executive-brief.jpg",
    categories: ["Interview Intelligence", "Customer-Facing Tech"],
    intro:
      "Solutions architect interviews usually test whether you can make technical decisions feel credible to both customers and internal teams without hiding delivery risk.",
    basics: [
      ["How do you scope a solution when the customer need is still fuzzy?", "Strong answers show discovery quality, constraints, and how you reduce risk before overcommitting."],
      ["What makes a proposed architecture credible?", "Interviewers want technical fit, business alignment, and implementation realism together."],
      ["How do you handle a customer request that creates long-term product risk?", "Better answers show firmness, creativity, and trust-building."],
    ],
    advanced: [
      ["Tell me about a complex technical deal you helped move forward.", "Good answers connect technical reasoning to business momentum and delivery realism."],
      ["How do you balance customization against product integrity?", "Senior answers make the long-term tradeoff visible."],
      ["How do you align sales, engineering, and the customer under pressure?", "This is usually about multi-stakeholder judgment, not only architecture."],
    ],
    mistakes: [
      "Sounding purely technical with no commercial context",
      "Promising flexibility without delivery consequences",
      "Ignoring product constraints in customer answers",
      "Using architecture language with no customer outcome",
    ],
  },
  {
    role: "Product Manager",
    rolePageUrl: "/product-manager-career-coaching/",
    topic: "Product Manager Interview Questions",
    title: "Product Manager Interview Questions: What Strong Product Judgment Sounds Like",
    description:
      "A product manager interview guide covering prioritization, strategy, and the answer patterns that usually separate stronger PM candidates.",
    featuredImage: "/assets/blog/role-targeting.jpg",
    categories: ["Interview Intelligence", "Product Careers"],
    intro:
      "Product manager interviews usually test whether you can make clear decisions under ambiguity and move a team toward better outcomes, not only whether you know product frameworks.",
    basics: [
      ["How do you prioritize when everything looks important?", "The strongest answers show tradeoff clarity, not a memorized framework list."],
      ["What makes a product metric useful?", "Interviewers want business logic, user behavior, and decision usefulness together."],
      ["How do you work with engineering when timelines slip?", "Good answers show judgment, communication, and what you protect or cut."],
    ],
    advanced: [
      ["Tell me about a decision that improved product outcomes under pressure.", "Strong answers show reasoning quality, stakeholder alignment, and measurable consequences."],
      ["How do you handle stakeholder disagreement on roadmap direction?", "Senior candidates make tension visible and explain how they create clarity."],
      ["What would you do if the data and user feedback disagree?", "The best answers show nuance rather than loyalty to one source only."],
    ],
    mistakes: [
      "Answering with frameworks instead of real judgment",
      "Ignoring engineering or business constraints",
      "Talking about outputs instead of outcomes",
      "Using stories where the tradeoff is invisible",
    ],
  },
  {
    role: "Technical Product Manager",
    rolePageUrl: "/product-manager-career-coaching/",
    topic: "Technical Product Manager Interview Questions",
    title: "Technical Product Manager Interview Questions: How to Answer with Product and Systems Depth",
    description:
      "A technical PM interview guide covering roadmap tradeoffs, platform questions, and the answer patterns that make candidates sound truly cross-functional.",
    featuredImage: "/assets/blog/case-study-structure.jpg",
    categories: ["Interview Intelligence", "Product Careers"],
    intro:
      "Technical product manager interviews usually test whether you can align technical complexity with product value without drifting into either vague strategy or pure implementation detail.",
    basics: [
      ["How do you prioritize infrastructure or platform work against feature pressure?", "A strong answer makes business value, technical risk, and sequence quality visible."],
      ["What makes a technical roadmap credible?", "Interviewers want systems understanding and product clarity together."],
      ["How do you work with senior engineers when there is no obvious solution?", "Good answers show respect, structure, and sharper decision framing."],
    ],
    advanced: [
      ["Tell me about a technically complex initiative you drove successfully.", "Strong answers connect architecture, tradeoffs, and product outcomes."],
      ["How do you explain technical debt to leadership?", "Senior candidates translate engineering reality into business consequences cleanly."],
      ["How do you know when a platform investment is worth it?", "The best answers tie leverage, cost, and strategic timing together."],
    ],
    mistakes: [
      "Sounding like a general PM with shallow technical detail",
      "Sounding like an engineer with no product judgment",
      "Ignoring sequencing and dependency risk",
      "Using technical language without business consequence",
    ],
  },
  {
    role: "Product Operations Manager",
    rolePageUrl: "/product-ops-career-coaching/",
    topic: "Product Operations Manager Interview Questions",
    title: "Product Operations Manager Interview Questions: What Strong Operational Answers Usually Include",
    description:
      "A product ops interview guide covering process design, planning quality, and the answer patterns that make candidates sound more strategic and credible.",
    featuredImage: "/assets/blog/job-search-metrics.jpg",
    categories: ["Interview Intelligence", "Product Careers"],
    intro:
      "Product operations interviews usually test whether you can make product organizations run with more clarity and less drag, not only whether you can coordinate meetings.",
    basics: [
      ["What problem should product operations solve first?", "The strongest answers focus on leverage across planning, launches, or feedback loops rather than generic process improvement."],
      ["How do you improve planning quality across product teams?", "Interviewers want to hear how you build visibility and decision discipline."],
      ["How do you know an operational process is helping instead of slowing teams?", "Good answers tie process quality to execution outcomes."],
    ],
    advanced: [
      ["Tell me about an operating improvement that changed product execution.", "Strong answers connect system changes to better planning, delivery, or decision speed."],
      ["How do you handle resistance to operational change?", "Senior answers show influence and practical rollout thinking."],
      ["How do you balance standardization with team flexibility?", "The best answers make the tradeoff visible and deliberate."],
    ],
    mistakes: [
      "Describing coordination work with no leverage",
      "Treating process as success by itself",
      "Ignoring stakeholder adoption in operational changes",
      "Using stories with no effect on execution quality",
    ],
  },
  {
    role: "Product Designer",
    rolePageUrl: "/product-design-career-coaching/",
    topic: "Product Designer Interview Questions",
    title: "Product Designer Interview Questions: How to Answer with Stronger Product and UX Judgment",
    description:
      "A product design interview guide covering case-study questions, collaboration, and the answer patterns that make designers sound more strategic and more credible.",
    featuredImage: "/assets/blog/portfolio-structure.jpg",
    categories: ["Interview Intelligence", "Design Careers"],
    intro:
      "Product design interviews usually test whether your design choices improve product outcomes, not only whether your work looks polished in a portfolio.",
    basics: [
      ["How do you frame a design problem when the ask is vague?", "The strongest answers show user understanding, business constraints, and how you reduce ambiguity."],
      ["What makes a design solution strong?", "Interviewers want reasoning around user behavior, clarity, tradeoffs, and implementation reality."],
      ["How do you work with product and engineering under conflicting priorities?", "Good answers show judgment and collaboration rather than idealized process."],
    ],
    advanced: [
      ["Tell me about a design decision that changed product performance.", "Strong answers connect the work to real user or business outcomes."],
      ["How do you balance user research with execution speed?", "Senior candidates make the timing tradeoff visible instead of arguing for one side only."],
      ["What do you do when a design system blocks a product need?", "The best answers show systems thinking and practical compromise."],
    ],
    mistakes: [
      "Talking about visuals without product consequence",
      "Using process language with no decision quality",
      "Ignoring engineering reality in design answers",
      "Presenting portfolio stories with no stakes or tradeoffs",
    ],
  },
  {
    role: "Engineering Manager",
    rolePageUrl: "/engineering-manager-coaching/",
    topic: "Engineering Manager Behavioral Interview Questions",
    title: "Engineering Manager Behavioral Interview Questions: Stories That Actually Land",
    description:
      "A behavioral interview guide for engineering manager candidates covering common themes, stronger story framing, and what usually makes leadership answers fall flat.",
    featuredImage: "/assets/blog/manager-vs-staff.jpg",
    categories: ["Interview Intelligence", "Leadership Signal"],
    intro:
      "Engineering manager behavioral rounds usually fail when the candidate sounds operational but not leadership-calibrated. Good stories make decisions, tension, and people judgment visible.",
    basics: [
      ["Tell me about a time you handled low performance.", "The strongest answers show fairness, clarity, accountability, and the difference between support and avoidance."],
      ["How have you handled conflict between engineers or teams?", "Interviewers want structured conflict resolution, not vague positivity."],
      ["Describe a time you had to reprioritize a team under pressure.", "Good answers show tradeoff clarity, stakeholder management, and what you protected or cut."],
    ],
    advanced: [
      ["Tell me about a time you disagreed with leadership.", "The best answers show judgment, risk framing, and how you pushed back without becoming theatrical."],
      ["How have you grown someone on your team?", "Interviewers are looking for real coaching behavior, not only delegation or feedback slogans."],
      ["Tell me about a decision that improved team health and execution together.", "This is where good manager stories connect people systems to business outcomes."],
    ],
    mistakes: [
      "Answering with team output only and no leadership decision",
      "Using stories where the hard part is unclear",
      "Sounding like a project manager instead of a people leader",
      "Giving sanitized answers with no real tension or judgment",
    ],
  },
  {
    role: "Sales Engineer",
    rolePageUrl: "/sales-engineer-career-coaching/",
    topic: "Sales Engineer Interview Questions",
    title: "Sales Engineer Interview Questions: How to Answer with Technical and Revenue Judgment",
    description:
      "A sales engineering interview guide covering discovery, demos, and the answer patterns that make candidates sound more commercially credible.",
    featuredImage: "/assets/blog/offer-leverage.jpg",
    categories: ["Interview Intelligence", "Revenue Careers"],
    intro:
      "Sales engineer interviews usually test whether you can make technical credibility help revenue move faster without overpromising or losing delivery realism.",
    basics: [
      ["How do you run technical discovery well?", "Strong answers show how you uncover customer pain, constraints, and deal risk instead of simply collecting requirements."],
      ["What makes a demo effective?", "Interviewers want narrative clarity, commercial relevance, and technical honesty together."],
      ["How do you handle a customer question you cannot answer immediately?", "Better answers show trust-building and clean follow-through, not bluffing."],
    ],
    advanced: [
      ["Tell me about a deal you helped move forward through technical clarity.", "The best answers connect discovery quality to revenue motion and internal alignment."],
      ["How do you handle requests that the product should not support?", "Senior candidates show commercial skill without sacrificing credibility."],
      ["How do you balance win-rate pressure with solution integrity?", "Good answers make the tradeoff explicit instead of hiding it."],
    ],
    mistakes: [
      "Answering like pure support instead of technical sales",
      "Ignoring commercial stakes in customer examples",
      "Overpromising technical flexibility",
      "Talking features without tying them to deal movement",
    ],
  },
  {
    role: "Customer Success Manager",
    rolePageUrl: "/customer-success-career-coaching/",
    topic: "Customer Success Manager Interview Questions",
    title: "Customer Success Manager Interview Questions: What High-Signal Retention Answers Sound Like",
    description:
      "A customer success interview guide covering renewals, adoption, and the answer patterns that make candidates sound more strategic and credible.",
    featuredImage: "/assets/blog/follow-up-strategy.jpg",
    categories: ["Interview Intelligence", "Revenue Careers"],
    intro:
      "Customer success interviews usually test whether you can protect retention and expansion through clearer execution, not only whether you are friendly or responsive.",
    basics: [
      ["How do you handle a customer at risk of churn?", "Strong answers show diagnosis, stakeholder handling, and how you create a practical recovery plan."],
      ["What makes adoption work actually work?", "Interviewers want systems for value realization, not generic check-ins."],
      ["How do you prioritize accounts?", "Better answers connect risk, opportunity, and practical capacity management."],
    ],
    advanced: [
      ["Tell me about a time you turned around a difficult account.", "The strongest stories show clarity, trust repair, and measurable business outcome."],
      ["How do you handle tension between customer needs and internal limitations?", "Senior answers show judgment and credibility on both sides."],
      ["What makes a success plan useful?", "Good answers connect it to customer value and real execution, not template completion."],
    ],
    mistakes: [
      "Answering with relationship language only",
      "Ignoring retention or expansion impact",
      "Treating adoption as education instead of behavior change",
      "Using stories where account outcome is vague",
    ],
  },
  {
    role: "Marketing Manager",
    rolePageUrl: "/marketing-career-coaching/",
    topic: "Marketing Manager Interview Questions",
    title: "Marketing Manager Interview Questions: How to Answer with Growth and Execution Signal",
    description:
      "A marketing interview guide covering campaign strategy, measurement, and the answer patterns that make candidates sound more commercially grounded.",
    featuredImage: "/assets/blog/linkedin-optimization-engineers.jpg",
    categories: ["Interview Intelligence", "Growth Careers"],
    intro:
      "Marketing interviews usually test whether your work moves demand, pipeline, or customer behavior, not only whether you can run activities well.",
    basics: [
      ["How do you choose what to measure in a campaign?", "Strong answers connect metrics to channel behavior, business outcomes, and decision usefulness."],
      ["What makes messaging effective?", "Interviewers want customer insight, positioning clarity, and execution quality together."],
      ["How do you decide where to invest limited budget?", "Better answers show tradeoffs, learning loops, and business context."],
    ],
    advanced: [
      ["Tell me about a marketing decision that improved performance under pressure.", "The best answers make the change, reasoning, and business result visible."],
      ["How do you handle a channel that is producing volume but weak quality?", "Senior candidates explain optimization and strategic tradeoffs cleanly."],
      ["How do you work with sales when lead quality is disputed?", "Good answers show alignment, not defensiveness."],
    ],
    mistakes: [
      "Talking about activity volume instead of business effect",
      "Using metrics with no decision context",
      "Ignoring sales or customer feedback loops",
      "Presenting campaigns without explaining the tradeoff behind them",
    ],
  },
  {
    role: "Finance Manager",
    rolePageUrl: "/finance-fpa-career-coaching/",
    topic: "Finance Manager Interview Questions",
    title: "Finance Manager Interview Questions: How to Answer with Better Business Judgment",
    description:
      "A finance manager interview guide covering planning, executive communication, and the answer patterns that make candidates sound more strategic and reliable.",
    featuredImage: "/assets/blog/executive-presence.jpg",
    categories: ["Interview Intelligence", "Business & Finance"],
    intro:
      "Finance manager interviews usually test whether you can improve decision quality under uncertainty, not only whether you can produce accurate reporting.",
    basics: [
      ["How do you approach forecasting when the inputs are unstable?", "Strong answers show assumptions, scenario thinking, and how you keep leaders informed without pretending certainty."],
      ["What makes a business review useful?", "Interviewers want clearer decision framing, not only cleaner numbers."],
      ["How do you handle conflicting stakeholder expectations in planning?", "Better answers show judgment, tradeoffs, and communication quality."],
    ],
    advanced: [
      ["Tell me about a finance decision that changed company behavior.", "The best answers connect analysis to a real business decision or operating change."],
      ["How do you push back on unrealistic targets?", "Senior candidates make credibility and partnership visible together."],
      ["What separates a strong finance partner from a reporting function?", "Good answers explain influence, clarity, and business context."],
    ],
    mistakes: [
      "Answering with reporting tasks instead of decisions",
      "Ignoring stakeholder management in finance examples",
      "Treating forecast accuracy as the only success metric",
      "Using polished finance language with no business consequence",
    ],
  },
  {
    role: "FP&A Analyst",
    rolePageUrl: "/finance-fpa-career-coaching/",
    topic: "FP&A Interview Questions",
    title: "FP&A Interview Questions: What Strong Planning and Analysis Answers Usually Include",
    description:
      "An FP&A interview guide covering planning, modeling, and the answer patterns that make candidates sound more business-relevant and credible.",
    featuredImage: "/assets/blog/executive-brief.jpg",
    categories: ["Interview Intelligence", "Business & Finance"],
    intro:
      "FP&A interviews usually test whether your analysis improves decisions. Strong candidates explain what changed because of their work, not only what they modeled.",
    basics: [
      ["How do you build a useful forecast?", "A strong answer covers assumptions, driver logic, and how the forecast will actually guide a decision."],
      ["What makes a model trustworthy?", "Interviewers want clarity, sensitivity thinking, and decision usefulness together."],
      ["How do you present bad financial news?", "Better answers show judgment, context, and what decision the audience needs next."],
    ],
    advanced: [
      ["Tell me about analysis that changed a business plan.", "The best stories show how your work influenced a real resource or strategy decision."],
      ["How do you challenge requests that produce noise instead of clarity?", "Senior answers show focus and stakeholder handling, not just compliance."],
      ["What makes a finance partner valuable to operators?", "Good answers explain decision support, not report delivery alone."],
    ],
    mistakes: [
      "Talking about spreadsheets with no business consequence",
      "Skipping the decision your analysis informed",
      "Treating presentation polish as enough",
      "Using examples where stakeholder impact is unclear",
    ],
  },
  {
    role: "Operations Manager",
    rolePageUrl: "/operations-career-coaching/",
    topic: "Operations Manager Interview Questions",
    title: "Operations Manager Interview Questions: What Strong Execution Answers Sound Like",
    description:
      "An operations interview guide covering process design, delivery quality, and the answer patterns that make candidates sound more strategic and more credible.",
    featuredImage: "/assets/blog/90-day-tech-job-system.jpg",
    categories: ["Interview Intelligence", "Operations Careers"],
    intro:
      "Operations manager interviews usually test whether you can make the business run more reliably with less friction, not only whether you can keep work moving.",
    basics: [
      ["How do you identify the highest-leverage operational problem?", "Strong answers show bottleneck thinking, data use, and business context."],
      ["What makes a process improvement actually stick?", "Interviewers want adoption, measurement, and execution quality together."],
      ["How do you handle conflicting priorities across teams?", "Better answers show structured tradeoffs, not only urgency management."],
    ],
    advanced: [
      ["Tell me about an operational improvement that changed performance.", "The best answers connect the change to throughput, quality, cost, or reliability."],
      ["How do you work with teams that resist process discipline?", "Senior answers show influence and practical rollout sequencing."],
      ["How do you balance standardization with speed?", "Good answers make the tradeoff visible rather than choosing slogans."],
    ],
    mistakes: [
      "Describing busyness instead of leverage",
      "Treating process output as business success",
      "Ignoring change management and adoption",
      "Using examples with no measurable operating impact",
    ],
  },
  {
    role: "Strategy Consultant",
    rolePageUrl: "/strategy-consulting-career-coaching/",
    topic: "Strategy Consultant Interview Questions",
    title: "Strategy Consultant Interview Questions: How to Answer with Sharper Decision Framing",
    description:
      "A strategy consulting interview guide covering structured thinking, executive communication, and the answer patterns that make candidates sound more credible under pressure.",
    featuredImage: "/assets/blog/case-study-framework.jpg",
    categories: ["Interview Intelligence", "Consulting Careers"],
    intro:
      "Strategy consulting interviews usually test whether you can structure ambiguous problems into better decisions without losing business realism.",
    basics: [
      ["How do you approach an ambiguous business problem?", "Strong answers show structure, prioritization, and how you decide what matters first."],
      ["What makes a recommendation credible?", "Interviewers want logic, evidence, and implementation realism together."],
      ["How do you communicate complex analysis to executives?", "Better answers show synthesis, not only detail compression."],
    ],
    advanced: [
      ["Tell me about a recommendation you changed after new evidence.", "The best answers show judgment, flexibility, and credibility under pressure."],
      ["How do you handle a client who wants the wrong answer?", "Senior candidates show influence without theatrics."],
      ["What makes strategy work actionable instead of just smart?", "Good answers connect insight to execution and decision ownership."],
    ],
    mistakes: [
      "Using frameworks with no decision quality behind them",
      "Ignoring implementation risk",
      "Presenting insights without a recommendation",
      "Sounding polished but not decisive",
    ],
  },
  {
    role: "Supply Chain Manager",
    rolePageUrl: "/supply-chain-career-coaching/",
    topic: "Supply Chain Manager Interview Questions",
    title: "Supply Chain Manager Interview Questions: What Strong Risk and Execution Answers Include",
    description:
      "A supply chain interview guide covering planning, resilience, and the answer patterns that make candidates sound more strategic and operationally credible.",
    featuredImage: "/assets/blog/risk-mitigation-story.jpg",
    categories: ["Interview Intelligence", "Operations Careers"],
    intro:
      "Supply chain interviews usually test whether you can improve resilience, service quality, and cost discipline under real-world constraints.",
    basics: [
      ["How do you prioritize supply chain risk?", "Strong answers show impact thinking, likelihood, and practical mitigation options."],
      ["What makes a planning process effective?", "Interviewers want visibility, responsiveness, and execution quality together."],
      ["How do you balance service levels with cost pressure?", "Better answers make the tradeoff explicit rather than pretending both can always be maximized."],
    ],
    advanced: [
      ["Tell me about a supply issue you stabilized successfully.", "The best stories show diagnosis, stakeholder handling, and measurable business impact."],
      ["How do you improve resilience without overbuilding cost?", "Senior candidates explain prioritization and smarter system design."],
      ["How do you work across suppliers and internal teams under pressure?", "Good answers show coordination quality and decision discipline."],
    ],
    mistakes: [
      "Talking about process without service or cost consequence",
      "Ignoring tradeoffs in planning decisions",
      "Treating supplier issues as outside your control",
      "Using examples where business impact is vague",
    ],
  },
  {
    role: "People Operations Manager",
    rolePageUrl: "/people-ops-career-coaching/",
    topic: "People Operations Interview Questions",
    title: "People Operations Interview Questions: How to Answer with Better Systems and People Judgment",
    description:
      "A people operations interview guide covering process, employee experience, and the answer patterns that make candidates sound more strategic and more credible.",
    featuredImage: "/assets/blog/leadership-signal-resume.jpg",
    categories: ["Interview Intelligence", "People Careers"],
    intro:
      "People operations interviews usually test whether you can build trustable people systems that support managers, employees, and business execution together.",
    basics: [
      ["What problem should people operations solve first?", "Strong answers focus on leverage across hiring, onboarding, performance, or manager workflows instead of generic HR support."],
      ["How do you improve a process that employees do not trust?", "Interviewers want diagnosis, change design, and communication quality."],
      ["How do you balance policy consistency with manager flexibility?", "Better answers show systems thinking and practical judgment."],
    ],
    advanced: [
      ["Tell me about a people process improvement that changed behavior.", "The best stories connect the system change to better manager or employee outcomes."],
      ["How do you handle tension between employee experience and operational discipline?", "Senior candidates make the tradeoff visible and usable."],
      ["What makes a people operations function strategic?", "Good answers explain decision quality and organizational leverage, not only service delivery."],
    ],
    mistakes: [
      "Talking about policy without behavior change",
      "Ignoring trust and adoption in people systems",
      "Treating employee experience as separate from business execution",
      "Using examples with no measurable organizational effect",
    ],
  },
  {
    role: "Kubernetes",
    rolePageUrl: "/devops-career-coaching/",
    topic: "Kubernetes Interview Questions",
    title: "Kubernetes Interview Questions: What Interviewers Are Really Testing",
    description:
      "A practical Kubernetes interview guide covering common question types, stronger answer framing, and the failure patterns that cause candidates to sound shallower than they are.",
    featuredImage: "/assets/blog/system-design-story.jpg",
    categories: ["Interview Intelligence", "Tech Infrastructure"],
    intro:
      "Kubernetes interviews are rarely about memorizing objects. They are usually about whether you understand workload behavior, operational tradeoffs, and how Kubernetes choices affect reliability.",
    basics: [
      ["What problem does Kubernetes actually solve well?", "A strong answer focuses on orchestration, scheduling, resilience, and operational consistency instead of repeating definitions."],
      ["What is the difference between a Deployment and a StatefulSet?", "Interviewers want to see that you understand workload behavior, data persistence, and lifecycle requirements."],
      ["How would you explain readiness and liveness probes?", "Better answers connect them to release safety, traffic management, and avoiding false confidence during rollouts."],
    ],
    advanced: [
      ["How would you troubleshoot a cluster where pods schedule but latency spikes after rollout?", "The best answers move through observability, traffic behavior, resource pressure, network effects, and rollback logic in a clean order."],
      ["When is Kubernetes the wrong answer?", "Senior candidates should be willing to explain operational overhead and when the complexity is not justified."],
      ["How do you think about multi-tenant platform guardrails?", "This is where interviewers look for security, platform, and developer-experience tradeoffs."],
    ],
    mistakes: [
      "Reciting object definitions with no operational reasoning",
      "Treating Kubernetes as the answer to every infrastructure problem",
      "Ignoring rollout safety and observability in troubleshooting answers",
      "Talking only about manifests instead of platform outcomes",
    ],
  },
  {
    role: "Site Reliability Engineer",
    rolePageUrl: "/devops-career-coaching/",
    topic: "SRE System Design Interview Questions",
    title: "SRE System Design Interview Questions: How to Answer with Reliability Judgment",
    description:
      "A system design interview guide for SRE candidates covering common question types, stronger answer framing, and what separates senior reliability thinking from generic design talk.",
    featuredImage: "/assets/blog/interview-calibration.jpg",
    categories: ["Interview Intelligence", "Leadership Signal"],
    intro:
      "SRE system design questions are not only architecture questions. They are reliability questions with architecture wrapped around them.",
    basics: [
      ["How would you design a service to survive a regional failure?", "Good answers cover failure domains, traffic control, state handling, operational complexity, and realistic tradeoffs instead of assuming perfect multi-region design."],
      ["How do you think about SLOs in system design?", "Interviewers want to hear how reliability targets influence architecture, alerting, and engineering behavior."],
      ["What should change in the design when availability matters more than feature velocity?", "This is a tradeoff question, and strong answers say what gets more conservative and why."],
    ],
    advanced: [
      ["How would you scale an internal service that becomes a dependency for most of engineering?", "This is where you show load patterns, resilience, dependency risk, and organizational impact together."],
      ["How would you redesign a system after repeated but different incidents?", "Interviewers want a reliability lens, not only a diagram. Patterns, observability, and operational trust matter here."],
      ["What failure mode would worry you most in this design and why?", "Senior candidates distinguish themselves when they identify the most dangerous failure mode instead of listing many small ones."],
    ],
    mistakes: [
      "Answering like a general backend design interview with no reliability lens",
      "Using buzzwords like high availability without discussing failure modes",
      "Ignoring operational complexity created by the design",
      "Treating monitoring as an afterthought instead of a design input",
    ],
  },
];

module.exports = roleDefinitions.map((entry) => ({
  slug: slugify(entry.topic),
  role: entry.role,
  rolePageUrl: entry.rolePageUrl,
  topic: entry.topic,
  title: entry.title,
  description: entry.description,
  publishDate,
  publishDateISO,
  updatedDateISO: publishDateISO,
  readTime: "9 min read",
  featuredImage: entry.featuredImage,
  imageAlt: "Professional coaching and career strategy imagery.",
  featured: false,
  categories: entry.categories,
  intro: entry.intro,
  basics: entry.basics.map(([q, a]) => ({ q, a })),
  advanced: entry.advanced.map(([q, a]) => ({ q, a })),
  mistakes: entry.mistakes,
  faq: [
    {
      q: `What do ${entry.role.toLowerCase()} interviews usually test?`,
      a: `They usually test whether you can explain the reasoning, tradeoffs, and consequences behind your decisions instead of only naming tools, frameworks, or responsibilities.`
    },
    {
      q: `How many stories should I prepare for ${entry.topic.toLowerCase()}?`,
      a: `Most candidates should prepare at least four to six reusable examples covering tradeoffs, execution pressure, collaboration, and measurable outcomes.`
    },
    {
      q: `What makes answers to ${entry.topic.toLowerCase()} sound more senior?`,
      a: `Stronger answers usually make the constraint visible, explain the chosen tradeoff, and show how the decision affected users, the business, or the team.`
    }
  ]
}));
