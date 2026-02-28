#!/usr/bin/env node
/**
 * IndexNow Submission Script
 * Submits URLs to Bing/Copilot for fast indexing
 *
 * Usage: node scripts/indexnow-submit.js [url1] [url2] ...
 * Or run without args to submit all key pages
 */

const https = require('https');

const SITE_HOST = 'askia.tech';
const KEY = 'askia7b9c4f2e3d8a1fe6';
const KEY_LOCATION = `https://${SITE_HOST}/${KEY}.txt`;

// Key pages to submit by default
const DEFAULT_URLS = [
  'https://askia.tech/',
  'https://askia.tech/land-your-next-role/',
  'https://askia.tech/services/',
  'https://askia.tech/blog/',
  'https://askia.tech/software-engineer-career-coaching/',
  'https://askia.tech/data-career-coaching/',
  'https://askia.tech/product-manager-career-coaching/',
  'https://askia.tech/finance-fpa-career-coaching/',
  'https://askia.tech/marketing-career-coaching/',
  'https://askia.tech/operations-career-coaching/',
  'https://askia.tech/sales-career-coaching/',
  'https://askia.tech/people-ops-career-coaching/',
  'https://askia.tech/career-readiness-index/',
  // Resource hub pages (GEO-optimized)
  'https://askia.tech/resources/',
  'https://askia.tech/resources/ats/',
  'https://askia.tech/resources/resume/',
  'https://askia.tech/resources/linkedin/',
  'https://askia.tech/resources/interview-prep/',
  'https://askia.tech/resources/salary-negotiation/',
  'https://askia.tech/resources/cover-letters/',
  'https://askia.tech/resources/software-engineer/',
  'https://askia.tech/resources/devops-sre/',
  'https://askia.tech/resources/data/',
  'https://askia.tech/resources/product-manager/',
  'https://askia.tech/resources/engineering-manager/',
  'https://askia.tech/resources/finance-fpa/'
];

async function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: SITE_HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`Success: ${urls.length} URL(s) submitted to IndexNow`);
          resolve({ success: true, statusCode: res.statusCode });
        } else {
          console.error(`IndexNow returned status ${res.statusCode}: ${data}`);
          resolve({ success: false, statusCode: res.statusCode, error: data });
        }
      });
    });

    req.on('error', (error) => {
      console.error('IndexNow submission failed:', error.message);
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  const args = process.argv.slice(2);
  const urls = args.length > 0 ? args : DEFAULT_URLS;

  console.log(`Submitting ${urls.length} URL(s) to IndexNow...`);
  urls.forEach(url => console.log(`  - ${url}`));

  try {
    await submitToIndexNow(urls);
  } catch (error) {
    process.exit(1);
  }
}

main();
