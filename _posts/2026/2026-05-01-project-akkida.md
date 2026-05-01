---
layout: project
tags: [project]
image: /projects/akkida/hero.png
title: 아끼다 — 20대가 놓치고 있는 혜택을 영수증으로 정리하는 서비스
author: minhyeong.jang
date: 2026-05-01 18:00
published: true
---

20대에게 맞는 혜택 정보는 넘쳐나는데, 정작 "내가 받을 수 있는 혜택"을 한눈에 보기는 어렵다.

카드 캐시백, 청년 지원금, 대학생 할인, 군인 혜택 등 조건만 맞으면 바로 쓸 수 있는 혜택들을 영수증 스타일로 큐레이션하는 서비스를 만들었다.

## 핵심 컨셉

**"몰랐던 혜택, 3초 만에 발견"** — 복잡한 조건 설명 대신, 각 혜택의 핵심 금액과 실행 방법을 영수증처럼 한눈에 보여준다.

디자인 컨셉은 레트로 영수증이다. 크림 배경에 코랄/라임 액센트, 지그재그 모서리, 바코드까지 — 편의점에서 받은 영수증을 들여다보는 느낌으로 정보를 전달한다.

## 기술 스택

- **Framework**: Next.js 16 (App Router, Static Export)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Content**: MDX + gray-matter (DB 없이 파일 기반)
- **Monorepo**: Turborepo + pnpm
- **Analytics**: PostHog (page_view only) + GA4
- **SEO**: JSON-LD (Article, WebSite, ItemList), sitemap, OG meta
- **Deploy**: Vercel

## 아키텍처

`Turborepo` 모노레포 구조로 콘텐츠와 웹앱을 분리했다.

- `apps/web` — Next.js 앱 (홈, 팁 상세, 카테고리 필터)
- `packages/content` — MDX 기반 콘텐츠 + 타입 정의
- `tooling/tailwind` — 영수증 디자인 시스템 (토큰, 프리미티브)

콘텐츠는 MDX 파일의 frontmatter로 메타데이터(금액, 카테고리, 출처, 태그)를 관리하고, `gray-matter`로 파싱하여 정적 페이지를 생성한다. DB 없이 Git만으로 콘텐츠를 버전 관리한다.

## 디자인 시스템

<img src="{{ site.image_url }}/projects/akkida/hero.png" alt="아끼다 메인 화면" style="width: 100%;" />

Claude Design으로 초기 컴포넌트를 설계하고, 영수증 프리미티브를 직접 구현했다.

- **Receipt** — 지그재그 상하단 모서리 + 대시 구분선
- **Barcode** — 시드 문자열 기반 CSS 바코드 생성
- **LiveSignal** — "지금 N명이 보고 있어" 실시간 시그널
- **SavingsCounter** — requestAnimationFrame 기반 카운트업 애니메이션

색상은 크림(`#FAF6F1`) 배경에 코랄(`#E8573D`) 강조, 라임(`#D4E84F`) 하이라이트를 사용하며, 폰트는 Pretendard(본문) + Archivo(디스플레이) + JetBrains Mono(수치)를 조합했다.

## 콘텐츠 운영

콘텐츠는 리서치 가이드에 따라 수집하고 팩트체크 후 게시한다.

**수집 소스**: 뽐뿌 재테크포럼, DC 신카갤, 카드고릴라, 뱅크샐러드, 에브리타임, 각 서비스 공식 사이트

**스크리닝 기준**:
1. 발견의 놀라움 — "이런 것도 있었어?" 반응
2. 즉시 실행 가능 — 3단계 이내로 혜택 수령
3. 체감 금액 — 최소 월 5,000원 이상

**카테고리**: 카드, 구독, 교통, 생활, 무료, 대학생, 군인 (7개)

현재 16개 팁을 운영 중이며, 매월 카드 캐시백 이벤트와 시즌 혜택을 갱신한다.

## SEO와 AI 수집 최적화

검색엔진과 AI(ChatGPT, Perplexity, Google AI Overview)가 콘텐츠를 잘 수집할 수 있도록 구조화했다.

- 각 팁 페이지에 `Article` JSON-LD (image, author, keywords, inLanguage)
- 홈페이지에 `WebSite` + `ItemList` 스키마 (전체 팁 목록)
- Google Search Console + Naver 서치어드바이저 등록
- `sitemap.xml` + `robots.txt` 자동 생성

## 결과

[akkida.doriri.dev](https://akkida.doriri.dev)

MDX 파일 기반 정적 생성으로 DB 없이 운영하며, 콘텐츠 추가는 MDX 파일 하나만 작성하면 빌드 시 자동으로 페이지가 생성된다. Vercel에 배포하여 한국 사용자에게 빠른 응답 속도를 제공한다.
