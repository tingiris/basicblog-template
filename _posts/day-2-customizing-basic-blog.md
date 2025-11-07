---
title: "Customizing Basic Blog"
excerpt: "Change the name, theme, and routing—and learn the few conventions this template uses."
date: "2025-01-02T10:00:00.000Z"
author:
  name: Basic Blog
  picture: "/assets/blog/authors/author.svg"
---

Key areas to customize:

- Branding: change `CMS_NAME` in `src/lib/constants.ts`.
- Metadata: update `layout.tsx` export.
- Styling: extend `globals.css` or adjust Tailwind tokens.
- Drafts: prefix filenames with `draft_` to hide in production builds.
- Images: place under `public/assets/blog/<slug>/` and reference with `/assets/blog/<slug>/...`.

Publish a draft by removing the `draft_` prefix.
