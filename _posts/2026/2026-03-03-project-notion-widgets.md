---
layout: project
tags: [project]
image: /projects/notion-widgets/hero.png
title: Notion Widgets — 가입 없이 URL 하나로 완성하는 위젯 서비스
author: minhyeong.jang
date: 2026-03-03 18:00
published: true
---

Notion을 사용하면서 대시보드에 시계나 진행률 같은 위젯을 넣고 싶었는데, 기존 서비스들은 가입을 요구하거나 커스터마이징이 제한적이었다.

가입 없이 URL 쿼리 파라미터만으로 위젯을 커스터마이즈하고, Notion에 바로 임베드할 수 있는 서비스를 직접 만들기로 했다.

## 핵심 컨셉

**"URL = Single Source of Truth"** — 모든 위젯 설정이 URL 쿼리 파라미터에 저장된다. 별도의 가입이나 DB 저장 없이 URL 하나만 공유하면 누구든 같은 위젯을 볼 수 있다.

사용 흐름은 단순하다:

1. 갤러리에서 위젯을 고른다
2. 색상, 언어, 표시 옵션을 커스터마이즈한다
3. 생성된 URL을 Notion의 `/embed` 블록에 붙여넣는다

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm
- **Deploy**: Vercel (한국 리전)
- **i18n**: 딕셔너리 패턴 (ko/en)

## 아키텍처

`Turborepo` 모노레포로 패키지를 분리하여 관리한다.

- `apps/web` — Next.js 앱 (랜딩, 갤러리, 커스터마이저, 임베드)
- `packages/widget-core` — 위젯 타입, 레지스트리, 파라미터 파싱, 공용 프리셋
- `packages/widgets` — 개별 위젯 구현체 (6종)

위젯 추가 시 `registerWidget()`으로 등록하면 갤러리, 커스터마이저, 임베드 라우트가 자동 생성된다.

## 위젯 갤러리

<img src="{{ site.image_url }}/projects/notion-widgets/gallery.png" alt="위젯 갤러리" style="width: 100%;" />

현재 6종의 위젯을 제공한다.

- **플립 시계** — 레트로 감성의 플립 스타일 시계
- **라이프 프로그레스** — 연도, 월, 분기, 사용자 목표의 진행률
- **D-Day 카운트다운** — 목표 날짜까지 남은 일수
- **아날로그 시계** — 클래식 아날로그 시계
- **포모도로 타이머** — 집중/휴식 타이머
- **오늘의 명언** — 매일 바뀌는 명언

카테고리 필터(시간, 생산성, 라이프스타일, 유틸리티)로 원하는 위젯을 빠르게 찾을 수 있다.

## 커스터마이저

<img src="{{ site.image_url }}/projects/notion-widgets/customizer.png" alt="커스터마이저" style="width: 100%;" />

좌측 패널에서 색상, 언어, 시간 형식 등을 변경하면 우측의 실시간 미리보기에 즉시 반영된다.

컨트롤은 위젯별로 다르게 구성되며, `color`, `select`, `toggle`, `date`, `text` 등 6종의 컨트롤 타입을 지원한다.

언어와 날짜 형식은 공용 프리셋(`widget-core/presets.ts`)으로 관리하여 7개 언어(한국어, English, 日本語, 中文, Deutsch, Français, Español)를 모든 위젯에서 일관되게 지원한다.

하단의 임베드 URL을 복사해 Notion에 붙여넣으면 끝이다.

## i18n과 SEO

한국어/영어 2개 언어를 딕셔너리 패턴으로 지원한다. 외부 라이브러리 없이 `Dictionary` 타입과 `getDictionary()` 함수만으로 구현했다.

SEO는 `sitemap.xml`(hreflang), `robots.txt`, OG 메타태그, JSON-LD를 포함하며 각 라우트별로 `next/og` ImageResponse를 활용한 동적 OG 이미지를 생성한다.

## 수익 모델

**"기능은 무료, 미학은 유료"** — 모든 위젯 기능은 무료로 제공하고, 워터마크 제거와 프리미엄 테마/폰트를 Pro(일회성 결제)로 제공할 예정이다.

## 결과

[widgets.doriri.dev](https://widgets.doriri.dev)

`Turborepo` 모노레포 + `Next.js 16` 정적 생성으로 28개 페이지를 빌드하며, `Vercel` 한국 리전에 배포하여 국내 사용자에게 빠른 응답 속도를 제공한다.

현재 Phase 0(제품화)이 완료된 상태이며, 위젯 추가와 기능 개선을 진행 중이다.
