const cities = [
  { hubSlug: "houston-career-coaching", label: "Houston", shortLabel: "Houston" },
  { hubSlug: "new-york-city-career-coaching", label: "New York City", shortLabel: "New York City" },
  { hubSlug: "dallas-fort-worth-career-coaching", label: "Dallas-Fort Worth", shortLabel: "Dallas-Fort Worth" },
  { hubSlug: "austin-career-coaching", label: "Austin", shortLabel: "Austin" },
  { hubSlug: "seattle-career-coaching", label: "Seattle", shortLabel: "Seattle" },
  { hubSlug: "san-francisco-bay-area-career-coaching", label: "San Francisco Bay Area", shortLabel: "the Bay Area" },
  { hubSlug: "washington-dc-career-coaching", label: "Washington, DC", shortLabel: "Washington, DC" },
  { hubSlug: "boston-career-coaching", label: "Boston", shortLabel: "Boston" },
  { hubSlug: "atlanta-career-coaching", label: "Atlanta", shortLabel: "Atlanta" },
  { hubSlug: "raleigh-durham-career-coaching", label: "Raleigh-Durham", shortLabel: "Raleigh-Durham" },
  { hubSlug: "denver-career-coaching", label: "Denver", shortLabel: "Denver" },
  { hubSlug: "chicago-career-coaching", label: "Chicago", shortLabel: "Chicago" },
  { hubSlug: "phoenix-career-coaching", label: "Phoenix", shortLabel: "Phoenix" },
  { hubSlug: "san-diego-career-coaching", label: "San Diego", shortLabel: "San Diego" },
  { hubSlug: "los-angeles-career-coaching", label: "Los Angeles", shortLabel: "Los Angeles" },
  { hubSlug: "miami-career-coaching", label: "Miami", shortLabel: "Miami" }
];

