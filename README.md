# Basic Blog

A minimal Next.js (App Router) Markdown blog template.

- Posts live in `_posts/` as `.md` files with YAML frontmatter
- Drafts are co-located using `draft_` filename prefix and are hidden in production
- Static generation with simple `remark` → HTML pipeline

## Quick start

1. Copy `_basic-blog-template/` to a new project directory.
2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Build and run production:

```bash
npm run build
npm start
```

## Customize

- Branding: edit `src/lib/constants.ts` and `src/app/layout.tsx`
- Posts: add Markdown files under `_posts/`
- Drafts: prefix filename with `draft_` to preview only in development
- Images: put under `public/assets/blog/<slug>/` and reference with `/assets/blog/...`
