class BlogInterviewPage {
  data() {
    return {
      layout: "blog-post.njk",
      tags: ["blog"],
      pagination: {
        data: "blogInterviewPages",
        size: 1,
        alias: "entry"
      },
      permalink: (data) => `/blog/interview/${data.entry.slug}/`,
      eleventyComputed: {
        title: (data) => data.entry.title,
        description: (data) => data.entry.description,
        breadcrumbs: (data) => [
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/" },
          { name: "Career Intelligence", url: "/blog/" },
          { name: "Interview Guides", url: "/blog/interview/" },
          { name: data.entry.title, url: `/blog/interview/${data.entry.slug}/` }
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
    const allGuides = data.blogInterviewPages || [];
    const roleLink = entry.rolePageUrl || "/land-your-next-role/";
    const expert = data.expertCredibility.founder;
    const relatedByCategory = allGuides
      .filter(
        (item) =>
          item.slug !== entry.slug &&
          item.categories &&
          entry.categories &&
          item.categories.some((category) => entry.categories.includes(category))
      )
      .slice(0, 4);
    const relatedByTopic = allGuides
      .filter(
        (item) =>
          item.slug !== entry.slug &&
          ((item.role && entry.role && item.role === entry.role) ||
            (item.topic && entry.topic && item.topic.split(" ")[0] === entry.topic.split(" ")[0]))
      )
      .slice(0, 4);
    const basicsHtml = entry.basics
      .map(
        (item) => `
        <article class="focus-card">
          <h3>${item.q}</h3>
          <p>${item.a}</p>
        </article>`
      )
      .join("");

    const advancedHtml = entry.advanced
      .map(
        (item) => `
        <article class="focus-card">
          <h3>${item.q}</h3>
          <p>${item.a}</p>
        </article>`
      )
      .join("");

    const mistakesHtml = entry.mistakes.map((item) => `<li>${item}</li>`).join("");
    const relatedCategoryHtml = relatedByCategory
      .map((item) => `<li><a href="/blog/interview/${item.slug}/">${item.title}</a></li>`)
      .join("");
    const relatedTopicHtml = relatedByTopic
      .map((item) => `<li><a href="/blog/interview/${item.slug}/">${item.title}</a></li>`)
      .join("");

    return `
<p>${entry.intro}</p>

<h2>At a glance</h2>
<ul>
  <li><strong>Role focus:</strong> ${entry.role}</li>
  <li><strong>Guide topic:</strong> ${entry.topic}</li>
  <li><strong>Last updated:</strong> ${entry.updatedDateISO}</li>
  <li><strong>Best use:</strong> sharpen real interview stories and decision logic before live loops</li>
</ul>

<h2>The basic questions that show up first</h2>
<div class="focus-grid">
  ${basicsHtml}
</div>

<h2>The harder questions that usually separate stronger candidates</h2>
<div class="focus-grid">
  ${advancedHtml}
</div>

<h2>How to answer these questions better</h2>
<p>Across most technical interview topics, stronger answers usually:</p>
<ul>
  <li>define the real problem before naming tools</li>
  <li>make the tradeoff visible</li>
  <li>tie the decision back to reliability, speed, cost, or team impact</li>
  <li>use one real example from production work when possible</li>
</ul>
<p>That matters because interviewers are usually testing judgment, not only memory.</p>

<h2>Common mistakes</h2>
<ul>
  ${mistakesHtml}
</ul>

<h2>Prep strategy for this topic</h2>
<p>Before the interview, build:</p>
<ol>
  <li>Three short answers for the most common question types.</li>
  <li>Two real production examples you can reuse.</li>
  <li>One clear explanation of the tradeoff you would optimize for first.</li>
</ol>
<p>If you can do that, you stop sounding like you studied the topic and start sounding like you have actually operated in it.</p>

<h2>Why Askia is credible on interview signal</h2>
<p>${expert.shortBio}</p>
<ul>
  ${expert.highlights.map((item) => `<li>${item}</li>`).join("")}
</ul>

<h2>Related career assets</h2>
<ul>
  <li><a href="${roleLink}">${entry.role} career coaching</a></li>
  <li><a href="/interview-prep/">Structured interview support</a></li>
  <li><a href="/salary-negotiation/">Salary and offer strategy</a></li>
  <li><a href="/locations/">Local market pages</a></li>
  <li><a href="/proof/">Proof library with interview and offer outcomes</a></li>
</ul>

${relatedByTopic.length ? `
<h2>Related interview guides</h2>
<ul>
  ${relatedTopicHtml}
</ul>` : ""}

${relatedByCategory.length ? `
<h2>More guides in this role family</h2>
<ul>
  ${relatedCategoryHtml}
</ul>` : ""}

<h2>Final takeaway</h2>
<p>Good answers to ${entry.topic.toLowerCase()} usually sound more structured, more selective, and more grounded in tradeoffs than candidates expect.</p>
<p>If you want help turning raw experience into stronger interview signal, start here: <a href="/interview-prep/">Interview prep</a>.</p>
`;
  }
}

module.exports = BlogInterviewPage;
