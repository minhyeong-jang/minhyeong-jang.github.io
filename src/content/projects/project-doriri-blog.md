---
title: "Doriri Blog — Jekyll에서 Astro로, 9년간 운영한 개인 기술 블로그 마이그레이션"
date: 2017-12-05 11:27
tags: ["project"]
image: /posts/2026/jekyll-home.png
published: true
---

프론트엔드 개발자 장민형의 개인 기술 블로그. 2017년 Jekyll + GitHub Pages로 시작해 9년간 70개 이상의 글을 작성했고, 2026년 Astro 6으로 전면 마이그레이션했다.

## 블로그를 직접 만든 이유

Tistory에서 블로그를 운영하다가 커스텀의 한계를 느꼈다. WordPress, Jekyll, Gatsby, Next.js 등 여러 플랫폼을 직접 구축해보면서 비교한 결과, 서버 비용이 없고 마크다운으로 글을 쓸 수 있는 **Jekyll + GitHub Pages** 조합을 선택했다.

카카오 기술 블로그의 구조를 참고해 동작 방식을 파악한 뒤, 기능을 제외한 모든 코드를 제거하고 처음부터 직접 개발했다.

## Jekyll 시절 (2017–2026)

![Jekyll 포트폴리오 페이지 — Tailwind CSS를 끌어와 리디자인](/posts/2026/jekyll-home.png)

![Jekyll 블로그 목록 — 카드 레이아웃과 카테고리 사이드바](/posts/2026/jekyll-blog-list.png)

7년간 React, TypeScript, JavaScript, DevOps, 회고 등 다양한 주제로 글을 작성했다. 하지만 시간이 지나면서 기술적 한계가 드러났다.

- **페이지네이션**: `jekyll-paginate`가 카테고리별 페이지네이션을 지원하지 않아 구현을 포기
- **Ruby 호환성**: Ruby 3.2에서 삭제된 API 때문에 Gemfile에 monkey-patch 필요
- **npm 생태계 단절**: 프론트엔드 개발자임에도 npm 패키지를 전혀 활용할 수 없는 구조
- **디자인 제약**: Liquid 템플릿 + SCSS 조합으로 원하는 디자인을 만드는 데 과도한 시간 소요

## Astro로 마이그레이션 (2026)

Next.js, Gatsby, Astro를 비교 검토한 끝에 정적 사이트에 최적화된 **Astro 6**을 선택했다.

- Markdown/MDX 네이티브 지원으로 기존 글을 그대로 마이그레이션
- 아일랜드 아키텍처 — 기본은 정적 HTML, 인터랙션 필요한 곳만 React hydration
- npm 생태계 자유롭게 활용 (React, Tailwind, Shiki 등)
- GitHub Pages 배포 유지 — 서버 비용 0원

### 마이그레이션 결과

- 67개 포스트 + 6개 프로젝트를 Astro Content Collections로 이전
- 기존 URL `/:year/:month/:day/:title` 형식 완전 보존
- 다크모드, TOC scroll-spy, reading progress bar, 태그 필터, 페이지네이션 추가
- Shiki 듀얼 테마(github-light/dark) 코드 하이라이팅
- 90개 페이지를 2.6초 만에 정적 빌드

## 기술 스택

| 구분 | Before | After |
|------|--------|-------|
| Framework | Jekyll 3.9 | Astro 6 |
| UI | Liquid + SCSS | React 19 + Tailwind CSS 4 |
| Language | Ruby | TypeScript |
| Code Highlight | Prism.js | Shiki (듀얼 테마) |
| Deploy | GitHub Pages (Jekyll 자동) | GitHub Actions → GitHub Pages |
| 디자인 | 수동 SCSS | Claude Design 핸드오프 기반 구현 |

## 현재와 앞으로

현재 Claude Code를 활용해 블로그 운영을 AI 기반으로 자동화하고 있다. 글 작성, 프로젝트 정리, 디자인 개선, 코드 리뷰까지 AI와 협업하는 워크플로우를 구축 중이다.
