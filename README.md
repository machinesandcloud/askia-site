# Askia Website

Static site built with Eleventy + Decap CMS (visual editor).

## Local development

```bash
npm install
npm run dev
```

## Deploy (Netlify + GitHub)

1. Create a GitHub repo (e.g., `askia-site`) and push this folder.
2. In Netlify, **New site from Git** → connect the repo.
   - Build command: `npm run build`
   - Publish directory: `_site`
3. In Netlify, enable **Identity** and **Git Gateway**.
4. Update `admin/config.yml`:
   - `repo: your-org/askia-site` → your GitHub org/user and repo name.
5. Visit `https://your-netlify-site.netlify.app/admin/` to edit content.

## Domain (GoDaddy)

Point `askia.tech` to Netlify:
- In Netlify → Domain settings → Add custom domain `askia.tech`.
- Netlify will provide DNS records.
- In GoDaddy, update DNS with the records Netlify provides.

## Content editing

All copy and data lives in `src/_data/*.yml` and is editable via the CMS.

## Notes

- Replace testimonial photos in `src/assets/testimonials/` as needed.
- Logos live in `src/assets/logos/`.
- Update the CTA link in `src/_data/site.yml` (and other files if needed).
