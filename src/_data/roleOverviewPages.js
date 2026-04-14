'use strict';

const roleTracks = require('./roleTracks');
const roleSubPages = require('./roleSubPages');

module.exports = roleTracks.flatMap((group) =>
  group.roles
    .filter((role) => !role.existingOverview)
    .map((role) => {
      const guides = roleSubPages.filter((page) => page.role === role.role);
      const leadGuide = guides[0];

      return {
        roleSlug: role.role,
        eyebrow: group.name,
        title: `${role.name} Career Resources`,
        subtitle: role.desc,
        shortAnswer: leadGuide ? leadGuide.shortAnswer : role.desc,
        decisionRules: leadGuide ? { doFirst: leadGuide.doFirst, skip: leadGuide.skip } : null,
        evidence: leadGuide ? leadGuide.stats : [],
        faq: leadGuide ? leadGuide.faq.map((f) => ({ question: f.q || f.question, answer: f.a || f.answer })) : [],
        cta: {
          title: `Ready to land your next ${role.name} role?`,
          body: `Book a strategy call and get personalized feedback on your ${role.name} positioning.`
        },
        guideCount: guides.length
      };
    })
);
