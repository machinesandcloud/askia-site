'use strict';

const roles = [
  {
    role: 'software-engineer',
    roleName: 'Software Engineering',
    roleTag: 'SWE',
    roleColor: '#3b82f6',
    roleEmoji: '⚙️',
    specialTopic: {
      topic: 'system-design',
      topicName: 'System Design Interviews',
      title: 'System Design Interview Guide for Software Engineers',
      metaTitle: 'System Design Interview Guide | Senior & Staff SWE | Askia',
      metaDescription: 'How to pass system design interviews at senior and staff SWE levels. Tradeoffs, diagrams, and real example walkthroughs.',
      headline: 'Own the System Design Room',
      intro: 'System design is where senior+ roles are won or lost. It\'s not about knowing every pattern — it\'s about demonstrating how you think through constraints, tradeoffs, and scale under pressure. Most candidates fail because they describe what, not why.',
      shortAnswer: 'Lead with constraints first. Scope the problem, state assumptions, pick a design that fits the requirements — not the most impressive one you know.',
      doFirst: ['You\'re targeting Senior, Staff, or Principal SWE roles', 'You\'ve been looping on system design rounds', 'You struggle to structure your thinking under pressure'],
      skip: ['You\'re at entry-level and haven\'t built distributed systems', 'You\'re interviewing for pure frontend or ML roles', 'You\'re already converting system design rounds consistently'],
      steps: [
        { num: '01', title: 'Clarify requirements in the first 3 minutes', body: 'Before drawing anything, ask: what\'s the scale? Who are the users? What\'s the consistency model? Write these down on the board. Most interviewers reward this more than the design itself.' },
        { num: '02', title: 'Estimate scale — back-of-envelope numbers', body: 'QPS, storage, bandwidth. For a URL shortener at Twitter-scale: 100K writes/day = ~1 write/sec, 100× reads = 100 reads/sec. These numbers drive every decision.' },
        { num: '03', title: 'Define the API first', body: 'Write 2-3 core endpoints. This forces clarity and shows you think top-down. Interviewers love candidates who start with the contract.' },
        { num: '04', title: 'Sketch the high-level diagram, then drill down', body: 'Start with client → LB → app server → DB. Then zoom into the one component that\'s hardest — that\'s the interesting part. Don\'t try to design everything perfectly.' },
        { num: '05', title: 'State every tradeoff you make', body: 'SQL vs NoSQL: "I\'ll use PostgreSQL because consistency matters here, even though it limits horizontal scaling." Interviewers hire people who understand costs, not people who pick the right answer.' }
      ],
      example: {
        before: 'Uses a relational database and adds a cache in front of it.',
        after: 'For user timelines at 50M DAU, I\'d use a fan-out-on-write model with a Redis sorted set per user, async fanout via Kafka, and fallback to DB read for inactive users — trading write amplification for read speed because p99 latency matters more than storage cost here.',
        note: 'The after version shows a tradeoff, a reason, and a number. That\'s what passes system design at FAANG.'
      },
      stats: [
        { stat: '72%', body: 'Of senior SWE rejections cite weak system design communication', source: 'Hiring manager surveys' },
        { stat: '4 rounds', body: 'Average system design rounds at top-tier tech companies', source: 'Industry data' },
        { stat: '$47K', body: 'Avg compensation increase after optimized SWE positioning', source: 'Askia client data' }
      ],
      faq: [
        { q: 'How do I prepare if I haven\'t built distributed systems?', a: 'Study case studies from real companies (Slack, Netflix, Uber engineering blogs). You can reason about systems you haven\'t personally built if you understand the tradeoffs deeply.' },
        { q: 'How detailed should my diagram be?', a: 'High-level blocks with 1-2 deep dives. Don\'t try to draw every microservice — it reads as noise. Pick the hardest part and go deep there.' },
        { q: 'Should I memorize design patterns?', a: 'Know the patterns, but prioritize knowing when not to use them. Saying "I\'d skip Kafka here because our scale doesn\'t justify it" impresses more than always reaching for the same tools.' },
        { q: 'How do I handle questions I don\'t know?', a: 'Say what you\'d optimize for, make an assumption, move forward. "I\'m not sure about the exact Cassandra tuning here, but I\'d design for write-heavy workloads and benchmark from there." Showing process beats showing knowledge.' }
      ]
    }
  },
  {
    role: 'devops-sre',
    roleName: 'DevOps & SRE',
    roleTag: 'Platform',
    roleColor: '#14b8a6',
    roleEmoji: '🛡️',
    specialTopic: {
      topic: 'incident-response',
      topicName: 'Incident Response Stories',
      title: 'How to Tell Incident Response Stories That Land SRE Roles',
      metaTitle: 'Incident Response Stories for SRE Interviews | Askia',
      metaDescription: 'How to structure incident response stories for SRE and DevOps interviews. STAR format, metrics, and the postmortem narrative that hiring teams want.',
      headline: 'Turn Incidents Into Your Best Interview Stories',
      intro: 'Every major incident you\'ve handled is a gold mine — and most SRE candidates leave it buried. Incident stories show ownership, calm under pressure, systems thinking, and cross-team leadership all in one narrative. The difference between candidates who get Staff SRE offers and those who don\'t is usually how they tell these stories.',
      shortAnswer: 'Lead with the blast radius and your ownership, not the technical root cause. Interviewers want to know what you saw, what you did, and what broke less after.',
      doFirst: ['You\'re targeting Senior SRE, Staff SRE, or Platform Engineering roles', 'You\'ve led or co-led incident response before', 'Behavioral rounds are where you stall out'],
      skip: ['You\'re early-career without production ownership', 'You\'re targeting pure infrastructure-as-code roles', 'Your interviews are technical-only with no behavioral component'],
      steps: [
        { num: '01', title: 'Open with the blast radius, not the root cause', body: '"We had a 47-minute partial outage affecting 12% of paid users in the EU region." That\'s a story. "Our Postgres replication lag spiked" is a postmortem bullet. Start with business impact.' },
        { num: '02', title: 'Own your specific role in the incident', body: 'Don\'t say "we fixed it." Say "I took incident commander, assigned DRI to each component, and ran 10-minute status syncs." Specificity signals seniority.' },
        { num: '03', title: 'Name the decision, not just the action', body: '"I decided to roll back the deploy rather than hotfix forward because the error rate wasn\'t converging." This is Staff-level thinking — you made a call under uncertainty.' },
        { num: '04', title: 'Quantify the before/after', body: 'MTTD before: 8 minutes. After your runbooks and alerting improvements: 90 seconds. Cost of the incident: ~$120K in SLA credits. These numbers make your story memorable.' },
        { num: '05', title: 'End with systemic change, not just the fix', body: 'The most impressive part of an incident story is what you changed so it doesn\'t happen again. Detection improvement, runbook created, chaos experiment added — this is where Senior becomes Staff.' }
      ],
      example: {
        before: 'We had an outage. I helped debug it and we fixed the database issue.',
        after: 'Led incident response for a 47-minute EU payment outage affecting 12% of paid users (~$85K SLA exposure). Identified Postgres replication lag as the root cause, made the call to roll back the deploy over hotfix, and coordinated 4 engineering teams to restore within SLA. Post-incident: added replication lag as a P1 alert trigger — MTTD for that failure class dropped from 8 minutes to 90 seconds.',
        note: 'The after version shows IC, a decision under pressure, a business number, and a systemic improvement. That\'s a Staff SRE story.'
      },
      stats: [
        { stat: '89%', body: 'Of Askia DevOps/SRE clients land offers within 60 days', source: 'Askia client data' },
        { stat: '$165K', body: 'Median base for Senior SRE in major tech markets', source: 'Industry data' },
        { stat: '2×', body: 'Response rate with infrastructure-outcome positioning', source: 'Askia A/B testing' }
      ],
      faq: [
        { q: 'What if the incident was mostly someone else\'s fault?', a: 'Focus on your role in detection, coordination, or recovery — not blame. "I identified the root cause and coordinated the fix" is enough. Never position yourself as the hero who saved everyone from someone else\'s mistake.' },
        { q: 'Can I use incidents from years ago?', a: 'Yes, if they\'re the best examples. Recency matters less than depth. A 3-year-old incident where you led a systemic improvement beats a last-month incident where you ran one kubectl command.' },
        { q: 'What if I work at a company with no formal incident process?', a: 'That\'s actually a great story hook. "We didn\'t have a formal process, so I built one — here\'s what I put in place and how it changed our MTTD."' }
      ]
    }
  },
  {
    role: 'data',
    roleName: 'Data',
    roleTag: 'DE / DS / Analytics',
    roleColor: '#8b5cf6',
    roleEmoji: '📊',
    specialTopic: {
      topic: 'data-storytelling',
      topicName: 'Data Storytelling',
      title: 'Data Storytelling for Senior Data Science & Analytics Roles',
      metaTitle: 'Data Storytelling Guide | Senior DS & Analytics Interviews | Askia',
      metaDescription: 'How to communicate data insights to non-technical stakeholders and hiring teams. Frameworks, examples, and interview strategies.',
      headline: 'Turn Numbers Into Decisions That Get You Hired',
      intro: 'Technical depth gets you to the phone screen. Storytelling gets you the offer. At senior levels, data professionals who can translate analysis into executive decisions are rare — and hiring teams know it. The ability to say "here\'s what the data shows and here\'s what we should do about it" is the most in-demand skill at Senior and above.',
      shortAnswer: 'Lead with the decision you enabled, not the method you used. Your audience doesn\'t need to understand gradient boosting — they need to know whether to launch the feature.',
      doFirst: ['You\'re targeting Senior Data Scientist, Senior Analyst, or Data Science Manager roles', 'Technical rounds go well but business case rounds stall', 'You struggle to explain your work to non-technical interviewers'],
      skip: ['You\'re targeting pure ML research roles', 'All your interviews are technical-only', 'You\'re early-career and still building analytical depth'],
      steps: [
        { num: '01', title: 'Frame every analysis as a decision, not a finding', body: '"Churn rate increased 4%" is a finding. "We should expand customer success headcount in the enterprise segment by Q3 or we\'ll miss renewal targets by $2M" is a decision. Frame everything as what to do, not what happened.' },
        { num: '02', title: 'Use the SCQA structure for business presentations', body: 'Situation → Complication → Question → Answer. "Revenue is growing (S), but our top cohort is churning faster (C). Should we prioritize retention or acquisition? (Q) Retention — here\'s why. (A)" This is McKinsey structure and it works everywhere.' },
        { num: '03', title: 'Quantify uncertainty, don\'t hide it', body: '"With 80% confidence based on 6 months of data, this cohort will churn within 90 days." Showing that you understand and communicate uncertainty builds more executive trust than false precision.' },
        { num: '04', title: 'Prepare a "so what" for every slide', body: 'For every chart you\'d show an executive, write one sentence: "This means we should X." If you can\'t write that sentence, the chart probably shouldn\'t be there.' },
        { num: '05', title: 'Tell the dissent story', body: 'The most powerful data story is one where your analysis contradicted the team\'s assumptions and you advocated for it anyway. "The A/B test showed no lift, but the PM wanted to ship anyway — here\'s how I handled that conversation" is a story that wins senior roles.' }
      ],
      example: {
        before: 'Analyzed customer data and found that churn was correlated with onboarding completion rates.',
        after: 'Identified that users who completed fewer than 3 onboarding steps churned at 3.4× the rate of fully-onboarded users. Presented to VP of Product with a recommendation to gate the upgrade flow behind onboarding completion — pilot resulted in 18% churn reduction in the enterprise segment, protecting ~$1.4M ARR.',
        note: 'The after version shows the insight, the recommendation, the stakeholder, and the business outcome. That\'s what gets you hired.'
      },
      stats: [
        { stat: '$52K', body: 'Average compensation increase for Askia data clients', source: 'Askia client outcomes' },
        { stat: '3×', body: 'More callbacks with outcome-focused data resumes', source: 'Askia A/B testing' },
        { stat: '21 days', body: 'Average time to first interview for data clients', source: 'Askia client data' }
      ],
      faq: [
        { q: 'How do I show business impact when my work is research-focused?', a: 'Connect your research to the downstream decision it enabled, even if it\'s indirect. "My analysis informed the decision to X, which resulted in Y." If you can\'t trace any connection to a business outcome, that\'s the real gap to address.' },
        { q: 'How do I explain technical methods without losing non-technical interviewers?', a: 'One sentence max on the method, then pivot to results. "I used a gradient boosting model — basically a more accurate prediction engine — which improved our churn forecast accuracy from 71% to 89%, allowing CS to prioritize the right accounts."' },
        { q: 'What if my company doesn\'t share business metrics with me?', a: 'Use directional language: "reduced churn significantly," "improved forecast accuracy by 18pp." Better yet, ask your manager for the numbers before you leave — most companies will give them if you ask.' }
      ]
    }
  },
  {
    role: 'product-manager',
    roleName: 'Product Manager',
    roleTag: 'Product',
    roleColor: '#f97316',
    roleEmoji: '🧭',
    specialTopic: {
      topic: 'product-sense',
      topicName: 'Product Sense Interviews',
      title: 'How to Pass Product Sense Interviews for Senior PM Roles',
      metaTitle: 'Product Sense Interview Guide | Senior PM & GPM | Askia',
      metaDescription: 'How to demonstrate product intuition, prioritization frameworks, and customer empathy in PM interviews. Real examples and practice structures.',
      headline: 'Show Product Judgment That Gets You the PM Offer',
      intro: 'Product sense is the most evaluated and least coachable skill in PM interviews — which is why most candidates approach it wrong. They memorize frameworks instead of developing a point of view. Hiring teams don\'t want to hear "I\'d run an A/B test." They want to know how you think about customers, tradeoffs, and what actually makes a great product.',
      shortAnswer: 'Have a strong opinion and defend it. The worst product sense answers are the ones that hedge everything. Pick a direction, show your reasoning, and be comfortable being challenged.',
      doFirst: ['You\'re targeting Senior PM, Group PM, or Director of Product', 'Product case rounds are where you stall out', 'You struggle to structure product thinking under pressure'],
      skip: ['You\'re targeting technical PM roles where system design is the primary screen', 'You\'re already converting product sense rounds consistently', 'You\'re early-career without customer-facing product ownership'],
      steps: [
        { num: '01', title: 'State your mental model for the product upfront', body: '"Before I answer, let me share how I think about Instagram Stories: it\'s a low-stakes broadcast tool for daily life moments, optimized for creation speed and disappearance." That one sentence tells the interviewer you\'ve actually used the product as a PM, not a user.' },
        { num: '02', title: 'Segment users before jumping to solutions', body: 'Who uses this feature? Who doesn\'t? Who\'s the underserved segment? Most weak PM candidates propose solutions without ever asking whose problem they\'re solving.' },
        { num: '03', title: 'Prioritize by impact × confidence, not just size', body: 'Don\'t just pick the biggest opportunity. Show you understand uncertainty. "I\'d prioritize X over Y because the signal is stronger — we have behavioral data, not just stated preference."' },
        { num: '04', title: 'Anticipate the tradeoffs in your own proposal', body: 'After you pitch your solution, name its weaknesses before the interviewer does. "The risk here is that power users may feel the feature is dumbed down — here\'s how I\'d mitigate that." This is senior-level PM thinking.' },
        { num: '05', title: 'Define success metrics before you wrap up', body: 'Always end with: what does success look like in 30, 90, and 180 days? And what\'s the counter-metric you\'d watch to make sure you\'re not breaking something else?' }
      ],
      example: {
        before: 'I\'d improve the onboarding flow by making it simpler and adding tooltips.',
        after: 'The highest-leverage onboarding improvement is for users who complete step 1 but drop at step 3 — that\'s 34% of new signups based on industry benchmarks. I\'d run a wizard-style flow experiment targeting that cohort specifically, define success as ≥15% improvement in 7-day activation, and watch session depth as the counter-metric to ensure we\'re not just teaching people to click through without understanding the product.',
        note: 'The after version shows user segmentation, a specific hypothesis, a success metric, and a counter-metric. That\'s what Senior PM looks like.'
      },
      stats: [
        { stat: '$45K', body: 'Average compensation increase for Askia PM clients', source: 'Askia client outcomes' },
        { stat: '89%', body: 'Of PM clients land offers within 60 days', source: 'Askia client data' },
        { stat: '3 weeks', body: 'Average time to first PM interview with optimized positioning', source: 'Askia client data' }
      ],
      faq: [
        { q: 'Should I always use a framework like RICE or ICE?', a: 'Use frameworks as scaffolding, not scripts. The interviewer knows you know RICE. What they want to see is you applying judgment within the framework — why does this score higher than that?' },
        { q: 'What if I disagree with the interviewer\'s direction?', a: 'Disagree professionally and with data. "I see it differently — here\'s why" is a green flag. Being a pushover who agrees with everything interviewers say is a red flag at senior levels.' },
        { q: 'How do I show product sense without being at a big tech company?', a: 'Product thinking is transferable. Show how you used customer research, made prioritization decisions under constraints, and connected product work to business outcomes — regardless of company size.' }
      ]
    }
  },
  {
    role: 'engineering-manager',
    roleName: 'Engineering Manager',
    roleTag: 'Leadership',
    roleColor: '#ec4899',
    roleEmoji: '👥',
    specialTopic: {
      topic: 'people-management',
      topicName: 'People Management Interviews',
      title: 'How to Ace Engineering Manager People Management Interviews',
      metaTitle: 'EM People Management Interview Guide | Director & VP | Askia',
      metaDescription: 'How to prepare for performance management, career growth, and difficult conversation questions in EM and Director interviews.',
      headline: 'Show You Lead People, Not Just Projects',
      intro: 'The hardest EM interview questions aren\'t about technical systems — they\'re about the people you\'ve managed. How did you handle an underperformer? How did you grow someone into a senior engineer? What did you do when a strong engineer wanted to leave? These questions separate managers who know how to manage from ones who actually do it well.',
      shortAnswer: 'Be specific and honest about hard situations. Interviewers can tell the difference between a rehearsed "difficult conversation" story and one where you actually had the conversation.',
      doFirst: ['You\'re targeting EM, Senior EM, or Director of Engineering roles', 'Behavioral rounds on people management are where you stumble', 'You\'ve led teams but haven\'t rehearsed your management stories'],
      skip: ['You\'re a new manager with less than 1 year of direct reports', 'You\'re targeting Staff+ IC roles', 'Your interviews are purely technical'],
      steps: [
        { num: '01', title: 'Build a story bank of 5 management archetypes', body: 'Prepare one story each for: the underperformer, the high performer you retained, the team conflict, the person you promoted, and the person you had to let go. These 5 cover 90% of people management questions.' },
        { num: '02', title: 'Show the coaching, not just the outcome', body: '"I put them on a PIP and they left" is a fact. "I gave monthly feedback, noticed the pattern wasn\'t changing, had a direct conversation about fit, explored alternatives, and ultimately transitioned them out" is a management story that shows judgment.' },
        { num: '03', title: 'Quantify team health metrics', body: 'Attrition rate, eNPS, promotion rate, number of engineers leveled up under you. These data points exist — find them. "In 2 years managing this team, 3 engineers promoted, 0 regrettable attrition" is a powerful management thesis.' },
        { num: '04', title: 'Name the structural changes you made', body: 'Great managers change the system, not just individual behaviors. "I introduced bi-weekly career conversations, not just annual reviews. That changed how quickly I could spot and address drift."' },
        { num: '05', title: 'Show how you scaled yourself', body: 'At Director level, you manage managers. At EM level, you manage ICs but also develop tech leads. Show how you identified, developed, and delegated to people who could extend your reach.' }
      ],
      example: {
        before: 'I managed a team of 6 engineers. One wasn\'t performing well so I gave them feedback and eventually they left.',
        after: 'Inherited a team member who\'d been missed in two promo cycles. In the first month, I found the real issue: no sponsorship and unclear expectations, not capability. Built a 90-day plan together, got them visibility on a cross-functional project, and advocated for the promotion. They\'re now a Senior Engineer and the highest-rated IC on the team. That\'s the story I look for before assuming underperformance is the person.',
        note: 'The after version shows diagnosis, not just intervention. That\'s the difference between a manager and a leader.'
      },
      stats: [
        { stat: '$55K', body: 'Average compensation increase for Askia EM clients', source: 'Askia client outcomes' },
        { stat: '2 weeks', body: 'Average time to first EM interview with optimized positioning', source: 'Askia client data' },
        { stat: '85%', body: 'Of EM clients receive multiple offers', source: 'Askia client data' }
      ],
      faq: [
        { q: 'How honest should I be about performance issues I\'ve managed?', a: 'Very honest — with discretion. Don\'t name anyone. But do share the real texture of the situation. Sanitized stories read as fake. "It was a difficult conversation" is more believable than "it went smoothly."' },
        { q: 'What if I haven\'t managed anyone through a PIP or termination?', a: 'Lead with what you have. A story about early performance feedback, a career conversation that changed trajectory, or a team conflict you navigated shows the same judgment even without the hardest edge cases.' },
        { q: 'How do I show leadership scope without a large team?', a: 'Influence, not headcount. Show cross-team coordination, mentorship of engineers outside your direct report chain, and how your decisions affected other teams or the overall engineering org.' }
      ]
    }
  },
  {
    role: 'finance-fpa',
    roleName: 'Finance & FP&A',
    roleTag: 'Finance',
    roleColor: '#22c55e',
    roleEmoji: '📈',
    specialTopic: {
      topic: 'financial-modeling',
      topicName: 'Financial Modeling Interviews',
      title: 'Financial Modeling Interview Guide for FP&A and Finance Roles',
      metaTitle: 'Financial Modeling Interview Guide | FP&A & Finance Leadership | Askia',
      metaDescription: 'How to demonstrate financial modeling skill, driver-based forecasting, and business partnership in FP&A interviews at senior levels.',
      headline: 'Show Models That Drive Decisions, Not Just Reports',
      intro: 'Financial modeling interviews at senior FP&A levels aren\'t about whether you can build a DCF — everyone can. What separates the offers is whether you can show that your models actually changed what a business did. A model that sat in a folder is not a model. A model that got the CFO to shift capital allocation is.',
      shortAnswer: 'When describing a model, always answer: what decision did it drive and what was the outcome? If you can\'t answer that, the model isn\'t interview-ready yet.',
      doFirst: ['You\'re targeting Senior FP&A, Finance Manager, or Director of Finance roles', 'Technical modeling rounds go well but business case discussions stall', 'You\'ve built many models but struggle to connect them to outcomes'],
      skip: ['You\'re targeting pure accounting or audit roles', 'Your interviews are behavioral-only with no modeling component', 'You\'re early-career without business partner exposure'],
      steps: [
        { num: '01', title: 'Build your model story before the interview', body: 'Pick your best 2-3 models and write: what was the business question, what were the key drivers, what was the output, who saw it, and what decision it drove. That\'s your script. The model itself is secondary.' },
        { num: '02', title: 'Lead with driver-based structure', body: '"I built a revenue model" tells them nothing. "I rebuilt the revenue model from a top-line to a driver-based structure — volume × ASP × churn — which let the business model the impact of pricing changes in real time" is a finance conversation.' },
        { num: '03', title: 'Show the sensitivity and scenario work', body: 'What assumptions matter most? "A 1pp change in gross margin has a $3M impact on EBITDA at our scale — that\'s why we built a margin sensitivity tab." This shows you understand what the business cares about, not just how to build a formula.' },
        { num: '04', title: 'Tell the stakeholder story', body: 'Who did you present to? What did they push back on? How did the model inform the final decision? "The CFO didn\'t agree with our churn assumption — here\'s how I handled that conversation" is Senior FP&A storytelling.' },
        { num: '05', title: 'Quantify the model\'s impact', body: 'Forecast accuracy improvement (from 82% to 94%), planning cycle reduction (from 6 weeks to 3), or direct business outcome ($3M cost identified). At least one of these should be in every model story.' }
      ],
      example: {
        before: 'I built a three-statement model and forecast model for our annual plan.',
        after: 'Rebuilt the annual plan model from scratch using a driver-based structure across 8 business units — replaced 14 disconnected Excel sheets with one integrated model. Improved forecast accuracy from 81% to 93% over two planning cycles. The model identified $3.2M in cost optimization opportunities that the CFO prioritized in Q3 capital reallocation.',
        note: 'The after version shows the structural improvement, the accuracy gain, and the business outcome. That\'s a Director-level FP&A story.'
      },
      stats: [
        { stat: '$48K', body: 'Average compensation increase for Askia finance clients', source: 'Askia client outcomes' },
        { stat: '92%', body: 'Of finance clients land offers within 60 days', source: 'Askia client data' },
        { stat: '3 weeks', body: 'Average time to first finance interview with optimized positioning', source: 'Askia client data' }
      ],
      faq: [
        { q: 'How technical should I get when describing my models?', a: 'Match the audience. If you\'re talking to a CFO interviewer: focus on business impact. If it\'s a technical finance screener: show model architecture (drivers, structure, scenario logic). Read the room.' },
        { q: 'What if my models were built by my predecessor and I just maintained them?', a: 'Be honest. "I inherited the model but here\'s what I improved, what I added, and what I\'d rebuild if I had the chance." That shows judgment and ownership even without original authorship.' },
        { q: 'How do I show strategic impact in a role that\'s mostly operational finance?', a: 'Find one or two moments where your analysis informed a strategy decision — budget reallocation, pricing change, market entry. Those moments exist in most roles; they just need to be surfaced.' }
      ]
    }
  },
  {
    role: 'cybersecurity',
    roleName: 'Cybersecurity',
    roleTag: 'Security',
    roleColor: '#ef4444',
    roleEmoji: '🔐',
    specialTopic: {
      topic: 'threat-modeling',
      topicName: 'Threat Modeling',
      title: 'Threat Modeling Guide for Cybersecurity Professionals',
      metaTitle: 'Threat Modeling for Security Engineers | STRIDE & Attack Surfaces | Askia',
      metaDescription: 'How cybersecurity professionals conduct threat modeling that actually improves security posture and communicates risk to engineering and business stakeholders.',
      headline: 'Build Threat Models That Drive Real Security Decisions',
      intro: 'Threat modeling is where security strategy meets engineering reality. Most security professionals produce threat models that sit in a wiki — they\'re too abstract for engineers and too technical for executives. The professionals who drive real security improvement build models that are specific enough to produce actionable mitigations and clear enough to communicate risk in business terms.',
      shortAnswer: 'Scope the threat model to a specific system, identify your highest-value assets and most likely adversaries, then map attack paths to concrete mitigations — not generic controls.',
      doFirst: ['You\'re a security engineer or architect responsible for secure-by-design reviews', 'Your org ships features without structured security review', 'You need to communicate security risk to non-security stakeholders'],
      skip: ['You\'re focused on incident response rather than proactive security design', 'Your org already has a mature threat modeling practice', 'You\'re in a pure compliance role without engineering engagement'],
      steps: [
        { num: '01', title: 'Scope to a specific system boundary', body: 'Define what\'s in scope: the application, its data flows, trust boundaries, and external dependencies. A threat model that tries to cover the entire org is useless. Start with the highest-risk new feature or the crownest crown jewel.' },
        { num: '02', title: 'Enumerate assets and their value to an attacker', body: 'What does an attacker want? Customer PII, financial data, authentication tokens, IP. Rank by attacker value — this drives prioritization of mitigations better than any framework checkbox.' },
        { num: '03', title: 'Apply STRIDE to identify threats systematically', body: 'Walk each data flow and component through Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. This catches the categories of threats that intuition misses.' },
        { num: '04', title: 'Map threats to attack paths, not just controls', body: '"An attacker could exfiltrate customer PII via an SSRF vulnerability in the image upload service, bypassing the WAF by using internal network access." Specific attack paths create specific mitigations.' },
        { num: '05', title: 'Translate risk to business language for prioritization', body: '"This vulnerability could expose 2M customer records, resulting in GDPR fines up to $20M and reputational damage." Security risk without business context gets deprioritized by engineering every time.' }
      ],
      example: {
        before: 'The authentication service has several potential security risks that should be addressed.',
        after: 'The OAuth callback endpoint in the authentication service is vulnerable to open redirect attacks. An attacker can craft a link that harvests valid auth tokens post-login, bypassing MFA. Blast radius: all 400K active sessions. Mitigation: allowlist of redirect URIs. Estimated remediation: 2 days. Priority: Critical.',
        note: 'Specific attack path + blast radius + concrete mitigation + effort estimate = a finding that gets fixed.'
      },
      stats: [
        { stat: '70%', body: 'Of security vulnerabilities are preventable with early-stage threat modeling', source: 'NIST research' },
        { stat: '6×', body: 'Cheaper to fix security issues in design phase vs post-production', source: 'IBM Systems Sciences Institute' },
        { stat: '89%', body: 'Of Askia security clients land senior roles within 60 days of positioning work', source: 'Askia client data' }
      ],
      faq: [
        { q: 'How do I get engineering teams to actually engage with threat models?', a: 'Make the model a collaborative document, not a security-team deliverable. Run a 60-minute threat modeling session with the engineering team during design — their system knowledge makes the model better and their buy-in makes mitigations happen.' },
        { q: 'What\'s the right frequency for threat modeling?', a: 'Every new major feature or architectural change. For existing systems, quarterly review of the highest-risk components. Threat modeling is not a one-time compliance exercise.' }
      ]
    }
  },
  {
    role: 'ml-ai',
    roleName: 'ML & AI Engineering',
    roleTag: 'ML/AI',
    roleColor: '#a855f7',
    roleEmoji: '🤖',
    specialTopic: {
      topic: 'ml-system-design',
      topicName: 'ML System Design',
      title: 'ML System Design Interview Guide for ML & AI Engineers',
      metaTitle: 'ML System Design for AI/ML Engineers | Feature Stores & Training Pipelines | Askia',
      metaDescription: 'How ML and AI engineers approach system design interviews — feature stores, training pipelines, serving infrastructure, and model monitoring.',
      headline: 'Design ML Systems That Work in Production, Not Just Notebooks',
      intro: 'ML system design interviews test whether you understand the full production lifecycle of a machine learning system — from data ingestion and feature engineering through model training, serving, monitoring, and retraining. Most candidates overweight the modeling component and underweight the infrastructure. The candidates who impress interview panels can explain why a feature store matters and when to use real-time vs. batch inference.',
      shortAnswer: 'Lead with the problem framing and training/serving split. Define the feedback loop and monitoring strategy before deep-diving into model architecture — that\'s what separates ML engineers from ML researchers in these interviews.',
      doFirst: ['You\'re targeting Senior ML Engineer, Applied Scientist, or ML Platform roles', 'You\'ve built models but haven\'t designed end-to-end ML systems', 'Your ML system design rounds stall after the modeling discussion'],
      skip: ['You\'re targeting pure research roles where system design isn\'t evaluated', 'You\'re focused on data engineering without an ML component', 'You\'re already converting ML system design rounds consistently'],
      steps: [
        { num: '01', title: 'Frame the ML problem before the model', body: 'What are you predicting, what are you optimizing, what\'s the feedback loop? "We\'re predicting next-item purchase, optimizing for 7-day revenue, and feedback comes from purchase events with 24h delay." That frame drives every downstream decision.' },
        { num: '02', title: 'Separate the training and serving architectures', body: 'Training pipeline: data ingestion → feature engineering → model training → evaluation → versioning. Serving: feature retrieval → model inference → output post-processing → logging. These are different systems with different constraints.' },
        { num: '03', title: 'Design the feature store explicitly', body: 'Decide which features are batch (computed offline) and which are real-time (user context, session data). Explain the consistency requirement — training-serving skew is the most common ML production failure.' },
        { num: '04', title: 'Define your model monitoring strategy', body: 'Data drift, concept drift, prediction distribution shift, business metric degradation. Know which signals trigger automated retraining vs manual review. Most system design answers skip this entirely.' },
        { num: '05', title: 'Discuss the retraining trigger and cadence', body: 'Schedule-based vs performance-triggered retraining. "We retrain weekly on a rolling 90-day window, with an automated performance check that triggers emergency retraining if AUC drops below 0.82." Specificity here shows production experience.' }
      ],
      example: {
        before: 'I\'d use a recommendation model with collaborative filtering and serve it via an API.',
        after: 'For a real-time product recommendation system at 10M DAU, I\'d use a two-stage retrieval + ranking architecture. ANN retrieval (Faiss) narrows 10M items to 500 candidates in <10ms; a LightGBM ranker scores candidates using 50 user + item features from Redis feature store. Training pipeline runs daily in Spark on 90-day event window. Monitoring: CTR degradation >15% triggers alert; AUC <0.80 triggers retraining. Training-serving skew managed by shared feature computation layer.',
        note: 'Two-stage design + feature store + monitoring strategy + retraining trigger = ML system design answer that gets Senior ML Engineer offers.'
      },
      stats: [
        { stat: '87%', body: 'Of ML models never reach production due to infrastructure gaps', source: 'Gartner research' },
        { stat: '40%', body: 'Of ML production failures are caused by training-serving skew', source: 'Industry survey data' },
        { stat: '$185K', body: 'Median base salary for Senior ML Engineers at growth-stage tech companies', source: 'Levels.fyi data' }
      ],
      faq: [
        { q: 'How do I prepare for ML system design if I work primarily on research?', a: 'Study production ML case studies from Uber, Netflix, Airbnb engineering blogs. Focus on the parts you don\'t do: feature stores, model serving latency, A/B testing infrastructure for models, and monitoring.' },
        { q: 'When should I choose real-time vs batch inference?', a: 'Real-time when the feature freshness matters for prediction quality (e.g., session context, recent behavior). Batch when predictions can be precomputed and freshness requirements are loose (e.g., daily email personalization). Lead with the latency and freshness requirements, not the model type.' }
      ]
    }
  },
  {
    role: 'frontend-engineer',
    roleName: 'Frontend Engineering',
    roleTag: 'Frontend',
    roleColor: '#f59e0b',
    roleEmoji: '🖥️',
    specialTopic: {
      topic: 'performance-engineering',
      topicName: 'Performance Engineering',
      title: 'Frontend Performance Engineering Guide',
      metaTitle: 'Frontend Performance Engineering | Core Web Vitals & Rendering | Askia',
      metaDescription: 'How senior frontend engineers approach performance optimization — Core Web Vitals, rendering strategies, bundle optimization, and real user monitoring.',
      headline: 'Build Frontend Systems That Are Fast by Design, Not by Accident',
      intro: 'Frontend performance is the discipline that separates senior frontend engineers from mid-level ones. Most engineers can make a slow page faster after it\'s built. Senior frontend engineers design systems where performance is an emergent property of good architectural decisions — rendering strategy, code splitting, critical path optimization, and caching are chosen up front, not bolted on later.',
      shortAnswer: 'Treat performance as an architectural constraint from day one. Choose rendering strategy (SSR/SSG/CSR/Islands) based on content freshness and interaction requirements, not convention. Then measure with real user data, not just Lighthouse.',
      doFirst: ['You\'re targeting Senior Frontend Engineer or Frontend Architect roles', 'Your pages have Core Web Vitals issues or high LCP/CLS scores', 'You want to articulate performance decisions in system design interviews'],
      skip: ['You\'re early-career without production frontend ownership', 'Performance is not a stated requirement for your current target roles', 'Your apps are already in the 95th percentile on Core Web Vitals'],
      steps: [
        { num: '01', title: 'Choose rendering strategy before writing a line of code', body: 'SSR for dynamic authenticated content, SSG for content that changes infrequently, Islands Architecture for mostly-static pages with interactive components, CSR for pure SPA dashboards. This decision affects every other performance characteristic.' },
        { num: '02', title: 'Optimize the critical rendering path explicitly', body: 'Eliminate render-blocking resources, inline critical CSS, defer non-critical JavaScript. LCP is usually dominated by the largest hero image or above-the-fold text block — optimize that specifically, not the whole page.' },
        { num: '03', title: 'Implement code splitting at route and component boundaries', body: 'Dynamic imports with React.lazy for heavy components. Route-based splitting by default. Analyze bundle composition with webpack-bundle-analyzer to find what\'s actually in your bundles — most engineers are surprised.' },
        { num: '04', title: 'Set performance budgets and enforce them in CI', body: 'Budget by metric: LCP < 2.5s, FID < 100ms, CLS < 0.1. Fail the build if bundles grow past the budget. Performance regressions are always introduced by humans who don\'t know the budget exists.' },
        { num: '05', title: 'Instrument Real User Monitoring (RUM), not just synthetic tests', body: 'Lighthouse is a lab test on one device. RUM shows what real users on real devices in real network conditions actually experience. Use the Web Vitals library to report to your analytics stack. Optimize for the 75th percentile, not the median.' }
      ],
      example: {
        before: 'Our page was slow so we added lazy loading and it got faster.',
        after: 'Diagnosed 4.2s LCP on the product listing page using RUM data showing 75th percentile on 4G mobile. Root cause: 380KB hero image with no responsive srcset and render-blocking font imports. Shipped: next-gen image format (WebP), responsive srcset, font-display:swap, and above-the-fold CSS inlining. LCP improved to 1.8s at 75th percentile across all devices, improving conversion 8% on mobile.',
        note: 'RUM-based diagnosis + root cause + specific interventions + business outcome = senior frontend performance story.'
      },
      stats: [
        { stat: '0.1s', body: 'Improvement in LCP correlates with 8% improvement in conversion rate', source: 'Google/Deloitte research' },
        { stat: '53%', body: 'Of mobile users abandon pages that take more than 3 seconds to load', source: 'Google research' },
        { stat: '$162K', body: 'Median base salary for Senior Frontend Engineers in major tech markets', source: 'Levels.fyi data' }
      ],
      faq: [
        { q: 'Should I prioritize Core Web Vitals over developer experience?', a: 'Performance and DX are not as opposed as they seem. Server Components, streaming SSR, and module federation improve both. The real trade-off is usually between complexity and performance — make that trade-off consciously and document it.' },
        { q: 'How do I make the case for performance work to a product team?', a: 'Translate performance metrics to business outcomes. "Improving LCP from 4s to 2s on our checkout page is projected to increase mobile conversion 6%, worth $800K ARR." Business language gets performance on the roadmap.' }
      ]
    }
  },
  {
    role: 'solutions-architect',
    roleName: 'Solutions Architect',
    roleTag: 'Architecture',
    roleColor: '#10b981',
    roleEmoji: '🏗️',
    specialTopic: {
      topic: 'architecture-decisions',
      topicName: 'Architecture Decision Records',
      title: 'Architecture Decision Records Guide for Solutions Architects',
      metaTitle: 'Architecture Decision Records | Solutions Architect Best Practices | Askia',
      metaDescription: 'How solutions architects create and use Architecture Decision Records (ADRs) to drive better technical decisions and communicate architecture choices across the organization.',
      headline: 'Document Architecture Decisions That Actually Get Followed',
      intro: 'Architecture Decision Records are the difference between architecture that gets adopted and architecture that gets ignored. Most architects document what was decided; great architects document why it was decided, what alternatives were considered, and what conditions would cause them to revisit the decision. ADRs transform architecture from a top-down mandate into an engineering team\'s shared context.',
      shortAnswer: 'An ADR that doesn\'t explain the trade-offs considered and the conditions for revisiting the decision is just a memo. Document the decision context, the alternatives, the consequences, and the triggers for change.',
      doFirst: ['You\'re establishing or improving architecture governance in your organization', 'Engineering teams are making inconsistent technical choices', 'You need to communicate architecture decisions to non-technical stakeholders'],
      skip: ['You\'re working on a small team where informal communication suffices', 'Architecture decisions are stable and undisputed', 'You\'re targeting a role where architecture governance isn\'t a responsibility'],
      steps: [
        { num: '01', title: 'Define the decision context with constraint clarity', body: 'What are the forces at play — performance requirements, team skills, timeline, cost constraints, compliance requirements? A decision made without explicit constraints will be second-guessed by every engineer who didn\'t participate.' },
        { num: '02', title: 'Document at least three alternatives considered', body: 'If you only document the chosen option, you don\'t have an ADR — you have a memo. The alternatives (and why they were rejected) are the most valuable part for the engineers who inherit the system in 18 months.' },
        { num: '03', title: 'State consequences honestly — including negative ones', body: '"This decision trades operational simplicity for scalability. We\'ll need a database migration at 10M users." Honest consequence documentation builds trust and prevents the architecture from being abandoned quietly when the negative consequences appear.' },
        { num: '04', title: 'Define the conditions for revisiting', body: '"Revisit if team grows beyond 50 engineers, if latency SLA tightens to <100ms, or if the primary vendor raises pricing >20%." These triggers prevent outdated decisions from being followed religiously long after the context changed.' },
        { num: '05', title: 'Get the ADR reviewed by the engineers who will implement it', body: 'An architecture decision that surprises the implementation team is an architecture decision that will be worked around. Review creates buy-in and surfaces implementation concerns that change the decision.' }
      ],
      example: {
        before: 'We decided to use a microservices architecture for the new platform.',
        after: 'ADR-042: Event-driven microservices over synchronous REST for the order processing domain. Context: 3 teams, 50K orders/day, P99 latency requirement <500ms, team has Kafka expertise. Alternatives: synchronous REST (rejected: tight coupling, cascading failures), monolith (rejected: team autonomy requirements). Consequences: operational complexity of Kafka, eventual consistency in order status. Revisit trigger: if team size drops below 15 engineers or latency SLA tightens to <100ms.',
        note: 'Context + alternatives + honest consequences + revisit triggers = an ADR that actually guides engineering decisions.'
      },
      stats: [
        { stat: '60%', body: 'Of architecture decisions are reversed within 2 years due to poor documentation', source: 'ThoughtWorks research' },
        { stat: '3×', body: 'Faster onboarding for engineers when architecture decisions are documented with context', source: 'Industry survey data' },
        { stat: '$175K', body: 'Median base salary for Solutions Architects at enterprise tech companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I get engineers to write ADRs without it becoming bureaucracy?', a: 'Keep the format lightweight: context, decision, alternatives, consequences. One page maximum. If writing the ADR takes more than 30 minutes, the template is too complex. ADRs should capture thinking, not replace it.' },
        { q: 'Should every technical decision get an ADR?', a: 'No. ADRs are for decisions that are consequential, hard to reverse, or likely to be questioned. Library choice for a minor utility doesn\'t need an ADR. Database selection for a core service does.' }
      ]
    }
  },
  {
    role: 'qa-sdet',
    roleName: 'QA & SDET',
    roleTag: 'Quality',
    roleColor: '#64748b',
    roleEmoji: '🧪',
    specialTopic: {
      topic: 'test-strategy',
      topicName: 'Test Strategy',
      title: 'Test Strategy Guide for QA Engineers & SDETs',
      metaTitle: 'Test Strategy for QA & SDET | Test Pyramid & Risk-Based Testing | Askia',
      metaDescription: 'How QA engineers and SDETs build test strategies that catch critical bugs, enable fast release cycles, and create observable quality metrics for engineering leadership.',
      headline: 'Build a Test Strategy That Enables Shipping, Not Just Catching Bugs',
      intro: 'The best test strategies are optimized for confidence at speed — they catch the bugs that matter before they reach production, and they don\'t slow down the engineering team doing it. Most QA strategies are optimized for coverage rather than risk, resulting in slow test suites that nobody trusts and everyone works around. A senior SDET or QA Engineer designs test architecture that is as thoughtful as the application architecture.',
      shortAnswer: 'Invest heavily in unit and integration tests at the base of the pyramid, use E2E tests surgically for critical user journeys, and track escaped defect rate as your north star metric — not code coverage percentage.',
      doFirst: ['You\'re designing or overhauling a test strategy for a product team', 'Your test suite is slow, flaky, or not catching bugs before production', 'You need to articulate quality strategy to engineering leadership'],
      skip: ['You\'re working on a greenfield project with no existing tests', 'You\'re in a pure manual QA role without test automation responsibilities', 'Your current strategy is already achieving < 1% escaped defect rate'],
      steps: [
        { num: '01', title: 'Map your test pyramid to your actual risk profile', body: 'Standard pyramid (70% unit / 20% integration / 10% E2E) is a starting point, not a law. A payments system needs more integration tests. A UI-heavy product needs more visual regression tests. Build the pyramid to match your risk, not a generic ratio.' },
        { num: '02', title: 'Identify your critical user journeys and protect them with E2E', body: 'List the 5-10 user journeys that, if broken, would immediately impact revenue or user trust. Checkout, login, core feature activation. These get E2E coverage. Everything else gets unit + integration.' },
        { num: '03', title: 'Eliminate flaky tests systematically', body: 'A 5% flaky test suite means your CI is untrustworthy. Track flakiness rate per test. Quarantine flaky tests immediately. Root cause and fix within 1 sprint. A test that\'s sometimes failing is worse than no test — it trains engineers to ignore red builds.' },
        { num: '04', title: 'Build contract testing for service boundaries', body: 'Consumer-driven contract tests (Pact) prevent the most common integration failures in microservice architectures. They\'re faster than integration tests and catch API contract breaks before they reach staging.' },
        { num: '05', title: 'Report escaped defect rate, not coverage', body: 'Coverage is a leading indicator that\'s easy to game. Escaped defect rate (bugs that reach production) is the outcome metric. Track it by severity and root cause. This is the number that gets QA engineering taken seriously by leadership.' }
      ],
      example: {
        before: 'We have 80% code coverage and run a full regression suite before each release.',
        after: 'Redesigned test strategy from 400 E2E-heavy tests (45min CI) to a 3-layer pyramid: 1,200 unit tests (2min), 300 integration tests with Testcontainers (8min), 40 E2E tests covering 8 critical user journeys (12min). Escaped defect rate dropped from 4.2/sprint to 0.8/sprint. Total CI time: 22 minutes.',
        note: 'Architecture change + specific metrics before/after + CI time + escaped defect rate = SDET impact story that gets Senior roles.'
      },
      stats: [
        { stat: '10×', body: 'Faster to fix bugs caught in unit tests vs production bugs', source: 'IBM research' },
        { stat: '80%', body: 'Of production bugs are caught by 20% of test cases, per risk-based analysis', source: 'Industry testing research' },
        { stat: '$155K', body: 'Median base salary for Senior SDETs at growth-stage tech companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I get engineers to write more unit tests?', a: 'Make it structural, not cultural. Require failing tests for bug reports. Add test coverage to PR review criteria. Pair with engineers on writing their first set of tests for a new service. Mandate and model, don\'t just ask.' },
        { q: 'Should QA own test automation or should engineers own it?', a: 'Engineers should own unit and integration tests. QA engineers own the E2E test suite and contract tests, and set the standards for all test quality. Shared ownership with clear domain boundaries is the right model.' }
      ]
    }
  },
  {
    role: 'product-design',
    roleName: 'Product Design & UX',
    roleTag: 'Design',
    roleColor: '#e879f9',
    roleEmoji: '🎨',
    specialTopic: {
      topic: 'portfolio-presentation',
      topicName: 'Portfolio Presentation',
      title: 'Portfolio Presentation Guide for Product Designers',
      metaTitle: 'UX Portfolio Presentation Guide | Senior Product Designer | Askia',
      metaDescription: 'How senior product designers present portfolios that show design thinking, business impact, and cross-functional influence — not just beautiful screens.',
      headline: 'Present a Design Portfolio That Shows Thinking, Not Just Craft',
      intro: 'Most design portfolios are collections of beautiful screens with no context. Hiring teams for senior product design roles are evaluating your design thinking process, your ability to navigate ambiguity, your cross-functional judgment, and the business outcomes your design decisions drove. A portfolio that shows "before and after" without showing why is a craft portfolio, not a senior design portfolio.',
      shortAnswer: 'Structure each case study around the problem framing, the constraints you navigated, the design alternatives you considered, and the outcome — not the final deliverable.',
      doFirst: ['You\'re targeting Senior Product Designer or Design Lead roles', 'Your portfolio shows final designs but not your design process', 'You want to articulate business impact alongside design craft'],
      skip: ['You\'re targeting pure visual design or brand design roles', 'You\'re early-career and haven\'t led end-to-end design projects', 'Your current portfolio is already consistently opening senior designer doors'],
      steps: [
        { num: '01', title: 'Frame each case study with the business problem, not the design brief', body: '"We needed to redesign the onboarding flow" is a brief. "40% of users dropped off before completing account setup, costing $1.2M ARR in lost activation" is a business problem. Start there — it contextualizes every design decision that follows.' },
        { num: '02', title: 'Show your research methods and what they changed', body: 'User interviews, usability tests, behavioral data analysis. More importantly: show how what you learned changed your design direction. A pivot in your design process is more impressive than a straight line to a polished final screen.' },
        { num: '03', title: 'Present at least two alternative design directions you explored', body: 'Showing that you considered and rejected alternatives demonstrates design judgment. "I explored a wizard-based flow but rejected it because user research showed anxiety about length — so I moved to a progressive disclosure model" is senior thinking.' },
        { num: '04', title: 'Quantify the impact of your design decisions', body: 'Activation rate improvement, task completion rate, time on task, customer satisfaction (CSAT/NPS). Connect the design change to the metric change. "Redesigned onboarding reduced time-to-value from 12 minutes to 4 minutes, improving day-7 retention by 18%."' },
        { num: '05', title: 'Show your cross-functional process', body: 'Who did you work with, and where did you have to advocate for the user perspective against competing pressures? "Engineering wanted to ship a simplified version — I ran a quick usability test that showed 60% of users couldn\'t complete the core task, which changed the decision." That\'s senior design leadership.' }
      ],
      example: {
        before: 'Redesigned the checkout flow, resulting in a cleaner user experience.',
        after: 'Diagnosed 38% checkout abandonment on mobile through funnel analysis + 8 user interviews. Root cause: 5-step form with no progress indication and no guest checkout. Explored 3 design directions; shipped 2-step progressive checkout with guest option. Result: abandonment dropped from 38% to 22%, generating $3.1M additional annual revenue. Presented findings to CPO and VP Engineering.',
        note: 'Problem quantified + research method + alternatives + outcome + executive visibility = senior product designer case study.'
      },
      stats: [
        { stat: '35%', body: 'Average improvement in conversion when UX issues identified in user research are addressed', source: 'Nielsen Norman Group' },
        { stat: '$148K', body: 'Median base salary for Senior Product Designers at growth-stage tech companies', source: 'Industry data' },
        { stat: '88%', body: 'Of design hiring managers say portfolio presentation is the primary evaluation signal', source: 'Design industry survey' }
      ],
      faq: [
        { q: 'How many case studies should my portfolio have?', a: 'Three to five, deep. One flagship case study that shows your full design process end-to-end is more valuable than ten shallow project descriptions. Depth signals seniority; breadth without depth signals execution, not leadership.' },
        { q: 'How do I show NDA-covered work in my portfolio?', a: 'Describe the problem, process, and outcome without showing proprietary screens. Redact or genericize the brand. "For a Fortune 500 e-commerce client, I redesigned the cart abandonment flow, reducing abandonment by 24%." The story is the portfolio, not the screenshots.' }
      ]
    }
  },
  {
    role: 'product-ops',
    roleName: 'Product Operations',
    roleTag: 'ProdOps',
    roleColor: '#84cc16',
    roleEmoji: '⚡',
    specialTopic: {
      topic: 'product-analytics',
      topicName: 'Product Analytics',
      title: 'Product Analytics Guide for Product Operations',
      metaTitle: 'Product Analytics for Product Ops | Metric Frameworks & Funnel Analysis | Askia',
      metaDescription: 'How product operations professionals build analytics frameworks that drive product decisions, track launch health, and connect product metrics to business outcomes.',
      headline: 'Build Product Analytics That Drive Decisions, Not Just Dashboards',
      intro: 'Product operations is the connective tissue between product strategy and business outcomes — and product analytics is its primary tool. The difference between good and great product ops professionals is whether their analytics frameworks help the team make faster, better decisions or just track what already happened. Dashboards that nobody acts on are a product ops failure mode.',
      shortAnswer: 'Start with the decisions that need to be made, not the data you have. Every metric should have an owner, a trigger for action, and a next step — otherwise it\'s decorative.',
      doFirst: ['You\'re establishing or improving product analytics infrastructure for a product team', 'Your team has data but struggles to translate it into product decisions', 'You\'re building launch health monitoring for a new product or feature'],
      skip: ['You\'re a data engineer focused on pipeline infrastructure rather than product insights', 'Your team already has a mature analytics-to-decision workflow', 'You\'re targeting a pure business intelligence role'],
      steps: [
        { num: '01', title: 'Define the decision tree before building the dashboard', body: 'For each metric, ask: what decision will this number change? If the answer is "none right now," don\'t build the metric. "Monthly active users" without a target and an action plan is noise, not signal.' },
        { num: '02', title: 'Build a metric hierarchy: north star, driver, input metrics', body: 'North star: weekly active users. Driver metrics: activation rate, retention, reactivation. Input metrics: feature adoption, onboarding completion. Every driver metric connects to an action the product team can take.' },
        { num: '03', title: 'Instrument launch health dashboards before shipping', body: 'Before any major launch: define success metrics, guardrail metrics, and rollback triggers. "If day-3 retention drops >15% vs control, rollback the experiment." Reactive analytics after launch is too slow for high-velocity teams.' },
        { num: '04', title: 'Build funnel analysis for every core user journey', body: 'Activation funnel, purchase funnel, feature adoption funnel. For each step: completion rate, time to complete, drop-off reason (if you have qualitative data). Funnel analysis is the fastest path from "something is wrong" to "here\'s what to fix."' },
        { num: '05', title: 'Translate metric changes into product recommendations', body: 'A product ops professional who says "activation dropped 12% this week" is an analyst. One who says "activation dropped 12%, driven by the step 3 drop-off, which correlates with the UI change shipped Tuesday — recommend rollback while we investigate" is a strategic operator.' }
      ],
      example: {
        before: 'We track MAU, DAU, and feature adoption on our main dashboard.',
        after: 'Built a 3-tier metric framework (north star: weekly active users / driver: activation, retention, resurrection / input: 12 feature-level metrics). Identified that activation rate was the primary lever — 30% of signups never reached "aha moment." Built step-by-step activation funnel with time-to-complete per step. Found step 3 (team invite) had 65% drop-off. PM shipped simplified invite flow; activation improved 22% in 4 weeks.',
        note: 'Metric hierarchy + funnel analysis + specific finding + product recommendation + outcome = product ops analytics that moves the business.'
      },
      stats: [
        { stat: '40%', body: 'Of product decisions at high-growth companies are made without sufficient data, per survey', source: 'ProductPlan research' },
        { stat: '22%', body: 'Average activation improvement when drop-off root causes are identified and addressed', source: 'Askia client data' },
        { stat: '$138K', body: 'Median base salary for Senior Product Operations managers at growth-stage companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'What analytics tools should product ops own vs data team?', a: 'Product ops should own the product analytics layer (Mixpanel, Amplitude, Heap) and the dashboard layer. Data engineering owns the pipeline and warehouse. The handoff point is the clean event schema — product ops defines what events to capture, data engineering implements the capture.' },
        { q: 'How do I get PMs to actually use analytics dashboards?', a: 'Build dashboards with PMs, not for them. One working session where the PM defines the questions they need answered produces a more useful dashboard than any independently-built reporting suite.' }
      ]
    }
  },
  {
    role: 'technical-program-manager',
    roleName: 'Technical Program Manager',
    roleTag: 'TPM',
    roleColor: '#7c3aed',
    roleEmoji: '📋',
    specialTopic: {
      topic: 'program-execution',
      topicName: 'Program Execution',
      title: 'Program Execution Guide for Technical Program Managers',
      metaTitle: 'Technical Program Management | Cross-Team Execution & Risk Management | Askia',
      metaDescription: 'How Technical Program Managers drive complex cross-team programs to completion — dependency management, risk escalation, and executive communication.',
      headline: 'Run Programs That Deliver, Not Just Track',
      intro: 'Technical Program Management is not project management with a technical badge — it\'s the discipline of coordinating multiple engineering teams around a shared outcome when nobody reports to you. The best TPMs are force multipliers: they remove blockers before engineers hit them, escalate risks before they become crises, and give executives a clear line of sight into complex technical programs without requiring them to read status reports.',
      shortAnswer: 'Your job as a TPM is to reduce uncertainty and increase velocity. If your program is on schedule but the team is working 60-hour weeks, you\'re tracking, not managing. Remove blockers, surface risks early, and drive decisions.',
      doFirst: ['You\'re managing a complex program with multiple engineering teams and external dependencies', 'Your program is drifting and you\'re not sure why', 'You need to improve executive communication about technical programs'],
      skip: ['You\'re managing a single-team project with no cross-team dependencies', 'Your organization doesn\'t have a TPM function', 'You\'re targeting a pure project coordinator role'],
      steps: [
        { num: '01', title: 'Map the critical path before the kickoff meeting', body: 'Identify the longest chain of dependencies that determines program completion. Every meeting, status update, and escalation decision should be filtered through: does this affect the critical path? Critical path clarity is the TPM\'s first deliverable.' },
        { num: '02', title: 'Build a dependency register and review it weekly', body: 'List every external dependency: third-party APIs, other teams\' deliverables, hardware procurement, compliance approvals. For each: owner, due date, risk level, mitigation if it slips. Dependency failures are the #1 cause of program delays.' },
        { num: '03', title: 'Escalate risks before they become blockers', body: '"The authentication team is at 60% capacity and our integration depends on their API by week 6. We need to either negotiate dedicated capacity or de-scope the SSO feature by EOW." That\'s a risk. A blocker is when week 6 arrives and the API isn\'t ready.' },
        { num: '04', title: 'Run a structured weekly status process with color-coded risk signals', body: 'Green (on track) / Yellow (at risk, mitigation in progress) / Red (blocked, escalation needed). Every status item should have an owner and a date. If something has been Yellow for 2 weeks without moving, it\'s Red.' },
        { num: '05', title: 'Write executive summaries that answer "will we hit the date?"', body: 'Executives don\'t read status reports — they read the first paragraph. Lead with: date confidence, critical risks, decisions needed from leadership. Everything else is detail. "We\'re tracking to a July 15 launch at 85% confidence. Two decisions needed from leadership by June 1: [X] and [Y]."' }
      ],
      example: {
        before: 'The program is on track. We had some delays last week but the team is working to catch up.',
        after: 'Program is Yellow. We\'re 2 weeks behind on the payments integration due to an undisclosed API change from the vendor. Current mitigation: engineering team is evaluating fallback to legacy API (adds 3 weeks to integration). Decision needed by Thursday: accept 3-week delay with legacy fallback, or escalate to vendor for emergency support. Recommend escalation.',
        note: 'Specific risk + root cause + mitigation options + decision deadline + recommendation = TPM status update that drives action.'
      },
      stats: [
        { stat: '65%', body: 'Of large technology programs exceed their original schedule', source: 'McKinsey research' },
        { stat: '2×', body: 'Improvement in program on-time delivery with structured dependency management', source: 'Askia client data' },
        { stat: '$168K', body: 'Median base salary for Senior TPMs at major tech companies', source: 'Levels.fyi data' }
      ],
      faq: [
        { q: 'How do I get engineers to update status without it feeling like micromanagement?', a: 'Make status updates pull, not push. Automated status collection from Jira/Linear with human color-coding is much less burdensome than asking for written updates. Reserve human input for risks and blockers, not routine progress.' },
        { q: 'What\'s the difference between a TPM and a PM?', a: 'A PM owns the product outcome — what gets built and why. A TPM owns the program execution — how multiple teams coordinate to build it, when it ships, and what risks need to be managed. Great TPMs understand the product well enough to make trade-off recommendations.' }
      ]
    }
  },
  {
    role: 'staff-principal-engineer',
    roleName: 'Staff & Principal Engineer',
    roleTag: 'Staff+',
    roleColor: '#0ea5e9',
    roleEmoji: '⭐',
    specialTopic: {
      topic: 'technical-strategy',
      topicName: 'Technical Strategy',
      title: 'Technical Strategy Guide for Staff & Principal Engineers',
      metaTitle: 'Technical Strategy for Staff & Principal Engineers | Org-Wide Influence | Askia',
      metaDescription: 'How Staff and Principal Engineers develop and communicate technical strategy, drive org-wide standards, and operate at the level that creates leverage beyond their team.',
      headline: 'Operate at Staff Level: Drive Technical Decisions, Not Just Technical Work',
      intro: 'The jump from Senior to Staff Engineer is the hardest level transition in software engineering — not because the technical bar is higher, but because the scope of work changes fundamentally. Staff Engineers are evaluated on organizational impact, not individual output. The engineers who struggle at Staff level are those who continue to operate like Senior Engineers: executing well within defined scope instead of defining the scope itself.',
      shortAnswer: 'At Staff level, your leverage comes from decisions that affect other engineers, not code you personally write. Identify the highest-leverage technical problem in your org, develop a clear point of view, and drive alignment around it.',
      doFirst: ['You\'ve been Senior for 3+ years and want to build a case for Staff promotion', 'You\'re in a Staff role but unclear how to operate beyond your immediate team', 'You want to articulate your technical strategy in promotion documents or interviews'],
      skip: ['You\'re early-career without Senior-level technical depth', 'You\'re targeting management rather than the IC track', 'You\'re already operating clearly at Principal level'],
      steps: [
        { num: '01', title: 'Identify the highest-leverage technical problem in your organization', body: 'Not the most interesting problem or the one you personally want to solve. The highest-leverage problem is the one where a good solution unblocks multiple teams, reduces systemic risk, or enables a strategic product initiative. That\'s where Staff Engineers should spend their time.' },
        { num: '02', title: 'Develop a point of view before seeking consensus', body: 'Staff Engineers don\'t facilitate consensus — they form a technical opinion, pressure-test it with key stakeholders, and then drive alignment. "What do you think we should do?" is a Senior question. "Here\'s my recommendation and why — what am I missing?" is a Staff question.' },
        { num: '03', title: 'Write a technical strategy document with a clear recommendation', body: 'Problem statement, current state, proposed direction, alternatives considered, risks, success criteria, and implementation phasing. One document that gives every team the context they need to make consistent decisions is more valuable than 10 meetings.' },
        { num: '04', title: 'Create leverage through standards and patterns, not personal code review', body: 'A Staff Engineer who personally reviews every PR is a bottleneck. A Staff Engineer who defines the code review standards, creates linting rules, and builds the internal library that makes the right pattern the easy pattern — that\'s leverage.' },
        { num: '05', title: 'Build executive trust through technical narrative', body: 'VPs and CTOs don\'t read ADRs. But they do listen to 5-minute technical briefings that connect a technical decision to a business outcome. Learn to tell the story of a technical decision in business language — that\'s what gets Staff and Principal Engineers into the room where strategy decisions are made.' }
      ],
      example: {
        before: 'I led the migration project and worked with multiple teams to get it done.',
        after: 'Identified that inconsistent API versioning across 12 services was creating 40% of our cross-team integration failures. Authored the organization-wide API versioning standard (adopted by all 12 teams), built the validation tooling that enforces it in CI, and led the migration of 3 legacy services. Cross-team integration failures dropped 65% in 6 months. This work was specifically cited in my Staff promotion document.',
        note: 'Problem identification + standard creation + tooling + adoption + quantified impact = Staff-level technical leadership story.'
      },
      stats: [
        { stat: '3-5 years', body: 'Average time at Senior before Staff promotion for engineers who achieve it', source: 'Engineering career research' },
        { stat: '$240K', body: 'Median total comp for Staff Engineers at top-tier tech companies', source: 'Levels.fyi data' },
        { stat: '60%', body: 'Of Staff promotions are driven by org-wide project impact, not team-level performance', source: 'Engineering promotion research' }
      ],
      faq: [
        { q: 'How do I find the high-leverage problem worth spending Staff-level time on?', a: 'Ask your skip-level manager: "What technical problem, if solved, would make the most difference to the engineering org?" Then ask the same question of 3 different VPs. The intersection of their answers is usually the highest-leverage problem.' },
        { q: 'Should I stay on the IC track or move into management?', a: 'The right choice depends on what energizes you. If you want to influence through technical decisions and architecture, Staff/Principal is the right path. If you want to influence through people, team dynamics, and organizational design, management is. The comp is comparable at the Senior Staff / Director level — this is a lifestyle and identity choice, not a financial one.' }
      ]
    }
  },
  {
    role: 'account-executive',
    roleName: 'Account Executive',
    roleTag: 'Sales',
    roleColor: '#16a34a',
    roleEmoji: '💼',
    specialTopic: {
      topic: 'pipeline-management',
      topicName: 'Pipeline Management',
      title: 'Pipeline Management Guide for Account Executives',
      metaTitle: 'Sales Pipeline Management for AEs | Qualification & Forecast Accuracy | Askia',
      metaDescription: 'How account executives build, qualify, and manage pipeline to consistently hit quota — MEDDIC, deal qualification, and forecast discipline.',
      headline: 'Build a Pipeline That Actually Closes, Not Just One That Looks Full',
      intro: 'Pipeline management is the discipline that separates AEs who are consistently above quota from those who are perpetually optimistic in forecast calls. Most AEs have pipelines that are too big and too shallow — many opportunities, weak qualification, low close rates. The AEs who win consistently have smaller, more qualified pipelines where every deal has a documented champion, a confirmed pain, and a clear path to a decision.',
      shortAnswer: 'A healthy pipeline has 3× your quota target in qualified, late-stage opportunities. If you need 5× to hit quota, you\'re not qualifying hard enough early — you\'re working to compensate for weak deals, not strong ones.',
      doFirst: ['Your pipeline is large but your close rate is below 25%', 'You\'re consistently sandbagging or missing forecast', 'You want to build a systematic approach to deal qualification'],
      skip: ['You\'re in a new territory with no pipeline built yet', 'You\'re in a high-volume transactional sales role where MEDDIC doesn\'t fit', 'You\'re already consistently above quota with your current approach'],
      steps: [
        { num: '01', title: 'Qualify ruthlessly at the top of funnel with MEDDIC', body: 'Metrics (what\'s the quantified business problem), Economic buyer (who controls the budget), Decision criteria, Decision process, Identify pain, Champion (who will sell internally for you). If you can\'t answer all six after two discovery calls, the deal isn\'t qualified.' },
        { num: '02', title: 'Build a champion inside every deal', body: 'Your champion is not your main contact — it\'s the person who will advocate for your solution in rooms you\'re not in. Test your champion: ask them to arrange a meeting with the economic buyer. If they can\'t or won\'t, they\'re not a real champion.' },
        { num: '03', title: 'Create mutual success plans for late-stage deals', body: 'A mutual success plan (also called a "close plan") is a shared document between you and the buyer outlining: evaluation criteria, decision timeline, stakeholders involved, next steps, and success definition. Buyers who won\'t co-author a close plan are not serious buyers.' },
        { num: '04', title: 'Audit your pipeline weekly against stage criteria', body: 'For each deal, ask: what happened last week, what\'s scheduled this week, and what would kill this deal? Deals that have been in the same stage for more than 2× your average sales cycle are either progressed or removed. An aging pipeline is a false pipeline.' },
        { num: '05', title: 'Forecast from stage criteria, not gut feel', body: '"This deal feels good" is not a forecast input. "We\'ve completed a proof of concept, security review is done, and the economic buyer has verbally committed pending legal approval" is a forecast input. Build your forecast on documented evidence of where each deal actually is.' }
      ],
      example: {
        before: 'I have a strong pipeline and feel good about hitting quota this quarter.',
        after: 'My Q3 forecast is $1.2M with 78% confidence: $400K in commit (legal/procurement, signed MSA), $500K in best-case (POC completed, economic buyer verbal commit), $300K in pipeline (qualified, champion confirmed, early-stage). Three deals at risk: Deal A needs security review cleared by June 10, Deal B needs CFO meeting scheduled this week, Deal C is being shopped against Competitor X.',
        note: 'Stage-based breakdown + confidence level + named risks + specific next actions = AE forecast that management actually trusts.'
      },
      stats: [
        { stat: '28%', body: 'Average win rate for B2B SaaS AEs with structured pipeline management', source: 'Salesforce State of Sales' },
        { stat: '3×', body: 'Pipeline coverage ratio needed to reliably hit quota for most B2B AEs', source: 'Sales industry benchmarks' },
        { stat: '$145K', body: 'Median OTE for Senior Account Executives at growth-stage SaaS companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I tell my manager about a deal slipping without losing credibility?', a: 'Early and with a plan. "Deal X is at risk because [specific reason]. My plan is [specific action] by [specific date]. Here\'s what I need from you to resolve it." Managers lose trust in AEs who bury bad news, not those who surface it early with a mitigation plan.' },
        { q: 'When should I walk away from a deal?', a: 'When you\'ve lost your champion, when the decision criteria have shifted to favor a competitor without a clear path to reposition, or when the economic buyer has gone dark for more than 2 weeks without explanation. Zombie deals cost more in time than they\'re worth in optionality.' }
      ]
    }
  },
  {
    role: 'sales-engineer',
    roleName: 'Sales Engineering',
    roleTag: 'Pre-Sales',
    roleColor: '#d97706',
    roleEmoji: '🔧',
    specialTopic: {
      topic: 'technical-demo',
      topicName: 'Technical Demonstrations',
      title: 'Technical Demonstration Guide for Sales Engineers',
      metaTitle: 'Technical Demos for Sales Engineers | Discovery-Led Demos | Askia',
      metaDescription: 'How sales engineers run technical demonstrations that build technical champions, address objections, and accelerate deal progression.',
      headline: 'Run Demos That Build Champions, Not Just Awareness',
      intro: 'A technical demo is not a product tour — it\'s the moment where a technical evaluator decides whether to become your champion or your obstacle. The best sales engineers run demos that are structured around the prospect\'s specific technical pain, demonstrate exactly the use cases they\'ve pre-discovered, and end with a clear technical win that the evaluator can bring back to their team.',
      shortAnswer: 'Discovery before demo, every time. A demo that runs the same flow for every prospect is a product marketing video. A demo tailored to their stack, their use cases, and their technical evaluator\'s specific concerns is a sales engineering conversation.',
      doFirst: ['You\'re running demos without a structured discovery process beforehand', 'You\'re losing deals in technical validation phases', 'You want to build more technical champions who advocate internally'],
      skip: ['You\'re in a transactional sales-assisted role with no technical evaluation phase', 'Your demos are already consistently advancing deals to POC', 'You\'re targeting a pure post-sales SE role'],
      steps: [
        { num: '01', title: 'Run a technical discovery call before any demo', body: 'Current stack, integration requirements, primary use case, technical evaluator\'s specific concerns, success criteria for the evaluation. If you can\'t answer these before the demo, you\'re guessing at what to show.' },
        { num: '02', title: 'Map your demo flow to their stated problems, not your feature list', body: 'Open with: "Based on what you told us — X, Y, Z — here\'s what I\'ll show today and why it matters for your use case." You\'re not showing everything. You\'re showing the three things that address their top problems.' },
        { num: '03', title: 'Get the technical evaluator talking during the demo', body: '"Does this match how your team handles X?" "How does your current system compare here?" Questions during the demo validate your understanding and turn a passive viewer into an active evaluator. An evaluator who engages is 3× more likely to become a champion.' },
        { num: '04', title: 'Handle technical objections in the demo, not after it', body: '"I notice you\'re using [Competitor Y] for this — let me show you how we handle the migration path and the specific feature gap you mentioned." Addressing objections live shows technical depth and builds trust more than a follow-up email.' },
        { num: '05', title: 'End with a defined technical win and a clear next step', body: '"Based on what I\'ve shown today, do you feel confident this can handle your [specific use case]?" Get a technical yes before leaving the room. Then: "The natural next step is a technical POC focused on [specific integration]. Let\'s define success criteria together today."' }
      ],
      example: {
        before: 'I showed the full platform and they seemed interested in the data integration features.',
        after: 'Discovery revealed their primary pain: 4-hour ETL latency blocking real-time reporting for a $50M enterprise client. Demo focused exclusively on streaming ingestion, showing their specific data schema and the latency reduction from 4h to <5min. Technical evaluator said "this is exactly what we need" and asked to set up a POC. Defined POC success criteria on the call: <10min latency for their specific data volume. Deal advanced to technical validation.',
        note: 'Discovery-informed demo + specific use case + live validation + defined POC success criteria = SE demo that builds a champion.'
      },
      stats: [
        { stat: '67%', body: 'Higher win rate when demos are preceded by structured technical discovery', source: 'Gong research' },
        { stat: '3×', body: 'More likely to advance to POC when technical evaluator engages during demo', source: 'SE industry research' },
        { stat: '$148K', body: 'Median OTE for Senior Sales Engineers at enterprise SaaS companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I handle a prospect who wants a full product tour instead of a focused demo?', a: 'Acknowledge and redirect: "Happy to give you the full picture — but to make the best use of your team\'s time, let me start with the three areas most relevant to what you told us, then we can open it up." Most technical evaluators appreciate the focused approach once they experience it.' },
        { q: 'How do I handle a technical question I can\'t answer in the demo?', a: 'Be honest. "That\'s a great question — I want to give you an accurate answer rather than guess. Let me follow up with a detailed response by tomorrow." Technical evaluators respect intellectual honesty far more than a confident wrong answer.' }
      ]
    }
  },
  {
    role: 'customer-success',
    roleName: 'Customer Success',
    roleTag: 'CS',
    roleColor: '#0891b2',
    roleEmoji: '🤝',
    specialTopic: {
      topic: 'retention-strategy',
      topicName: 'Retention Strategy',
      title: 'Retention Strategy Guide for Customer Success Managers',
      metaTitle: 'Customer Retention Strategy for CSMs | Churn Prevention & Expansion | Askia',
      metaDescription: 'How customer success managers build proactive retention strategies, identify churn risk early, and drive net revenue retention above 110%.',
      headline: 'Build Retention That\'s Systematic, Not Heroic',
      intro: 'The best customer success teams have retention rates that aren\'t dependent on any single CSM heroic effort — they\'re built on proactive health monitoring, structured engagement cadences, and early intervention processes that catch churn risk 90 days before renewal. If your retention strategy is "talk to customers a lot and hope for the best," you\'re not doing customer success — you\'re doing customer service.',
      shortAnswer: 'Build a customer health score, define the intervention playbooks that respond to each health signal, and measure net revenue retention — not just gross retention. Expansion is the proof that your CS model works.',
      doFirst: ['Your churn rate is above industry benchmark for your segment', 'You\'re managing renewals reactively rather than proactively', 'You want to build a systematic approach to identifying and preventing churn'],
      skip: ['You\'re in a new CS role still learning the product and customer base', 'Your churn rate is already below 5% annually', 'You\'re targeting a pure support role without renewal ownership'],
      steps: [
        { num: '01', title: 'Build a customer health score with leading indicators', body: 'Lagging indicators (NPS, renewal rate) tell you what already happened. Leading indicators tell you what\'s about to happen: login frequency trend, feature adoption depth, support ticket sentiment, champion turnover. Weight leading indicators 70% in your health score.' },
        { num: '02', title: 'Define intervention playbooks for each health signal', body: 'Health score drops 20 points → CSM outreach within 48 hours with specific agenda. Champion leaves → executive reach-out within 1 week + new champion identification. QBR missed → escalation to CS leadership at 4 weeks. Playbooks remove guesswork and make CS scalable.' },
        { num: '03', title: 'Run structured quarterly business reviews, not status updates', body: 'A QBR answers: value delivered (in customer\'s metrics, not your activity metrics), goals for next quarter, risks to achieving those goals, expansion opportunities. A QBR that\'s a product update isn\'t a QBR — it\'s a pitch.' },
        { num: '04', title: 'Build executive relationships, not just champion relationships', body: 'Your champion leaves. If you have no relationship with their VP, the account is suddenly at risk with an unfamiliar evaluator. Invest 20% of your account engagement at the executive level even when things are going well.' },
        { num: '05', title: 'Measure net revenue retention, not just gross retention', body: 'NRR above 110% means your expansion is outpacing your churn — that\'s the proof of a healthy CS model. Track expansion pipeline by account alongside renewal health. CS teams that drive expansion have organizational leverage that purely defensive CS teams don\'t.' }
      ],
      example: {
        before: 'We checked in with the customer regularly and they seemed happy, but they churned at renewal.',
        after: 'Health score dropped from 78 to 52 in Q2 due to login frequency decline and 0 API calls in 3 weeks. Triggered playbook: CSM discovery call revealed integration was broken after customer\'s infrastructure migration. Connected their DevOps team with our support engineering within 24 hours. Integration restored in 3 days. Account renewed at 120% of prior ARR with expanded license. NRR for my portfolio: 118%.',
        note: 'Health signal + playbook trigger + root cause discovery + rapid resolution + expansion = CS retention that drives business outcomes.'
      },
      stats: [
        { stat: '5-25×', body: 'More expensive to acquire a new customer than retain an existing one', source: 'Harvard Business Review' },
        { stat: '110%+', body: 'Net revenue retention benchmark for top-quartile B2B SaaS CS teams', source: 'Bessemer Venture Partners' },
        { stat: '$128K', body: 'Median base salary for Senior CSMs at growth-stage SaaS companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I handle a customer who is already in churn conversations?', a: 'Lead with understanding, not defensiveness. "I want to understand what\'s driven you to this point — not to change your mind, but to give us the chance to address what\'s broken." Then solve the real problem, not the surface objection. Win rates on late-stage churn saves are higher than most CSMs expect.' },
        { q: 'How many accounts can a CSM effectively manage?', a: 'Depends on contract value and complexity. $50K+ enterprise accounts: 20-40. $10-50K mid-market: 50-100. Below $10K with heavy pooled model: 150+. If you\'re managing too many to have genuine relationships with each champion, your retention will reflect that.' }
      ]
    }
  },
  {
    role: 'revenue-operations',
    roleName: 'Revenue Operations',
    roleTag: 'RevOps',
    roleColor: '#dc2626',
    roleEmoji: '📈',
    specialTopic: {
      topic: 'revops-system-design',
      topicName: 'RevOps System Design',
      title: 'Revenue Operations System Design Guide',
      metaTitle: 'RevOps System Design | CRM Architecture & GTM Infrastructure | Askia',
      metaDescription: 'How Revenue Operations leaders design GTM systems — CRM architecture, attribution models, lead routing, and the tech stack that enables data-driven sales and marketing.',
      headline: 'Design Revenue Systems That Give GTM Teams an Unfair Advantage',
      intro: 'Revenue Operations is the engineering function of the go-to-market team. When RevOps is done well, sales reps have the right leads at the right time, marketing can measure what drives pipeline, and the CEO can predict revenue with confidence. When it\'s done poorly, RevOps is an administrative overhead that produces reports nobody trusts. The difference is systems design — CRM architecture, data integrity, and automation that reflects how deals actually flow.',
      shortAnswer: 'Start with the data model, not the tools. A CRM configured around your actual sales motion — stages that reflect real buyer behavior, not aspirational process — is worth more than any tool stack.',
      doFirst: ['Your CRM data is dirty and your forecast is unreliable', 'Marketing and sales are using different definitions of "qualified lead"', 'You\'re scaling from 10 to 50 AEs and your current RevOps systems won\'t handle the load'],
      skip: ['You\'re at a very early-stage startup where RevOps overhead isn\'t justified', 'You\'re in a pure sales ops role focused on enablement rather than systems', 'Your GTM systems are mature and your primary challenge is strategy, not infrastructure'],
      steps: [
        { num: '01', title: 'Define your revenue data model before touching your CRM', body: 'What are your objects? Lead, Contact, Account, Opportunity, Product, Contract. How do they relate? What does "qualified" mean in each stage? A CRM configured on top of a bad data model will be wrong no matter how sophisticated the technology.' },
        { num: '02', title: 'Design lead routing that reflects actual rep capacity and ICP', body: 'Round-robin routing is easy. Intelligent routing — matching leads to reps based on territory, vertical, company size, and rep capacity — drives better conversion. Define your routing logic explicitly before implementing it.' },
        { num: '03', title: 'Build a single attribution model and make it the source of truth', body: 'First-touch, last-touch, and linear attribution all tell different stories. Pick one model (multi-touch linear for most B2B SaaS), make it the source of truth, and stop letting marketing and sales argue about who gets credit for pipeline.' },
        { num: '04', title: 'Automate data hygiene, don\'t rely on rep discipline', body: '"Please fill in the close date field" is a policy. An automation that requires a close date before an opportunity can advance to Proposal stage is a system. Systems win over policies every time.' },
        { num: '05', title: 'Build a forecast model that accounts for stage velocity, not just pipeline value', body: '"$2M in pipeline" is not a forecast. "3 deals at Proposal/Negotiation (avg close rate 65%, avg days to close 18 days), 8 deals at Demo/Evaluation (avg close rate 30%)..." is a forecast. Model stage velocity and win rates to produce a confidence-weighted forecast.' }
      ],
      example: {
        before: 'We have Salesforce set up and the sales team logs their opportunities.',
        after: 'Redesigned Salesforce data model: standardized opportunity stages to match actual buyer journey (7 stages with explicit entry/exit criteria), implemented lead scoring driving 40% reduction in SDR time on unqualified leads, built multi-touch attribution model in Marketo + Salesforce that reconciled $1.2M previously unattributed pipeline. Forecast accuracy improved from 62% to 89% within 2 quarters.',
        note: 'Data model + lead routing + attribution + automation + forecast accuracy improvement = RevOps system design that drives GTM outcomes.'
      },
      stats: [
        { stat: '20%', body: 'Revenue increase for companies with aligned sales, marketing, and CS operations', source: 'SiriusDecisions research' },
        { stat: '89%', body: 'Forecast accuracy achievable with stage-velocity-based forecasting models', source: 'Askia client data' },
        { stat: '$145K', body: 'Median base salary for Senior RevOps Managers at growth-stage SaaS', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I get the sales team to maintain CRM hygiene?', a: 'Make it impossible to proceed without the data, not just unpleasant. Salesforce validation rules that block stage progression without required fields are 100× more effective than training and manager nagging. Design systems that make the right behavior the easy behavior.' },
        { q: 'Should RevOps own the sales tech stack or should IT?', a: 'RevOps should own the configuration and business logic of GTM tools (CRM, MAP, engagement platforms). IT should own the underlying infrastructure, security, and integrations. The distinction: if it requires understanding the sales motion to configure it, RevOps owns it.' }
      ]
    }
  },
  {
    role: 'marketing-growth',
    roleName: 'Marketing & Growth',
    roleTag: 'Marketing',
    roleColor: '#9333ea',
    roleEmoji: '📣',
    specialTopic: {
      topic: 'growth-experiments',
      topicName: 'Growth Experiments',
      title: 'Growth Experiments Guide for Marketing & Growth Teams',
      metaTitle: 'Growth Experimentation for Marketing | A/B Testing & Growth Loops | Askia',
      metaDescription: 'How growth marketers and growth engineers design, run, and learn from experiments that compound into sustainable user and revenue growth.',
      headline: 'Run Growth Experiments That Compound, Not Just Convert',
      intro: 'Most marketing teams run A/B tests. Growth teams run experiments — and the difference is systematic. An A/B test answers "does variant B convert better?" A growth experiment answers "does this lever actually drive the metric we care about, and if so, how do we amplify it?" The compounding effect of a good growth experiment is a sustainable loop, not a one-time lift.',
      shortAnswer: 'Prioritize experiments by expected impact × confidence × ease, not by whatever\'s easiest to build. A 20% improvement in activation compounds faster than a 5% improvement in ad CTR because activation affects every downstream metric.',
      doFirst: ['You\'re running experiments but not seeing compounding growth effects', 'Your team runs tests without a clear hypothesis and success metric', 'You want to build a systematic experiment roadmap rather than ad hoc testing'],
      skip: ['You\'re pre-product-market fit and need to learn qualitatively before testing quantitatively', 'You have insufficient traffic for statistically significant experiments', 'You\'re in a brand marketing role where quantitative experimentation isn\'t the primary tool'],
      steps: [
        { num: '01', title: 'Map your growth model before designing experiments', body: 'Acquisition → activation → retention → referral → revenue. Where is your biggest leak? The answer determines where experiments will have the most leverage. Most teams experiment at the acquisition layer when the activation layer has a much bigger hole.' },
        { num: '02', title: 'Write a hypothesis in the form: "We believe X will cause Y because Z"', body: '"We believe reducing the signup form to 2 fields will increase activation because our session data shows 60% drop-off on field 3" is a testable hypothesis. "Let\'s try a simpler signup form" is a guess. The "because Z" is what turns a test result into a learning.' },
        { num: '03', title: 'Define success and guardrail metrics before running the test', body: 'Primary metric: activation rate. Guardrail metrics: data quality score (guard against low-quality signups), day-7 retention (guard against activating users who don\'t retain). A test that lifts activation but tanks retention is a failure, not a success.' },
        { num: '04', title: 'Run tests long enough for statistical significance at your traffic level', body: 'The minimum detectable effect (MDE) at your traffic volume determines minimum test runtime. Under-running tests creates false positives. Use a sample size calculator before you start, not after you see a number you like.' },
        { num: '05', title: 'Build the learnings register, not just the results register', body: '"Variant B won at 92% confidence, +18% activation" is a result. "Users who skip the team invite step in onboarding have 40% lower day-30 retention, which means the invite step is load-bearing for retention even though it reduces activation" is a learning. Learnings compound. Results don\'t.' }
      ],
      example: {
        before: 'We ran 12 A/B tests last quarter and improved signup conversion by 8%.',
        after: 'Built a growth model identifying activation as the primary constraint (28% of signups reached "aha moment"). Ran 4 activation experiments in 6 weeks: simplified onboarding (no impact), in-app guidance (no impact), early value demonstration (+14% activation, 94% confidence), and team invite prompt (+22% activation, 99% confidence). Implemented both winners. Activation improved from 28% to 41%, driving 18% improvement in monthly ARR.',
        note: 'Growth model → constraint identification → targeted experiments → measured outcomes → ARR impact = growth experimentation that compounds.'
      },
      stats: [
        { stat: '2-3×', body: 'Higher revenue growth for companies with mature experimentation programs vs ad hoc testing', source: 'Harvard Business Review' },
        { stat: '80%', body: 'Of growth experiments don\'t produce statistically significant results — velocity matters', source: 'Growth team research' },
        { stat: '$148K', body: 'Median base salary for Senior Growth Marketing Managers at growth-stage tech', source: 'Industry data' }
      ],
      faq: [
        { q: 'How many experiments should we run per month?', a: 'At most companies, 4-8 per month is realistic while maintaining statistical rigor. Volume without rigor produces false confidence. Better to run 4 well-designed experiments than 20 poorly-designed ones.' },
        { q: 'How do I handle experiments that conflict with brand or legal constraints?', a: 'Build the constraint list before designing experiments, not after. A growth experiment backlog that ignores brand guidelines or legal requirements wastes the entire team\'s time. Run all experiment concepts through brand and legal before committing to design.' }
      ]
    }
  },
  {
    role: 'content-seo',
    roleName: 'Content & SEO',
    roleTag: 'Content',
    roleColor: '#ca8a04',
    roleEmoji: '✍️',
    specialTopic: {
      topic: 'content-strategy',
      topicName: 'Content Strategy',
      title: 'Content Strategy Guide for Content & SEO Professionals',
      metaTitle: 'Content Strategy for SEO & Content Teams | Topical Authority & Pipeline | Askia',
      metaDescription: 'How content and SEO professionals build content strategies that drive organic pipeline, establish topical authority, and connect content investment to revenue.',
      headline: 'Build Content That Generates Pipeline, Not Just Traffic',
      intro: 'Most content strategies are built around traffic goals. The best content strategies are built around pipeline goals — specific content assets that attract, educate, and convert the specific buyer persona the business needs to reach. Traffic without intent is vanity. A content strategy that drives 50% less traffic but 3× more qualified pipeline is a better content strategy.',
      shortAnswer: 'Map every content investment to a buyer persona, a stage of the buying journey, and a conversion metric. Traffic and rankings are intermediate metrics. Pipeline contribution is the outcome.',
      doFirst: ['Your content team is producing content but can\'t show pipeline attribution', 'Your SEO strategy is ranking for keywords that don\'t convert', 'You want to build topical authority in a specific domain to drive compounding organic growth'],
      skip: ['You\'re pre-launch with no product or audience yet', 'You\'re in a brand awareness role where pipeline attribution isn\'t the primary goal', 'Your current content strategy is already generating pipeline above target'],
      steps: [
        { num: '01', title: 'Map your ICP\'s buying journey before writing a word', body: 'What does your ideal buyer search for when they first become aware of the problem? When they\'re evaluating solutions? When they\'re comparing you to competitors? Each stage needs different content — awareness content that ranks should not read like bottom-of-funnel product pages.' },
        { num: '02', title: 'Build topical authority through content clusters, not individual posts', body: 'A pillar page covering the full topic + 10-15 cluster pages covering subtopics = topical authority signal that Google rewards with sustained rankings. One great post that exists alone is fragile. A content cluster is defensible.' },
        { num: '03', title: 'Prioritize keywords by traffic × intent × conversion rate', body: '"Best [category] software" converts at 3-5× the rate of "[category] tutorial" despite similar traffic. Prioritize high-intent keywords over high-traffic keywords if pipeline is your goal. Build the intent analysis before the keyword list.' },
        { num: '04', title: 'Instrument content-to-pipeline attribution before publishing', body: 'UTM parameters, first-touch attribution, content assist attribution. If you can\'t trace which content assets influenced which deals, you can\'t make investment decisions. Attribution infrastructure is a content strategy prerequisite, not a nice-to-have.' },
        { num: '05', title: 'Build content that earns links and builds domain authority passively', body: 'Original research, definitive guides, and tools earn links without outreach. A single well-cited study can earn 50+ links over 2 years. Data-driven content is harder to produce but generates compounding authority that no amount of link-building budget can replicate.' }
      ],
      example: {
        before: 'We published 20 blog posts last quarter and grew traffic by 15%.',
        after: 'Built content strategy around 3 ICP segments for B2B SaaS security buyers. Published 12-piece topical cluster on cloud security compliance (pillar + 11 clusters). Cluster now ranks for 340 keywords including 4 high-intent commercial terms. Content attributed to 22% of organic pipeline in Q4 ($480K influenced ARR). Cost per influenced opportunity: $1,200 vs $4,800 for paid.',
        note: 'ICP targeting + topical cluster + intent-focused keywords + attribution + pipeline comparison = content strategy that earns investment.'
      },
      stats: [
        { stat: '3×', body: 'More pipeline per dollar for organic content vs paid acquisition at scale', source: 'HubSpot research' },
        { stat: '16 months', body: 'Average time for content cluster to reach ranking stability', source: 'Ahrefs research' },
        { stat: '$128K', body: 'Median base salary for Senior Content Strategists and SEO Managers', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I show content ROI to leadership that thinks in revenue, not traffic?', a: 'Build content attribution into your CRM from day one. Tag every lead with first-touch content source. Run a quarterly report showing influenced pipeline by content piece. "This pillar page influenced $240K in pipeline this quarter" is a CFO-friendly content metric.' },
        { q: 'Should we prioritize creating new content or updating existing content?', a: 'Update first for most established sites. Refreshing a post that ranks in positions 5-15 with updated data, improved structure, and new examples often produces more traffic gain than publishing a new post competing in a crowded SERP.' }
      ]
    }
  },
  {
    role: 'accounting-controller',
    roleName: 'Accounting & Controller',
    roleTag: 'Accounting',
    roleColor: '#15803d',
    roleEmoji: '🧾',
    specialTopic: {
      topic: 'close-process',
      topicName: 'Financial Close Process',
      title: 'Financial Close Process Guide for Accountants & Controllers',
      metaTitle: 'Financial Close Process Optimization | Controller & Senior Accountant | Askia',
      metaDescription: 'How Controllers and Senior Accountants optimize the monthly financial close process — automation, reconciliation workflows, and close timeline reduction.',
      headline: 'Close the Books Faster Without Sacrificing Accuracy',
      intro: 'The monthly close is the moment where accounting\'s value is visible — or its inefficiency is felt. Controllers and accounting leaders who optimize the close process create real organizational leverage: faster financial reporting for business decisions, less last-week-of-month burnout for the accounting team, and the credibility that comes from being ahead of the business, not behind it. A 12-day close is an accounting problem. A 5-day close is an organizational asset.',
      shortAnswer: 'The fastest path to close acceleration is eliminating manual reconciliation steps through systematic automation and pre-close work. Map every close task, identify the critical path, and automate anything that\'s recurring and rule-based.',
      doFirst: ['Your monthly close takes more than 7 business days', 'Your team works unsustainable hours in the last week of each month', 'You\'re preparing for an audit and want to improve close documentation'],
      skip: ['You\'re in a startup with a simple single-entity structure and no complex accounting', 'Your close process is already under 4 days', 'You\'re targeting a pure tax or audit role without close responsibility'],
      steps: [
        { num: '01', title: 'Map every close task and the critical path', body: 'List every task, its owner, its dependencies, and its typical duration. Then identify the critical path — the chain of dependent tasks that determines close date. Only critical path tasks matter for timeline reduction.' },
        { num: '02', title: 'Move everything possible to pre-close or continuous close', body: 'Bank reconciliations that happen daily instead of on day 3 of close. Revenue recognition that runs automatically each week. Accruals that are templated and ready to post on day 1. The goal is zero surprises at close start.' },
        { num: '03', title: 'Automate recurring journal entries and reconciliations', body: 'Prepaid amortization, depreciation, intercompany eliminations, and standard accruals should never require a human decision at close time. Automate the rule-based entries. Reserve human judgment for non-standard items.' },
        { num: '04', title: 'Build a close checklist with hard deadlines by day', body: 'Day 1: all bank recs complete. Day 2: all sub-ledger recs complete. Day 3: accruals posted. Day 4: management review. Day 5: final trial balance. Deadlines create urgency; checklists create accountability.' },
        { num: '05', title: 'Create a variance analysis template that runs automatically', body: 'Variance analysis that requires someone to build a spreadsheet at day 7 is a bottleneck. A template that pulls actuals vs. budget automatically and flags variances above a threshold turns a half-day analysis into a 30-minute review.' }
      ],
      example: {
        before: 'We close in 10 business days. The team works weekends at the end of every month.',
        after: 'Mapped 47 close tasks to a dependency chart. Identified 12 tasks on the critical path. Moved 8 reconciliations to continuous close (daily automated), automated 6 recurring journal entries, templated variance analysis. Close timeline reduced from 10 business days to 5 in 3 months. Zero weekend work in last 2 quarters. Team overtime cost reduced $24K annually.',
        note: 'Task mapping + critical path + automation + continuous close = controller improvement story that demonstrates systems thinking and business impact.'
      },
      stats: [
        { stat: '5 days', body: 'Average close time for top-quartile finance teams', source: 'Ventana Research' },
        { stat: '43%', body: 'Of finance teams report close process as top operational pain point', source: 'BlackLine research' },
        { stat: '$138K', body: 'Median base salary for Controllers at mid-market companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I convince leadership to invest in close automation tools?', a: 'Translate the current cost in labor hours to dollars. "Our current 10-day close costs $18K in overtime per quarter, plus the business makes decisions on outdated data for an extra 5 days each month." Add the risk cost of manual errors. The ROI calculation for automation tools is usually compelling.' },
        { q: 'How do I maintain accuracy while accelerating the close?', a: 'The answer is systematic automation, not speed pressure. A well-designed automated reconciliation is more accurate than a human working at 11pm on the last day of close. Acceleration through automation improves accuracy; acceleration through schedule compression degrades it.' }
      ]
    }
  },
  {
    role: 'strategy-consulting',
    roleName: 'Strategy & Consulting',
    roleTag: 'Strategy',
    roleColor: '#7e22ce',
    roleEmoji: '♟️',
    specialTopic: {
      topic: 'case-interviews',
      topicName: 'Case Interviews',
      title: 'Case Interview Guide for Strategy & Consulting Professionals',
      metaTitle: 'Case Interview Preparation | Strategy & Management Consulting | Askia',
      metaDescription: 'How to prepare for case interviews at McKinsey, BCG, Bain, and boutique strategy firms — structured thinking, hypothesis-driven analysis, and recommendation delivery.',
      headline: 'Crack Case Interviews With Hypothesis-First Thinking',
      intro: 'Case interviews test a specific and learnable skill: structured thinking under uncertainty. The candidates who succeed at top consulting firms are not the ones with the best business knowledge — they\'re the ones who can break an ambiguous business problem into a clear structure, form and test hypotheses quickly, and communicate a confident recommendation despite incomplete data. These skills are developed through deliberate practice, not intuition.',
      shortAnswer: 'Lead with a clear problem structure and a hypothesis within 2 minutes of receiving the case. Interviewers are evaluating whether you can drive toward a recommendation, not whether you can consider every possible angle.',
      doFirst: ['You\'re recruiting for a strategy consulting role or MBA-level program associate position', 'You\'re an experienced hire targeting a senior consulting role from industry', 'Case interviews are your primary conversion blocker'],
      skip: ['You\'re already at a top consulting firm and using case interviews to coach others', 'You\'re targeting internal strategy roles where case interviews aren\'t used', 'You\'re in the early stages of preparation and haven\'t reviewed the basic frameworks yet'],
      steps: [
        { num: '01', title: 'Frame the problem and state a hypothesis before structuring', body: '"The client\'s profits have declined. My initial hypothesis is that this is a revenue problem rather than a cost problem based on the industry context you described. Let me structure the analysis to test this." Leading with a hypothesis signals confidence and drives the case forward.' },
        { num: '02', title: 'Use MECE structures, not memorized frameworks', body: 'The McKinsey interview team has heard the 4Ps and Porter\'s Five Forces 10,000 times. Custom, mutually exclusive, collectively exhaustive structures that fit the specific problem are more impressive — and more useful. Frameworks are training wheels, not the answer.' },
        { num: '03', title: 'Do the math out loud and check your work', body: 'Case math is not hard. Arithmetic errors under pressure are. Practice doing market sizing and profitability math out loud, checking orders of magnitude as you go. "That seems too large — let me check that math" shows good judgment, not weakness.' },
        { num: '04', title: 'Synthesize at every checkpoint, not just at the end', body: '"Based on what we\'ve analyzed so far, the revenue decline appears to be concentrated in the premium segment, which suggests a competitive positioning issue rather than a demand problem. Let\'s test that." Synthesis at each step keeps the interviewer oriented and shows you\'re driving toward a recommendation, not just analyzing.' },
        { num: '05', title: 'Deliver a recommendation with confidence and conviction', body: '"Based on our analysis, I recommend the client exit the premium segment and focus resources on the mid-market where they have a defensible cost advantage. Three actions in order of priority..." Confident, specific, prioritized. Interviewers evaluate whether you can make a decision, not just analyze one.' }
      ],
      example: {
        before: 'I need to analyze all the factors that could be causing the profit decline.',
        after: 'My hypothesis is that this is a revenue issue in the premium segment rather than a cost problem, based on the flat industry cost benchmark you mentioned. I\'d like to structure the analysis around: premium vs. standard segment revenue trends, price vs. volume decomposition, and competitive dynamics in premium. Can we start with the segment revenue breakdown?',
        note: 'Hypothesis + MECE structure + specific first question = case interview approach that impresses McKinsey/BCG/Bain interviewers.'
      },
      stats: [
        { stat: '1-2%', body: 'Acceptance rate at McKinsey, BCG, and Bain from cold application', source: 'Firm recruiting data' },
        { stat: '200+', body: 'Cases needed to develop strong case interview performance from a cold start', source: 'Consulting recruiting research' },
        { stat: '$165K', body: 'Median total comp for MBB Associates (post-MBA)', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I prepare for case interviews while working full-time?', a: '30-45 minutes of daily practice is more effective than marathon weekend sessions. Focus the first month on structure and hypothesis formation. Add math practice in month 2. Add mock interviews with feedback in month 3. Consistent practice over 3 months is the minimum for strong MBB preparation.' },
        { q: 'Should I memorize frameworks or develop custom structures?', a: 'Learn the major frameworks well enough to build on them, then practice building custom structures for specific problem types. A memorized profitability framework is a starting point. A custom structure that fits the specific case context is what passes MBB interviews.' }
      ]
    }
  },
  {
    role: 'business-operations',
    roleName: 'Business Operations',
    roleTag: 'BizOps',
    roleColor: '#0369a1',
    roleEmoji: '⚙️',
    specialTopic: {
      topic: 'process-design',
      topicName: 'Process Design',
      title: 'Process Design Guide for Business Operations Professionals',
      metaTitle: 'Business Process Design | BizOps & Operational Excellence | Askia',
      metaDescription: 'How business operations professionals design, implement, and improve business processes that scale — from workflow mapping to automation and change management.',
      headline: 'Design Processes That Scale Without Adding Headcount',
      intro: 'Business operations is the function that determines whether a company grows efficiently or grows chaotically. The difference between a 200-person company that operates like a 50-person company and one that operates like a 500-person company is process quality. BizOps professionals who design processes that are simple, measurable, and automatable create organizational leverage that shows up in gross margin and employee experience simultaneously.',
      shortAnswer: 'Good process design starts with the outcome, not the process. What does success look like for this workflow? Then design backward from that outcome — removing every step that doesn\'t contribute to it.',
      doFirst: ['A process has broken down as the company has scaled', 'You\'re implementing a new operational workflow for the first time', 'You\'re preparing a BizOps case study for an interview'],
      skip: ['You\'re in an execution role without process design responsibilities', 'The process you\'re working on requires compliance validation before redesign', 'You\'re at a very early stage company where formal process is premature'],
      steps: [
        { num: '01', title: 'Map the current process before designing the future state', body: 'Interview every person involved. Document every handoff, every approval, every exception. You will find steps that nobody knows why they exist. You will find manual work that\'s repeated 3 times by different people. You can\'t design a better future without understanding why the current state exists.' },
        { num: '02', title: 'Define the outcome metric before redesigning', body: 'What does a successful process look like, in measurable terms? "Faster" is not a metric. "Time-to-onboard new customer from signed contract to first active user: 5 days vs current 14 days" is a metric. Design to the metric, not to your intuition of a better process.' },
        { num: '03', title: 'Identify and eliminate non-value-adding steps first', body: 'In most broken processes, 30-50% of steps exist because of historical organizational politics, not because they add value. Kill those first. Automating a wasteful process makes a fast wasteful process. Eliminate waste before automating.' },
        { num: '04', title: 'Design for the exception, not just the happy path', body: 'Most processes break on exceptions. "What happens when the customer doesn\'t respond within 48 hours? What happens when the system fails? What happens when the owner is on leave?" Document exception handling explicitly — that\'s where most process failures live.' },
        { num: '05', title: 'Build change management into the process design, not after it', body: 'A perfect process that no one follows is a failed process. Involve the people who will run the process in the design. Pilot with a small team before rolling out. Document the "why" of each step so people don\'t revert to old habits when the designer leaves the company.' }
      ],
      example: {
        before: 'Our customer onboarding process is inconsistent and takes different amounts of time for different customers.',
        after: 'Mapped the current 23-step onboarding process with 6 cross-functional handoffs. Identified 8 steps with no clear owner and 4 duplicate data entry steps. Redesigned to 12 steps with automated Salesforce-to-Zendesk handoff, self-serve portal for customer data collection, and clear SLA at each step. Onboarding time reduced from 14 days to 6 days. CSAT at onboarding completion improved from 7.2 to 8.9 (10-point scale).',
        note: 'Current state mapping + waste elimination + automation + clear ownership + measurement = BizOps process design that creates organizational leverage.'
      },
      stats: [
        { stat: '40%', body: 'Of business processes could be automated or eliminated with proper process analysis', source: 'McKinsey research' },
        { stat: '30%', body: 'Reduction in operational costs achievable through systematic process redesign', source: 'Deloitte operations research' },
        { stat: '$138K', body: 'Median base salary for Senior BizOps Managers at growth-stage companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I get buy-in for process changes from teams who didn\'t ask for it?', a: 'Show them the data on what the current process costs them personally — time, rework, frustration. Then involve them in the redesign. People who help design a process own it. People who have a process imposed on them route around it.' },
        { q: 'When should I use a process tool vs a spreadsheet?', a: 'Spreadsheets for processes run by one person or a small team where the logic is visible and ownership is clear. Process tools (Notion, Asana, Monday, Zapier) for processes that cross multiple people or teams, have recurring triggers, or need audit trails.' }
      ]
    }
  },
  {
    role: 'project-program-manager',
    roleName: 'Project & Program Manager',
    roleTag: 'PjM/PgM',
    roleColor: '#b45309',
    roleEmoji: '📅',
    specialTopic: {
      topic: 'delivery-frameworks',
      topicName: 'Delivery Frameworks',
      title: 'Delivery Frameworks Guide for Project & Program Managers',
      metaTitle: 'Delivery Frameworks for Project Managers | Agile, Waterfall & Hybrid | Askia',
      metaDescription: 'How project and program managers choose and adapt delivery frameworks — Agile, Scrum, Kanban, waterfall, and hybrid — to match project complexity and team context.',
      headline: 'Choose the Right Delivery Framework for the Project, Not the Trend',
      intro: 'The most common project management mistake is applying the same delivery framework to every project regardless of context. Agile works beautifully for product development with evolving requirements. It\'s a poor fit for infrastructure migrations with hard external deadlines and fixed scope. Senior project and program managers choose frameworks based on project characteristics — uncertainty level, stakeholder distribution, team maturity, and deadline flexibility — not organizational fashion.',
      shortAnswer: 'Map your project on two axes: requirements certainty and delivery flexibility. High certainty + low flexibility = waterfall-adjacent. Low certainty + high flexibility = agile-adjacent. Most real projects live in the hybrid middle.',
      doFirst: ['You\'re starting a new project and choosing a delivery methodology', 'Your current framework isn\'t working for your project type', 'You want to articulate your framework thinking in a PM interview'],
      skip: ['Your organization has mandated a specific framework with no flexibility', 'You\'re managing a very simple project with no cross-team dependencies', 'You\'re in a role where delivery methodology is decided above your level'],
      steps: [
        { num: '01', title: 'Assess requirements certainty and delivery flexibility before choosing a framework', body: 'Can requirements change after you start? How locked is the delivery date? Who decides what "done" means? These answers tell you more about the right framework than any methodology preference.' },
        { num: '02', title: 'Use Scrum for product teams with evolving requirements and sprint capacity', body: 'Sprint planning, daily standups, retrospectives. The ceremonies serve a purpose: they create regular checkpoints for re-prioritization. Scrum without genuine backlog grooming and retrospective action items is theater.' },
        { num: '03', title: 'Use Kanban for continuous flow work without sprint-based delivery', body: 'Support operations, DevOps maintenance, content pipelines, legal review queues. Kanban\'s WIP limits prevent the "everyone is busy but nothing is done" failure mode better than sprint planning for these contexts.' },
        { num: '04', title: 'Use waterfall or milestone-based planning for fixed-scope external commitments', body: 'Regulatory deadlines, client contracts, infrastructure migrations with fixed maintenance windows. When "we\'ll get there when we\'re ready" is not an acceptable answer, milestone planning with buffer-based scheduling is the right tool.' },
        { num: '05', title: 'Build a hybrid for complex programs with both certain and uncertain components', body: '"The core infrastructure component uses a waterfall plan with fixed milestones. The product layers on top use 2-week sprints with flexible scope. We coordinate at the milestone boundary every 6 weeks." Hybrid planning is not a cop-out — it\'s the realistic approach for most enterprise programs.' }
      ],
      example: {
        before: 'We use Agile for all our projects because that\'s how we work.',
        after: 'Chose a hybrid framework for a 9-month platform migration: core infrastructure used milestone-based planning with a hard compliance deadline (non-negotiable); product features migrated using 2-week sprints with prioritized backlog. Critical path managed via dependency register reviewed weekly. Delivered the compliance milestone on time; shipped 8 of 12 planned features within the program window. The other 4 were deprioritized during sprints based on revised business priority — by design.',
        note: 'Framework selection rationale + hybrid approach + fixed milestone success + intentional scope flexibility = senior PM framework thinking.'
      },
      stats: [
        { stat: '70%', body: 'Of projects fail to meet original scope, schedule, or budget targets', source: 'PMI research' },
        { stat: '28%', body: 'Higher project success rate with adaptive framework selection vs mandated methodology', source: 'PMI Pulse of the Profession' },
        { stat: '$128K', body: 'Median base salary for Senior Project Managers in technology companies', source: 'PMI salary survey' }
      ],
      faq: [
        { q: 'How do I introduce Agile to a team that\'s been doing waterfall for years?', a: 'Don\'t rename all the meetings and call it Agile. Start with one team, one project. Run one genuine sprint with real retrospectives. Show the velocity data at the end. Let the team experience the improvement rather than hear about the theory.' },
        { q: 'How do I manage a project where different stakeholders want different methodologies?', a: 'Separate the framework from the reporting. Engineers can work in sprints; the steering committee can get milestone-based status reports. The internal delivery methodology doesn\'t have to match the external communication format.' }
      ]
    }
  },
  {
    role: 'people-ops',
    roleName: 'People Operations & HR',
    roleTag: 'People',
    roleColor: '#be185d',
    roleEmoji: '💛',
    specialTopic: {
      topic: 'hr-strategy',
      topicName: 'HR Strategy',
      title: 'HR Strategy Guide for People Operations Professionals',
      metaTitle: 'HR Strategy for People Ops | Talent Acquisition to Retention & Culture | Askia',
      metaDescription: 'How People Operations and HR leaders build people strategies that attract top talent, reduce regrettable attrition, and connect people outcomes to business results.',
      headline: 'Build a People Strategy That\'s a Competitive Advantage, Not a Cost Center',
      intro: 'People Operations is the function that determines the quality of human capital in a company — and it\'s the most undermanaged strategic lever in most organizations. The difference between a People team that\'s a cost center and one that\'s a competitive advantage is whether it\'s designed around business outcomes. Regrettable attrition has a measurable cost. Slow time-to-hire has a measurable cost. A People strategy that quantifies and addresses these costs creates the same kind of organizational leverage as a great engineering or sales strategy.',
      shortAnswer: 'Connect every people initiative to a business outcome. "We\'re improving our offer acceptance rate from 68% to 85%" is a business goal. "We\'re improving our candidate experience" is an activity. Know the difference.',
      doFirst: ['Your regrettable attrition rate is above 15% annually', 'Time-to-hire is above 60 days for key roles', 'You\'re scaling headcount rapidly and need systematic people infrastructure'],
      skip: ['You\'re in a pure administrative HR role without strategic responsibilities', 'You\'re at a small company where an informal people approach is appropriate', 'You\'re targeting an executive recruiting role rather than generalist People Ops'],
      steps: [
        { num: '01', title: 'Measure regrettable attrition and its cost before designing interventions', body: '"We need to reduce attrition" is a goal. "Our engineering regrettable attrition is 18%, costing $2.4M annually in replacement recruiting, onboarding, and lost productivity" is a business case. Know the number before designing the solution.' },
        { num: '02', title: 'Build a structured interview process that predicts performance', body: 'Unstructured interviews have 0.14 correlation with job performance. Structured interviews with consistent scoring rubrics have 0.51. The single highest-ROI people operations improvement for most companies is making interviews consistent and evaluation criteria explicit.' },
        { num: '03', title: 'Design onboarding that drives time-to-full-productivity, not time-to-paperwork-completion', body: 'Define what "fully productive" means for each role. Build an onboarding plan that gets there in 60-90 days. Most companies have onboarding that handles compliance and tools setup; almost none have onboarding that systematically builds the relationships and context that makes someone effective.' },
        { num: '04', title: 'Connect compensation to market data, not to internal parity alone', body: 'Internal parity without market data creates comp bands that drift below market over time. Your highest performers have the most options and will notice first. Run a market comp analysis annually and address material gaps proactively — before you lose people to competing offers.' },
        { num: '05', title: 'Build a manager quality program, not just a manager training program', body: '"We sent all managers to a leadership course" is not a people strategy. A people strategy defines what good management looks like at your company, measures it (360 surveys, eNPS, team retention), and creates consequences when managers are below standard. Most regrettable attrition is caused by bad managers, not bad company culture.' }
      ],
      example: {
        before: 'We have a good culture and our employees seem happy based on our annual survey.',
        after: 'Built a 6-metric people dashboard: regrettable attrition by department, time-to-hire by role band, offer acceptance rate, 90-day new hire satisfaction, manager eNPS, and internal promotion rate. Identified engineering regrettable attrition (22%) as primary issue — exit interviews pointed to manager feedback quality. Built structured manager effectiveness program: quarterly 360s, bi-weekly coaching conversations, manager performance visible to senior leadership. Engineering regrettable attrition dropped from 22% to 11% in 12 months. Estimated annual savings: $1.8M.',
        note: 'Measurement-first + root cause analysis + targeted intervention + business outcome = People Ops strategy that earns a seat at the table.'
      },
      stats: [
        { stat: '$15-20K', body: 'Average cost to replace one non-executive employee', source: 'SHRM research' },
        { stat: '70%', body: 'Of employees leave because of their manager, not the company', source: 'Gallup research' },
        { stat: '$128K', body: 'Median base salary for Senior People Operations Managers at growth-stage companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I make the case for people programs to a CFO-minded leadership team?', a: 'Lead with cost and risk, not culture. "Our current time-to-hire for senior engineers is 68 days. Each open senior engineering role costs $X in lost productivity and $Y in recruiting overhead. The proposed program reduces time-to-hire to 42 days, ROI of $Z." That\'s a CFO conversation.' },
        { q: 'What\'s the most impactful people metric to track?', a: 'Regrettable attrition by manager, measured separately from total attrition. This single metric identifies your lowest-quality managers and most at-risk teams. Everything else is secondary.' }
      ]
    }
  },
  {
    role: 'supply-chain',
    roleName: 'Supply Chain & Logistics',
    roleTag: 'Supply Chain',
    roleColor: '#0f766e',
    roleEmoji: '🚢',
    specialTopic: {
      topic: 'supply-chain-optimization',
      topicName: 'Supply Chain Optimization',
      title: 'Supply Chain Optimization Guide for Supply Chain & Logistics Professionals',
      metaTitle: 'Supply Chain Optimization | Inventory, Logistics & Demand Planning | Askia',
      metaDescription: 'How supply chain and logistics professionals optimize inventory, transportation, and demand planning to reduce cost and improve service levels.',
      headline: 'Optimize Your Supply Chain for Resilience and Cost — Not Just One',
      intro: 'Supply chain optimization is the discipline of making trade-offs between cost, service level, and resilience explicit — and then managing those trade-offs systematically. Most supply chains are optimized for one dimension (usually cost) while the other two suffer. The supply chain professionals who create the most business value are those who can model the full cost of each trade-off and make the case for a different balance point when the business context changes.',
      shortAnswer: 'Inventory is the cost of uncertainty. Reduce uncertainty first (demand forecasting accuracy, supplier lead time reliability), then reduce inventory. Reducing inventory without reducing uncertainty creates stockouts.',
      doFirst: ['You\'re managing elevated inventory levels or frequent stockouts', 'Lead times from suppliers are increasing and you\'re adjusting safety stock reactively', 'You want to make a business case for supply chain investment to finance leadership'],
      skip: ['You\'re in a logistics execution role without planning or strategy responsibilities', 'Your supply chain is simple (1-2 suppliers, 1-2 SKUs, predictable demand)', 'You\'re targeting a pure procurement role focused on sourcing rather than planning'],
      steps: [
        { num: '01', title: 'Map your supply chain end-to-end before optimizing any piece of it', body: 'Supplier lead times, transportation legs, warehousing nodes, reorder points, safety stock levels, demand variability by SKU. Most supply chains have never been fully mapped. The map reveals where the most variance is hiding — and variance is what drives inventory and cost.' },
        { num: '02', title: 'Improve demand forecast accuracy before reducing safety stock', body: 'A 5% improvement in forecast accuracy typically enables 10-15% inventory reduction without increasing stockouts. Forecast improvement is the highest-ROI supply chain investment in most industries. Statistical forecasting + collaborative demand planning is the combination that works.' },
        { num: '03', title: 'Segment your inventory by velocity and margin, not just volume', body: 'ABC analysis by volume + XYZ analysis by demand variability gives you 9 segments with different optimal reorder policies. High-velocity, predictable items (AX) should be managed for cost efficiency. Low-velocity, unpredictable items (CZ) should be managed for service level. The same reorder policy for both is wrong.' },
        { num: '04', title: 'Model transportation trade-offs in total landed cost, not just freight rate', body: 'Air freight costs 5× ocean freight but cuts transit time from 35 to 3 days. If the inventory carrying cost + stockout risk during 35 days of ocean transit exceeds the air premium, air is cheaper. Build a total landed cost model before defaulting to the lowest-rate option.' },
        { num: '05', title: 'Build supplier scorecards and use them in sourcing decisions', body: 'On-time delivery rate, quality reject rate, lead time reliability, communication responsiveness. A supplier with a 5% lower unit cost and 15% lower on-time rate is usually a more expensive supplier when you account for expediting, safety stock, and customer impact. Make the full cost visible.' }
      ],
      example: {
        before: 'We have high inventory levels and still have stockouts on some SKUs.',
        after: 'ABC/XYZ segmentation of 2,400 SKUs revealed 15% of SKUs (AX category) driving 75% of revenue with predictable demand — these were over-stocked. 22% of SKUs (CZ category) had unpredictable demand — these were under-stocked and causing stockouts. Redesigned reorder policies by segment. Inventory reduced 18% ($2.1M) while stockout rate improved from 4.2% to 1.8% within 6 months.',
        note: 'Segmentation analysis + root cause identification + differentiated reorder policies + simultaneous cost and service improvement = supply chain optimization story.'
      },
      stats: [
        { stat: '18-30%', body: 'Inventory reduction achievable with demand-driven replenishment vs push-based', source: 'Gartner supply chain research' },
        { stat: '$1.1T', body: 'Annual cost of supply chain disruptions to global businesses', source: 'McKinsey research' },
        { stat: '$128K', body: 'Median base salary for Senior Supply Chain Managers at Fortune 500 companies', source: 'Industry data' }
      ],
      faq: [
        { q: 'How do I build a business case for supply chain technology investment?', a: 'Quantify the current state cost: excess inventory carrying cost + stockout revenue impact + expediting cost + manual planning labor cost. Then show the projected improvement in each with the technology. Most supply chain technology investments have 12-18 month payback periods when the full cost picture is visible.' },
        { q: 'How do I handle supplier relationship management during lead time negotiations?', a: 'Come with data and come with alternatives. "Your current on-time rate is 78% against an SLA of 92%. Here\'s the cost impact to us. We\'re prepared to increase volume by 20% in exchange for a 10-day lead time reduction and 90% OTD commitment." Suppliers respond to specific asks with specific incentives.' }
      ]
    }
  },
  {
    role: 'healthcare-admin',
    roleName: 'Healthcare Administration',
    roleTag: 'Healthcare',
    roleColor: '#dc2626',
    roleEmoji: '🏥',
    specialTopic: {
      topic: 'regulatory-navigation',
      topicName: 'Regulatory Navigation',
      title: 'Regulatory Navigation Guide for Healthcare Administration Professionals',
      metaTitle: 'Healthcare Regulatory Navigation | HIPAA, CMS & Accreditation | Askia',
      metaDescription: 'How healthcare administrators navigate regulatory requirements — HIPAA, CMS conditions of participation, Joint Commission accreditation, and state licensing.',
      headline: 'Turn Regulatory Compliance Into Operational Advantage',
      intro: 'Healthcare administrators who approach regulation as a compliance burden are always behind — reacting to audits, scrambling for surveys, and operating from a defensive posture. The administrators who build high-performing healthcare organizations treat regulatory requirements as a minimum standard and operational excellence as the goal. When your operations exceed regulatory requirements consistently, surveys and audits become confirmations rather than threats.',
      shortAnswer: 'Build your operational systems to a standard above regulatory minimums. Document everything as if you\'re always in survey-ready state. The cost of maintaining that standard is far less than the cost of remediation and the reputational damage of deficiencies.',
      doFirst: ['Your organization is preparing for a CMS survey or Joint Commission accreditation', 'You\'ve had regulatory deficiencies and need a systematic improvement approach', 'You\'re designing policies and procedures for a new healthcare service line'],
      skip: ['You\'re in a clinical role without administrative regulatory responsibility', 'Your organization\'s regulatory program is managed by a dedicated compliance team you support rather than lead', 'You\'re targeting a healthcare IT role rather than operations or administration'],
      steps: [
        { num: '01', title: 'Map every applicable regulatory requirement to an operational owner', body: 'HIPAA privacy officer. CMS Conditions of Participation by department. Joint Commission standards by service line. Each requirement needs an owner who understands the standard and is responsible for maintaining compliance. Requirements without owners are requirements waiting to fail.' },
        { num: '02', title: 'Build a continuous readiness calendar, not a survey-season scramble', body: 'Monthly policy reviews. Quarterly mock tracers. Semi-annual full environment of care walkthroughs. Annual regulatory calendar review. Survey-readiness is a daily operating state, not a 3-month preparation cycle before every accreditation visit.' },
        { num: '03', title: 'Design policies that staff can actually follow', body: 'A HIPAA policy that requires 14 steps to de-identify a single record is a policy that will be bypassed under time pressure. The best compliance programs design policies around how work actually flows, then audit adherence. Policies designed in a vacuum get violated in practice.' },
        { num: '04', title: 'Track near-miss events, not just reportable incidents', body: 'Near-misses are 300× more frequent than serious events. Organizations that track and learn from near-misses have materially lower serious event rates. Build a no-blame near-miss reporting system and make reporting a valued behavior, not a punished one.' },
        { num: '05', title: 'Build regulatory performance metrics into leadership dashboards', body: 'HIPAA training completion rate. Infection control audit scores. Patient rights complaint rate. Accreditation standard compliance by department. When leadership sees regulatory performance data monthly, regulatory compliance becomes part of the operational culture, not just a compliance team responsibility.' }
      ],
      example: {
        before: 'We prepare for Joint Commission surveys when they\'re scheduled.',
        after: 'Implemented a continuous survey readiness program: monthly unannounced mock tracers by department, quarterly competency assessments for all clinical staff, real-time HIPAA training completion tracking on leadership dashboard. Zero deficiencies in most recent Joint Commission survey (vs 4 in prior cycle). Staff survey preparedness scores improved from 3.8 to 4.7/5. Regulatory deficiency remediation costs reduced $180K vs prior survey cycle.',
        note: 'Continuous readiness program + specific metrics + survey outcome + cost reduction = healthcare admin regulatory story that shows operational leadership.'
      },
      stats: [
        { stat: '$15M', body: 'Maximum annual HIPAA fine per violation category', source: 'HHS Office for Civil Rights' },
        { stat: '70%', body: 'Of Joint Commission surveys result in at least one standard deficiency', source: 'Joint Commission data' },
        { stat: '$118K', body: 'Median base salary for Healthcare Administrators at hospital systems', source: 'BLS data' }
      ],
      faq: [
        { q: 'How do I prepare staff for unannounced surveys without creating anxiety?', a: 'Normalize the standard, not the event. "We operate this way every day because it\'s right for patients" reduces survey anxiety more than any survey prep program. Unannounced mock tracers scheduled randomly throughout the year help — but the message has to be: we\'re already meeting the standard, the survey just confirms it.' },
        { q: 'How do I handle a significant regulatory finding without it becoming a crisis?', a: 'Move fast, be transparent, and show a credible corrective action plan within 48 hours of the finding. "Here\'s what we found, here\'s the root cause, here\'s what we\'ve already done, here\'s the timeline for full correction" is the message that regulators and leadership need. Defensive minimization prolongs the crisis.' }
      ]
    }
  },
  {
    role: 'legal-compliance',
    roleName: 'Legal & Compliance',
    roleTag: 'Legal',
    roleColor: '#1d4ed8',
    roleEmoji: '⚖️',
    specialTopic: {
      topic: 'legal-strategy',
      topicName: 'Legal Strategy',
      title: 'Legal Strategy Guide for Legal & Compliance Professionals',
      metaTitle: 'Legal Strategy for In-House Counsel & Compliance Leaders | Askia',
      metaDescription: 'How in-house legal and compliance professionals build legal strategies that enable business growth, manage risk proactively, and earn trust as strategic advisors rather than deal blockers.',
      headline: 'Be the Legal Team That Enables Deals, Not Just Reviews Them',
      intro: 'In-house legal and compliance professionals operate in one of two modes: reactive gatekeepers who slow the business down, or proactive advisors who help the business move fast with appropriate guardrails. The difference is rarely legal knowledge — it\'s business acumen and the ability to give a clear risk-calibrated answer instead of a hedge. The legal teams that earn their seat at the strategy table are the ones who say "here\'s how to do this" more often than "here\'s why this is risky."',
      shortAnswer: 'When asked to review something, lead with your recommendation, not your concerns. "Here\'s how to structure this to achieve your goal with acceptable risk" is a legal strategy. "Here are 7 risks to consider" is a legal opinion. Know which one the business needs.',
      doFirst: ['You want to transition from outside counsel to in-house strategic counsel', 'Business units treat legal as a blocker rather than an enabler', 'You\'re building a compliance program from scratch at a growing company'],
      skip: ['You\'re in litigation support or a pure outside counsel role', 'You\'re targeting a compliance-only role without strategic advisory responsibilities', 'Your company is in a heavily regulated industry where compliance determines business viability and a different framework applies'],
      steps: [
        { num: '01', title: 'Understand the business model before reviewing the contract', body: 'How does the company make money? What\'s the GTM motion? Who are the key partners and customers? A legal professional who understands the business reviews a contract in 20 minutes with useful recommendations. One who doesn\'t spends 2 hours and produces issues that don\'t matter to the business.' },
        { num: '02', title: 'Give risk-calibrated recommendations, not risk inventories', body: '"The indemnification clause is broader than market standard and creates a theoretical $50M exposure in a worst-case scenario that has a <1% probability given your customer profile. My recommendation: accept it with a cap of 2× fees. Here\'s the redline." That\'s a legal recommendation. A list of all the things that could go wrong is not.' },
        { num: '03', title: 'Build contract templates that close deals faster', body: 'A standard MSA that your sales team can use without involving legal for every deal is a legal asset. Playbooks for the 10 most common contract negotiation scenarios give your sales team confidence and keep legal out of commodity negotiations. Legal leverage at scale means fewer individual reviews, not more.' },
        { num: '04', title: 'Build a compliance program that employees can actually follow', body: 'A code of conduct that nobody reads is a liability, not protection. A 30-minute annual training module that employees complete grudgingly is not a compliance program. Design compliance training around realistic scenarios your employees actually face, make it brief and engaging, and track completion.' },
        { num: '05', title: 'Proactively flag legal risk before it becomes a crisis', body: 'Monitor regulatory developments in your industry and brief leadership quarterly. Flag the regulatory change 18 months before it takes effect, not 60 days before. Legal professionals who help the business see around corners are valued at the strategy table; those who read the same news articles as everyone else are not.' }
      ],
      example: {
        before: 'I reviewed the contract and identified several areas of concern that need to be addressed.',
        after: 'Reviewed the enterprise SaaS MSA. Three issues worth negotiating: (1) unlimited liability exposure — recommend cap at 12 months fees (standard for your deal size); (2) perpetual IP license — recommend limiting to the term of agreement; (3) non-standard data processing terms — recommend our standard DPA addendum. Issues that looked concerning but aren\'t: the indemnification language is broad but consistent with your insurance coverage. Recommend proceeding with these three redlines. Total negotiation time estimate: 1 round of comments.',
        note: 'Issues worth negotiating vs issues to accept + specific recommendations + deal timeline = legal advice that closes deals rather than stalling them.'
      },
      stats: [
        { stat: '40%', body: 'Of companies with in-house legal report faster deal cycles than companies relying solely on outside counsel', source: 'Association of Corporate Counsel' },
        { stat: '$165K', body: 'Median base salary for Senior In-House Counsel at technology companies', source: 'ACC Compensation Survey' },
        { stat: '3-5×', body: 'Cost savings for in-house legal vs equivalent outside counsel hours for routine work', source: 'Legal industry benchmarks' }
      ],
      faq: [
        { q: 'How do I get the business to loop legal in earlier, before deals are already committed?', a: 'Make it easy and fast. A legal Slack channel with a 4-hour turnaround for "quick questions" trains the business to ask early rather than waiting until the contract is ready to sign. Availability and speed are the behaviors that change when legal gets looped in.' },
        { q: 'How do I manage legal risk when the CEO wants to move faster than is safe?', a: 'Quantify the risk clearly and state your recommendation. "If we proceed without this disclosure, there\'s a 20% chance of an FTC inquiry with $2-5M remediation cost. Here\'s the 2-week path to do this safely instead." Then let the CEO decide with full information. Document your recommendation. Your job is to make the risk visible, not to prevent the decision.' }
      ]
    }
  }
];

const sharedTopics = [
  {
    topic: 'resume',
    topicName: 'Resume Writing',
    byRole: {
      'software-engineer': {
        title: 'Software Engineer Resume Writing Guide',
        metaTitle: 'Software Engineer Resume Guide | Senior & Staff SWE | Askia',
        metaDescription: 'How to write a senior software engineer resume that gets callbacks. Impact bullets, system ownership, and scope signals for SWE roles.',
        headline: 'Write a SWE Resume That Lands Senior Callbacks',
        intro: 'Most SWE resumes read like a list of technologies. Senior hiring teams read resumes looking for ownership, scale, and impact — and they scan in 6 seconds. If your resume leads with a tech stack instead of what you built and what it did for the business, it\'s working against you.',
        shortAnswer: 'Your resume should read like a technical decision log, not a task list. Lead with system-level impact, quantify scale, and connect every bullet to a business outcome.',
        doFirst: ['Your resume lists technologies but not impact', 'You\'re targeting Senior, Staff, or Principal IC roles', 'You\'ve led technical decisions but struggle to articulate them in writing'],
        skip: ['You\'re early-career (< 2 years) and still building foundational experience', 'Your current resume is already landing interviews consistently', 'You\'re targeting management roles (see EM guide)'],
        steps: [
          { num: '01', title: 'Lead every bullet with a business outcome', body: 'Start with what changed for the company or users, then explain how. "Reduced API latency by 40% enabling $2M product expansion" > "Optimized API using caching."' },
          { num: '02', title: 'Include scale and scope numbers', body: 'QPS, data volume, team size, number of services affected. These numbers signal seniority without you having to claim it explicitly.' },
          { num: '03', title: 'Show system ownership, not feature work', body: 'Owned end-to-end > contributed to. "Owned the payments service" reads differently from "added features to the payments service." Use ownership language deliberately.' },
          { num: '04', title: 'Document technical decisions, not just implementations', body: '"Chose PostgreSQL over Cassandra for this workload because consistency requirements outweighed horizontal scaling needs" shows seniority that no list of technologies can.' },
          { num: '05', title: 'Add cross-team influence to senior roles', body: 'Staff and Principal engineers influence across teams. Show it: "Defined the API contract across 5 teams," "Authored the ADR adopted org-wide."' }
        ],
        example: { before: 'Built microservices using Go and Kubernetes.', after: 'Designed and shipped a real-time event processing system handling 50K events/sec in Go/K8s, reducing end-to-end latency by 40% and enabling a new $2M product line.', note: 'System ownership + scale + business outcome = senior signal.' },
        stats: [{ stat: '3×', body: 'More callbacks with impact-first SWE resume bullets', source: 'Askia A/B testing' }, { stat: '3 weeks', body: 'Average time to first interview for SWE clients', source: 'Askia client data' }, { stat: '$47K', body: 'Avg compensation increase after SWE positioning work', source: 'Askia client data' }],
        faq: [{ q: 'Should I list every programming language I know?', a: 'No. List languages you\'d be comfortable in day one. A 40-item skills list dilutes signal. Show expertise through impact bullets, not inventory.' }, { q: 'How long should a senior SWE resume be?', a: 'One to two pages. The first page does the work — put your strongest impact bullets there.' }, { q: 'Do I need a GitHub link?', a: 'For senior roles, resume impact matters more. GitHub helps if you have notable open-source work or if the role specifically evaluates code samples.' }]
      },
      'devops-sre': {
        title: 'DevOps & SRE Resume Writing Guide',
        metaTitle: 'DevOps & SRE Resume Guide | Senior SRE & Platform Engineer | Askia',
        metaDescription: 'How to write a DevOps or SRE resume that shows reliability impact, platform scale, and infrastructure ownership for senior roles.',
        headline: 'Write a DevOps/SRE Resume That Shows Real Platform Ownership',
        intro: 'DevOps and SRE resumes fail the same way: they list tools instead of outcomes. Hiring teams for senior platform roles want to see the scale you\'ve managed, the reliability you\'ve driven, and the engineering velocity you\'ve enabled. Every bullet should answer: what got better, and by how much?',
        shortAnswer: 'Quantify reliability (SLO improvements, MTTD/MTTR), platform scale (services, engineers supported), and developer velocity impact. Tools are context, not content.',
        doFirst: ['Your resume focuses on tools rather than outcomes', 'You\'re targeting Senior DevOps, SRE, or Platform Engineering roles', 'You\'ve improved reliability metrics but haven\'t articulated the business impact'],
        skip: ['You\'re targeting pure software engineering roles', 'You\'re early-career without production ownership', 'Your current materials are already landing interviews'],
        steps: [
          { num: '01', title: 'Lead with reliability metrics, not tool names', body: '"Reduced MTTD from 8 minutes to 90 seconds" beats "Implemented Datadog monitoring." The tool is context. The outcome is the story.' },
          { num: '02', title: 'Quantify platform scope', body: 'How many services? How many engineers? How many deployments per day? "Platform supporting 200 engineers across 15 microservices" is the first line of your platform ownership story.' },
          { num: '03', title: 'Show developer velocity impact', body: 'Platform engineering\'s real product is other engineers\' productivity. "Reduced deployment time from 45 min to 8 min, enabling daily releases" connects your infrastructure work to business speed.' },
          { num: '04', title: 'Document incident leadership', body: 'Led vs. participated in. "IC for 3 P1 incidents in FY23; 0 repeat failures after systemic changes" is a résumé-worthy management story even at the IC level.' },
          { num: '05', title: 'Include cost optimization wins', body: '"Right-sized EC2 fleet, reducing monthly cloud spend by $82K" is directly tied to company profitability. Finance leaders who read these resumes notice cost numbers.' }
        ],
        example: { before: 'Managed Kubernetes clusters and implemented CI/CD pipelines.', after: 'Led platform team for 200+ engineers across 15 services. Reduced deployment time from 45 min to 8 min, improved P99 latency 35% through observability improvements, cut cloud spend $82K/month via right-sizing.', note: 'Scope + velocity impact + cost impact = senior DevOps signal.' },
        stats: [{ stat: '89%', body: 'Of Askia DevOps/SRE clients land offers within 60 days', source: 'Askia client data' }, { stat: '$165K', body: 'Median base for Senior SRE in major tech markets', source: 'Industry data' }, { stat: '2×', body: 'Response rate with outcome-focused DevOps resumes', source: 'Askia A/B testing' }],
        faq: [{ q: 'Should I have a separate section for tools and technologies?', a: 'Keep it short and relevant. A 60-item tools list reads as padding. Group by category and let your bullets show depth.' }, { q: 'How do I quantify on-call impact?', a: '"Reduced P1 incident frequency from 4/month to 1/month" or "Built runbooks that cut MTTD by 60% for the 5 most common failure classes." Think about what changed because of your work on-call, not just that you were on-call.' }]
      },
      'data': {
        title: 'Data Career Resume Writing Guide',
        metaTitle: 'Data Science & Data Engineering Resume Guide | Senior DE/DS | Askia',
        metaDescription: 'How to write a Data Engineer or Data Scientist resume that shows business impact, pipeline ownership, and decision influence for senior roles.',
        headline: 'Write a Data Resume That Shows Business Impact, Not Just Pipelines',
        intro: 'Data resumes fail when they describe what you built instead of what it changed. A pipeline that processes 50M records per day is impressive. A pipeline that enabled the segmentation strategy that increased conversion by 12% is a hire. Hiring managers for senior data roles want to understand the decisions your work enabled, not the architecture of your Spark jobs.',
        shortAnswer: 'Connect every technical contribution to the business decision it enabled and the outcome that followed. The model or pipeline is the method; the decision is the story.',
        doFirst: ['Your resume reads like a technical spec instead of a business impact summary', 'You\'re targeting Senior DE, DS, or Analytics Engineering roles', 'You\'ve built complex systems but struggle to articulate their value'],
        skip: ['You\'re targeting ML research roles where publications matter more', 'Your current resume is already generating interviews', 'You\'re early-career without production data system ownership'],
        steps: [
          { num: '01', title: 'Start with the decision, not the data', body: '"Built a customer segmentation model" → "Built customer segmentation model that enabled dynamic pricing, increasing conversion 12% ($3M annual impact)." The decision and outcome are the headline.' },
          { num: '02', title: 'Quantify pipeline scale and reliability', body: 'Data volumes, processing times, SLA/SLO metrics, uptime. "50M records/day with p99 < 2s and 99.9% uptime" signals senior ownership.' },
          { num: '03', title: 'Show cross-functional impact', body: 'Who used your data? Which teams made decisions because of it? "Delivered weekly executive dashboards used by 4 VPs for quarterly planning" is more powerful than "built dashboards."' },
          { num: '04', title: 'Separate DE and DS impact clearly', body: 'Data engineers show infrastructure ownership and reliability. Data scientists show model impact and decision influence. Mix them if you\'ve done both — but be clear which is primary.' },
          { num: '05', title: 'Include data quality work', body: '"Reduced data quality incidents from 12/month to 2/month" shows ownership of the full data lifecycle, not just the happy path.' }
        ],
        example: { before: 'Built data pipelines using Spark and Airflow to process customer data.', after: 'Designed customer segmentation pipeline processing 50M records/day in Spark/Airflow, enabling personalized pricing strategy that increased conversion 12% and $3M annual revenue impact.', note: 'Same work, completely different signal. The difference is connecting the pipeline to the outcome.' },
        stats: [{ stat: '3×', body: 'More callbacks with outcome-focused data resumes', source: 'Askia A/B testing' }, { stat: '$52K', body: 'Average compensation increase for data clients', source: 'Askia client outcomes' }, { stat: '21 days', body: 'Average time to first interview for data clients', source: 'Askia client data' }],
        faq: [{ q: 'Should I separate Data Engineering and Data Science experience?', a: 'If you\'ve done both, put the more relevant one first for the role you\'re targeting. Don\'t try to be both on one resume — it reads as unfocused at senior levels.' }, { q: 'How do I quantify ML model impact?', a: 'Lead with the business metric your model improved, then the model performance metric. "Churn model with 89% accuracy, reducing preventable churn by $1.4M ARR" works better than leading with AUC.' }]
      },
      'product-manager': {
        title: 'Product Manager Resume Writing Guide',
        metaTitle: 'Product Manager Resume Guide | Senior PM & GPM | Askia',
        metaDescription: 'How to write a senior PM resume that shows business outcomes, product judgment, and cross-functional leadership to land senior and director-level roles.',
        headline: 'Write a PM Resume That Reads Like a Portfolio of Wins',
        intro: 'PM resumes fail when they list features shipped instead of bets that paid off. Hiring teams for senior PM roles are trying to answer one question: does this person have the judgment to own a product area and make it win? Every bullet should give them evidence — a decision made, a risk taken, a business outcome delivered.',
        shortAnswer: 'Your PM resume should read like a portfolio of bets you made and how they paid off — not a feature changelog.',
        doFirst: ['Your resume lists features shipped but not business outcomes', 'You\'re targeting Senior PM, Group PM, or Director of Product', 'You\'ve made product decisions but your resume doesn\'t show your reasoning'],
        skip: ['You\'re transitioning into PM from engineering and need to establish PM fundamentals first', 'You\'re targeting technical PM roles that lean more toward engineering', 'Your current materials are already landing interviews'],
        steps: [
          { num: '01', title: 'Lead with the problem, not the feature', body: '"Identified 40% cart abandonment on mobile → led redesign → 22% conversion increase" is a PM story. "Shipped mobile checkout redesign" is a feature log.' },
          { num: '02', title: 'Show your product judgment explicitly', body: '"Chose to invest in activation over acquisition based on cohort analysis showing 3× LTV differential" — this is a PM decision on a resume, not just a result.' },
          { num: '03', title: 'Quantify business outcomes, not activity metrics', body: 'Revenue, retention, activation, NPS. Not number of features shipped, not velocity points. The business metric is what the company cares about.' },
          { num: '04', title: 'Show cross-functional leadership without owning the outcome alone', body: '"Led cross-functional team of 8 (engineering, design, data, marketing)" shows organizational leverage. You don\'t take individual credit — you show how you orchestrate.' },
          { num: '05', title: 'Include one contrarian bet', body: 'A story where you advocated for something that wasn\'t obvious — and it worked — is the most powerful thing on a senior PM resume. It shows conviction and judgment together.' }
        ],
        example: { before: 'Led development of mobile checkout feature with engineering team.', after: 'Identified 40% cart abandonment on mobile checkout through session analysis. Led cross-functional team of 8 through 6-week redesign sprint. Increased conversion 22%, generating $4.2M annual revenue impact.', note: 'Problem identification + team orchestration + quantified outcome = senior PM signal.' },
        stats: [{ stat: '$45K', body: 'Average compensation increase for Askia PM clients', source: 'Askia client outcomes' }, { stat: '89%', body: 'Of PM clients land offers within 60 days', source: 'Askia client data' }, { stat: '3 weeks', body: 'Average time to first PM interview with optimized positioning', source: 'Askia client data' }],
        faq: [{ q: 'How do I show PM impact without revenue numbers?', a: 'Use engagement, retention, or activation metrics. If you can\'t share exact numbers, use percentages with direction ("reduced churn significantly" → "reduced churn by 23%"). Estimate if needed.' }, { q: 'How many products should I highlight?', a: 'Two to three deep, with one flagship story that shows your best judgment. Breadth without depth reads as thin.' }]
      },
      'engineering-manager': {
        title: 'Engineering Manager Resume Writing Guide',
        metaTitle: 'Engineering Manager Resume Guide | EM, Director & VP | Askia',
        metaDescription: 'How to write an EM, Director, or VP of Engineering resume that shows team outcomes, org impact, and leadership signal beyond technical contribution.',
        headline: 'Write an EM Resume That Shows You Lead, Not Just Manage',
        intro: 'The biggest mistake engineering managers make on their resume is writing it like a senior engineer with team context added. At EM+, you\'re being evaluated on your team\'s outcomes, your organizational impact, and your ability to build and retain a high-performing team — not your individual technical contributions.',
        shortAnswer: 'Your EM resume should answer: what did your team ship, how healthy was the team, and what got better organizationally because of how you led?',
        doFirst: ['Your resume still reads like an IC listing your own technical contributions', 'You\'re targeting EM, Director, or VP of Engineering roles', 'You\'ve led teams but haven\'t translated leadership into resume language'],
        skip: ['You\'re exploring IC vs management and want to stay flexible', 'You\'re a new manager with less than 1 year of direct reports', 'You\'re targeting Staff+ IC roles (see SWE guide)'],
        steps: [
          { num: '01', title: 'Lead with team outcomes, not personal contributions', body: '"Led team of 8 that shipped PCI-compliant payments infrastructure handling $50M annual transaction volume" > "Built payment systems." Your team\'s work is your work as a manager.' },
          { num: '02', title: 'Quantify team building and retention', body: '"Grew team from 3 to 12 engineers over 18 months, 0 regrettable attrition, 2 engineers promoted to Senior in first year." These are the metrics that show you can build and keep good people.' },
          { num: '03', title: 'Show delivery velocity improvements', body: '"Reduced sprint cycle time from 3 weeks to 1 week through process changes" or "Took team from quarterly releases to weekly." Delivery improvement is a management outcome.' },
          { num: '04', title: 'Document organizational influence', body: 'Cross-org projects you drove, engineering standards you established, decisions that affected other teams. This is the difference between EM and Director scope.' },
          { num: '05', title: 'Include one technical direction story', body: 'You still need technical credibility. "Drove decision to migrate from monolith to microservices, enabling 4× developer throughput" shows you can make technical calls at the right level of abstraction.' }
        ],
        example: { before: 'Managed a team of 8 engineers working on payment systems.', after: 'Built and led payments team from 3 to 12 engineers over 18 months. Team shipped PCI-compliant checkout reducing payment failures 60% and enabling $50M annual transaction volume. 2 engineers promoted to Senior, 0 regrettable attrition in 2 years.', note: 'Team building + team outcomes + team health = EM resume that works.' },
        stats: [{ stat: '$55K', body: 'Average compensation increase for Askia EM clients', source: 'Askia client outcomes' }, { stat: '2 weeks', body: 'Average time to first EM interview with optimized positioning', source: 'Askia client data' }, { stat: '85%', body: 'Of EM clients receive multiple offers', source: 'Askia client data' }],
        faq: [{ q: 'Should I include technical details on my EM resume?', a: 'Yes, but in service of team outcomes. Technical context establishes credibility. Lead with management impact, use technical context to show you can drive the right decisions.' }, { q: 'How do I show scope at a startup with no formal titles?', a: '"Led 6-person team that shipped..." works regardless of title. Show the organizational reality, not just the org chart.' }]
      },
      'finance-fpa': {
        title: 'Finance & FP&A Resume Writing Guide',
        metaTitle: 'Finance & FP&A Resume Guide | Senior FP&A & Finance Manager | Askia',
        metaDescription: 'How to write a senior FP&A or Finance Manager resume that shows business partnership, strategic analysis, and decision influence.',
        headline: 'Write a Finance Resume That Shows Business Partnership, Not Just Reporting',
        intro: 'Finance resumes fail when they describe what was produced instead of what was decided. Hiring teams for senior FP&A roles want to see that your analysis changed what the business did — that you were a business partner, not a report builder. The most valuable finance professionals can trace a direct line from their model to a boardroom decision.',
        shortAnswer: 'Lead with the decisions you enabled and the outcomes that followed. Reports are outputs; decisions are impact.',
        doFirst: ['Your resume lists accounting tasks but not strategic contributions', 'You\'re targeting Senior FP&A, Finance Manager, or Controller roles', 'You\'ve influenced business decisions but haven\'t quantified your impact'],
        skip: ['You\'re early-career without business partnership experience', 'You\'re targeting pure accounting compliance roles', 'Your current materials are already landing interviews'],
        steps: [
          { num: '01', title: 'Lead with the decision you enabled', body: '"Identified $3.2M in cost optimization opportunities presented to CFO" beats "Prepared cost analysis." The audience is the signal; the outcome is the proof.' },
          { num: '02', title: 'Quantify forecast accuracy', body: '"Improved forecast accuracy from 81% to 93% over two planning cycles" is a measurable FP&A outcome that speaks directly to business value.' },
          { num: '03', title: 'Show business partnership explicitly', body: '"Partnered with VP Sales on go-to-market modeling that informed $12M territory expansion decision" is stronger than "supported sales team." Name the partner and name the decision.' },
          { num: '04', title: 'Include process improvement wins', body: '"Reduced monthly close from 12 days to 7 through automation and process standardization" shows operational leverage beyond just analytical skill.' },
          { num: '05', title: 'Show executive communication', body: '"Presented quarterly business reviews to C-suite" or "Built board deck financial model." Senior finance roles require upward communication credibility.' }
        ],
        example: { before: 'Prepared monthly financial reports and variance analyses.', after: 'Led FP&A for $200M revenue division. Built driver-based model improving forecast accuracy from 85% to 94%, identified $3M cost optimization presented to CFO, reduced monthly close from 12 days to 7 days.', note: 'Business scope + forecast improvement + executive presence = senior FP&A signal.' },
        stats: [{ stat: '$48K', body: 'Average compensation increase for Askia finance clients', source: 'Askia client outcomes' }, { stat: '92%', body: 'Of finance clients land offers within 60 days', source: 'Askia client data' }, { stat: '3 weeks', body: 'Average time to first finance interview with optimized positioning', source: 'Askia client data' }],
        faq: [{ q: 'How do I show strategic impact in a tactical role?', a: 'Find one or two moments where your analysis informed a strategy decision — budget reallocation, pricing change, headcount decision. Those moments exist in most roles.' }, { q: 'Should I list financial systems (SAP, Workday, Anaplan)?', a: 'Yes, briefly. Group them in a skills section. But let your bullets show how you used them to drive outcomes, not just that you know them.' }]
      }
    }
  },
  {
    topic: 'linkedin',
    topicName: 'LinkedIn Optimization',
    byRole: {
      'software-engineer': { title: 'LinkedIn Optimization for Software Engineers', metaTitle: 'LinkedIn for Software Engineers | Get Recruiter Messages | Askia', metaDescription: 'How senior SWE professionals optimize LinkedIn to attract top-tier recruiter outreach and inbound interest from FAANG and growth-stage companies.', headline: 'Make Recruiters Chase You on LinkedIn', intro: 'Most software engineers treat LinkedIn as a resume backup. Senior engineers who get consistent inbound from top companies treat it as a searchable signal layer — a place where every section reinforces that they are exactly who the best technical recruiters are looking for. The difference is in how you use the headline, About, and experience sections.', shortAnswer: 'Your headline should name your level and specialty. Your About should lead with what you\'ve built at scale. Recruiters search for keywords — make sure you have them, but make them earn their place with context.', doFirst: ['Recruiters aren\'t reaching out despite strong experience', 'Your headline is just your title and company', 'You\'re passively open to new roles but not advertising it'], skip: ['You\'re in a confidential search and can\'t update your profile', 'You\'re primarily getting interviews through referrals', 'You\'re already getting strong inbound recruiter interest'], steps: [{ num: '01', title: 'Rewrite your headline with role + specialty + level', body: '"Senior Software Engineer | Distributed Systems | Real-time data at scale" beats "Software Engineer at Company." It\'s searchable and immediately signals seniority and focus.' }, { num: '02', title: 'Write an About that opens with what you\'ve built', body: 'Don\'t start with "I am a passionate engineer." Start with "I build distributed systems that process X at Y scale." That\'s what recruiters are searching for.' }, { num: '03', title: 'Add tech stack keywords without making it a list', body: 'Embed keywords in context: "I\'ve spent the last 4 years in Go and Kubernetes, leading teams shipping real-time infrastructure." Keywords in sentences rank and read better than raw lists.' }, { num: '04', title: 'Turn on Creator mode and signal availability carefully', body: 'Use Open to Work with recruiter-only visibility if you need discretion. Update the "looking for" section with specific titles and locations — recruiters use these filters.' }, { num: '05', title: 'Get 3-5 endorsements for your core skills', body: 'LinkedIn search ranks profiles higher with endorsed skills matching the job title. Ask teammates to endorse your primary languages and systems skills.' }], example: { before: 'Software Engineer at TechCorp', after: 'Staff Software Engineer | Distributed Systems & Real-Time Infra | Building data platforms that scale', note: 'The after version tells recruiters your level, specialty, and what you build in one line — all searchable.' }, stats: [{ stat: '4×', body: 'More recruiter messages with optimized headline and About', source: 'Askia A/B testing' }, { stat: '70%', body: 'Of recruiters use LinkedIn as primary sourcing tool', source: 'Industry research' }, { stat: '2 weeks', body: 'Average time to first recruiter outreach after LinkedIn optimization', source: 'Askia client data' }], faq: [{ q: 'Should my LinkedIn exactly match my resume?', a: 'Core achievements should align, but LinkedIn can be slightly more conversational and include current-project context. Keep impact numbers consistent.' }, { q: 'How do I signal I\'m open without tipping off my employer?', a: 'Use Open to Work with recruiter-only visibility. Avoid publicly adding "Open to opportunities" in your headline.' }] },
      'devops-sre': { title: 'LinkedIn Optimization for DevOps & SRE', metaTitle: 'LinkedIn for DevOps & SRE | Platform Engineering Visibility | Askia', metaDescription: 'How DevOps engineers and SREs optimize LinkedIn to attract recruiter outreach for senior platform and reliability engineering roles.', headline: 'Get Found by the Right Platform Engineering Recruiters', intro: 'DevOps and SRE LinkedIn profiles fail the same way as their resumes: they list tools. Senior platform engineering recruiters search for reliability outcomes, platform scale, and specific infrastructure keywords. If your headline says "DevOps Engineer" and your About lists AWS, Terraform, and Kubernetes — you\'re invisible to the recruiter looking for someone who improved SLOs and reduced cloud spend.', shortAnswer: 'Lead with reliability outcomes and platform scale. Tools are context. The recruiter searches for "SRE 99.9% uptime" not "SRE Terraform Kubernetes."', doFirst: ['Your headline is your title and nothing else', 'Recruiters reach out for the wrong roles', 'You want inbound from platform and SRE teams, not generic DevOps shops'], skip: ['You\'re already getting strong inbound from the right companies', 'You\'re in a confidential search', 'Referrals are your primary channel'], steps: [{ num: '01', title: 'Headline: level + focus + reliability signal', body: '"Senior SRE | Platform Reliability | 99.9%+ uptime at 200-engineer scale" beats "SRE at Company." It signals what you optimize for, not just who you work for.' }, { num: '02', title: 'About: open with platform scale', body: '"I build and run platform infrastructure supporting 200+ engineers across 15 microservices with 99.9%+ uptime" is your first sentence. Recruiters hiring for this exact profile will stop reading and reach out.' }, { num: '03', title: 'Use specific reliability keywords', body: 'SLO, SLI, MTTD, MTTR, on-call, incident response, chaos engineering, observability. These terms are in job descriptions and recruiter searches.' }, { num: '04', title: 'Highlight certifications and cloud providers prominently', body: 'AWS/GCP/Azure certifications with years of experience in the skills section. Cloud provider is often a filter recruiters use before reading profiles.' }, { num: '05', title: 'Add Featured section with a notable project or post', body: 'A post about a system failure you fixed, a tool you open-sourced, or an article about reliability engineering builds credibility beyond keyword matching.' }], example: { before: 'DevOps Engineer | AWS | Terraform | Kubernetes', after: 'Senior SRE | Platform Reliability Engineering | 99.9%+ uptime at 200-engineer scale | Reduced MTTD 6× at scale', note: 'Same person, completely different searchability and first impression.' }, stats: [{ stat: '4×', body: 'More recruiter messages with optimized headline and About', source: 'Askia A/B testing' }, { stat: '70%', body: 'Of recruiters use LinkedIn as primary sourcing tool', source: 'Industry research' }, { stat: '2 weeks', body: 'Average time to first recruiter outreach after LinkedIn optimization', source: 'Askia client data' }], faq: [{ q: 'Should I post about incidents I\'ve handled?', a: 'Yes, with discretion. Postmortem-style posts (anonymized, focused on learning) perform very well and signal operational maturity to recruiters and hiring managers alike.' }] },
      'data': { title: 'LinkedIn Optimization for Data Professionals', metaTitle: 'LinkedIn for Data Science & Data Engineering | Visibility & Inbound | Askia', metaDescription: 'How Data Engineers, Data Scientists, and Analytics professionals optimize LinkedIn for recruiter visibility and inbound interest.', headline: 'Get Inbound From the Right Data Teams', intro: 'Data LinkedIn profiles fall into two failure modes: either they look like resumes (experience bullets, no personality) or they look like Twitter (posts about AI, no substance). Senior data recruiters want to see that you work on meaningful data problems at real scale and that your work influences decisions — not that you can explain transformers in a thread.', shortAnswer: 'Lead with scale and decision impact in your headline and About. Be specific about whether you\'re DE, DS, or analytics — recruiters search different terms for each.', doFirst: ['Recruiters reach out for the wrong type of data roles', 'Your profile doesn\'t signal scale or business impact', 'You want inbound from product-led or data-driven companies'], skip: ['You\'re targeting ML research roles where academic credentials matter more', 'You\'re already getting strong inbound from the right companies', 'You\'re in a confidential search'], steps: [{ num: '01', title: 'Be explicit about your specialization', body: '"Data Engineer | Streaming Pipelines & Lakehouse Architecture" vs "Data Scientist | Churn & LTV Modeling" vs "Analytics Engineer | dbt & Metric Layer." Recruiters search these specific terms.' }, { num: '02', title: 'Open About with scale and business impact', body: '"I build data infrastructure processing 50M+ records/day that powers the pricing decisions for a $500M ecommerce business." That\'s a first sentence that stops recruiters.' }, { num: '03', title: 'List the right technology keywords', body: 'Spark, dbt, Airflow, Snowflake, Databricks, BigQuery, Kafka — whichever you actually use. Include data modeling, data quality, and pipeline reliability.' }, { num: '04', title: 'Show business context, not just technical context', body: '"I partner with product and finance teams to turn data into pricing, segmentation, and retention decisions." This differentiates you from analysts who just build dashboards.' }, { num: '05', title: 'Add a Featured post about a data problem you solved', body: 'A written post about a data quality issue, a modeling decision, or a pipeline architecture you designed signals depth and communication skill — both of which senior data roles require.' }], example: { before: 'Data Engineer | Python | Spark | AWS', after: 'Senior Data Engineer | Streaming Pipelines & Lakehouse | 50M+ records/day | Business-critical data infrastructure', note: 'Specialization + scale + business signal = right recruiter outreach.' }, stats: [{ stat: '4×', body: 'More recruiter messages with optimized headline and About', source: 'Askia A/B testing' }, { stat: '70%', body: 'Of recruiters use LinkedIn as primary sourcing tool', source: 'Industry research' }, { stat: '2 weeks', body: 'Average time to first recruiter outreach', source: 'Askia client data' }], faq: [{ q: 'Should I share my data work publicly?', a: 'Yes, when possible. Open datasets, blog posts about technical decisions, and comments on data architecture discussions all build your profile visibility and credibility.' }] },
      'product-manager': { title: 'LinkedIn Optimization for Product Managers', metaTitle: 'LinkedIn for Product Managers | Senior PM Visibility | Askia', metaDescription: 'How Senior PMs and Group PMs optimize LinkedIn to attract inbound from top product teams and land the right recruiter outreach.', headline: 'Position Yourself as a Senior PM That Top Teams Chase', intro: 'PM LinkedIn profiles often read too broadly. "Product Manager passionate about user experience" tells recruiters nothing about what kind of product you own, what stage of company you thrive in, or what problem space you\'re exceptional at. Senior PM recruiter searches are very specific — and your profile needs to match the exact signal they\'re looking for.', shortAnswer: 'Name your product domain, the stage of company you\'ve worked in, and one concrete outcome in your headline and opening About sentence. Specificity wins.', doFirst: ['Recruiters reach out for wrong-stage or wrong-domain roles', 'Your headline is "Product Manager" and nothing else', 'You want inbound from specific company types (growth-stage, enterprise, consumer)'], skip: ['You\'re already getting strong inbound from the right companies', 'You\'re in a confidential search', 'Referrals are your primary channel'], steps: [{ num: '01', title: 'Headline: domain + stage + outcome signal', body: '"Senior PM | Consumer Growth | Scaled signup from 0→2M users" beats "Product Manager at Series B startup." Domain, stage, and a signal of what you\'ve done in one line.' }, { num: '02', title: 'About: open with the product bet that paid off', body: '"I\'ve spent the last 4 years owning user acquisition and growth at consumer startups — the products I\'ve shipped have 2M+ users and $18M in annual recurring revenue." First sentence, no hedging.' }, { num: '03', title: 'Use domain-specific keywords', body: 'B2B SaaS vs consumer vs platform PM are different searches. Make it clear which you are. Include relevant keywords: growth, activation, retention, monetization, platform, enterprise.' }, { num: '04', title: 'Add Featured projects or case studies', body: 'A 300-word LinkedIn article about a product decision you made — even one that failed — is more valuable than any skill endorsement. It shows thinking, not just history.' }, { num: '05', title: 'Connect with PMs at target companies', body: 'Personalized connection requests to PMs at your target companies who are 1-2 levels above you. They\'re the ones who know when a role opens before it\'s posted.' }], example: { before: 'Product Manager at TechCorp | Passionate about building great products', after: 'Senior PM | B2B SaaS Growth & Activation | Grew activation 40%, $4.2M revenue impact at Series C', note: 'Specific domain + stage + outcome = the PM profile that gets the right recruiter call.' }, stats: [{ stat: '4×', body: 'More recruiter messages with optimized PM profile', source: 'Askia A/B testing' }, { stat: '70%', body: 'Of recruiters use LinkedIn as primary sourcing tool', source: 'Industry research' }, { stat: '3 weeks', body: 'Average time to first PM interview after LinkedIn optimization', source: 'Askia client data' }], faq: [{ q: 'Should I post PM content on LinkedIn?', a: 'Quality over quantity. One well-written post about a product decision or framework you use is worth more than daily opinion posts. Hiring managers read your posts to assess your thinking.' }] },
      'engineering-manager': { title: 'LinkedIn Optimization for Engineering Managers', metaTitle: 'LinkedIn for Engineering Managers | EM & Director Visibility | Askia', metaDescription: 'How Engineering Managers and Directors of Engineering optimize LinkedIn for leadership visibility and inbound from the right companies.', headline: 'Build an EM LinkedIn That Shows You Lead High-Output Teams', intro: 'Engineering Manager LinkedIn profiles often sit in an awkward middle — too much IC technical detail, not enough leadership signal. Senior EM recruiters want to see team size, team outcomes, and organizational scope. They\'re evaluating whether you can lead their engineering function, not whether you can code.', shortAnswer: 'Lead with team scale, delivery outcomes, and how you develop engineers. Technical detail is credibility, not the headline.', doFirst: ['Recruiters reach out for IC roles, not management roles', 'Your profile still reads like a senior engineer\'s', 'You want to signal Director-level readiness'], skip: ['You\'re still exploring IC vs management', 'You\'re already getting strong inbound for the right roles', 'You\'re in a confidential search'], steps: [{ num: '01', title: 'Headline: team size + outcomes', body: '"Engineering Manager | 12-person platform team | 0 regrettable attrition in 2 years" signals leadership results, not just role title.' }, { num: '02', title: 'About: open with team outcomes', body: '"I\'ve led engineering teams of 4-15 people building infrastructure that processes $100M+ in transactions. My teams ship on time, retain their best engineers, and grow their own leaders." That\'s an EM profile.' }, { num: '03', title: 'Show your management philosophy', body: 'One sentence about how you lead: "I lead by removing blockers, building psychological safety, and creating clear paths to Senior and Staff for high performers." Hiring managers read this to evaluate culture fit.' }, { num: '04', title: 'Include organizational scope keywords', body: 'People management, hiring, performance management, cross-functional leadership, org design. These are recruiter search terms for management roles.' }, { num: '05', title: 'Add a Featured post about team building', body: 'A post about how you hired or developed a senior engineer, or how you handled a team challenge, shows management depth that bullet points can\'t.' }], example: { before: 'Engineering Manager at TechCorp | Building great products with engineering teams', after: 'Engineering Manager | 12-person platform team | Grew 3→12 engineers, 0 regrettable attrition, 3 promotions to Senior in 24 months', note: 'Team scale + team building outcomes = leadership signal that recruiters search for.' }, stats: [{ stat: '4×', body: 'More management-level recruiter outreach with optimized EM profile', source: 'Askia A/B testing' }, { stat: '70%', body: 'Of recruiters use LinkedIn as primary sourcing tool', source: 'Industry research' }, { stat: '2 weeks', body: 'Average time to first EM interview after optimization', source: 'Askia client data' }], faq: [{ q: 'Should I still list technical skills prominently?', a: 'Yes, but in context. "5 years in Go before moving to management" in your About, then technical skills in the skills section. Credibility without making it the focus.' }] },
      'finance-fpa': { title: 'LinkedIn Optimization for Finance & FP&A Professionals', metaTitle: 'LinkedIn for FP&A & Finance | Senior Finance Visibility | Askia', metaDescription: 'How Senior FP&A, Finance Managers, and Controllers optimize LinkedIn to attract inbound from CFOs and finance leadership teams.', headline: 'Build a Finance LinkedIn That CFOs Actually Notice', intro: 'Finance LinkedIn profiles almost universally undersell their owners. Senior FP&A professionals who influence multi-million dollar decisions present themselves as "finance professional with 8 years of experience." The problem is that the CFO hiring for their VP of FP&A is searching LinkedIn for someone who has already done the job — and your profile needs to show it clearly and confidently.', shortAnswer: 'Name your finance specialty, the revenue scope you\'ve operated in, and one outcome that shows you move the business. Titles and years of experience are table stakes — outcomes are the differentiator.', doFirst: ['Your headline is your title and company and nothing else', 'You want inbound from PE-backed, high-growth, or enterprise finance teams', 'CFOs and VPFs are your hiring managers and you want them to find you'], skip: ['You\'re targeting accounting or audit roles', 'You\'re already getting strong inbound', 'You\'re in a confidential search'], steps: [{ num: '01', title: 'Headline: specialty + scope + one outcome', body: '"Senior FP&A Manager | $200M Revenue Division | Forecast accuracy 94% | Business partner to C-suite" tells the story in one line.' }, { num: '02', title: 'About: open with business partnership scope', body: '"I lead FP&A for a $200M revenue division, partnering directly with the CEO and CFO on quarterly planning, capital allocation, and scenario modeling." That\'s a first sentence that lands with the right audience.' }, { num: '03', title: 'Use finance-specific keywords', body: 'FP&A, forecasting, driver-based modeling, variance analysis, financial planning, business partnership, scenario analysis, board reporting. These are exact recruiter searches.' }, { num: '04', title: 'Show the scope of decisions you\'ve influenced', body: '"Presented to board, C-suite, and PE sponsors quarterly" vs "Prepared financial reports." The former shows executive communication credibility.' }, { num: '05', title: 'Connect with CFOs and VPs of Finance at target companies', body: 'Senior finance roles are often filled by referral or CFO network. Personalized outreach to finance leaders at your target companies is more valuable than any keyword optimization.' }], example: { before: 'Finance Manager at Company | FP&A | Excel | Budgeting', after: 'Senior FP&A Manager | $200M Revenue Scope | Forecast Accuracy 94% | C-suite business partner', note: 'Revenue scope + outcome + executive access = the finance profile that gets the CFO call.' }, stats: [{ stat: '4×', body: 'More executive-level recruiter outreach with optimized finance profile', source: 'Askia A/B testing' }, { stat: '70%', body: 'Of recruiters use LinkedIn as primary sourcing tool', source: 'Industry research' }, { stat: '3 weeks', body: 'Average time to first finance interview after optimization', source: 'Askia client data' }], faq: [{ q: 'Should I post finance content?', a: 'Thoughtfully, yes. Posts about modeling decisions, planning processes, or business partnership challenges show the thinking that senior finance roles require.' }] }
    }
  },
  {
    topic: 'interview-prep',
    topicName: 'Interview Prep',
    byRole: {
      'software-engineer': { title: 'Software Engineer Interview Preparation Guide', metaTitle: 'SWE Interview Prep | Technical & Behavioral for Senior SWE | Askia', metaDescription: 'How to prepare for software engineer interviews at senior and staff levels — technical, behavioral, and system design rounds.', headline: 'Walk Into Every SWE Interview Knowing What You\'ll Say', intro: 'Senior SWE interviews have three distinct rounds most candidates prepare for separately: coding, system design, and behavioral. The candidates who convert most consistently are the ones who integrate preparation — their system design examples come from their behavioral stories, and their behavioral stories show up in coding discussion context. Preparation is a system, not a checklist.', shortAnswer: 'Prepare 5-7 technical stories that pull double duty — they work in system design, behavioral, and coding discussion rounds. Rehearse the narrative, not the answer.', doFirst: ['You\'re landing interviews but not converting to offers', 'System design or behavioral rounds are your weak points', 'You feel unprepared despite strong technical skills'], skip: ['You\'re not getting interviews yet — optimize your resume first', 'You\'re consistently converting SWE interviews to offers', 'You\'re targeting management roles'], steps: [{ num: '01', title: 'Build a technical story bank', body: '5-7 projects where you can speak to: the problem, the constraints, the technical decision you made, the tradeoffs, and the outcome. These stories need to be drill-down ready — interviewers will probe any claim you make.' }, { num: '02', title: 'Prepare for the coding round specifically', body: 'LeetCode Medium is the real bar for most FAANG-adjacent companies. Focus on graphs, trees, and dynamic programming patterns. But more importantly, practice talking while coding — most candidates code silently and lose.' }, { num: '03', title: 'Practice system design out loud, not on paper', body: 'Do 10 system design problems from scratch, on video, talking to yourself or a partner. The difference between knowing a design and being able to present it under pressure is enormous.' }, { num: '04', title: 'Prepare "tell me about yourself" as a 90-second narrative', body: 'Where you\'ve been → what you\'ve built → what you\'re known for → why this role. Rehearse until it\'s smooth. It sets the frame for the entire interview.' }, { num: '05', title: 'Research the company\'s engineering blog and recent hiring bar', body: 'Companies\' engineering blogs show what problems they\'re solving. Candidates who reference specific engineering challenges in interviews are remembered.' }], example: { before: 'I worked on a microservices project where we improved performance.', after: 'I led the migration of our payment processing service from a monolith to an event-driven microservices architecture. The constraint was 99.9% availability SLA during migration. I chose blue-green deployment to eliminate downtime risk, ran parallel processing for 2 weeks before cutover, and achieved zero downtime with a 40% latency improvement.', note: 'Constraints + decision + outcome is the format every SWE interview answer should follow.' }, stats: [{ stat: '2×', body: 'Higher offer rate with structured SWE interview preparation', source: 'Askia client data' }, { stat: '89%', body: 'Of prepared SWE candidates advance past phone screens', source: 'Askia client data' }, { stat: '6-8', body: 'Technical stories needed to handle all behavioral questions', source: 'Interview coaching research' }], faq: [{ q: 'How much LeetCode do I need?', a: '100-150 Mediums covering core patterns is enough for most senior roles. Doing 500+ problems without reviewing patterns is diminishing returns.' }, { q: 'How do I prepare for system design if I haven\'t built distributed systems?', a: 'Read engineering blogs from Stripe, Netflix, Uber, Discord. Understand the problems they solved and why. You can reason about systems you haven\'t built if you understand the tradeoffs.' }] },
      'devops-sre': { title: 'DevOps & SRE Interview Preparation Guide', metaTitle: 'DevOps & SRE Interview Prep | Platform Engineering Interviews | Askia', metaDescription: 'How to prepare for SRE and DevOps interviews — technical, incident response, and behavioral rounds for senior platform engineers.', headline: 'Prepare for SRE Interviews Like an Engineer, Not a Test-Taker', intro: 'SRE interviews test a specific combination: operational knowledge, systems thinking, and behavioral maturity. You need to demonstrate that you\'ve operated real systems at real scale and learned from failure — not just that you can pass a Linux trivia quiz. The most valuable preparation is converting your incident history into structured interview stories.', shortAnswer: 'Prepare 3-5 incident stories, 5-7 infrastructure design examples, and a clear narrative of how your platform work has improved developer velocity and reliability.', doFirst: ['You\'re landing SRE interviews but not converting', 'Behavioral rounds or the "tell me about a time you improved reliability" questions stall you', 'You\'re strong technically but less practiced at structured storytelling'], skip: ['You\'re not getting interviews yet — optimize your resume first', 'You\'re consistently converting SRE interviews', 'You\'re targeting pure software engineering roles'], steps: [{ num: '01', title: 'Build 3-5 incident response stories', body: 'Blast radius → your role → the decision you made → the fix → what changed systemically. See our Incident Response Stories guide for detailed templates.' }, { num: '02', title: 'Prepare infrastructure design answers', body: 'Practice designing a CI/CD pipeline, a Kubernetes cluster for a given workload, a multi-region active-active setup. Draw from real systems, not textbooks.' }, { num: '03', title: 'Know your reliability metrics cold', body: 'Your current SLOs, the MTTD and MTTR before and after your improvements, your on-call load. If you can\'t say "we went from X to Y," you can\'t answer "tell me about a time you improved reliability."' }, { num: '04', title: 'Prepare for the Linux/systems trivia layer', body: 'TCP handshake, kernel processes, file descriptors, DNS resolution, memory and CPU concepts. Most SRE interviews include a technical screen with this layer.' }, { num: '05', title: 'Show you have opinions about reliability', body: '"I believe in SLO-based alerting over threshold-based alerting because..." Candidates with opinions get hired. Candidates who answer every question with "it depends" and nothing else don\'t.' }], example: { before: 'I was on-call and dealt with a lot of incidents.', after: 'I redesigned our alerting architecture from threshold-based to SLO-based after analyzing 6 months of alert data. 67% of our P1 alerts were false positives, causing alert fatigue. Post-migration, false positive rate dropped to 8% and actual incident MTTD improved from 8 minutes to 90 seconds because engineers stopped ignoring alerts.', note: 'Problem + analysis + decision + quantified outcome = SRE interview answer that gets offers.' }, stats: [{ stat: '2×', body: 'Higher offer rate with structured SRE interview preparation', source: 'Askia client data' }, { stat: '89%', body: 'Of prepared SRE candidates advance past phone screens', source: 'Askia client data' }, { stat: '3', body: 'Incident stories needed to handle most SRE behavioral rounds', source: 'Interview coaching research' }], faq: [{ q: 'How technical are SRE behavioral rounds?', a: 'Very. Unlike most behavioral rounds, SRE behavioral questions usually drill into the technical details: "how exactly did you find the root cause?" Prepare to go deep.' }] },
      'data': { title: 'Data Science & Analytics Interview Preparation Guide', metaTitle: 'Data Science Interview Prep | Senior DS & Analytics | Askia', metaDescription: 'How to prepare for data science, data engineering, and analytics interviews at senior levels — technical, case, and behavioral rounds.', headline: 'Walk Into Data Interviews Ready for Every Round', intro: 'Data interviews test the widest range of skills of any technical discipline: SQL, statistics, ML concepts, business case analysis, data storytelling, and behavioral. Most candidates over-prepare the SQL layer and under-prepare the business case and storytelling layers — which is exactly where senior data roles are won.', shortAnswer: 'Nail SQL and statistics fundamentals, then spend 50% of your prep on business case structuring and data storytelling. That\'s where senior data roles separate candidates.', doFirst: ['You\'re landing data interviews but stalling in business case or storytelling rounds', 'SQL and technical rounds go well but business cases don\'t', 'You\'re targeting Senior+ roles where analytical communication is evaluated heavily'], skip: ['You\'re not getting interviews yet', 'You\'re targeting ML research roles with different interview formats', 'Your technical rounds are the weak point (focus there first)'], steps: [{ num: '01', title: 'Master advanced SQL patterns', body: 'Window functions, CTEs, self-joins, date spine construction, funnel analysis patterns. Most senior data interviews include at least one complex SQL problem. Practice writing clean, readable SQL under time pressure.' }, { num: '02', title: 'Prepare your A/B testing framework cold', body: '"Walk me through how you\'d design an A/B test" is in every senior data interview. Power analysis → randomization unit → guardrail metrics → success metrics → runtime → analysis. Know this in your sleep.' }, { num: '03', title: 'Build 3-5 analysis stories', body: 'An analysis you ran that changed a business decision, a model you built that improved an outcome, a data quality issue you found and fixed. These are your behavioral interview answers for every data question.' }, { num: '04', title: 'Practice business case structuring', body: '"How would you measure the impact of a new feature?" → Metric tree: what metrics matter, what\'s the causality chain, what are the counter-metrics. Structure first, then dive into analysis.' }, { num: '05', title: 'Prepare to explain your best model simply', body: 'Pick your most complex model and explain it in under 60 seconds to a non-technical person. If you can\'t do that, you\'re not ready for the business case rounds of senior data interviews.' }], example: { before: 'I can do SQL, Python, and statistics and have experience with machine learning.', after: 'I designed and implemented a churn prediction model with 89% accuracy for a $500M ecommerce business. I\'ll walk you through the feature engineering, why I chose gradient boosting over logistic regression, and how I worked with the CS team to turn model scores into outreach workflows that reduced preventable churn by $1.4M ARR.', note: 'Technical depth + business context + outcome = senior data interview answer.' }, stats: [{ stat: '2×', body: 'Higher offer rate with structured data interview preparation', source: 'Askia client data' }, { stat: '89%', body: 'Of prepared data candidates advance past phone screens', source: 'Askia client data' }, { stat: '5', body: 'Analysis stories needed to handle most data behavioral rounds', source: 'Interview coaching research' }], faq: [{ q: 'How important is statistics knowledge for data interviews?', a: 'For DS roles: very important. Know hypothesis testing, p-values, confidence intervals, and common experimental design pitfalls. For DE roles: less critical than SQL and pipeline design.' }] },
      'product-manager': { title: 'Product Manager Interview Preparation Guide', metaTitle: 'PM Interview Prep | Senior PM & GPM Interview Strategy | Askia', metaDescription: 'How to prepare for product manager interviews at senior levels — product sense, behavioral, analytical, and estimation rounds.', headline: 'Prepare for PM Interviews Like a Product Leader, Not a Candidate', intro: 'PM interviews test more distinct skills than almost any other role: product sense, analytical thinking, cross-functional leadership, estimation, technical depth, and behavioral judgment. The trap is over-preparing for structured frameworks and under-developing actual product opinions. Hiring teams can immediately tell the difference between a candidate who studied CIRCLES and one who has strong product intuition.', shortAnswer: 'Develop product opinions before frameworks. Know your user archetypes, know your metrics, know your tradeoffs. Frameworks are scaffolding — thinking is the product.', doFirst: ['You\'re landing PM interviews but not converting', 'Product case or product sense rounds are where you lose', 'You\'re targeting Senior PM or Director of Product roles'], skip: ['You\'re not getting PM interviews yet — fix your resume first', 'You\'re already converting PM interviews consistently', 'You\'re targeting technical PM roles that emphasize system design'], steps: [{ num: '01', title: 'Build your product opinion library', body: 'Pick 10 products you use and have a 60-second structured take on each: what\'s the core job-to-be-done, who\'s the primary user, what\'s the biggest opportunity, what would you build next and why. This is what interviewers are probing.' }, { num: '02', title: 'Prepare 6-8 STAR stories for leadership, conflict, and judgment', body: 'Map your stories to question types: cross-functional conflict, prioritization decision under pressure, product you shipped that failed, product you championed against consensus. These cover 90% of PM behavioral questions.' }, { num: '03', title: 'Know your estimation framework cold', body: 'Market sizing and estimation questions test how you structure uncertainty. Practice the top-down vs bottom-up approach and get comfortable stating assumptions explicitly. "I\'m assuming X because Y" is the right format.' }, { num: '04', title: 'Prepare your metric frameworks', body: 'For any product question, be ready to say: primary success metric, counter-metric, leading indicator, lagging indicator. Most PM candidates pick one metric and stop — senior PMs build a metric tree.' }, { num: '05', title: 'Research the company\'s product and recent launches', body: 'Candidates who reference the company\'s actual recent product decisions in interviews are remembered. "I noticed you launched X last month — here\'s how I\'d think about measuring that..." is a memorable answer opener.' }], example: { before: 'I\'d use the RICE framework to prioritize and then A/B test the winning option.', after: 'Before prioritizing, I\'d segment users by activation state — because a 20% activation gap in enterprise accounts is a fundamentally different problem than low retention in the SMB cohort. For enterprise activation, I\'d run a white-glove onboarding experiment targeting accounts with 10+ seats but <3 activated users. Success metric: 7-day activation; counter-metric: support ticket volume. RICE score is the last step, not the first.', note: 'User segmentation + specific hypothesis + metrics + counter-metric = the PM answer that gets offers.' }, stats: [{ stat: '2×', body: 'Higher offer rate with structured PM interview preparation', source: 'Askia client data' }, { stat: '89%', body: 'Of prepared PM candidates advance past phone screens', source: 'Askia client data' }, { stat: '8', body: 'STAR stories needed to handle all PM behavioral rounds', source: 'Interview coaching research' }], faq: [{ q: 'How do I prepare for estimation questions?', a: 'Practice 20 different estimates out loud. The goal isn\'t the right answer — it\'s showing that you structure uncertainty, state assumptions, and arrive at a reasonable order of magnitude with confidence.' }] },
      'engineering-manager': { title: 'Engineering Manager Interview Preparation Guide', metaTitle: 'EM Interview Prep | Engineering Manager & Director Interviews | Askia', metaDescription: 'How to prepare for engineering manager and director of engineering interviews — leadership, people management, and technical strategy rounds.', headline: 'Walk Into EM Interviews Ready to Show Real Leadership', intro: 'Engineering manager interviews test a broader range of skills than most candidates expect: technical direction, people management, cross-functional communication, process design, and executive communication. The candidates who convert most consistently are those who have clear, honest stories about how their teams have performed and what they personally did to make that happen.', shortAnswer: 'Prepare management stories that are specific and honest. Sanitized success stories read as fake. Real stories — including hard decisions — show judgment.', doFirst: ['You\'re landing EM interviews but not converting', 'Behavioral rounds on people management or team building stall you', 'You\'re preparing for a first EM role from a Staff+ IC position'], skip: ['You\'re not getting interviews yet — optimize your resume first', 'You\'re targeting Staff+ IC roles', 'You\'re a new manager with < 1 year of direct report experience'], steps: [{ num: '01', title: 'Build your management story bank (5 archetypes)', body: 'The underperformer you managed. The high performer you retained or promoted. The team conflict you resolved. The hire you\'re most proud of. The process you changed. These 5 cover 80% of EM behavioral questions.' }, { num: '02', title: 'Prepare your technical strategy story', body: '"Tell me about a major technical decision you drove" — have one ready. A migration, an architecture choice, a platform investment. Show you can drive technical direction, not just manage engineers who drive it.' }, { num: '03', title: 'Know your team metrics', body: 'Attrition, eNPS, promotion velocity, delivery rate, hiring close rate. At a minimum, know how your team performed vs. the org average.' }, { num: '04', title: 'Prepare for the "hard conversation" question', body: '"Tell me about a difficult conversation you had with a direct report." Have a real story. The texture of how you handled it — what you said, how they reacted, what changed — is what the interviewer evaluates.' }, { num: '05', title: 'Practice executive-level communication', body: 'At Director+, you need to be able to summarize a complex technical or team situation in 60 seconds for a non-technical VP. Practice this explicitly.' }], example: { before: 'I have experience managing teams and have dealt with performance issues.', after: 'I had an engineer who\'d missed two promo cycles before I joined. In month one I realized the issue wasn\'t performance — it was no sponsorship and no clarity on what Senior looked like at our company. We built a 90-day visibility plan together, I advocated at the promo committee, and they were promoted 6 months into my tenure. Now they\'re mentoring two other engineers. That\'s the diagnostic lens I bring to any performance conversation.', note: 'Diagnosis + action + advocacy + outcome = EM interview answer that shows leadership judgment.' }, stats: [{ stat: '2×', body: 'Higher offer rate with structured EM interview preparation', source: 'Askia client data' }, { stat: '85%', body: 'Of EM clients receive multiple offers', source: 'Askia client data' }, { stat: '5', body: 'Management story archetypes needed to handle all EM behavioral rounds', source: 'Interview coaching research' }], faq: [{ q: 'How honest should I be about team performance issues?', a: 'Honest — with discretion. Don\'t name people, but describe the real situation. "It was complicated and I handled it imperfectly at first" reads more credibly than "it went smoothly and everyone grew."' }] },
      'finance-fpa': { title: 'Finance & FP&A Interview Preparation Guide', metaTitle: 'Finance Interview Prep | FP&A & Finance Manager Interviews | Askia', metaDescription: 'How to prepare for FP&A and Finance Manager interviews — technical modeling, business case, and behavioral rounds for senior finance roles.', headline: 'Prepare for Finance Interviews That Go Beyond the Model', intro: 'Senior finance interviews test technical modeling skill, business partnership judgment, and strategic communication — often in the same round. The candidates who convert consistently are those who can talk about a model and immediately connect it to the decision it drove and the business outcome that followed. The modeling test is the qualifier; the business case conversation is the differentiator.', shortAnswer: 'Ace the modeling test to get in the room, but win the role in the business partnership and strategic thinking discussions. Know your models and know the decisions they drove.', doFirst: ['You\'re landing finance interviews but not converting', 'Technical modeling rounds go well but business case discussions stall', 'You\'re targeting Senior FP&A or Finance Manager roles'], skip: ['You\'re not getting interviews yet — optimize your resume first', 'You\'re targeting audit or accounting roles', 'You\'re already converting finance interviews consistently'], steps: [{ num: '01', title: 'Prepare your 3 best model stories', body: 'For each: what was the business question, what were the key drivers, what was the output, who saw it, and what decision it drove. See our Financial Modeling guide for the full framework.' }, { num: '02', title: 'Know your Excel and financial modeling cold', body: 'Driver-based revenue models, 3-statement integration, scenario/sensitivity analysis, DCF basics. Practice building a simple model from scratch in 30 minutes without referencing notes.' }, { num: '03', title: 'Prepare for the business partnership round', body: '"Tell me about a time you influenced a business decision with your analysis." This is the most important question in a senior finance interview. Have 2-3 stories ready with the stakeholder, the analysis, the pushback you got, and the outcome.' }, { num: '04', title: 'Research the company\'s financial model and growth trajectory', body: 'Candidates who reference the company\'s business model specifics — "given your expansion into enterprise, I\'d expect your LTV/CAC assumptions to shift..." — are immediately memorable.' }, { num: '05', title: 'Prepare for the "what would you improve" question', body: 'Every senior finance interview includes "what would you change about our planning process?" Have an answer that shows your diagnostic framework, not just generic best practices.' }], example: { before: 'I\'m experienced in FP&A and have done budgeting, forecasting, and variance analysis.', after: 'I rebuilt the annual plan model from scratch for a $200M revenue division — replaced 14 disconnected Excel sheets with one driver-based model. Improved forecast accuracy from 81% to 93% over two cycles, and the model identified $3.2M in cost optimization that the CFO prioritized in the Q3 capital reallocation.', note: 'Scope + structural improvement + accuracy gain + business outcome = senior FP&A interview answer.' }, stats: [{ stat: '2×', body: 'Higher offer rate with structured finance interview preparation', source: 'Askia client data' }, { stat: '92%', body: 'Of finance clients land offers within 60 days', source: 'Askia client data' }, { stat: '3', body: 'Model stories needed to handle most finance interview rounds', source: 'Interview coaching research' }], faq: [{ q: 'Should I prepare a sample model to show in interviews?', a: 'Yes, if the role involves modeling. A clean, well-structured sample model you built demonstrates technical credibility better than describing one. Make sure it shows driver-based structure and scenario logic.' }] }
    }
  },
  {
    topic: 'salary-negotiation',
    topicName: 'Salary Negotiation',
    byRole: {
      'software-engineer': { title: 'Salary Negotiation for Software Engineers', metaTitle: 'SWE Salary Negotiation | Negotiate Your Engineering Comp Package | Askia', metaDescription: 'How to negotiate a software engineer compensation package — base, equity, sign-on, and title — at senior and staff levels.', headline: 'Negotiate Your SWE Offer Like a Staff Engineer', intro: 'SWE compensation packages are the most complex of any role: base, equity (RSU vesting schedules, refresh grants), sign-on bonuses, level, and remote flexibility all interact. Most engineers negotiate only the base salary and leave $30-80K on the table across the first 4 years. The total compensation frame is the most important thing to understand before you start negotiating.', shortAnswer: 'Calculate total compensation over 4 years, not just base salary. Equity is often 40-60% of total comp at senior levels — and it\'s the most negotiable component.', doFirst: ['You have a written offer and haven\'t accepted', 'This is your first time negotiating a senior-level SWE offer', 'You suspect the offer is below market for your level'], skip: ['You\'re still in interview stages — negotiate only after you have an offer', 'You\'re completely satisfied with every component of the offer', 'The role has a fixed compensation band (rare, but it happens at some companies)'], steps: [{ num: '01', title: 'Calculate 4-year total comp first', body: 'Base × 4 + equity (current value) + sign-on. For a Senior SWE, equity might be $300K over 4 years — that\'s $75K/year. Negotiating equity is as important as negotiating base.' }, { num: '02', title: 'Research your level on Levels.fyi', body: 'Find 10 data points at your level and target companies within 6 months. "Based on Levels.fyi data for L5 at similar companies, total comp is running $280-320K" is a credible anchor.' }, { num: '03', title: 'Make your base salary ask first, specifically', body: '"I\'d like to request $185K base" not "can you do better on base?" Specific asks signal that you\'ve done research and know what fair looks like.' }, { num: '04', title: 'Negotiate equity and sign-on if base is stuck', body: 'If base can\'t move: "Could you increase the initial equity grant to $350K over 4 years?" or "Could you add a $30K sign-on to bridge the gap to market?" These are often easier to move.' }, { num: '05', title: 'Push for level upgrade if compensation band is the blocker', body: '"If the L5 band tops out at $180K and I\'m targeting $190K, could we discuss evaluating me at L6?" Level upgrades are rare but they do happen — and they change the long-term trajectory.' }], example: { before: 'The offer looks good but I was hoping for a bit more.', after: 'I\'m very excited about this role and the team. Based on my research on Levels.fyi for L5 equivalents, total comp is running $290-330K at comparable companies. My current offer is at $265K total comp — I\'d like to request $185K base and $350K in equity over 4 years to bring this to market. Is there flexibility here?', note: 'Total comp frame + specific research + specific ask + enthusiastic framing = professional negotiation that gets results.' }, stats: [{ stat: '$47K', body: 'Average compensation increase negotiated by Askia SWE clients', source: 'Askia client outcomes' }, { stat: '85%', body: 'Of SWE offers have room for negotiation', source: 'Industry data' }, { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }], faq: [{ q: 'How do I negotiate when I have competing offers?', a: 'Use them as market data, not ultimatums. "I have a competing offer at $300K TC — I\'d prefer to join your team, but I need to be at market." That\'s professional and effective.' }, { q: 'Should I negotiate my RSU cliff and vesting schedule?', a: 'Yes. Shortening the cliff (from 1 year to 6 months) or accelerating vesting can be worth more than a sign-on bonus if you plan to stay. These are often negotiable at larger companies.' }] },
      'devops-sre': { title: 'Salary Negotiation for DevOps & SRE', metaTitle: 'DevOps & SRE Salary Negotiation | Negotiate Platform Engineering Comp | Askia', metaDescription: 'How to negotiate a DevOps or SRE compensation package at senior and staff levels, including equity, on-call pay, and remote flexibility.', headline: 'Negotiate Your SRE Comp Package to Market Rate', intro: 'SRE and DevOps compensation has significant variance — the same Senior SRE role at a startup, growth-stage company, and FAANG can have 2× difference in total comp. Understanding the components (base, equity, on-call stipends, remote flexibility) and having market data specific to your level is the foundation of a successful SRE offer negotiation.', shortAnswer: 'Know your 4-year total comp, research Levels.fyi for SRE equivalents, and don\'t forget to negotiate on-call compensation and remote flexibility as levers if base is stuck.', doFirst: ['You have an SRE or DevOps offer and haven\'t accepted', 'You\'re unsure whether the offer is at market', 'This is your first senior-level SRE negotiation'], skip: ['You\'re still in interview stages', 'You\'re completely satisfied with every component', 'You\'re at a company with fixed non-negotiable bands'], steps: [{ num: '01', title: 'Calculate 4-year total comp including equity', body: 'Base + equity vesting + on-call pay + benefits value. SRE equity at growth-stage companies can significantly exceed the base salary — don\'t negotiate base in isolation.' }, { num: '02', title: 'Research SRE-specific compensation data', body: 'Levels.fyi has SRE benchmarks. Also use Blind and your network. Know the difference between startup SRE comp (heavy equity, lower base) and public company SRE comp (higher base, RSU refreshes).' }, { num: '03', title: 'Negotiate on-call compensation explicitly', body: 'Many SRE offers include on-call rotation. Negotiate the on-call stipend separately from base if the on-call load is significant. "Given the on-call expectation of 1 week in 4, I\'d expect an on-call allowance of $X." This is often overlooked.' }, { num: '04', title: 'Push for remote flexibility if base is stuck', body: 'Permanent remote or 2 days/week remote saves $10-20K/year in commute and relocation costs. If the base won\'t move, remote flexibility is a high-value alternative lever.' }, { num: '05', title: 'Get total comp in writing before accepting', body: 'SRE compensation packages can be complex. Get the full offer letter with base, equity schedule, on-call policy, and benefits documented before you start negotiating — you need to know what you\'re negotiating.' }], example: { before: 'The offer looks reasonable but I\'m not sure about the equity.', after: 'Based on Levels.fyi benchmarks for Senior SRE at comparable-stage companies, total comp is running $290-340K. My current offer is $255K TC. I\'d like to request $175K base and $300K in equity over 4 years, plus clarity on the on-call stipend for the 1-in-4 rotation. Is there flexibility on any of these components?', note: 'Market research + specific components + on-call acknowledgment = professional SRE negotiation.' }, stats: [{ stat: '$47K', body: 'Average compensation increase negotiated by Askia clients', source: 'Askia client outcomes' }, { stat: '85%', body: 'Of SRE offers have room for negotiation', source: 'Industry data' }, { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }], faq: [{ q: 'How do I negotiate when the company says the band is fixed?', a: '"Fixed" is often not as fixed as it sounds. Push for level upgrade, equity top-up, or sign-on bonus. The band may be fixed; the offer is not.' }] },
      'data': { title: 'Salary Negotiation for Data Professionals', metaTitle: 'Data Science & DE Salary Negotiation | Negotiate Your Data Comp | Askia', metaDescription: 'How to negotiate a Data Scientist or Data Engineer compensation package at senior levels, including equity, title, and remote flexibility.', headline: 'Negotiate Your Data Role Offer to Market', intro: 'Data Science and Data Engineering compensation is highly variable by specialization, company stage, and geography. The same "Senior Data Scientist" title can mean $160K at a mid-market company or $300K+ at a FAANG-adjacent tech company. Understanding what market looks like for your specific specialization and leveling system is the foundation of any data compensation negotiation.', shortAnswer: 'Research comp for your specific data specialization (DE vs DS vs Analytics) at comparable company stages. The variance within "data" is enormous — generic Glassdoor averages are almost useless.', doFirst: ['You have a data role offer and haven\'t accepted', 'You\'re unsure whether the offer is at market for your specialization', 'This is your first Senior+ data role negotiation'], skip: ['You\'re still in interview stages', 'You\'re completely satisfied with every component', 'The role is at an early-stage startup with fixed equity-heavy comp'], steps: [{ num: '01', title: 'Research comp by specialization, not just "data"', body: 'DE, DS, and Analytics have different market rates. "Senior Data Scientist (ML/AI focus)" vs "Senior Analytics Engineer (dbt/BI)" have different comp profiles. Be specific in your research.' }, { num: '02', title: 'Use Levels.fyi, Blind, and your network for real data', body: 'For early-stage companies, LinkedIn salary data and your network are more useful than Levels.fyi, which skews toward FAANG. "A Senior DE in my network at a Series C recently accepted $185K + $250K equity" is real data.' }, { num: '03', title: 'Negotiate title alongside compensation', body: 'At many companies, the difference between Senior and Staff/Principal data roles is $20-40K. If you\'re borderline on level, making the case for a title upgrade changes the entire comp trajectory.' }, { num: '04', title: 'Factor in learning opportunity and equity upside', body: 'Early-stage equity has real value if the company has good fundamentals. Don\'t negotiate solely on base if equity upside is meaningful — but do make sure the equity is priced fairly.' }, { num: '05', title: 'Negotiate tools and compute budget separately', body: 'Senior data roles often include budget for compute (cloud credits, GPU access) and tools. For ML-heavy roles, this can be worth $10-20K/year in infrastructure access. Negotiate it explicitly.' }], example: { before: 'I was hoping for a bit more on the base salary.', after: 'Based on market data for Senior Data Scientists at Series C-D companies in my network and on Blind, comp is running $185-210K base with $200-300K equity. My offer at $175K base puts me below that range. I\'d like to request $195K base or alternatively $180K base with $280K in equity over 4 years. Which direction makes more sense for your comp structure?', note: 'Stage-specific research + two alternative proposals = negotiation that works regardless of which lever the company can move.' }, stats: [{ stat: '$52K', body: 'Average compensation increase for Askia data clients', source: 'Askia client outcomes' }, { stat: '85%', body: 'Of data role offers have room for negotiation', source: 'Industry data' }, { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }], faq: [{ q: 'How do I negotiate at an early-stage startup with limited cash?', a: 'Negotiate equity percentage over vesting period and preferred stock provisions if you\'re at the right level. At senior levels, equity structure matters as much as equity value.' }] },
      'product-manager': { title: 'Salary Negotiation for Product Managers', metaTitle: 'PM Salary Negotiation | Negotiate Your Product Manager Comp | Askia', metaDescription: 'How to negotiate a Product Manager compensation package at senior and group PM levels, including base, equity, and title.', headline: 'Negotiate Your PM Offer to What the Market Actually Pays', intro: 'PM compensation at senior levels is one of the most opaque in tech — there are fewer public data points than SWE, and the variance by industry (fintech vs consumer vs B2B SaaS) is enormous. Senior PMs who negotiate effectively typically do so by combining market data with a clear articulation of the specific business impact they\'ve demonstrated at previous roles.', shortAnswer: 'Combine market data with your specific impact story. "Based on market data + the specific outcomes I\'ve driven, here\'s what I\'m targeting" is more compelling than market data alone.', doFirst: ['You have a PM offer and haven\'t accepted', 'This is your first Senior PM or Group PM offer negotiation', 'You want to negotiate but feel uncertain how to frame it as a PM'], skip: ['You\'re still in interview stages', 'You\'re completely satisfied with the offer', 'The comp band is fixed and well above your expectation'], steps: [{ num: '01', title: 'Research PM comp by role level and company stage', body: 'Levels.fyi has PM benchmarks for public tech companies. For growth-stage, use Pave benchmarks if available, or your network. Know the difference between IC PM comp and GPM comp.' }, { num: '02', title: 'Frame your negotiation around demonstrated impact', body: '"Based on the $4.2M revenue impact I drove at my last company, I\'m confident in asking for the top of the band." This is a PM negotiation, not just a comp negotiation — your track record is the leverage.' }, { num: '03', title: 'Negotiate title alongside base and equity', body: 'The difference between PM and Senior PM, or Senior PM and Principal PM, often means $15-30K more in base and significantly more equity. If you\'re borderline on level, advocate for the higher title explicitly.' }, { num: '04', title: 'Ask about scope and product ownership before finalizing', body: 'PM compensation is tied to scope. "I want to make sure we\'re aligned on the product scope before accepting — I\'m targeting a role that owns X" is a valid and professional pre-acceptance conversation.' }, { num: '05', title: 'Negotiate equity vesting and refreshes', body: 'At senior PM levels, equity refresh grants (after year 1-2) can be worth more than the initial grant. Ask explicitly: "Does this company offer annual or performance-based refresh grants?" This informs the long-term value of the offer.' }], example: { before: 'Can you do a bit better on the base?', after: 'I\'m genuinely excited about this role and the product area. Based on Levels.fyi and conversations with PMs in my network at comparable-stage companies, Senior PM total comp is running $280-320K. I\'d like to request $185K base and $280K in equity to bring this to market. Given the $4.2M ARR impact I\'ve driven at [Company], I\'m confident that\'s a fair ask.', note: 'Market data + personal impact + specific numbers = PM negotiation that wins.' }, stats: [{ stat: '$45K', body: 'Average compensation increase for Askia PM clients', source: 'Askia client outcomes' }, { stat: '85%', body: 'Of PM offers have room for negotiation', source: 'Industry data' }, { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }], faq: [{ q: 'Should I disclose my current comp during negotiation?', a: 'In most US states, employers legally cannot require you to disclose. Redirect: "I\'m targeting a total comp of $X based on market research for this level and scope."' }] },
      'engineering-manager': { title: 'Salary Negotiation for Engineering Managers', metaTitle: 'EM Salary Negotiation | Engineering Manager & Director Comp | Askia', metaDescription: 'How to negotiate an Engineering Manager or Director of Engineering compensation package including base, equity, team scope, and title.', headline: 'Negotiate Your EM Offer to Director-Level Market Rate', intro: 'Engineering Manager compensation has the widest variance of any technical leadership role — the same job title at a FAANG vs. a Series A means 3-4× difference in total compensation. Understanding how to research EM compensation by company stage, team scope, and your specific management track record is the foundation of a successful negotiation.', shortAnswer: 'Frame your negotiation around team scope, not just your personal experience. The size and strategic importance of the team you\'ll manage is the strongest argument for top-of-band or above-band compensation.', doFirst: ['You have an EM or Director offer and haven\'t accepted', 'This is your first Director-level offer negotiation', 'You want to negotiate but are uncertain how to frame leadership leverage'], skip: ['You\'re still in interview stages', 'The offer is already at the top of the Director band', 'You\'re new to management and this is your first EM role'], steps: [{ num: '01', title: 'Understand the scope of what you\'re managing', body: 'More engineers = more leverage. "I\'ll be managing a team of 12 in a critical product area" is a stronger negotiation position than "I\'ll be managing 4 engineers." Know the scope before you negotiate.' }, { num: '02', title: 'Research Director-level comp specifically', body: 'Levels.fyi has Director compensation for many companies. For non-FAANG, your network is the best source. "A Director I know at a comparable-stage company recently accepted $240K base + $500K equity" is real data.' }, { num: '03', title: 'Negotiate the level in addition to comp', body: 'The difference between Senior EM and Director is often $30-50K in base and significantly more equity. If you\'re leading a team of 8+, you have standing to request Director-level consideration.' }, { num: '04', title: 'Raise headcount authority as a negotiation point', body: '"I want to confirm that I\'ll have hiring authority for the team" — clarity on hiring scope before accepting prevents misaligned expectations and strengthens your negotiation position on team-scope arguments.' }, { num: '05', title: 'Negotiate equity heavily', body: 'EM equity grants at growth-stage companies can be 2-3× base salary. Negotiating equity aggressively at this level matters more than at IC levels because the grant sizes are larger and the risk/reward trade-off is cleaner.' }], example: { before: 'The offer is a bit below what I was expecting.', after: 'I\'m very excited about this opportunity and the team I\'d be leading. Based on Director-level benchmarks for a team scope of 10+ engineers at comparable-stage companies, total comp is running $280-340K. My offer is at $245K TC. I\'d like to request $200K base and $400K in equity over 4 years. Given that I\'d be leading a team of 12 in a critical product area, I believe that\'s consistent with the scope.', note: 'Scope argument + specific market data + specific numbers = EM negotiation that works.' }, stats: [{ stat: '$55K', body: 'Average compensation increase for Askia EM clients', source: 'Askia client outcomes' }, { stat: '85%', body: 'Of EM offers have room for negotiation', source: 'Industry data' }, { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }], faq: [{ q: 'Should I negotiate differently for a management role vs an IC role?', a: 'Yes. For management roles, team scope is your primary leverage — not just your personal experience. Make the case for scope-appropriate compensation, not just experience-appropriate compensation.' }] },
      'finance-fpa': { title: 'Salary Negotiation for Finance & FP&A Professionals', metaTitle: 'Finance & FP&A Salary Negotiation | Negotiate Your Finance Comp | Askia', metaDescription: 'How to negotiate a Finance Manager or Senior FP&A compensation package including base, bonus, equity, and title.', headline: 'Negotiate Your Finance Offer to What CFOs Actually Pay', intro: 'Finance compensation includes components that many professionals don\'t negotiate: base salary, annual bonus target, equity (at tech-adjacent companies), and signing bonus. Most finance professionals negotiate only the base and accept the default on the rest. Senior finance professionals who understand the total comp picture typically negotiate 15-25% more than the initial offer.', shortAnswer: 'Calculate total comp including bonus target and equity. The bonus target is often 20-30% of base at senior finance levels — it\'s as negotiable as the base, but most people never ask.', doFirst: ['You have a finance offer and haven\'t accepted', 'This is your first Senior FP&A or Finance Manager offer negotiation', 'You want to negotiate but are unsure how to frame financial leverage as a finance professional'], skip: ['You\'re still in interview stages', 'The offer is already above your target', 'You\'re at a company with truly fixed non-negotiable comp bands'], steps: [{ num: '01', title: 'Calculate total compensation including bonus', body: 'Base + bonus target (% × base) + equity (if tech company) + sign-on. A $170K base with 20% bonus target is $204K cash comp. Negotiate total cash, not just base.' }, { num: '02', title: 'Research finance comp by industry, not just role', body: 'Finance comp varies enormously: fintech vs. manufacturing vs. healthcare vs. PE-backed growth company. "Senior FP&A Manager in B2B SaaS" has a different market than the same title in retail. Be specific.' }, { num: '03', title: 'Negotiate bonus target percentage explicitly', body: '"I\'d like to request a 25% bonus target rather than 20%" is a negotiation that most finance candidates miss. That 5% on a $180K base is $9K/year. Ask for it.' }, { num: '04', title: 'Frame negotiation around CFO-level impact you\'ve driven', body: '"Based on the $3M cost optimization I identified and presented to the CFO at my last company, I\'m confident in requesting the senior end of the band." Your business impact story is your leverage.' }, { num: '05', title: 'Ask about performance review timing', body: '"When is the first performance review and is there an opportunity for comp adjustment?" Getting a 6-month review instead of 12-month can mean an earlier base increase. Ask before you accept.' }], example: { before: 'I was hoping the base could be a bit higher.', after: 'I\'m very excited about this opportunity. Based on FP&A benchmarks for $150-250M revenue companies in B2B SaaS, total cash comp is running $215-250K. My offer is at $195K total cash. I\'d like to request $185K base with a 25% bonus target, or alternatively $180K base and a $20K signing bonus. Which direction works better for your structure?', note: 'Specific industry research + two alternatives + total cash framing = finance negotiation that gets movement.' }, stats: [{ stat: '$48K', body: 'Average compensation increase for Askia finance clients', source: 'Askia client outcomes' }, { stat: '85%', body: 'Of finance offers have room for negotiation', source: 'Industry data' }, { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }], faq: [{ q: 'Is it appropriate to negotiate at a conservative company like a bank or accounting firm?', a: 'Yes, though the framing matters more. Lead with market data and frame it as "I want to make sure we\'re starting from the right place" rather than "I want more." Professional, data-driven, understated.' }] }
    }
  }
];

const generatedRoleTopicMeta = {
  'cybersecurity': {
    roleName: 'Cybersecurity',
    functionName: 'security',
    audience: 'security engineers and security architects',
    focus: 'threat modeling, incident response, and risk reduction',
    metrics: 'risk reduction, MTTR, and vulnerability remediation',
    linkedinKeywords: 'Application Security, Cloud Security, and Incident Response',
    interviewFocus: 'threat modeling, incident response, and stakeholder risk communication',
    negotiationLevers: 'base, bonus, equity, and incident-response expectations',
    exampleImpact: 'reduced critical vulnerability remediation time from 21 days to 5'
  },
  'ml-ai': {
    roleName: 'ML & AI Engineering',
    functionName: 'ML',
    audience: 'ML engineers and applied AI professionals',
    focus: 'model deployment, inference systems, and production reliability',
    metrics: 'latency, model quality, and revenue impact',
    linkedinKeywords: 'ML Systems, LLM Applications, and Production Inference',
    interviewFocus: 'ML system design, experimentation, and production tradeoffs',
    negotiationLevers: 'base, equity, compute budget, and title',
    exampleImpact: 'cut inference latency 45% while improving model conversion 12%'
  },
  'frontend-engineer': {
    roleName: 'Frontend Engineering',
    functionName: 'frontend',
    audience: 'senior frontend engineers and UI platform leads',
    focus: 'performance, design systems, and product experience',
    metrics: 'Core Web Vitals, conversion, and delivery speed',
    linkedinKeywords: 'React, Design Systems, and Performance Engineering',
    interviewFocus: 'frontend architecture, performance, and product collaboration',
    negotiationLevers: 'base, equity, level, and remote flexibility',
    exampleImpact: 'improved checkout conversion 14% by cutting LCP from 4.1s to 2.2s'
  },
  'solutions-architect': {
    roleName: 'Solutions Architect',
    functionName: 'architecture',
    audience: 'solutions architects and customer-facing technical leads',
    focus: 'enterprise architecture, client discovery, and technical strategy',
    metrics: 'deal velocity, implementation success, and customer adoption',
    linkedinKeywords: 'Enterprise Architecture, Cloud Migration, and Technical Discovery',
    interviewFocus: 'architecture whiteboarding, stakeholder discovery, and tradeoff communication',
    negotiationLevers: 'base, bonus, equity, and variable compensation mix',
    exampleImpact: 'unblocked a $2.8M enterprise deal through architecture redesign'
  },
  'qa-sdet': {
    roleName: 'QA & SDET',
    functionName: 'quality engineering',
    audience: 'senior QA engineers and SDETs',
    focus: 'automation strategy, release quality, and test infrastructure',
    metrics: 'escape rate, test coverage, and release confidence',
    linkedinKeywords: 'Test Automation, Quality Strategy, and CI Reliability',
    interviewFocus: 'automation architecture, quality strategy, and defect prevention',
    negotiationLevers: 'base, bonus, level, and tooling ownership scope',
    exampleImpact: 'cut escaped defects 52% while reducing regression time from 2 days to 3 hours'
  },
  'product-design': {
    roleName: 'Product Design & UX',
    functionName: 'product design',
    audience: 'senior product designers and design leads',
    focus: 'user research, interaction design, and measurable product outcomes',
    metrics: 'activation, task success, and user satisfaction',
    linkedinKeywords: 'Product Design, UX Research, and Design Systems',
    interviewFocus: 'portfolio presentation, research synthesis, and design judgment',
    negotiationLevers: 'base, equity, title, and portfolio review scope',
    exampleImpact: 'raised activation 18% after redesigning the onboarding journey'
  },
  'product-ops': {
    roleName: 'Product Operations',
    functionName: 'product operations',
    audience: 'product operations and product enablement professionals',
    focus: 'analytics, launch health, and process leverage',
    metrics: 'launch success, team efficiency, and activation',
    linkedinKeywords: 'Product Operations, Launch Analytics, and Process Design',
    interviewFocus: 'metric frameworks, launch operations, and cross-functional execution',
    negotiationLevers: 'base, bonus, equity, and scope of product surface area',
    exampleImpact: 'improved launch readiness by building dashboards that cut issue escalation time 60%'
  },
  'technical-program-manager': {
    roleName: 'Technical Program Management',
    functionName: 'technical program management',
    audience: 'technical program managers and delivery leads',
    focus: 'cross-functional execution, dependency management, and delivery risk',
    metrics: 'program predictability, milestone attainment, and launch quality',
    linkedinKeywords: 'Technical Program Management, Cross-Functional Delivery, and Program Execution',
    interviewFocus: 'execution frameworks, stakeholder alignment, and delivery tradeoffs',
    negotiationLevers: 'base, equity, title, and program scope',
    exampleImpact: 'delivered a 9-team platform migration on schedule with zero critical incidents'
  },
  'staff-principal-engineer': {
    roleName: 'Staff & Principal Engineering',
    functionName: 'staff-plus engineering',
    audience: 'staff and principal ICs',
    focus: 'technical strategy, org-wide influence, and cross-team architecture',
    metrics: 'org leverage, technical risk reduction, and platform adoption',
    linkedinKeywords: 'Technical Strategy, Platform Architecture, and Staff+ Leadership',
    interviewFocus: 'technical strategy, influence, and large-scale architecture decisions',
    negotiationLevers: 'base, equity, level, and scope',
    exampleImpact: 'drove an architecture initiative adopted across 6 teams that reduced infra spend 20%'
  },
  'account-executive': {
    roleName: 'Account Executive',
    functionName: 'sales',
    audience: 'mid-market and enterprise account executives',
    focus: 'quota attainment, pipeline conversion, and deal strategy',
    metrics: 'quota, ARR, and win rate',
    linkedinKeywords: 'Enterprise Sales, Pipeline Management, and Revenue Growth',
    interviewFocus: 'deal strategy, objection handling, and pipeline storytelling',
    negotiationLevers: 'base, variable comp, accelerators, and equity',
    exampleImpact: 'closed 132% of quota with $1.9M new ARR in enterprise deals'
  },
  'sales-engineer': {
    roleName: 'Sales Engineering',
    functionName: 'pre-sales',
    audience: 'sales engineers and solutions consultants',
    focus: 'technical discovery, demos, and deal influence',
    metrics: 'win rate, technical validation speed, and expansion support',
    linkedinKeywords: 'Sales Engineering, Solution Consulting, and Technical Discovery',
    interviewFocus: 'demo delivery, discovery, and solution mapping',
    negotiationLevers: 'base, variable comp, equity, and travel expectations',
    exampleImpact: 'lifted technical win rate 17% by redesigning discovery and demo flow'
  },
  'customer-success': {
    roleName: 'Customer Success',
    functionName: 'customer success',
    audience: 'customer success managers and post-sales leaders',
    focus: 'retention, expansion, and executive relationship management',
    metrics: 'NRR, churn, and product adoption',
    linkedinKeywords: 'Customer Success, Retention Strategy, and Executive Business Reviews',
    interviewFocus: 'renewal strategy, escalation handling, and adoption planning',
    negotiationLevers: 'base, bonus, retention metrics, and book-of-business scope',
    exampleImpact: 'improved gross retention from 88% to 94% across a $6M book of business'
  },
  'revenue-operations': {
    roleName: 'Revenue Operations',
    functionName: 'revenue operations',
    audience: 'RevOps and go-to-market operations professionals',
    focus: 'CRM architecture, funnel analytics, and forecasting accuracy',
    metrics: 'forecast accuracy, pipeline hygiene, and sales efficiency',
    linkedinKeywords: 'Revenue Operations, CRM Strategy, and Funnel Analytics',
    interviewFocus: 'systems design, process optimization, and revenue analytics',
    negotiationLevers: 'base, bonus, equity, and systems ownership scope',
    exampleImpact: 'improved forecast accuracy from 72% to 91% by rebuilding pipeline governance'
  },
  'marketing-growth': {
    roleName: 'Marketing & Growth',
    functionName: 'growth marketing',
    audience: 'growth marketers and performance marketing leaders',
    focus: 'channel economics, experimentation, and lifecycle growth',
    metrics: 'CAC, conversion, and pipeline contribution',
    linkedinKeywords: 'Growth Marketing, Paid Acquisition, and Experimentation',
    interviewFocus: 'channel strategy, experiment design, and attribution tradeoffs',
    negotiationLevers: 'base, bonus, equity, and growth target scope',
    exampleImpact: 'cut CAC 28% while increasing qualified pipeline 35%'
  },
  'content-seo': {
    roleName: 'Content & SEO',
    functionName: 'content and SEO',
    audience: 'content strategists and SEO leaders',
    focus: 'organic growth, editorial strategy, and search performance',
    metrics: 'organic traffic, conversions, and content velocity',
    linkedinKeywords: 'SEO Strategy, Content Marketing, and Organic Growth',
    interviewFocus: 'content strategy, SEO prioritization, and editorial impact',
    negotiationLevers: 'base, bonus, equity, and content team scope',
    exampleImpact: 'grew non-brand organic traffic 64% and doubled demo requests from content'
  },
  'accounting-controller': {
    roleName: 'Accounting & Controller',
    functionName: 'accounting',
    audience: 'controllers and senior accounting leaders',
    focus: 'close process, controls, and audit readiness',
    metrics: 'close speed, accuracy, and compliance health',
    linkedinKeywords: 'Controllership, Financial Close, and Internal Controls',
    interviewFocus: 'close leadership, controls, and audit communication',
    negotiationLevers: 'base, bonus, title, and team scope',
    exampleImpact: 'reduced monthly close from 10 days to 6 while eliminating repeat audit findings'
  },
  'strategy-consulting': {
    roleName: 'Strategy & Consulting',
    functionName: 'strategy',
    audience: 'strategy professionals and consultants',
    focus: 'problem structuring, executive communication, and recommendation quality',
    metrics: 'client impact, adoption, and strategic outcomes',
    linkedinKeywords: 'Corporate Strategy, Management Consulting, and Strategic Planning',
    interviewFocus: 'case interviews, synthesis, and executive recommendation delivery',
    negotiationLevers: 'base, bonus, sign-on, and level',
    exampleImpact: 'delivered a growth strategy that unlocked a $40M market expansion plan'
  },
  'business-operations': {
    roleName: 'Business Operations',
    functionName: 'business operations',
    audience: 'BizOps and strategic operations professionals',
    focus: 'operating cadence, cross-functional execution, and process redesign',
    metrics: 'cycle time, operating leverage, and decision speed',
    linkedinKeywords: 'Business Operations, Process Improvement, and Strategic Execution',
    interviewFocus: 'problem diagnosis, KPI management, and cross-functional alignment',
    negotiationLevers: 'base, bonus, equity, and scope',
    exampleImpact: 'cut planning cycle time 40% by redesigning the executive operating rhythm'
  },
  'project-program-manager': {
    roleName: 'Project & Program Management',
    functionName: 'program management',
    audience: 'project managers and program managers',
    focus: 'delivery governance, stakeholder management, and schedule control',
    metrics: 'on-time delivery, budget adherence, and risk reduction',
    linkedinKeywords: 'Program Management, Delivery Governance, and Stakeholder Alignment',
    interviewFocus: 'delivery planning, stakeholder communication, and risk control',
    negotiationLevers: 'base, bonus, title, and portfolio complexity',
    exampleImpact: 'raised on-time delivery from 68% to 92% across a 14-project portfolio'
  },
  'people-ops': {
    roleName: 'People Operations & HR',
    functionName: 'people operations',
    audience: 'people operations and HR leaders',
    focus: 'employee experience, HR systems, and workforce planning',
    metrics: 'time-to-fill, retention, and engagement',
    linkedinKeywords: 'People Operations, HR Strategy, and Workforce Planning',
    interviewFocus: 'employee lifecycle design, HR metrics, and stakeholder coaching',
    negotiationLevers: 'base, bonus, equity, and function scope',
    exampleImpact: 'cut time-to-fill 31% while improving 12-month retention 9 points'
  },
  'supply-chain': {
    roleName: 'Supply Chain & Logistics',
    functionName: 'supply chain',
    audience: 'supply chain managers and logistics leaders',
    focus: 'inventory flow, vendor management, and resilience planning',
    metrics: 'OTIF, inventory turns, and cost savings',
    linkedinKeywords: 'Supply Chain Strategy, Logistics, and Vendor Management',
    interviewFocus: 'network optimization, supplier risk, and operational tradeoffs',
    negotiationLevers: 'base, bonus, equity, and plant or network scope',
    exampleImpact: 'improved OTIF from 91% to 97% while reducing freight costs 14%'
  },
  'healthcare-admin': {
    roleName: 'Healthcare Administration',
    functionName: 'healthcare administration',
    audience: 'healthcare administrators and operations leaders',
    focus: 'clinical operations, patient flow, and regulatory performance',
    metrics: 'patient throughput, cost per case, and compliance',
    linkedinKeywords: 'Healthcare Operations, Clinical Administration, and Regulatory Performance',
    interviewFocus: 'operations improvement, compliance, and stakeholder communication',
    negotiationLevers: 'base, bonus, relocation, and scope of facility oversight',
    exampleImpact: 'reduced patient wait time 22% while improving throughput across three clinics'
  },
  'legal-compliance': {
    roleName: 'Legal & Compliance',
    functionName: 'legal and compliance',
    audience: 'in-house counsel and compliance leaders',
    focus: 'risk management, policy execution, and cross-functional counsel',
    metrics: 'regulatory readiness, contract cycle time, and risk reduction',
    linkedinKeywords: 'Compliance Strategy, Commercial Counsel, and Risk Management',
    interviewFocus: 'regulatory judgment, stakeholder counseling, and risk prioritization',
    negotiationLevers: 'base, bonus, equity, title, and reporting line',
    exampleImpact: 'cut contract turnaround 35% while strengthening controls for a major audit'
  }
};

function makeResumeEntry(meta) {
  return {
    title: 'Resume Writing for ' + meta.roleName,
    metaTitle: meta.roleName + ' Resume Guide | Askia',
    metaDescription: 'How to write a ' + meta.functionName + ' resume that shows ' + meta.focus + ' with measurable business impact for senior hiring teams.',
    headline: 'Write a ' + meta.roleName + ' Resume That Sounds Senior',
    intro: meta.roleName + ' resumes usually undersell the work by listing responsibilities instead of outcomes. Senior hiring teams want evidence of ' + meta.focus + '. If the resume reads like a task log, it hides the level you actually operate at.',
    shortAnswer: 'Lead with outcomes tied to ' + meta.metrics + '. Show the scope you owned, the decisions you influenced, and the measurable result.',
    doFirst: ['Your current resume lists responsibilities more than outcomes', 'You want senior-level roles in ' + meta.functionName, 'You need stronger evidence of ' + meta.focus],
    skip: ['You\'re still very early-career and building foundational experience', 'Your current resume already converts consistently', 'You\'re targeting a materially different function than ' + meta.functionName],
    steps: [
      { num: '01', title: 'Lead with the result, then explain the work', body: 'Start each bullet with what improved in ' + meta.metrics + ', then explain how you created that result. Outcome-first writing reads senior immediately.' },
      { num: '02', title: 'Quantify scope and complexity', body: 'Show numbers tied to team size, revenue, users, systems, or portfolio size. Scope is how hiring teams infer your actual level.' },
      { num: '03', title: 'Name the decisions you influenced', body: 'A strong ' + meta.roleName + ' resume does not just show execution. It shows where your judgment changed direction, prioritization, or risk.' },
      { num: '04', title: 'Show cross-functional leverage', body: 'Senior candidates usually move outcomes through other teams, not alone. Name the stakeholders and the alignment work when it mattered.' },
      { num: '05', title: 'Trim tools that do not strengthen the story', body: 'Keep the supporting keywords, but make sure the main signal is ' + meta.focus + ' with measurable business impact.' }
    ],
    example: {
      before: 'Worked on ' + meta.functionName + ' initiatives and supported team goals.',
      after: 'Delivered work tied to ' + meta.focus + ' and ' + meta.exampleImpact + ', giving leadership a clearer picture of where the business was improving.',
      note: 'The better version shows business impact, scope, and why your judgment mattered.'
    },
    stats: [
      { stat: '3×', body: 'More callbacks when ' + meta.roleName + ' resumes lead with quantified outcomes', source: 'Askia positioning data' },
      { stat: '2 weeks', body: 'Average time to first interview after stronger ' + meta.functionName + ' positioning', source: 'Askia client data' },
      { stat: '$41K', body: 'Average compensation improvement for optimized ' + meta.functionName + ' candidates', source: 'Askia client outcomes' }
    ],
    faq: [
      { q: 'How far back should my ' + meta.roleName + ' resume go?', a: 'Usually 10-12 years in detail, with older experience compressed unless it is directly relevant to the target role.' },
      { q: 'Should I keep a separate skills section?', a: 'Yes, but keep it short. Let the bullets prove depth and let the skills section support discoverability.' }
    ]
  };
}

function makeLinkedInEntry(meta) {
  return {
    title: 'LinkedIn Optimization for ' + meta.roleName,
    metaTitle: meta.roleName + ' LinkedIn Guide | Askia',
    metaDescription: 'How ' + meta.audience + ' optimize LinkedIn to attract stronger recruiter outreach and better-fit inbound opportunities.',
    headline: 'Make Your LinkedIn Read Like a ' + meta.roleName + ' Search Result',
    intro: meta.roleName + ' professionals get overlooked on LinkedIn when their profile reads like a job title plus a tool list. Recruiters search for a mix of scope, outcomes, and specialty keywords. The profiles that generate strong inbound make that signal obvious in the headline, About, and experience sections.',
    shortAnswer: 'Use your headline and About section to state your specialty, the scope you operate at, and one or two quantified outcomes recruiters can immediately anchor on.',
    doFirst: ['Recruiter outreach is inconsistent or off-target', 'Your profile headline is too generic', 'You want inbound opportunities aligned with ' + meta.focus],
    skip: ['You\'re in a confidential search and can\'t update your profile', 'Referrals are already your dominant channel', 'Your profile already brings in strong recruiter interest for the right roles'],
    steps: [
      { num: '01', title: 'Rewrite the headline around scope and specialty', body: 'Use a headline that combines level, specialty, and a result area tied to ' + meta.metrics + '. That is what makes the profile searchable and memorable.' },
      { num: '02', title: 'Open the About section with your strongest positioning line', body: 'The first two sentences should explain the kind of work you own in ' + meta.functionName + ' and the outcomes you have produced. Skip generic personal-brand language.' },
      { num: '03', title: 'Embed search keywords in context', body: 'Include phrases like ' + meta.linkedinKeywords + ', but place them inside sentences about real work so the profile still reads credibly.' },
      { num: '04', title: 'Refresh experience bullets with measurable wins', body: 'Treat LinkedIn experience like a compressed portfolio. Add 2-4 bullets that show scope, outcomes, and stakeholder range.' },
      { num: '05', title: 'Signal the roles you actually want', body: 'Use the open-to-work preferences, featured section, and custom URL to make it easier for recruiters to map you to the right searches.' }
    ],
    example: {
      before: meta.roleName + ' professional at Company',
      after: meta.roleName + ' | ' + meta.linkedinKeywords + ' | Delivered outcomes across ' + meta.metrics,
      note: 'Specific specialty + scope + outcomes makes recruiters understand the fit in one scan.'
    },
    stats: [
      { stat: '4×', body: 'More recruiter outreach after ' + meta.roleName + ' LinkedIn optimization', source: 'Askia A/B testing' },
      { stat: '70%', body: 'Of recruiters use LinkedIn as a primary sourcing channel', source: 'Industry research' },
      { stat: '14 days', body: 'Average time to first qualified outreach after profile refresh', source: 'Askia client data' }
    ],
    faq: [
      { q: 'Should LinkedIn match my resume exactly?', a: 'The facts and outcomes should align, but LinkedIn can be slightly more conversational and discovery-oriented than the resume.' },
      { q: 'Do posts and activity matter?', a: 'They help if they reinforce your positioning, but headline, About, and experience sections matter far more than frequent posting.' }
    ]
  };
}

function makeInterviewPrepEntry(meta) {
  return {
    title: meta.roleName + ' Interview Preparation Guide',
    metaTitle: meta.roleName + ' Interview Prep | Askia',
    metaDescription: 'How ' + meta.audience + ' prepare for ' + meta.interviewFocus + ' so interviews show real judgment, not generic talking points.',
    headline: 'Prepare for ' + meta.roleName + ' Interviews With Better Structure',
    intro: meta.roleName + ' interviews reward candidates who can explain how they think under real constraints. Interviewers are not just looking for domain knowledge; they are testing whether you can prioritize, communicate tradeoffs, and turn ambiguous problems into a clear path forward.',
    shortAnswer: 'Prepare stories and frameworks around ' + meta.interviewFocus + '. Interviewers want structured judgment with specifics, not generic best practices.',
    doFirst: ['You\'re getting interviews but not closing offers', 'You need stronger answers on ' + meta.interviewFocus, 'You want more structure under pressure'],
    skip: ['You\'re not getting interviews yet and should fix positioning first', 'You\'re only doing exploratory conversations right now', 'You already convert these interviews consistently'],
    steps: [
      { num: '01', title: 'Build a story bank around your highest-leverage work', body: 'Prepare 5-7 stories that show ' + meta.interviewFocus + '. Reuse them across behavioral, case, and panel rounds with different emphasis.' },
      { num: '02', title: 'Practice a repeatable answer structure', body: 'Use a simple structure: context, constraint, decision, execution, result, and what changed after. Structure prevents rambling.' },
      { num: '03', title: 'Quantify the before and after', body: 'Numbers tied to ' + meta.metrics + ' make your answers credible and easier for interviewers to remember.' },
      { num: '04', title: 'Prepare for tradeoff questions explicitly', body: 'Interviewers often care less about the final answer than whether you can explain why one path was better given the constraints.' },
      { num: '05', title: 'Research the company and map your stories to its environment', body: 'Adjust your examples to the company stage, customer type, and org design so your answers feel relevant instead of rehearsed.' }
    ],
    example: {
      before: 'I have experience with ' + meta.focus + ' and would approach it carefully.',
      after: 'In my last role, I inherited a problem around ' + meta.metrics + ', diagnosed the core constraint, made a tradeoff call, and ' + meta.exampleImpact + '. That is the framework I would bring to this environment.',
      note: 'The second answer shows judgment, structure, and a repeatable way of thinking.'
    },
    stats: [
      { stat: '2×', body: 'Higher offer rate with structured ' + meta.roleName + ' interview preparation', source: 'Askia client data' },
      { stat: '5', body: 'Core stories needed to cover most senior interview loops', source: 'Interview coaching research' },
      { stat: '88%', body: 'Of candidates improve interviewer confidence when answers include quantified outcomes', source: 'Interview coaching research' }
    ],
    faq: [
      { q: 'What if I don\'t have a perfect example for a ' + meta.roleName + ' question?', a: 'Use the closest relevant example, state the constraint honestly, and focus on the reasoning you would apply in the target environment.' },
      { q: 'How much should I memorize?', a: 'Memorize structure and facts, not scripts. Interviewers respond better to clear thinking than to polished but rigid answers.' }
    ]
  };
}

function makeSalaryNegotiationEntry(meta) {
  return {
    title: 'Salary Negotiation for ' + meta.roleName,
    metaTitle: meta.roleName + ' Salary Negotiation | Askia',
    metaDescription: 'How ' + meta.audience + ' negotiate ' + meta.negotiationLevers + ' with market data and a role-specific leverage story.',
    headline: 'Negotiate Your ' + meta.roleName + ' Offer With Real Leverage',
    intro: meta.roleName + ' compensation varies widely by company stage, scope, and how clearly you can tie your background to business impact. Candidates who negotiate well don\'t just ask for more money. They connect market data to concrete evidence that they can own higher-value work.',
    shortAnswer: 'Negotiate with a clear market anchor and a role-specific impact story. Tie your ask to scope, business outcomes, and the hardest problems this role needs solved.',
    doFirst: ['You have an offer and haven\'t accepted', 'You\'re unsure what market looks like for this scope', 'You want to negotiate ' + meta.negotiationLevers + ' more effectively'],
    skip: ['You\'re still in interview process without a written offer', 'You\'re fully satisfied with the package as-is', 'The company has a clearly fixed band and no room across components'],
    steps: [
      { num: '01', title: 'Research the market by scope, not just title', body: 'The same title can vary sharply depending on company stage, region, and ownership area. Build a comp range using comparable roles, not generic averages.' },
      { num: '02', title: 'Anchor your ask to business impact', body: 'Use one or two examples showing how you drove ' + meta.focus + '. Your leverage is stronger when tied to concrete outcomes, not years of experience.' },
      { num: '03', title: 'Negotiate the highest-value components together', body: 'Don\'t isolate base salary if equity, bonus, scope, or title are equally meaningful in this role. Package negotiations create more room.' },
      { num: '04', title: 'Ask role-specific clarifying questions before finalizing', body: 'Confirm the exact expectations around ' + meta.negotiationLevers + '. Clarity on scope prevents you from negotiating against the wrong job.' },
      { num: '05', title: 'Present alternatives, not just one demand', body: 'Give the company two reasonable structures so they can move within constraints while still improving your total package.' }
    ],
    example: {
      before: 'I was hoping there might be some flexibility.',
      after: 'Based on market data for this scope and the outcomes I\'ve delivered, including how I ' + meta.exampleImpact + ', I would like to discuss improving the package across ' + meta.negotiationLevers + '.',
      note: 'Specific scope plus specific impact creates a negotiation the employer can justify internally.'
    },
    stats: [
      { stat: '$38K', body: 'Average compensation increase after negotiated ' + meta.roleName + ' offers', source: 'Askia client outcomes' },
      { stat: '85%', body: 'Of senior offers have at least one negotiable component', source: 'Industry data' },
      { stat: '0%', body: 'Of Askia clients have had offers rescinded for professional negotiation', source: 'Askia client data' }
    ],
    faq: [
      { q: 'Should I negotiate over email or on a call?', a: 'Use whichever channel lets you be precise and professional. Many candidates do best aligning verbally first, then confirming specifics by email.' },
      { q: 'What if the company says there is no flexibility?', a: 'Ask which components are fixed and which are not. Even when base is capped, there is often room on equity, bonus, sign-on, title, or scope clarity.' }
    ]
  };
}

const generatedSharedTopicContent = {
  resume: Object.fromEntries(Object.entries(generatedRoleTopicMeta).map(([role, meta]) => [role, makeResumeEntry(meta)])),
  linkedin: Object.fromEntries(Object.entries(generatedRoleTopicMeta).map(([role, meta]) => [role, makeLinkedInEntry(meta)])),
  'interview-prep': Object.fromEntries(Object.entries(generatedRoleTopicMeta).map(([role, meta]) => [role, makeInterviewPrepEntry(meta)])),
  'salary-negotiation': Object.fromEntries(Object.entries(generatedRoleTopicMeta).map(([role, meta]) => [role, makeSalaryNegotiationEntry(meta)]))
};

for (const topicObj of sharedTopics) {
  Object.assign(topicObj.byRole, generatedSharedTopicContent[topicObj.topic] || {});
}

// Build the final array
const pages = [];

for (const roleObj of roles) {
  // Add the role-specific specialty topic
  const sp = roleObj.specialTopic;
  pages.push({
    role: roleObj.role,
    roleName: roleObj.roleName,
    roleTag: roleObj.roleTag,
    roleColor: roleObj.roleColor,
    roleEmoji: roleObj.roleEmoji,
    topic: sp.topic,
    topicName: sp.topicName,
    title: sp.title,
    metaTitle: sp.metaTitle,
    metaDescription: sp.metaDescription,
    headline: sp.headline,
    intro: sp.intro,
    shortAnswer: sp.shortAnswer,
    doFirst: sp.doFirst,
    skip: sp.skip,
    steps: sp.steps,
    example: sp.example,
    stats: sp.stats,
    faq: sp.faq
  });

  // Add shared topics
  for (const topicObj of sharedTopics) {
    const content = topicObj.byRole[roleObj.role];
    pages.push({
      role: roleObj.role,
      roleName: roleObj.roleName,
      roleTag: roleObj.roleTag,
      roleColor: roleObj.roleColor,
      roleEmoji: roleObj.roleEmoji,
      topic: topicObj.topic,
      topicName: topicObj.topicName,
      title: content.title,
      metaTitle: content.metaTitle,
      metaDescription: content.metaDescription,
      headline: content.headline,
      intro: content.intro,
      shortAnswer: content.shortAnswer,
      doFirst: content.doFirst,
      skip: content.skip,
      steps: content.steps,
      example: content.example,
      stats: content.stats,
      faq: content.faq
    });
  }
}

module.exports = pages;
