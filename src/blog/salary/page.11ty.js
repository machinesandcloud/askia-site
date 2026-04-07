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
    const rolePageMap = {
      "DevOps Engineer": "/devops-career-coaching/",
      "Site Reliability Engineer": "/devops-career-coaching/",
      "Platform Engineer": "/devops-career-coaching/",
      "Cloud Engineer": "/devops-career-coaching/"
    };
    const locationPageMap = {
      "Remote (U.S.)": "/locations/",
      "New York": "/new-york-city-career-coaching/",
      "San Francisco": "/san-francisco-bay-area-career-coaching/",
      "Austin": "/austin-career-coaching/",
      "London": "/locations/",
      "Berlin": "/locations/",
      "Toronto": "/locations/",
      "Remote (Europe)": "/locations/"
    };
    const roleLink = rolePageMap[entry.role] || "/land-your-next-role/";
    const marketLink = locationPageMap[entry.location] || "/locations/";
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

    return `
<p>${entry.role} salaries in ${entry.location} usually move less on title and more on scope.</p>
<p>That is what most compensation pages miss.</p>
<p>Two roles with the same name can sit in very different bands depending on how much operational risk, platform leverage, or cross-team ownership they carry. This page is designed to make that difference clearer.</p>

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

<h2>Related career assets</h2>
<ul>
  <li><a href="${roleLink}">${entry.role} career coaching</a></li>
  <li><a href="${marketLink}">Career coaching in ${entry.location}</a></li>
  <li><a href="/salary-negotiation/">Salary negotiation support</a></li>
  <li><a href="/interview-prep/">Interview prep for stronger offer loops</a></li>
</ul>

<h2>Final takeaway</h2>
<p>${entry.role} compensation in ${entry.location} usually moves fastest when your story makes leverage visible.</p>
<p>If you want help positioning yourself for the top of band instead of the middle by default, start here: <a href="/salary-negotiation/">Salary negotiation</a>.</p>
`;
  }
}

module.exports = BlogSalaryPage;
