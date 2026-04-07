class HoustonLocalPage {
  data() {
    return {
      layout: "houston-local-layout.njk",
      pagination: {
        data: "houstonLocalPages",
        size: 1,
        alias: "entry"
      },
      permalink: (data) => `/${data.entry.slug}/`,
      eleventyComputed: {
        title: (data) => data.entry.title,
        metaTitle: (data) => data.entry.metaTitle,
        metaDescription: (data) => data.entry.metaDescription,
        schemaType: "Service",
        schemaName: (data) => data.entry.schemaName,
        schemaDescription: (data) => data.entry.schemaDescription,
        schemaServiceType: (data) => data.entry.schemaServiceType,
        breadcrumbs: (data) => [
          { name: "Home", url: "/" },
          { name: "Houston", url: "/houston-career-coaching/" },
          { name: data.entry.title, url: `/${data.entry.slug}/` }
        ]
      }
    };
  }

  render() {
    return "";
  }
}

module.exports = HoustonLocalPage;
