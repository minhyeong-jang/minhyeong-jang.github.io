# Jekyll → Astro Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate the existing Jekyll blog to Astro with a new developer-minimal design, preserving all 80+ posts and their URLs.

**Architecture:** Astro static site with Content Collections for posts/projects, React islands for interactive components (ThemeToggle, TOC scroll-spy), Tailwind CSS with custom CSS variables for the design token system. GitHub Pages deployment with existing URL structure (`/:year/:month/:day/:title`).

**Tech Stack:** Astro 5, React 19, Tailwind CSS 4, TypeScript, Shiki (code highlighting), GitHub Actions (deploy)

**Design Reference:** `/Users/doriri/Documents/design_handoff_doriri_blog/` — all CSS tokens, markup, and interactions are defined there.

---

## Phase 1: Project Scaffolding

### Task 1: Initialize Astro project

**Files:**
- Create: `astro-blog/package.json`
- Create: `astro-blog/astro.config.mjs`
- Create: `astro-blog/tsconfig.json`
- Create: `astro-blog/tailwind.config.mjs`

**Step 1: Create Astro project in a new directory**

```bash
cd /Users/doriri/Documents/private/minhyeong-jang.github.io
mkdir astro-blog && cd astro-blog
npm create astro@latest . -- --template minimal --no-install --typescript strict
```

**Step 2: Install dependencies**

```bash
npm install astro @astrojs/react @astrojs/tailwind @astrojs/sitemap react react-dom
npm install -D typescript @types/react @types/react-dom tailwindcss
```

