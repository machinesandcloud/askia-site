const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "src", "blog");
const REPORT_DIR = path.join(ROOT, "reports");
const JSON_REPORT = path.join(REPORT_DIR, "blog-audit.json");
const MD_REPORT = path.join(REPORT_DIR, "blog-audit.md");

const TECH_KEYWORDS = [
  "devops",
  "sre",
  "site reliability",
  "platform engineer",
  "platform engineering",
  "cloud engineer",
  "cloud",
  "kubernetes",
  "software engineer",
  "engineering manager",
  "technical program manager",
  "solutions architect",
  "data engineer",
  "data scientist",
  "ml engineer",
  "machine learning",
  "qa",
  "test automation",
  "cybersecurity",
  "product manager",
  "product designer",
  "sales engineer",
  "ai",
  "tech"
];

const CORE_NICHE_KEYWORDS = [
  "devops",
  "sre",
  "site reliability",
  "platform engineer",
  "platform engineering",
  "cloud engineer",
  "kubernetes",
  "engineering manager",
  "software engineer",
  "technical program manager",
  "solutions architect"
];

const GENERIC_TITLE_PATTERNS = [
  /^a practical guide to /i,
  /^a step-by-step guide to /i,
  /^the 30-day plan for /i,
  /^the playbook for /i,
  /^framework for /i,
  /^checklist for /i,
  /^mistakes to avoid in /i,
  /^what to do /i
];

const LOW_SIGNAL_SLUG_PATTERNS = [
  /-\d+$/i,
  /^houston-best-career-coaches-\d+$/i,
  /^houston-(career-coaching|tech-career-coaching|interview-preparation|offer-strategy|salary-negotiation|linkedin-optimization|resume-writer)-\d+$/i
];

const TEMPLATE_HEADINGS = [
  "short answer",
  "why this matters",
  "what strong signal looks like",
  "common mistakes",
  "role-specific nuance",
  "deeper context",
  "the coach's framework",
  "coach's note",
  "practical execution this week",
  "how to measure progress",
  "if you are stuck",
  "proof checklist",
  "example",
  "how to talk about it",
  "next step",
  "faq",
  "final takeaway"
];

const GENERIC_PHRASES = [
  "hiring teams scan fast",
  "the faster they understand your story, the faster you move forward",
  "that speed compounds",
  "a good test: can a recruiter summarize your story in one sentence after a 10-second scan",
  "pick one signal tied to",
  "test that change for two weeks",
  "this keeps your process calm, measurable, and repeatable",
  "keep the language concrete and outcome-based",
  "respond best to specific proof, not generic claims"
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: fileContent };
  }

  const [, frontmatter, body] = match;
  const lines = frontmatter.split(/\r?\n/);
  const data = {};

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!keyMatch) continue;
    const [, key, rawValue] = keyMatch;
    const value = rawValue.trim();

    if (value === "") {
      const arrayItems = [];
      let j = i + 1;
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        arrayItems.push(lines[j].replace(/^\s*-\s+/, "").replace(/^"(.*)"$/, "$1"));
        j += 1;
      }
      data[key] = arrayItems;
      i = j - 1;
      continue;
    }

    if (/^\[.*\]$/.test(value)) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^"(.*)"$/, "$1"))
        .filter(Boolean);
      continue;
    }

    if (value === "true" || value === "false") {
      data[key] = value === "true";
      continue;
    }

    data[key] = value.replace(/^"(.*)"$/, "$1");
  }

  return { data, body };
}

