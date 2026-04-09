#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const blogRoot = path.join(repoRoot, "src", "blog");

const CONSOLIDATED_BLOG_SLUG_PATTERNS = [
  /^behavioral-interviews-\d+/i,
  /^hidden-market-\d+/i,
  /^interview-prep-\d+/i,
  /^job-search-strategy-\d+/i,
  /^leadership-signal-\d+/i,
  /^linkedin-signal-\d+/i,
  /^salary-negotiation-\d+/i,
  /^promotion-readiness-\d+/i,
  /^story-bank-\d+/i,
  /^system-design-\d+/i,
  /^career-pivot-\d+/i,
  /^offer-strategy-\d+/i,
  /^resume-clarity-\d+/i,
  /^resume-writer-\d+/i,
  /^executive-presence-checklist-\d+/i,
  /^offer-negotiation-checklist-\d+/i,
  /^a-practical-guide-to-/i,
  /^a-step-by-step-guide-to-/i,
  /^checklist-for-/i,
  /^framework-for-/i,
  /^recruiter-screen-\d+/i,
  /^career-positioning-\d+/i,
  /^tech-career-coaching-\d+/i,
  /^portfolio-/i,
  /^value-narrative-\d+/i,
  /^cold-outreach-/i,
  /^linkedin-positioning-/i,
  /^referrals-/i,
  /^how-to-/i,
  /^mistakes-to-avoid-in-/i,
  /^the-30-day-plan-for-/i,
  /^houston-best-career-coaches-\d+/i,
  /^houston-career-coaching-\d+/i,
  /^houston-interview-preparation-\d+/i,
  /^houston-job-search-strategy-\d+/i,
  /^houston-offer-strategy-\d+/i,
  /^houston-resume-writer-\d+/i,
  /^houston-salary-negotiation-\d+/i,
  /^houston-tech-career-coaching-\d+/i,
];

const FORCED_FIELDS = new Map([
  ["eleventyExcludeFromCollections", "true"],
  ["sitemap", "false"],
  ["noindex", "true"],
  ["permalink", "false"],
]);

function shouldConsolidate(slug) {
  return CONSOLIDATED_BLOG_SLUG_PATTERNS.some((pattern) => pattern.test(slug));
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (entry.isFile() && entry.name === "index.md") {
      files.push(fullPath);
    }
  }
  return files;
}

function updateFrontMatter(contents) {
  const match = contents.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return null;
  }

  const frontMatterBody = match[1];
  const lines = frontMatterBody.split("\n");
  const output = [];
  const handled = new Set();

  for (const line of lines) {
    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (keyMatch && FORCED_FIELDS.has(keyMatch[1])) {
      const key = keyMatch[1];
      output.push(`${key}: ${FORCED_FIELDS.get(key)}`);
      handled.add(key);
    } else {
      output.push(line);
    }
  }

  for (const [key, value] of FORCED_FIELDS.entries()) {
    if (!handled.has(key)) {
      output.push(`${key}: ${value}`);
    }
  }

  const updatedFrontMatter = `---\n${output.join("\n")}\n---\n`;
  return updatedFrontMatter + contents.slice(match[0].length);
}

let changed = 0;

for (const filePath of walk(blogRoot)) {
  const slug = path.basename(path.dirname(filePath));
  if (!shouldConsolidate(slug)) {
    continue;
  }

  const contents = fs.readFileSync(filePath, "utf8");
  const updated = updateFrontMatter(contents);
  if (!updated || updated === contents) {
    continue;
  }

  fs.writeFileSync(filePath, updated);
  changed += 1;
}

console.log(`Updated ${changed} consolidated blog posts.`);
