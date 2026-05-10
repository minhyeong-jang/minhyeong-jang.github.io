---
title: "Jekyll에서 Astro로 — 7년 된 블로그를 마이그레이션한 이야기"
date: 2026-05-10 21:00
tags: ["develop", "dev-etc"]
image: /covers/jekyll.png
published: true
---

2019년부터 Jekyll + GitHub Pages로 운영하던 블로그를 Astro로 마이그레이션했다. 왜, 어떻게 옮겼는지 정리한다.

## 왜 옮겼나

Jekyll은 충분히 좋은 도구였다. 서버 비용 없이 GitHub Pages로 바로 배포되고, 카카오 기술 블로그를 참고해 구축한 덕분에 큰 불편 없이 7년간 썼다.

그런데 시간이 지나면서 불편한 점이 쌓였다.

- **페이지네이션 플러그인 실패** — `jekyll-paginate`가 카테고리별 페이지네이션을 지원하지 않아서 결국 포기
- **Ruby 버전 호환성** — Ruby 3.2에서 `tainted?` 메서드가 삭제되면서 Gemfile에 monkey-patch를 넣어야 했다
- **npm 패키지 사용 불가** — 프론트엔드 개발자인데 npm 생태계를 전혀 활용하지 못하는 구조
- **디자인 한계** — Liquid 템플릿 + SCSS로 원하는 디자인을 구현하는 데 시간이 너무 많이 걸림

## 기존 Jekyll 블로그

![Jekyll 홈 — 포트폴리오 페이지](/posts/2026/jekyll-home.png)

![Jekyll 블로그 목록 — 카드 레이아웃](/posts/2026/jekyll-blog-list.png)

나름 Tailwind를 끌어와서 홈 페이지를 리디자인하기도 했지만, Jekyll 위에서 계속 개선하는 건 한계가 있었다.

## 왜 Astro인가

Next.js, Gatsby, Astro를 비교했다.

- **Next.js** — 익숙하지만 블로그치곤 무거움. SSR이 필요 없는 정적 사이트에 오버킬
- **Gatsby** — 한때 써봤지만 요즘은 관리가 잘 안 되는 느낌
- **Astro** — 정적 사이트 특화. Markdown 네이티브 지원, 필요할 때만 React 컴포넌트 사용 가능

Astro를 선택한 결정적 이유:

1. **Markdown 글 그대로 가져올 수 있다** — frontmatter 정리만 하면 끝
2. **npm 패키지 자유롭게 사용** — React, Tailwind, Shiki 등 원하는 도구를 다 쓸 수 있다
3. **GitHub Pages 배포 유지** — 서버 비용 여전히 0원
4. **아일랜드 아키텍처** — 기본은 정적 HTML, 인터랙션 필요한 곳만 React hydration

## 마이그레이션 과정

### 콘텐츠

Jekyll의 `_posts/YYYY-MM-DD-slug.md` 파일들을 Astro Content Collections로 옮겼다. frontmatter에서 `layout`, `author` 필드를 제거하고 `tags`를 배열로 정리하는 스크립트를 작성해서 67개 포스트 + 6개 프로젝트를 일괄 변환했다.

### URL 보존

기존 URL 형식 `/:year/:month/:day/:title`을 그대로 유지하는 게 중요했다. Astro의 `[...slug].astro` rest params로 동일한 URL 패턴을 생성하도록 `getStaticPaths`를 구성했다.

### 디자인

Claude Design으로 developer-minimal 테마를 설계하고, 디자인 핸드오프 문서(HTML 프로토타입 + CSS 토큰 + 인터랙션 명세)를 기반으로 구현했다. 다크모드, 반응형, 코드 하이라이팅까지 포함.

### 새로 추가된 것들

- **타임라인 블로그 목록** — 연도별 그룹 + 태그 필터 + 페이지네이션
- **TOC scroll-spy** — 글 상세에서 현재 읽는 위치를 사이드바에 표시
- **Reading progress bar** — 상단 프로그레스 바
- **프로젝트 모음 페이지** — `/projects`
- **Shiki 코드 하이라이팅** — 라이트/다크 듀얼 테마
- **RSS 피드** — `/feed.xml`

## 기술 스택

- **Framework**: Astro 6
- **UI**: React 19 (아일랜드 컴포넌트)
- **Styling**: Tailwind CSS 4 + CSS 변수 디자인 토큰
- **Code**: Shiki (github-light / github-dark)
- **Deploy**: GitHub Actions → GitHub Pages

## 결과

89개 페이지를 2.6초 만에 빌드. 기존 URL 전부 보존. 서버 비용 여전히 0원.

7년간 써온 Jekyll에 감사하면서, 앞으로는 Astro 위에서 더 자유롭게 블로그를 발전시킬 예정이다.
