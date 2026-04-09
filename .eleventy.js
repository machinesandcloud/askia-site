const CONSOLIDATED_BLOG_SLUG_PATTERNS = [
  /^behavioral-interviews-/i,
  /^hidden-market-/i,
  /^interview-prep-/i,
  /^job-search-strategy-/i,
  /^promotion-readiness-/i,
  /^story-bank-/i,
  /^system-design-/i,
  /^career-pivot-/i,
  /^leadership-signal-/i,
  /^linkedin-signal-/i,
  /^salary-negotiation-/i,
  /^offer-strategy-/i,
  /^resume-clarity-/i,
  /^resume-writer-/i,
  /^career-positioning-\d+/i,
  /^career-positioning-checklist-/i,
  /^career-pivots-checklist-/i,
  /^cold-outreach-checklist-/i,
  /^executive-presence-checklist-/i,
  /^first-30-days-checklist-/i,
  /^job-search-strategy-checklist-/i,
  /^linkedin-positioning-checklist-/i,
  /^portfolio-impact-\d+/i,
  /^portfolio-strategy-checklist-/i,
  /^promotion-readiness-checklist-/i,
  /^recruiter-screen-\d+/i,
  /^recruiter-screens-checklist-/i,
  /^referrals-checklist-/i,
  /^referrals-/i,
  /^role-leveling-\d+/i,
  /^role-leveling-checklist-/i,
  /^salary-expectations-checklist-/i,
  /^case-studies-checklist-/i,
  /^offer-negotiation-checklist-/i,
  /^story-bank-checklist-/i,
  /^system-design-checklist-/i,
  /^tech-career-coaching-\d+/i,
  /^cold-outreach-/i,
  /^linkedin-positioning-/i,
  /^portfolio-/i,
  /^how-to-/i,
  /^mistakes-to-avoid-in-/i,
  /^the-30-day-plan-for-/i,
  /^value-narrative-\d+/i,
  /^a-practical-guide-to-/i,
  /^a-step-by-step-guide-to-/i,
  /^checklist-for-/i,
  /^framework-for-/i,
  /^career-coaching-in-.*-guide$/i,
  /^houston-career-coaching-/i,
  /^houston-tech-career-coaching-/i,
  /^houston-best-career-coaches-/i,
  /^houston-interview-preparation-/i,
  /^houston-job-search-strategy-/i,
  /^houston-offer-strategy-/i,
  /^houston-resume-writer-/i,
  /^houston-linkedin-optimization-/i,
  /^houston-salary-negotiation-/i,
];

function getBlogSlug(entryOrValue) {
  if (!entryOrValue) return "";
  if (typeof entryOrValue === "string") {
    const match = entryOrValue.match(/\/blog\/([^/]+)\/?$/);
    return match ? match[1] : "";
  }
  if (entryOrValue.fileSlug) return entryOrValue.fileSlug;
  if (entryOrValue.url) return getBlogSlug(entryOrValue.url);
  return "";
}

function isConsolidatedBlogEntry(entryOrValue) {
  const slug = getBlogSlug(entryOrValue);
  return CONSOLIDATED_BLOG_SLUG_PATTERNS.some((pattern) => pattern.test(slug));
}

function isBlogSectionEntry(item, section) {
  return item && item.url && item.url.startsWith(`/blog/${section}/`);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon-precomposed.png": "apple-touch-icon-precomposed.png" });
  eleventyConfig.addPassthroughCopy({ "src/.well-known": ".well-known" });
  eleventyConfig.addPassthroughCopy({ "src/askia7b9c4f2e3d8a1fe6.txt": "askia7b9c4f2e3d8a1fe6.txt" });

  eleventyConfig.addFilter("repeat", (value, times) => {
    return new Array(times).fill(value).join("");
  });

  eleventyConfig.addFilter("rfc822", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toUTCString();
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("isConsolidatedBlogEntry", (value) => {
    return isConsolidatedBlogEntry(value);
  });

  eleventyConfig.addCollection("publicBlog", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("blog")
      .filter((item) => !isConsolidatedBlogEntry(item));
  });

  eleventyConfig.addCollection("publicSalaryBlog", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("blog")
      .filter((item) => !isConsolidatedBlogEntry(item))
      .filter((item) => isBlogSectionEntry(item, "salary"));
  });

  eleventyConfig.addCollection("publicInterviewBlog", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("blog")
      .filter((item) => !isConsolidatedBlogEntry(item))
      .filter((item) => isBlogSectionEntry(item, "interview"));
  });

  eleventyConfig.addTransform("stripHallucinatedSections", (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    const visibilityRe = new RegExp("<h2>Visibility signals that convert<\\\\/h2>\\\\s*<p>[\\\\s\\\\S]*?<\\\\/p>", "gi");
    const offlineRe = new RegExp("<h2>Offline trust builders<\\\\/h2>\\\\s*<p>[\\\\s\\\\S]*?<\\\\/p>", "gi");
    return content.replace(visibilityRe, "").replace(offlineRe, "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
