# Blog Audit Wave 1

This is the first execution batch from the full audit. The goal is to improve site quality quickly by:

- pruning the weakest inventory first
- consolidating duplicate intent into stronger canonicals
- rewriting a small set of high-potential pages

## Recommended order

1. Prune the obvious low-value batch pages with numeric slugs and repeated Houston variants.
2. Merge templated core-topic posts into stronger canonical pages.
3. Rewrite a small number of evergreen pages that could become real authority assets.

## Rewrite now

- [src/blog/behavioral-signal/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/behavioral-signal/index.md)
  Action: rewrite into a real flagship guide for behavioral interviews in technical roles.
  Why: strong topic, decent title intent, but generic body and repeated scaffold.

- [src/blog/technical-screen/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/technical-screen/index.md)
  Action: rewrite into a concrete guide for passing technical screens for DevOps/SRE/software roles.
  Why: clear search intent and useful angle, but current body is generic.

- [src/blog/90-day-tech-job-system/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/90-day-tech-job-system/index.md)
  Action: rewrite as a cornerstone job-search operating system page.
  Why: strong branded evergreen concept with conversion potential.

- [src/blog/manager-vs-staff/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/manager-vs-staff/index.md)
  Action: rewrite around the actual comparison query, not generic coaching advice.
  Why: strong topic, current article does not answer its own title.

- [src/blog/hidden-tech-job-market/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/hidden-tech-job-market/index.md)
  Action: rewrite into an opinionated, evidence-backed piece on off-market hiring.
  Why: good audience fit and conversion potential, but likely too templated today.

## Merge into stronger canonical pages

- [src/blog/a-practical-guide-to-behavioral-interviews-for-senior-roles-for-devops-sre/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/a-practical-guide-to-behavioral-interviews-for-senior-roles-for-devops-sre/index.md)
  Action: merge into `behavioral-signal`.
  Why: same intent family, weaker title, templated execution.

- [src/blog/a-step-by-step-guide-to-recruiter-screens-for-fast-offer-cycles-for-devops-sre/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/a-step-by-step-guide-to-recruiter-screens-for-fast-offer-cycles-for-devops-sre/index.md)
  Action: merge into `technical-screen` or a future recruiter-screen canonical.
  Why: narrow variant of a broader interview-prep topic.

- [src/blog/a-step-by-step-guide-to-recruiter-screens-for-senior-roles-for-devops-sre/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/a-step-by-step-guide-to-recruiter-screens-for-senior-roles-for-devops-sre/index.md)
  Action: merge into the same recruiter-screen/technical-screen canonical.
  Why: overlapping intent with only slight modifier changes.

- [src/blog/checklist-for-job-search-strategy-for-competitive-markets-for-devops-sre/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/checklist-for-job-search-strategy-for-competitive-markets-for-devops-sre/index.md)
  Action: merge into `90-day-tech-job-system`.
  Why: same funnel stage, weaker format, lower standalone value.

- [src/blog/a-practical-guide-to-resume-clarity-for-devops-sre-in-fast-offer-cycles/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/a-practical-guide-to-resume-clarity-for-devops-sre-in-fast-offer-cycles/index.md)
  Action: merge into a future resume canonical or hold until one exists.
  Why: niche relevance is decent, but current page is too templated to stand alone.

## Prune first

- [src/blog/behavioral-interviews-86/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/behavioral-interviews-86/index.md)
  Action: prune or redirect to the rewritten `behavioral-signal`.
  Why: numeric slug, duplicate intent, templated content.

- [src/blog/hidden-market-20/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/hidden-market-20/index.md)
  Action: prune or redirect to `hidden-tech-job-market`.
  Why: disposable numeric variant.

- [src/blog/hidden-market-50/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/hidden-market-50/index.md)
  Action: prune or redirect to `hidden-tech-job-market`.
  Why: disposable numeric variant.

- [src/blog/houston-career-coaching-04/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-career-coaching-04/index.md)
  Action: prune.
  Why: repetitive local batch page, weak topic fit, very low unique value.

- [src/blog/houston-career-coaching-52/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-career-coaching-52/index.md)
  Action: prune.
  Why: same problem as the rest of the Houston batch.

- [src/blog/houston-interview-preparation-100/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-interview-preparation-100/index.md)
  Action: prune.
  Why: repetitive local batch page with duplicate intent.

- [src/blog/houston-interview-preparation-44/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-interview-preparation-44/index.md)
  Action: prune.
  Why: repetitive local batch page with duplicate intent.

- [src/blog/houston-job-search-strategy-24/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-job-search-strategy-24/index.md)
  Action: prune.
  Why: local batch page with low standalone value.

- [src/blog/houston-job-search-strategy-68/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-job-search-strategy-68/index.md)
  Action: prune.
  Why: local batch page with duplicate intent and templated execution.

- [src/blog/houston-offer-strategy-27/index.md](/Users/stevengoumnai/Desktop/Repositories/askia-site/src/blog/houston-offer-strategy-27/index.md)
  Action: prune.
  Why: local batch page with weak differentiation.

## Notes

- The city guide pages like `career-coaching-in-<city>-guide` scored as rewrite candidates, but they should not be the first rewrite wave. They are lower priority than the core evergreen technical pages.
- For merge actions, the right implementation path is usually:
  1. pick a canonical winner
  2. move any salvageable ideas into the canonical
  3. redirect the weaker page
- For prune actions, if a page has no meaningful backlinks or traffic, deletion is cleaner than preserving thin inventory.
