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
    const experienceHtml = entry.experienceBands
      .map(
        (band) => `
### ${band.level}

- Typical range: ${band.range}
- What usually defines it: ${band.note}`
      )
      .join("\n\n");

    const driversHtml = entry.salaryDrivers.map((item) => `- ${item}`).join("\n");
    const marketHtml = entry.marketSignals.map((item) => `- ${item}`).join("\n");

    return `${entry.role} salaries in ${entry.location} usually move less on title and more on scope.

That is what most compensation pages miss.

Two roles with the same name can sit in very different bands depending on how much operational risk, platform leverage, or cross-team ownership they carry. This page is designed to make that difference clearer.

## Compensation snapshot

- Lower band: ${entry.salaryBand.low}
- Typical midpoint: ${entry.salaryBand.median}
- Upper band: ${entry.salaryBand.high}

This is best used as a planning range, not a promise. The actual package usually depends on level, company stage, market policy, and how clearly your background justifies the upper half of the band.

## Salary by experience level

${experienceHtml}

## What pushes pay higher for ${entry.role} roles

${driversHtml}

## Market context in ${entry.location}

${marketHtml}

## Location and package context

${entry.costContext}

## How to use this page in a real negotiation

Use this guide to sharpen three things before you talk numbers:

1. The level you can defend with proof.
2. The scope signals that move you above the midpoint.
3. The package levers that matter if base pay is tight.

The strongest negotiation case is usually not "I want more."

It is "the scope, impact, and level of this role point to a stronger package than the current one."

## Final takeaway

${entry.role} compensation in ${entry.location} usually moves fastest when your story makes leverage visible.

If you want help positioning yourself for the top of band instead of the middle by default, start here: [/salary-negotiation/](/salary-negotiation/).
`;
  }
}

module.exports = BlogSalaryPage;
