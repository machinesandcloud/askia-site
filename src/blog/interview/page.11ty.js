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
    const basicsHtml = entry.basics
      .map(
        (item) => `
### ${item.q}

${item.a}`
      )
      .join("\n\n");

    const advancedHtml = entry.advanced
      .map(
        (item) => `
### ${item.q}

${item.a}`
      )
      .join("\n\n");

    const mistakesHtml = entry.mistakes.map((item) => `- ${item}`).join("\n");

    return `${entry.intro}

## The basic questions that show up first

${basicsHtml}

## The harder questions that usually separate stronger candidates

${advancedHtml}

## How to answer these questions better

Across most technical interview topics, stronger answers usually:

- define the real problem before naming tools
- make the tradeoff visible
- tie the decision back to reliability, speed, cost, or team impact
- use one real example from production work when possible

That matters because interviewers are usually testing judgment, not only memory.

## Common mistakes

${mistakesHtml}

## Prep strategy for this topic

Before the interview, build:

1. Three short answers for the most common question types.
2. Two real production examples you can reuse.
3. One clear explanation of the tradeoff you would optimize for first.

If you can do that, you stop sounding like you studied the topic and start sounding like you have actually operated in it.

## Final takeaway

Good answers to ${entry.topic.toLowerCase()} usually sound more structured, more selective, and more grounded in tradeoffs than candidates expect.

If you want help turning raw experience into stronger interview signal, start here: [/interview-prep/](/interview-prep/).
`;
  }
}

module.exports = BlogInterviewPage;
