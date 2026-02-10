module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon-precomposed.png": "apple-touch-icon-precomposed.png" });

  eleventyConfig.addFilter("repeat", (value, times) => {
    return new Array(times).fill(value).join("");
  });

  eleventyConfig.addFilter("rfc822", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toUTCString();
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