const pageTypes = [
  {
    slugPrefix: "career-coaching-cost",
    serviceKey: "career-coaching",
    title: (city) => `Career Coaching Cost in ${city.label}: What Professionals Should Expect`,
    metaTitle: (city) => `Career Coaching Cost ${city.label} | Askia`,
    metaDescription: (city) => `What career coaching costs in ${city.shortLabel}, what changes price, and how to choose the right level of support.`,
    h1: (city) => `Career coaching cost in ${city.label}: what actually changes the price`,
    quickAnswer: (city) => `Career coaching cost in ${city.label} should be judged by scope, execution depth, and whether the coach is helping with one asset or the full search system.`,
    intro: (city) => `People searching for career coaching cost in ${city.label} are usually trying to avoid paying for vague advice. The useful question is not only price. It is what the coaching actually changes: role target, market signal, interviews, negotiation, or the full search.`,
    sections: (city) => [
      {
        title: `What usually affects career coaching cost in ${city.shortLabel}`,
        body: "Price usually moves on scope. One-time clarity work is different from resume plus LinkedIn plus interview support, and both are different from ongoing search execution and compensation strategy."
      },
      {
        title: "How to judge value instead of just price",
        body: "The strongest coaching usually reduces wasted applications, improves interview conversion, and raises compensation leverage. That outcome matters more than the cheapest hourly number."
      }
    ],
    bullets: [
      "One-time clarity support vs. full search support",
      "Asset-specific work vs. integrated coaching",
      "Execution depth, not just session count"
    ],
    pricingPoints: [
      "Lower-cost offers are usually narrower in scope and stop at advice",
      "Higher-value engagements usually combine positioning, interview support, and offer strategy",
      "The right package depends on whether the bottleneck is clarity, conversion, or compensation"
    ],
    faq: (city) => [
      { q: `What should career coaching cost in ${city.label}?`, a: "It depends on scope. The right benchmark is whether the coaching addresses the actual bottleneck in the search instead of selling generic sessions." },
      { q: "Is cheaper coaching always worse?", a: "Not always, but cheaper offers are often narrower. If you need integrated help across resume, interviews, and negotiation, a very low price usually means you are not getting that depth." },
      { q: "How do I know if coaching is worth it?", a: "It is usually worth it when your experience is strong but your positioning, interviews, or negotiation are costing you real opportunities." }
    ]
  },
  {
    slugPrefix: "how-to-choose-a-career-coach",
    serviceKey: "career-coaching",
    title: (city) => `How to Choose a Career Coach in ${city.label}`,
    metaTitle: (city) => `How to Choose a Career Coach ${city.label} | Askia`,
    metaDescription: (city) => `How to choose a career coach in ${city.shortLabel} based on signal quality, role fit, and real search execution support.`,
    h1: (city) => `How to choose a career coach in ${city.label}`,
    quickAnswer: (city) => `The best career coach in ${city.label} is usually the one who can improve role targeting, materials, interviews, and compensation logic together, not the one who sounds most motivational.`,
    intro: (city) => `If you are comparing career coaches in ${city.label}, you do not need a better sales pitch. You need a cleaner way to judge whether the coach can actually improve your search.`,
    sections: (city) => [
      {
        title: "What to look for first",
        body: "Look for evidence that the coach understands hiring signal, not just career reflection. Ask how they handle resumes, LinkedIn, interviews, and negotiation together."
      },
      {
        title: `What usually goes wrong in ${city.shortLabel} coach selection`,
        body: "A lot of candidates buy based on personality fit alone. That matters, but it is secondary to whether the coach can pressure-test your market positioning and execution plan."
      }
    ],
    bullets: [
      "Can they help across the full search system?",
      "Do they improve signal, not just confidence?",
      "Can they pressure-test your level, scope, and target role?"
    ],
    pricingPoints: [
      "Ask what deliverables or decision support you actually receive",
      "Prioritize coaches who can show how they sharpen conversion, not only mindset",
      "The strongest fit usually comes from role and market understanding, not broad inspiration"
    ],
    faq: (city) => [
      { q: `How do I choose a career coach in ${city.label}?`, a: "Start with whether they can improve search signal and execution, not just provide encouragement. The best fit is usually practical, structured, and able to work across the full search." },
      { q: "Should I choose a local coach or a national one?", a: "Choose the coach who understands your target market and role. That can be local, national, or both if the strategy needs to support local and remote opportunities." },
      { q: "What are the red flags?", a: "Generic promises, no concrete process, no opinion on role targeting, and no ability to explain how they improve interviews or compensation outcomes." }
    ]
  },
  {
    slugPrefix: "resume-writing-cost",
    serviceKey: "resume-writing",
    title: (city) => `Resume Writing Cost in ${city.label}: What You Should Pay For`,
    metaTitle: (city) => `Resume Writing Cost ${city.label} | Askia`,
    metaDescription: (city) => `What resume writing costs in ${city.shortLabel}, what changes the price, and how to avoid paying for cosmetic edits.`,
    h1: (city) => `Resume writing cost in ${city.label}: what you should actually pay for`,
    quickAnswer: (city) => `Resume writing cost in ${city.label} should track how much thinking, rewriting, and level calibration the writer actually does, not just whether they return a polished document.`,
    intro: (city) => `Most people searching for resume writing cost in ${city.label} are trying to avoid paying premium pricing for a lightly edited template. That instinct is right.`,
    sections: () => [
      {
        title: "What changes resume writing price",
        body: "Price usually moves on complexity: seniority, story clarity, role transition difficulty, and whether the writer is rebuilding from scratch or only editing an existing document."
      },
      {
        title: "What is worth paying for",
        body: "The valuable part is role calibration, stronger framing, and clearer proof of impact. Formatting alone is cheap because it rarely changes interview conversion."
      }
    ],
    bullets: [
      "Formatting is not the same as positioning",
      "Senior resumes require deeper calibration and rewrite work",
      "The right spend usually depends on conversion impact, not page count"
    ],
    pricingPoints: [
      "Cheaper services often optimize formatting more than strategy",
      "Stronger services usually rebuild the logic of the resume, not only the wording",
      "Higher-complexity searches justify deeper rewrite work"
    ],
    faq: (city) => [
      { q: `What should a resume writer cost in ${city.label}?`, a: "The useful benchmark is whether the writer is doing real positioning work or just editing. Stronger strategic rewrite support usually costs more because it changes the actual hiring signal." },
      { q: "Why are some resume writers so cheap?", a: "Many lower-cost offers are template-driven or heavily standardized. That is not always bad, but it is rarely enough for senior, competitive, or transition-heavy searches." },
      { q: "When is premium resume help worth it?", a: "It is usually worth it when your scope, level, or market story is underselling you in a way that is costing you interviews." }
    ]
  },
  {
    slugPrefix: "how-to-choose-a-resume-writer",
    serviceKey: "resume-writing",
    title: (city) => `How to Choose a Resume Writer in ${city.label}`,
    metaTitle: (city) => `How to Choose a Resume Writer ${city.label} | Askia`,
    metaDescription: (city) => `How to choose a resume writer in ${city.shortLabel} based on strategic depth, level calibration, and conversion impact.`,
    h1: (city) => `How to choose a resume writer in ${city.label}`,
    quickAnswer: (city) => `The best resume writer in ${city.label} is usually the one who can clarify your level and impact fast, not the one who sells the fanciest formatting package.`,
    intro: (city) => `If you are comparing resume writers in ${city.label}, the biggest mistake is evaluating them like graphic designers instead of strategic positioning partners.`,
    sections: () => [
      {
        title: "What a strong resume writer should do",
        body: "They should pressure-test target roles, clarify seniority, and rebuild bullets around outcomes. That is very different from proofreading or style edits."
      },
      {
        title: "What to avoid",
        body: "Avoid writers who talk mostly about ATS keywords, visual polish, or templates but not about level calibration, scope, or interview conversion."
      }
    ],
    bullets: [
      "Look for strategic rewrite depth",
      "Ask how they handle seniority and scope",
      "Choose writers who understand interviews, not only documents"
    ],
    pricingPoints: [
      "A resume is valuable when it sets up better interviews",
      "The right writer should have a view on target role and level",
      "Proof of strategic process matters more than generic testimonials"
    ],
    faq: (city) => [
      { q: `How do I choose a resume writer in ${city.label}?`, a: "Look for strategic thinking, not only formatting. The right writer should help you sound closer to the level and role you want." },
      { q: "Should I choose a writer in my city?", a: "City familiarity can help, but role and hiring-depth usually matter more than zip code. The strongest writer often supports both local and national searches." },
      { q: "What are the red flags?", a: "Template-heavy offers, generic guarantees, and no clear explanation of how the writer handles scope, impact, or role-level calibration." }
    ]
  },
  {
    slugPrefix: "interview-prep-cost",
    serviceKey: "interview-prep",
    title: (city) => `Interview Prep Cost in ${city.label}: What Changes the Price`,
    metaTitle: (city) => `Interview Prep Cost ${city.label} | Askia`,
    metaDescription: (city) => `What interview prep costs in ${city.shortLabel}, what affects price, and how to judge real prep quality.`,
    h1: (city) => `Interview prep cost in ${city.label}: what changes the price`,
    quickAnswer: (city) => `Interview prep cost in ${city.label} usually depends on whether you are buying mock practice alone or deeper work on story quality, level calibration, and live-loop strategy.`,
    intro: (city) => `People searching for interview prep cost in ${city.label} usually know they need help before the next loop, but they are trying to judge what level of support is actually worth paying for.`,
    sections: () => [
      {
        title: "What affects interview prep pricing",
        body: "Price usually moves on complexity: target role, technical vs. behavioral depth, level calibration, and whether the prep includes story building or only live practice."
      },
      {
        title: "What the better prep usually includes",
        body: "The highest-value prep improves the answer structure itself, not only confidence. That means sharper examples, clearer tradeoffs, and better alignment with the level you want."
      }
    ],
    bullets: [
      "Mock interviews alone vs. deeper story work",
      "Level calibration matters more at senior scope",
      "Real value comes from stronger conversion, not more practice volume"
    ],
    pricingPoints: [
      "Cheaper prep often stops at generic Q&A practice",
      "Higher-value prep usually includes answer restructuring and story development",
      "The best choice depends on whether your issue is nerves, clarity, or calibration"
    ],
    faq: (city) => [
      { q: `What should interview prep cost in ${city.label}?`, a: "It depends on whether you need simple practice or deeper help on how your experience reads in high-stakes loops." },
      { q: "Is mock interviewing enough?", a: "Sometimes, but many candidates need stronger stories and clearer structure before mock practice creates real gains." },
      { q: "When is interview prep worth paying for?", a: "It is usually worth it when you are already getting interviews and losing too much value in the live loop." }
    ]
  },
  {
    slugPrefix: "how-to-choose-interview-prep",
    serviceKey: "interview-prep",
    title: (city) => `How to Choose Interview Prep in ${city.label}`,
    metaTitle: (city) => `How to Choose Interview Prep ${city.label} | Askia`,
    metaDescription: (city) => `How to choose interview prep in ${city.shortLabel} based on calibration, answer quality, and offer-conversion support.`,
    h1: (city) => `How to choose interview prep in ${city.label}`,
    quickAnswer: (city) => `The best interview prep in ${city.label} usually improves answer quality, level calibration, and conversion logic, not only how comfortable you sound in practice.`,
    intro: (city) => `If you are comparing interview prep in ${city.label}, the strongest option is usually the one that gets specific about the exact decision points interviewers are using to judge your level.`,
    sections: () => [
      {
        title: "What to look for",
        body: "Look for prep that goes beyond generic question lists. Strong prep should improve your stories, sharpen tradeoff framing, and pressure-test how your level reads in the room."
      },
      {
        title: "Why this matters more at higher levels",
        body: "Senior candidates often lose interviews because they sound too tactical, too broad, or too reactive. Better prep should correct that quickly."
      }
    ],
    bullets: [
      "Choose prep that improves answer structure",
      "Look for level and role calibration",
      "Prioritize realistic pressure-testing over generic scripts"
    ],
    pricingPoints: [
      "Better prep usually has a stronger opinion on what interviewers are really testing",
      "The highest-value support makes your examples sound more credible and selective",
      "A good fit should help with both practice and answer redesign"
    ],
    faq: (city) => [
      { q: `How do I choose interview prep in ${city.label}?`, a: "Choose the option that improves answer quality and level-read, not only comfort. The strongest prep should tell you what to cut, tighten, and emphasize." },
      { q: "Should prep be role-specific?", a: "Usually yes. Technical, managerial, product, and commercial interviews often require different kinds of evidence and answer structure." },
      { q: "What are the red flags?", a: "Pure script memorization, no feedback on level calibration, and no ability to explain why your current answers are missing the mark." }
    ]
  }
];

