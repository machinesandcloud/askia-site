class ProofPage {
  data() {
    return {
      layout: "layout.njk",
      pagination: {
        data: "caseStudies.items",
        size: 1,
        alias: "entry"
      },
      permalink: (data) => `/proof/${data.entry.slug}/`,
      eleventyComputed: {
        title: (data) => data.entry.title,
        metaTitle: (data) => data.entry.metaTitle,
        metaDescription: (data) => data.entry.metaDescription,
        breadcrumbs: (data) => [
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/" },
          { name: "Proof", url: "/proof/" },
          { name: data.entry.title, url: `/proof/${data.entry.slug}/` }
        ]
      }
    };
  }

  render(data) {
    const { entry, expertCredibility } = data;
    return `
<section class="section">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="hero-eyebrow">Proof Library</p>
      <h1 class="hero-title section-title-glow">${entry.title}</h1>
      <p class="hero-subtitle">${entry.outcome}</p>
      <p class="hero-support">${entry.summary}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="/land-your-next-role/">Book a Strategy Call</a>
        <a class="btn btn-ghost" href="/proof/">Browse more proof</a>
      </div>
    </div>
    <div class="hero-card">
      <strong>Case snapshot</strong>
      <ul>
        <li>Market: ${entry.cityLabel}</li>
        <li>Role: ${entry.role}</li>
        <li>Outcome: ${entry.outcome}</li>
      </ul>
    </div>
  </div>
</section>

<section class="section section-tight">
  <div class="container two-col-grid">
    <div class="content-panel">
      <h2 class="section-title section-title-glow">What changed</h2>
      <ul class="checklist">
        ${entry.metrics.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="content-panel">
      <h2 class="section-title section-title-glow">Client perspective</h2>
      <p>${entry.quote}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="pillar-header">
      <p class="hero-eyebrow">What we focused on</p>
      <h2 class="section-title section-title-glow">The shift behind the result</h2>
    </div>
    <div class="faq-grid">
      ${entry.lessons.map((item) => `<div class="faq-card"><p>${item}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="section section-tight">
  <div class="container two-col-grid">
    <div class="content-panel">
      <h2 class="section-title section-title-glow">Why Askia is credible here</h2>
      <p>${expertCredibility.founder.shortBio}</p>
      <ul class="checklist">
        ${expertCredibility.founder.highlights.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="content-panel">
      <h2 class="section-title section-title-glow">Proof behind the coaching</h2>
      <ul class="checklist">
        ${expertCredibility.founder.metrics.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container cta-band">
    <div>
      <h2 class="section-title">Need this kind of outcome?</h2>
      <p class="section-subtitle">Book a call and we’ll map the strongest path for your role target, positioning, and interview strategy.</p>
    </div>
    <a class="btn btn-primary" href="/land-your-next-role/">Book a Call</a>
  </div>
</section>
`;
  }
}

module.exports = ProofPage;
