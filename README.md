# Jarrod's Warhammer Blog

My personal Warhammer hobby journal, built with Astro.

Live site: https://warhammer.jarrodscherer.au

## Running locally

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```

Draft posts appear during development but are excluded from production builds.

## Writing a post

Create a Markdown file under `src/content/posts/`.

Copy [POST_TEMPLATE.md](POST_TEMPLATE.md) as a starting point, rename the copy,
and fill in the title, date, description, and post text.

Posts can be organised into year and month folders:

```text
src/content/posts/2026/October/my-post.md
```

Start with this frontmatter, then write the post beneath it:

```yaml
---
title: "My post title"
date: 2026-10-23
description: "A short summary for the homepage and page metadata."
tags:
  - Painting
draft: true
---
```

To add a cover, include these fields in the frontmatter:

```yaml
cover: "https://images.jarrodscherer.au/path/to/cover.webp"
coverAlt: "A description of what the photo shows."
coverWidth: 1600
coverHeight: 1000
```

Use the image's actual pixel dimensions. Cover images are optional.

Images are hosted in the Cloudflare R2 bucket `blog-images`.

## Publishing

1. Preview the post locally.
2. Change `draft` to `false` when ready.
3. Run `npm run build` and check the production preview.
4. Commit and push to `main`.

GitHub Actions builds and deploys the website after each push to `main`.

Moving or renaming a published Markdown file changes its URL unless
it has a fixed `slug` in its frontmatter.