const items = [];

for (const city of cities) {
  for (const pageType of pageTypes) {
    const slug = `${pageType.slugPrefix}-${city.hubSlug.replace(/-career-coaching$/, "")}`;
    items.push({
      slug,
      hubSlug: city.hubSlug,
      cityLabel: city.label,
      serviceKey: pageType.serviceKey,
      title: pageType.title(city),
      metaTitle: pageType.metaTitle(city),
      metaDescription: pageType.metaDescription(city),
      h1: pageType.h1(city),
      quickAnswer: pageType.quickAnswer(city),
      intro: pageType.intro(city),
      sections: pageType.sections(city),
      bullets: pageType.bullets,
      pricingPoints: pageType.pricingPoints,
      faq: pageType.faq(city),
      primaryLink: `/${city.hubSlug}/`,
      primaryLabel: `See ${city.shortLabel} hub`,
      secondaryLink:
        pageType.serviceKey === "career-coaching"
          ? "/land-your-next-role/"
          : `/${pageType.serviceKey}/`,
      secondaryLabel:
        pageType.serviceKey === "career-coaching"
          ? "Book a strategy call"
          : `See ${pageType.serviceKey.replace(/-/g, " ")}`,
    });
  }
}

module.exports = {
  items,
  byHubSlug: items.reduce((acc, item) => {
    if (!acc[item.hubSlug]) acc[item.hubSlug] = [];
    acc[item.hubSlug].push({
      label: item.title,
      url: `/${item.slug}/`,
      serviceKey: item.serviceKey
    });
    return acc;
  }, {}),
  byService: items.reduce((acc, item) => {
    if (!acc[item.serviceKey]) acc[item.serviceKey] = [];
    acc[item.serviceKey].push({
      label: item.title,
      url: `/${item.slug}/`,
      cityLabel: item.cityLabel
    });
    return acc;
  }, {})
};