**Step 3: Configure astro.config.mjs**

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://minhyeong-jang.github.io',
  integrations: [react(), tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
```

**Step 4: Configure tailwind.config.mjs**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
```

**Step 5: Verify project builds**

```bash
npx astro build
```
Expected: Build succeeds with empty site.

**Step 6: Commit**

```bash
git add astro-blog/
git commit -m "feat: initialize Astro project with React, Tailwind, Sitemap"
```

---

### Task 2: Set up design tokens and global styles

**Files:**
- Create: `astro-blog/src/styles/global.css`
- Modify: `astro-blog/src/layouts/BaseLayout.astro` (create)

**Step 1: Create global.css with all design tokens**

Copy ALL CSS variables and base styles from `design_handoff_doriri_blog/Doriri Blog.html` `<style>` block (lines 14–560). This includes:
- `:root` light tokens
- `html[data-theme="dark"]` dark tokens
- `html[data-density="compact"]` density tokens
- Base element styles (body, selection, etc.)
- All component styles (nav, hero, experience, project cards, blog list, blog post, project detail, footer)

The entire `<style>` content from the HTML file goes into `global.css`, prepended with Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ───────── tokens ───────── */
:root {
  --font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  /* ... all tokens from Doriri Blog.html ... */
}
/* ... rest of styles ... */
```

**Step 2: Create BaseLayout.astro**

```astro
---
interface Props {
  title?: string;
  description?: string;
}
const { title = "Doriri Blog", description = "프로덕트 개발자 장민형의 기술 블로그" } = Astro.props;
---
<!DOCTYPE html>
<html lang="ko" data-theme="light" data-density="compact">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
  <!-- FOUC prevention: apply theme before paint -->
  <script is:inline>
    (function() {
      const t = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>
</head>
<body>
  <div class="app">
    <slot name="nav" />
    <div class="page-wrap">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</body>
</html>
```

**Step 3: Import global.css in layout**

Add at top of BaseLayout.astro frontmatter:
```astro
---
import '../styles/global.css';
---
```

**Step 4: Commit**

```bash
git add astro-blog/src/
git commit -m "feat: add design tokens and base layout with font loading"
```

---

### Task 3: Build Nav and Footer components

**Files:**
- Create: `astro-blog/src/components/Nav.astro`
- Create: `astro-blog/src/components/Footer.astro`
- Create: `astro-blog/src/components/ThemeToggle.tsx` (React island)

**Step 1: Create Nav.astro**

Reference: `design_handoff/nav.jsx` for markup and class names.

```astro
---
const pathname = Astro.url.pathname;
const isBlog = pathname.startsWith('/posts') || pathname.match(/^\/\d{4}\//);
const isHome = pathname === '/';

const items = [
  { id: 'home', label: 'Home', path: '~/', href: '/' },
  { id: 'blog', label: 'Blog', path: '~/posts', href: '/posts' },
];
---
<header class="nav">
  <div class="nav-inner">
    <a class="nav-brand" href="/">
      <span class="nav-brand-mark">$</span>
      <span class="nav-brand-name">doriri.dev</span>
      <span class="nav-brand-cursor"></span>
    </a>
    <nav class="nav-items">
      {items.map(it => (
        <a
          class={`nav-item${(it.id === 'home' && isHome) || (it.id === 'blog' && isBlog) ? ' is-current' : ''}`}
          href={it.href}
        >
          <span class="nav-item-mono">{it.path}</span>
          <span class="nav-item-label">{it.label}</span>
        </a>
      ))}
      <ThemeToggle client:idle />
    </nav>
  </div>
</header>
```

**Step 2: Create ThemeToggle.tsx**

```tsx
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button className="nav-theme" onClick={toggle} aria-label="toggle theme">
      <span className="nav-theme-mono">{dark ? '[dark]' : '[light]'}</span>
    </button>
  );
}
```

**Step 3: Create Footer.astro**

Reference: README section 6.1.

```astro
---
const year = new Date().getFullYear();
---
<footer class="footer">
  <div class="footer-inner">
    <div>
      <div class="footer-mono">// footer.tsx</div>
      <div class="footer-name">장민형</div>
      <div class="footer-line">&copy; 2016—{year} · built with Astro + Tailwind</div>
    </div>
    <div class="footer-col-end">
      <div class="footer-links">
        <a href="https://github.com/minhyeong-jang">github</a>
        <a href="/feed.xml">rss</a>
        <a href="mailto:public.doriri@gmail.com">email</a>
      </div>
    </div>
  </div>
</footer>
```

**Step 4: Commit**

```bash
git add astro-blog/src/components/
git commit -m "feat: add Nav, Footer, ThemeToggle components"
```

---

## Phase 2: Content Collections & Data

### Task 4: Set up Content Collections for posts

**Files:**
- Create: `astro-blog/src/content/config.ts`
- Create: `astro-blog/src/content/posts/` (migrate all 80+ posts)

**Step 1: Define content schema**

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    published: z.boolean().default(true),
    layout: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts, projects };
```

**Step 2: Write migration script**

Create a Node script that:
1. Reads all `_posts/**/*.md` files
2. Parses frontmatter
3. Extracts the slug from filename (format: `YYYY-MM-DD-title.md`)
4. Copies to `src/content/posts/{slug}.md` with cleaned frontmatter
5. Filters out drafts (files starting with `0000-00-00`)
6. Separates project posts (layout: project) into `src/content/projects/`

```bash
# Script: astro-blog/scripts/migrate-posts.mjs
node scripts/migrate-posts.mjs
```

The script should:
- Keep markdown body intact
- Map old tags to new categories (develop/javascript → JavaScript, etc.)
- Preserve dates
- Skip unpublished posts (0000-00-00 prefix)

**Step 3: Run migration and verify**

```bash
node scripts/migrate-posts.mjs
ls src/content/posts/ | wc -l  # Should be ~75+
ls src/content/projects/ | wc -l  # Should be ~5+
```

**Step 4: Commit**

```bash
git add astro-blog/src/content/ astro-blog/scripts/
git commit -m "feat: migrate Jekyll posts to Astro Content Collections"
```

---

### Task 5: Set up static data (profile, experience)

**Files:**
- Create: `astro-blog/src/data/profile.ts`
- Create: `astro-blog/src/data/experience.ts`
- Create: `astro-blog/src/data/projects.ts`

**Step 1: Create profile.ts**

Use REAL data from the existing `index.md` (not the dummy data in `data.jsx`):

```ts
export const profile = {
  name: "장민형",
  tagline: "프로덕트 개발자",
  handle: "@minhyeong",
  email: "public.doriri@gmail.com",
  github: "github.com/minhyeong-jang",
  location: "Seoul, KR",
  since: 2015,
  bio: [
    "프로덕트를 개발하면서 기획부터 QA까지 함께 참여하고 문제를 해결하는 팀 문화를 선호하고 있습니다.",
    "오너십을 가지고 문제나 개선사항을 스스로 제시하고 개선하는 분들과 함께 일하고 싶습니다.",
    "회사의 성장에 보람을 느끼며 팀원들과 함께 나아가려고 합니다.",
  ],
};
```

**Step 2: Create experience.ts**

Use REAL data from existing `index.md` — 7 companies (캐노피, 무신사, 스타일쉐어, 두나무, 플레이오토, 후퍼소프트, 아키텍트그룹) with their actual bullets and stacks.

**Step 3: Create projects.ts**

Use REAL data from existing `index.md` — both Side Projects and Freelance sections. Include `hasDetail: true` for projects that have corresponding posts in `src/content/projects/`.

**Step 4: Commit**

```bash
git add astro-blog/src/data/
git commit -m "feat: add profile, experience, and projects data"
```

---

## Phase 3: Page Implementation

### Task 6: Home page

**Files:**
- Create: `astro-blog/src/pages/index.astro`
- Create: `astro-blog/src/components/home/Hero.astro`
- Create: `astro-blog/src/components/home/ExperienceItem.astro`
- Create: `astro-blog/src/components/home/ProjectCard.astro`
- Create: `astro-blog/src/components/Tag.astro`

**Step 1: Create reusable Tag component**

```astro
---
interface Props { children: string }
---
<span class="tag">#{Astro.props.children}</span>
```

Wait — Astro doesn't have `children` like that. Use slot:

```astro
<span class="tag">#<slot /></span>
```

**Step 2: Create Hero, ExperienceItem, ProjectCard components**

Follow the exact markup from `design_handoff/home.jsx`. Use the class names directly — they map to the CSS in `global.css`.

**Step 3: Create index.astro**

Assemble all components. Import data from `src/data/`. Use `page-home` class for wide layout.

**Step 4: Verify home page renders**

```bash
npx astro dev
# Open http://localhost:4321
```

**Step 5: Commit**

```bash
git add astro-blog/src/pages/index.astro astro-blog/src/components/
git commit -m "feat: implement home page with hero, experience, projects"
```

---

### Task 7: Blog list page with pagination and tag filtering

**Files:**
- Create: `astro-blog/src/pages/posts/index.astro`
- Create: `astro-blog/src/pages/posts/page/[page].astro`
- Create: `astro-blog/src/pages/posts/tag/[tag]/index.astro`
- Create: `astro-blog/src/pages/posts/tag/[tag]/[page].astro`
- Create: `astro-blog/src/components/blog/PostRow.astro`
- Create: `astro-blog/src/components/blog/Pager.astro`
- Create: `astro-blog/src/components/blog/FeaturedPost.astro`
- Create: `astro-blog/src/components/blog/TagChips.astro`

**Step 1: Implement static pagination with getStaticPaths**

Since this is a static site, tag filtering and pagination must be build-time generated:
- `/posts` → page 1, no tag filter
- `/posts/page/2` → page 2, no tag filter
- `/posts/tag/react` → page 1, react filter
- `/posts/tag/react/2` → page 2, react filter

Each page uses `getStaticPaths` to enumerate all combinations.

PER_PAGE = 15.

**Step 2: Create PostRow component**

Follow the `timeline` list style (default from design): year groups on the left, posts on the right.

**Step 3: Create TagChips, Pager, FeaturedPost**

- TagChips: render category pills with counts. Active chip links to `/posts/tag/{tag}`, "all" links to `/posts`.
- Pager: generate links to `/posts/page/{n}` (or `/posts/tag/{tag}/{n}`).
- FeaturedPost: show on page 1 with no tag filter. Latest post with gradient card.

**Step 4: Verify blog list works**

```bash
npx astro dev
# Navigate to /posts, click tags, click pages
```

**Step 5: Commit**

```bash
git add astro-blog/src/pages/posts/ astro-blog/src/components/blog/
git commit -m "feat: implement blog list with timeline, tag filter, pagination"
```

---

### Task 8: Blog post page with TOC and reading progress

**Files:**
- Create: `astro-blog/src/pages/[...slug].astro` (for `/:year/:month/:day/:title` URLs)
- Create: `astro-blog/src/components/post/TableOfContents.tsx` (React island)
- Create: `astro-blog/src/components/post/ReadingProgress.tsx` (React island)
- Create: `astro-blog/src/components/post/PostNav.astro`

**Step 1: Set up dynamic route for old URL structure**

The old permalink format is `/:year/:month/:day/:title`. Use Astro's rest params:

```astro
---
// src/pages/[...slug].astro
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => data.published !== false);
  return posts.map(post => {
    // post.slug is "2019-12-23-js-prototype"
    // We need URL: /2019/12/23/js-prototype
    const [y, m, d, ...rest] = post.slug.split('-');
    const titleSlug = rest.join('-');
    return {
      params: { slug: `${y}/${m}/${d}/${titleSlug}` },
      props: { post },
    };
  });
}
---
```

**Step 2: Create TableOfContents.tsx (React island)**

- Extract headings from Astro's `post.render()` result (provides `headings` array)
- Pass headings as props to the React component
- IntersectionObserver scroll-spy: `rootMargin: "-80px 0px -60% 0px"`
- Click → smooth scroll
- Left border highlight for active heading

**Step 3: Create ReadingProgress.tsx**

- Fixed top bar, 2px height, accent green
- `scaleX(0→1)` based on scroll position relative to article element
- Use `transform-origin: left`

**Step 4: Create PostNav.astro (prev/next)**

- Sort posts by date descending
- Find current index, link to adjacent posts
- Follow `post-nav-btn` markup from design

**Step 5: Assemble the post page**

Layout: grid `minmax(0, 760px) 220px` with 60px gap. TOC on right, sticky top 80px.

**Step 6: Verify post renders with correct URL**

```bash
npx astro dev
# Navigate to /2019/12/23/js-prototype — should render the post
```

**Step 7: Commit**

```bash
git add astro-blog/src/pages/\[...slug\].astro astro-blog/src/components/post/
git commit -m "feat: implement blog post page with TOC, reading progress, prev/next"
```

---

### Task 9: Project detail page

**Files:**
- Create: `astro-blog/src/pages/projects/[id].astro`

**Step 1: Create project detail page**

Use content from `src/content/projects/` collection. Follow the markup from `design_handoff/project-detail.jsx`:
- Back link
- Header with mono prefix, H1, summary
- Meta dl (period, role, stack)
- Screenshot placeholder (striped gradient + mono label)
- Body sections with numbered headings
- Footer back link

Also handle projects that link to posts (some projects use the old blog post URL format).

**Step 2: Verify**

```bash
npx astro dev
# Navigate to /projects/akkida or similar
```

**Step 3: Commit**

```bash
git add astro-blog/src/pages/projects/
git commit -m "feat: implement project detail page"
```

---

## Phase 4: Polish & Deploy

### Task 10: RSS feed and SEO

**Files:**
- Create: `astro-blog/src/pages/feed.xml.ts`
- Modify: `astro-blog/astro.config.mjs` (sitemap already configured)

**Step 1: Add RSS feed**

```bash
npm install @astrojs/rss
```

```ts
// src/pages/feed.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Doriri Blog',
    description: '프로덕트 개발자 장민형의 기술 블로그',
    site: context.site,
    items: posts
      .filter(p => p.data.published !== false)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(post => {
        const [y, m, d, ...rest] = post.slug.split('-');
        return {
          title: post.data.title,
          pubDate: post.data.date,
          link: `/${y}/${m}/${d}/${rest.join('-')}`,
        };
      }),
  });
}
```

**Step 2: Add OG meta tags to BaseLayout**

Add `og:title`, `og:description`, `og:type`, `og:url` to head.

**Step 3: Commit**

```bash
git add astro-blog/src/pages/feed.xml.ts
git commit -m "feat: add RSS feed and OG meta tags"
```

---

### Task 11: GitHub Pages deployment

**Files:**
- Create: `astro-blog/.github/workflows/deploy.yml`
- Modify: `astro-blog/astro.config.mjs`

**Step 1: Create GitHub Actions workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: astro-blog/package-lock.json
      - run: npm ci
        working-directory: astro-blog
      - run: npx astro build
        working-directory: astro-blog
      - uses: actions/upload-pages-artifact@v3
        with:
          path: astro-blog/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

**Step 2: Update astro.config for GitHub Pages output**

```js
export default defineConfig({
  site: 'https://minhyeong-jang.github.io',
  output: 'static',
  // ...
});
```

**Step 3: Commit**

```bash
git add astro-blog/.github/
git commit -m "feat: add GitHub Pages deployment workflow"
```

---

### Task 12: Responsive and dark mode verification

**Step 1: Test all pages at 720px and 980px breakpoints**

Verify:
- Home: experience grid collapses to single column at 720px
- Blog list: timeline year mark shrinks, card grid goes single column at 720px
- Blog post: TOC hides at 980px, grid becomes single column
- Project detail: meta grid collapses at 720px

**Step 2: Test dark mode on all pages**

Toggle theme, verify:
- All backgrounds use `--bg` variants
- Text colors switch properly
- Code blocks, cards, tags all update
- No FOUC on page reload

**Step 3: Fix any issues found**

**Step 4: Commit**

```bash
git commit -m "fix: responsive and dark mode adjustments"
```

---

### Task 13: Move Astro project to repo root

Once verified working, move the Astro project contents to the repo root, replacing the Jekyll files.

**Step 1: Back up old Jekyll files**

```bash
git checkout -b archive/jekyll-backup
git push origin archive/jekyll-backup
git checkout main
```

**Step 2: Remove Jekyll files, move Astro files to root**

Remove: `_posts/`, `_layouts/`, `_includes/`, `_config.yml`, `Gemfile`, `Gemfile.lock`, `assets/css/`, etc.
Move: `astro-blog/*` → repo root.

**Step 3: Verify build from root**

```bash
npm install
npx astro build
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: complete Jekyll to Astro migration"
```

---

## Summary

| Phase | Tasks | What it delivers |
|-------|-------|-----------------|
| 1. Scaffolding | 1–3 | Empty Astro project with tokens, Nav, Footer |
| 2. Content | 4–5 | All posts migrated, profile/experience data |
| 3. Pages | 6–9 | Home, Blog list, Blog post, Project detail |
| 4. Polish | 10–13 | RSS, SEO, deploy, responsive, final migration |

**Critical constraints:**
- URL format `/:year/:month/:day/:title` MUST be preserved for SEO
- Design token values from `Doriri Blog.html` are source of truth
- Use real data from existing `index.md`/`about.md`, not dummy `data.jsx` content
- `timeline` is the default blog list style
- `minimal` is the default project card style
- GitHub Pages deployment, no server costs
