'use strict';

// All role tracks — used by the resources index and auto-generated overview pages.
// existingOverview: true = a manual /resources/[role]/index.njk already exists

const groups = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'IC and platform engineering roles across the full tech stack.',
    roles: [
      { role: 'software-engineer',      name: 'Software Engineering',     tag: 'SWE',           color: '#3b82f6', emoji: '⚙️',  desc: 'System design narratives, scope ladders, and impact metrics for Senior, Staff, and Principal roles.',           existingOverview: true },
      { role: 'devops-sre',             name: 'DevOps & SRE',             tag: 'Platform',       color: '#14b8a6', emoji: '🛡️',  desc: 'Incident stories, reliability scorecards, and infrastructure scope maps for platform and reliability roles.',   existingOverview: true },
      { role: 'data',                   name: 'Data',                     tag: 'DE/DS/Analytics',color: '#8b5cf6', emoji: '📊',  desc: 'Decision impact frameworks and pipeline ownership maps for Data Engineers, Scientists, and Analytics roles.',   existingOverview: true },
      { role: 'cybersecurity',          name: 'Cybersecurity',            tag: 'Security',       color: '#ef4444', emoji: '🔐',  desc: 'Threat modeling narratives, incident response stories, and risk quantification for security engineering roles.', existingOverview: false },
      { role: 'ml-ai',                  name: 'ML & AI Engineering',      tag: 'ML/AI',          color: '#a855f7', emoji: '🤖',  desc: 'ML system design, model deployment narratives, and research-to-production positioning for ML engineers.',        existingOverview: false },
      { role: 'frontend-engineer',      name: 'Frontend Engineering',     tag: 'Frontend',       color: '#f59e0b', emoji: '🖥️',  desc: 'Performance engineering stories, design system ownership, and cross-platform scope maps for frontend engineers.',  existingOverview: false },
      { role: 'solutions-architect',    name: 'Solutions Architect',      tag: 'Architecture',   color: '#10b981', emoji: '🏗️',  desc: 'Architecture decision frameworks, client engagement narratives, and enterprise scope maps for SA roles.',         existingOverview: false },
      { role: 'qa-sdet',                name: 'QA & SDET',                tag: 'Quality',        color: '#64748b', emoji: '🧪',  desc: 'Test strategy narratives, quality ownership frameworks, and automation impact maps for QA and SDET roles.',      existingOverview: false },
    ]
  },
  {
    id: 'product-design',
    name: 'Product & Design',
    description: 'Product management, design, and operations roles.',
    roles: [
      { role: 'product-manager',        name: 'Product Manager',          tag: 'Product',        color: '#f97316', emoji: '🧭',  desc: 'Case study templates, metrics maps, and exec summary guides for PM roles at all levels.',                        existingOverview: true },
      { role: 'product-design',         name: 'Product Design & UX',      tag: 'Design',         color: '#e879f9', emoji: '🎨',  desc: 'Portfolio presentation frameworks, design system ownership, and cross-functional influence maps for UX roles.',   existingOverview: false },
      { role: 'product-ops',            name: 'Product Operations',       tag: 'ProdOps',        color: '#84cc16', emoji: '⚡',  desc: 'Process design, tool adoption frameworks, and product analytics storytelling for Product Ops professionals.',     existingOverview: false },
    ]
  },
  {
    id: 'leadership',
    name: 'Engineering Leadership',
    description: 'Management and senior leadership in engineering organizations.',
    roles: [
      { role: 'engineering-manager',    name: 'Engineering Manager',      tag: 'Leadership',     color: '#ec4899', emoji: '👥',  desc: 'Scope mapping, org impact narratives, and leadership signal for EM, Director, and VP Engineering roles.',        existingOverview: true },
      { role: 'technical-program-manager', name: 'Technical Program Manager', tag: 'TPM',       color: '#7c3aed', emoji: '📋',  desc: 'Cross-team program execution, dependency maps, and delivery accountability frameworks for TPM roles.',            existingOverview: false },
      { role: 'staff-principal-engineer', name: 'Staff & Principal Engineer', tag: 'Staff+',    color: '#0ea5e9', emoji: '⭐',  desc: 'Technical strategy narratives, org-wide influence frameworks, and scope ladders for Staff and Principal ICs.',     existingOverview: false },
    ]
  },
  {
    id: 'sales-revenue',
    name: 'Sales & Revenue',
    description: 'Revenue-generating and customer-facing commercial roles.',
    roles: [
      { role: 'account-executive',      name: 'Account Executive',        tag: 'Sales',          color: '#16a34a', emoji: '💼',  desc: 'Pipeline management narratives, quota attainment proof points, and enterprise sales process maps.',                existingOverview: false },
      { role: 'sales-engineer',         name: 'Sales Engineering',        tag: 'Pre-Sales',      color: '#d97706', emoji: '🔧',  desc: 'Technical demo mastery, discovery frameworks, and deal influence quantification for Solutions Engineers.',         existingOverview: false },
      { role: 'customer-success',       name: 'Customer Success',         tag: 'CS',             color: '#0891b2', emoji: '🤝',  desc: 'Retention metrics, QBR strategy, and expansion revenue frameworks for Customer Success and CSM roles.',           existingOverview: false },
      { role: 'revenue-operations',     name: 'Revenue Operations',       tag: 'RevOps',         color: '#dc2626', emoji: '📈',  desc: 'RevOps system design, CRM ownership narratives, and revenue attribution frameworks for RevOps professionals.',    existingOverview: false },
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Growth',
    description: 'Brand, demand, content, and growth marketing roles.',
    roles: [
      { role: 'marketing-growth',       name: 'Marketing & Growth',       tag: 'Marketing',      color: '#9333ea', emoji: '📣',  desc: 'Growth experiment frameworks, channel attribution narratives, and campaign ROI proof points for marketing roles.', existingOverview: false },
      { role: 'content-seo',            name: 'Content & SEO',            tag: 'Content',        color: '#ca8a04', emoji: '✍️',  desc: 'Content strategy frameworks, SEO impact attribution, and editorial ownership maps for content professionals.',     existingOverview: false },
    ]
  },
  {
    id: 'finance-business',
    name: 'Finance & Business',
    description: 'Finance, accounting, strategy, and corporate development roles.',
    roles: [
      { role: 'finance-fpa',            name: 'Finance & FP&A',           tag: 'Finance',        color: '#22c55e', emoji: '📈',  desc: 'Executive-ready finance narratives and proof points for FP&A, Controller, and finance leadership roles.',           existingOverview: true },
      { role: 'accounting-controller',  name: 'Accounting & Controller',  tag: 'Accounting',     color: '#15803d', emoji: '🧾',  desc: 'Close process ownership, audit readiness frameworks, and financial controls narratives for accounting leaders.',    existingOverview: false },
      { role: 'strategy-consulting',    name: 'Strategy & Consulting',    tag: 'Strategy',       color: '#7e22ce', emoji: '♟️',  desc: 'Case interview mastery, strategic framing frameworks, and client impact narratives for consultants and strategists.', existingOverview: false },
    ]
  },
  {
    id: 'operations-people',
    name: 'Operations & People',
    description: 'Business operations, HR, project management, and supply chain roles.',
    roles: [
      { role: 'business-operations',    name: 'Business Operations',      tag: 'BizOps',         color: '#0369a1', emoji: '⚙️',  desc: 'Process design frameworks, cross-functional influence narratives, and operational leverage maps for BizOps roles.',  existingOverview: false },
      { role: 'project-program-manager', name: 'Project & Program Manager', tag: 'PjM/PgM',     color: '#b45309', emoji: '📅',  desc: 'Delivery accountability frameworks, stakeholder management narratives, and cross-org program maps for PM roles.',    existingOverview: false },
      { role: 'people-ops',             name: 'People Operations & HR',   tag: 'People',         color: '#be185d', emoji: '💛',  desc: 'HR strategy frameworks, people analytics narratives, and organizational development proof points for HR leaders.',   existingOverview: false },
      { role: 'supply-chain',           name: 'Supply Chain & Logistics', tag: 'Supply Chain',   color: '#0f766e', emoji: '🚢',  desc: 'Supply chain optimization narratives, vendor management frameworks, and operational resilience proof points.',       existingOverview: false },
    ]
  },
  {
    id: 'healthcare-legal',
    name: 'Healthcare & Legal',
    description: 'Healthcare administration and legal/compliance roles.',
    roles: [
      { role: 'healthcare-admin',       name: 'Healthcare Administration', tag: 'Healthcare',    color: '#dc2626', emoji: '🏥',  desc: 'Regulatory navigation frameworks, clinical operations narratives, and patient outcomes proof points for healthcare admins.', existingOverview: false },
      { role: 'legal-compliance',       name: 'Legal & Compliance',       tag: 'Legal',          color: '#1d4ed8', emoji: '⚖️',  desc: 'Legal strategy frameworks, risk quantification narratives, and counsel positioning guides for in-house legal teams.', existingOverview: false },
    ]
  }
];

module.exports = groups;
