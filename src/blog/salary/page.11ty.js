class BlogSalaryPage {
  data() {
    return {
      layout: "blog-post.njk",
      tags: ["blog"],
      pagination: {
        data: "blogSalaryPages",
        size: 1,
        alias: "entry"
      },
      permalink: (data) => `/blog/salary/${data.entry.slug}/`,
      eleventyComputed: {
        title: (data) => data.entry.title,
        description: (data) => data.entry.description,
        breadcrumbs: (data) => [
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/" },
          { name: "Career Intelligence", url: "/blog/" },
          { name: "Salary Guides", url: "/blog/salary/" },
          { name: data.entry.title, url: `/blog/salary/${data.entry.slug}/` }
        ],
        publishDate: (data) => data.entry.publishDate,
        publishDateISO: (data) => data.entry.publishDateISO,
        updatedDateISO: (data) => data.entry.updatedDateISO,
        readTime: (data) => data.entry.readTime,
        featuredImage: (data) => data.entry.featuredImage,
        imageAlt: (data) => data.entry.imageAlt,
        categories: (data) => data.entry.categories,
        author: "Steve Ngoumnai",
        featured: false,
        faq: (data) => data.entry.faq
      }
    };
  }

  render(data) {
    const { entry } = data;
    const allGuides = data.blogSalaryPages || [];
    const roleLink = entry.rolePageUrl || "/land-your-next-role/";
    const marketLink = entry.marketPageUrl || "/locations/";
    const benchmarkEvidence = entry.benchmarkEvidence;
    const expert = data.expertCredibility.founder;
    const sameCityGuides = allGuides
      .filter((item) => item.slug !== entry.slug && item.location === entry.location)
      .slice(0, 4);
    const sameCategoryGuides = allGuides
      .filter(
        (item) =>
          item.slug !== entry.slug &&
          item.categories &&
          entry.categories &&
          item.categories.some((category) => entry.categories.includes(category))
      )
      .slice(0, 4);
    const experienceHtml = entry.experienceBands
      .map(
        (band) => `
        <article class="focus-card">
          <span class="focus-tag">${band.level}</span>
          <h3>${band.range}</h3>
          <p>${band.note}</p>
        </article>`
      )
      .join("");

    const driversHtml = entry.salaryDrivers.map((item) => `<li>${item}</li>`).join("");
    const marketHtml = entry.marketSignals.map((item) => `<li>${item}</li>`).join("");
    const methodologyHtml = entry.methodology.notes.map((item) => `<li>${item}</li>`).join("");
    const sourcesHtml = entry.sourceReferences
      .map((item) => `<li><a href="${item.url}" rel="nofollow">${item.label}</a></li>`)
      .join("");
    const sameCityHtml = sameCityGuides
      .map((item) => `<li><a href="/blog/salary/${item.slug}/">${item.role} salary in ${item.location}</a></li>`)
      .join("");
    const sameCategoryHtml = sameCategoryGuides
      .map((item) => `<li><a href="/blog/salary/${item.slug}/">${item.title}</a></li>`)
      .join("");
    const benchmarkEvidenceHtml = benchmarkEvidence
      ? `
<h2>${benchmarkEvidence.title}</h2>
<p>${benchmarkEvidence.summary}</p>
<ul>
  ${benchmarkEvidence.points.map((item) => `<li>${item}</li>`).join("")}
</ul>
<p>Source checked: <a href="${benchmarkEvidence.sourceUrl}" rel="nofollow">${benchmarkEvidence.sourceLabel}</a> (${benchmarkEvidence.sourceDate})</p>`
      : "";

    return `
<p>${entry.quickAnswer}</p>
<p>${entry.role} salaries in ${entry.location} usually move less on title and more on scope.</p>
<p>That is what most compensation pages miss.</p>
<p>Two roles with the same name can sit in very different bands depending on how much operational risk, platform leverage, or cross-team ownership they carry. This page is designed to make that difference clearer.</p>

<h2>At a glance</h2>
<ul>
  <li><strong>Role:</strong> ${entry.role}</li>
  <li><strong>Market:</strong> ${entry.location}</li>
  <li><strong>Closest public benchmark:</strong> ${entry.benchmarkOccupation}</li>
  <li><strong>Last updated:</strong> ${entry.updatedDateISO}</li>
</ul>

<h2>Compensation snapshot</h2>
<ul>
  <li><strong>Lower band:</strong> ${entry.salaryBand.low}</li>
  <li><strong>Typical midpoint:</strong> ${entry.salaryBand.median}</li>
  <li><strong>Upper band:</strong> ${entry.salaryBand.high}</li>
</ul>
<p>This is best used as a planning range, not a promise. The actual package usually depends on level, company stage, market policy, and how clearly your background justifies the upper half of the band.</p>

<h2>Salary by experience level</h2>
<div class="focus-grid">
  ${experienceHtml}
</div>

<h2>Closest public benchmark family</h2>
<p>The closest public benchmark family for this page is <strong>${entry.benchmarkOccupation}</strong>. That matters because employer titles often vary more than public labor datasets do.</p>

${benchmarkEvidenceHtml}

<h2>What pushes pay higher for ${entry.role} roles</h2>
<ul>
  ${driversHtml}
</ul>

<h2>Market context in ${entry.location}</h2>
<ul>
  ${marketHtml}
</ul>

<h2>Location and package context</h2>
<p>${entry.costContext}</p>

<h2>How to use this page in a real negotiation</h2>
<p>Use this guide to sharpen three things before you talk numbers:</p>
<ol>
  <li>The level you can defend with proof.</li>
  <li>The scope signals that move you above the midpoint.</li>
  <li>The package levers that matter if base pay is tight.</li>
</ol>
<p>The strongest negotiation case is usually not "I want more."</p>
<p>It is "the scope, impact, and level of this role point to a stronger package than the current one."</p>

<h2>How Askia built this salary guide</h2>
<p>${entry.methodology.summary}</p>
<ul>
  ${methodologyHtml}
</ul>

<h2>Sources used for benchmarking</h2>
<ul>
  ${sourcesHtml}
</ul>
<p>Use these sources as cross-checks, not as a single definitive number. Real offers still move on scope, company stage, level calibration, and total package design.</p>

<h2>Why Askia is credible on compensation positioning</h2>
<p>${expert.shortBio}</p>
<ul>
  ${expert.highlights.map((item) => `<li>${item}</li>`).join("")}
</ul>

<h2>Related career assets</h2>
<ul>
  <li><a href="${roleLink}">${entry.role} career coaching</a></li>
  <li><a href="${marketLink}">Career coaching in ${entry.location}</a></li>
  <li><a href="/salary-negotiation/">Salary negotiation support</a></li>
  <li><a href="/interview-prep/">Interview prep for stronger offer loops</a></li>
  <li><a href="/proof/">Proof library with salary and offer outcomes</a></li>
</ul>

${sameCityGuides.length ? `
<h2>More salary guides in ${entry.location}</h2>
<ul>
  ${sameCityHtml}
</ul>` : ""}

${sameCategoryGuides.length ? `
<h2>Related compensation guides</h2>
<ul>
  ${sameCategoryHtml}
</ul>` : ""}

<h2>Final takeaway</h2>
<p>${entry.role} compensation in ${entry.location} usually moves fastest when your story makes leverage visible.</p>
<p>If you want help positioning yourself for the top of band instead of the middle by default, start here: <a href="/salary-negotiation/">Salary negotiation</a>.</p>
`;
  }
}

module.exports = BlogSalaryPage;