function getHeadings(body) {
  return body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^##\s+/.test(line))
    .map((line) => line.replace(/^##\s+/, "").trim());
}

function countWords(text) {
  const matches = text.match(/\b[\w'-]+\b/g);
  return matches ? matches.length : 0;
}

function countOccurrences(text, phrase) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = text.match(new RegExp(escaped, "gi"));
  return matches ? matches.length : 0;
}

function getTopicFocus(text, keywords) {
  const lower = text.toLowerCase();
  const matches = keywords.filter((keyword) => lower.includes(keyword));
  return {
    isTechFocused: matches.length > 0,
    matches
  };
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[`*_>#()[\]"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sharedTokens(a, b) {
  const aTokens = new Set(normalizeText(a).split(" ").filter((token) => token.length > 3));
  const bTokens = new Set(normalizeText(b).split(" ").filter((token) => token.length > 3));
  if (!aTokens.size || !bTokens.size) return 0;
  let overlap = 0;
  aTokens.forEach((token) => {
    if (bTokens.has(token)) overlap += 1;
  });
  return overlap / Math.min(aTokens.size, bTokens.size);
}

function classifyPost(post) {
  let score = 100;
  const reasons = [];

  if (post.hasNumericSlug) {
    score -= 35;
    reasons.push("numeric slug pattern signals disposable programmatic content");
  }

  if (post.isHoustonVariant) {
    score -= 20;
    reasons.push("Houston-variant page appears part of a repetitive local batch");
  }

  if (post.hasGenericTitlePattern) {
    score -= 12;
    reasons.push("title follows a generic mass-generated pattern");
  }

  if (post.hasGenericDescription) {
    score -= 18;
    reasons.push("meta description is templated or low-signal");
  }

  if (post.templateHeadingMatchRatio >= 0.8 && post.headings.length >= 10) {
    score -= 22;
    reasons.push("body uses the standard repeated heading scaffold");
  }

  if (post.genericPhraseHits >= 5) {
    score -= 16;
    reasons.push("body contains many repeated generic phrases");
  }

  if (post.wordCount < 700) {
    score -= 10;
    reasons.push("body is thin for competitive organic search");
  }

  if (!post.isTechFocused) {
    score -= 14;
    reasons.push("topic is outside Askia's strongest technical authority lane");
  }

  if (!post.isCoreNicheFocused) {
    score -= 8;
    reasons.push("topic is not in the core DevOps/SRE/Platform-adjacent niche");
  }

  if (post.suspectedDuplicateClusterSize >= 4) {
    score -= 18;
    reasons.push("page sits inside a large near-duplicate intent cluster");
  } else if (post.suspectedDuplicateClusterSize >= 2) {
    score -= 10;
    reasons.push("page has at least one close intent duplicate");
  }

  score = Math.max(0, Math.min(100, score));

  let classification = "keep";
  if (score < 30) classification = "prune";
  else if (score < 55) classification = "merge";
  else if (score < 78) classification = "rewrite";

  if (
    classification === "keep" &&
    (post.hasGenericTitlePattern || post.templateHeadingMatchRatio >= 0.8 || post.genericPhraseHits >= 5)
  ) {
    classification = "rewrite";
  }

  return { score, classification, reasons };
}

function main() {
  const entries = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const posts = entries.map((slug) => {
    const filePath = path.join(BLOG_DIR, slug, "index.md");
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, body } = parseFrontmatter(raw);
    const headings = getHeadings(body);
    const headingMatches = headings.filter((heading) =>
      TEMPLATE_HEADINGS.includes(heading.toLowerCase())
    ).length;
    const normalizedTitle = `${data.title || ""}`.trim();
    const normalizedDescription = `${data.description || ""}`.trim();
    const topicText = `${slug} ${normalizedTitle} ${normalizedDescription} ${body}`;
    const topicFocus = getTopicFocus(topicText, TECH_KEYWORDS);
    const coreTopicFocus = getTopicFocus(topicText, CORE_NICHE_KEYWORDS);
    const genericPhraseHits = GENERIC_PHRASES.reduce(
      (sum, phrase) => sum + countOccurrences(body, phrase),
      0
    );

    return {
      slug,
      path: `src/blog/${slug}/index.md`,
      title: normalizedTitle,
      description: normalizedDescription,
      categories: Array.isArray(data.categories) ? data.categories : [],
      publishDate: data.publishDate || "",
      featured: Boolean(data.featured),
      wordCount: countWords(body),
      headings,
      headingsCount: headings.length,
      templateHeadingMatchRatio: headings.length ? headingMatches / headings.length : 0,
      genericPhraseHits,
      hasGenericTitlePattern: GENERIC_TITLE_PATTERNS.some((pattern) => pattern.test(normalizedTitle)),
      hasNumericSlug: LOW_SIGNAL_SLUG_PATTERNS.some((pattern) => pattern.test(slug)),
      isHoustonVariant: /^houston-/i.test(slug) || /\bhouston\b/i.test(normalizedTitle),
      hasGenericDescription:
        /a focused guide/i.test(normalizedDescription) ||
        /delivers clear steps, proof points, and a practical path/i.test(normalizedDescription) ||
        normalizeText(normalizedDescription).includes(normalizeText(normalizedTitle)),
      isTechFocused: topicFocus.isTechFocused,
      techMatches: topicFocus.matches,
      isCoreNicheFocused: coreTopicFocus.isTechFocused,
      coreNicheMatches: coreTopicFocus.matches,
      duplicatePeers: []
    };
  });

  for (let i = 0; i < posts.length; i += 1) {
    for (let j = i + 1; j < posts.length; j += 1) {
      const a = posts[i];
      const b = posts[j];
      const similarity = sharedTokens(`${a.slug} ${a.title}`, `${b.slug} ${b.title}`);
      if (similarity >= 0.72) {
        a.duplicatePeers.push(b.slug);
        b.duplicatePeers.push(a.slug);
      }
    }
  }

  posts.forEach((post) => {
    post.suspectedDuplicateClusterSize = post.duplicatePeers.length + 1;
    const { score, classification, reasons } = classifyPost(post);
    post.score = score;
    post.classification = classification;
    post.reasons = reasons;
  });

  const summary = {
    totalPosts: posts.length,
    byClassification: posts.reduce((acc, post) => {
      acc[post.classification] = (acc[post.classification] || 0) + 1;
      return acc;
    }, {}),
    techFocusedPosts: posts.filter((post) => post.isTechFocused).length,
    coreNicheFocusedPosts: posts.filter((post) => post.isCoreNicheFocused).length,
    numericSlugPosts: posts.filter((post) => post.hasNumericSlug).length,
    houstonVariantPosts: posts.filter((post) => post.isHoustonVariant).length,
    genericTitlePosts: posts.filter((post) => post.hasGenericTitlePattern).length,
    templatedHeadingPosts: posts.filter((post) => post.templateHeadingMatchRatio >= 0.8).length,
    averageWordCount: Math.round(
      posts.reduce((sum, post) => sum + post.wordCount, 0) / Math.max(posts.length, 1)
    )
  };

  const ranked = [...posts].sort((a, b) => a.score - b.score || a.slug.localeCompare(b.slug));
  const topKeep = [...posts]
    .filter((post) => post.classification === "keep")
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
    .slice(0, 25);

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(JSON_REPORT, JSON.stringify({ generatedAt: new Date().toISOString(), summary, posts: ranked }, null, 2));

  const lines = [];
  lines.push("# Blog Audit");
  lines.push("");
  lines.push(`- Total posts: ${summary.totalPosts}`);
  lines.push(`- Keep: ${summary.byClassification.keep || 0}`);
  lines.push(`- Rewrite: ${summary.byClassification.rewrite || 0}`);
  lines.push(`- Merge: ${summary.byClassification.merge || 0}`);
  lines.push(`- Prune: ${summary.byClassification.prune || 0}`);
  lines.push(`- Tech-focused posts: ${summary.techFocusedPosts}`);
  lines.push(`- Core-niche posts: ${summary.coreNicheFocusedPosts}`);
  lines.push(`- Numeric-slug posts: ${summary.numericSlugPosts}`);
  lines.push(`- Houston variants: ${summary.houstonVariantPosts}`);
  lines.push(`- Generic-title posts: ${summary.genericTitlePosts}`);
  lines.push(`- Templated-heading posts: ${summary.templatedHeadingPosts}`);
  lines.push(`- Average body word count: ${summary.averageWordCount}`);
  lines.push("");

  lines.push("## Highest-risk posts");
  lines.push("");
  ranked.slice(0, 40).forEach((post) => {
    lines.push(`- ${post.classification.toUpperCase()} | score ${post.score} | ${post.path}`);
    lines.push(`  title: ${post.title}`);
    lines.push(`  reasons: ${post.reasons.join("; ")}`);
  });
  lines.push("");

  lines.push("## Strongest keep candidates");
  lines.push("");
  topKeep.forEach((post) => {
      lines.push(`- KEEP | score ${post.score} | ${post.path}`);
      lines.push(`  title: ${post.title}`);
      lines.push(`  niche focus: ${post.coreNicheMatches.join(", ") || post.techMatches.join(", ") || "none"}`);
  });
  lines.push("");

  lines.push("## Rewrite priority candidates");
  lines.push("");
  ranked
    .filter((post) => post.classification === "rewrite")
    .slice(0, 40)
    .forEach((post) => {
      lines.push(`- REWRITE | score ${post.score} | ${post.path}`);
      lines.push(`  title: ${post.title}`);
      lines.push(`  reasons: ${post.reasons.join("; ")}`);
    });
  lines.push("");

  fs.writeFileSync(MD_REPORT, `${lines.join("\n")}\n`);

  console.log(`Wrote ${JSON_REPORT}`);
  console.log(`Wrote ${MD_REPORT}`);
  console.log(JSON.stringify(summary, null, 2));
}

main();
