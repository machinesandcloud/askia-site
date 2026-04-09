class CitySupportPage {
  data() {
    return {
      layout: "city-support-layout.njk",
      pagination: {
        data: "citySupportPages.items",
        size: 1,
        alias: "entry"
      },
      permalink: (data) => `/${data.entry.slug}/`,
      eleventyComputed: {
        title: (data) => data.entry.title,
        metaTitle: (data) => data.entry.metaTitle,
        metaDescription: (data) => data.entry.metaDescription,
        breadcrumbs: (data) => [
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/" },
          { name: data.entry.cityLabel, url: `/${data.entry.hubSlug}/` },
          { name: data.entry.title, url: `/${data.entry.slug}/` }
        ]
      }
    };
  }
}

module.exports = CitySupportPage;
