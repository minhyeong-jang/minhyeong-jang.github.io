---
title: "Notion Widgets — 가입 없이 URL 하나로 완성하는 위젯 서비스"
description: "Notion 대시보드에 가입 없이 30초 만에 위젯을 임베드하세요. URL 파라미터만으로 색상·테마·언어를 커스터마이즈하고 바로 공유할 수 있는 완전 무료 서비스. 시계, D-Day, 포모도로 등 20종 제공."
date: 2026-03-03 18:00
tags: ["project", "notion", "widget", "productivity", "nextjs", "side-project"]
image: /projects/notion-widgets/hero.png
---

Notion을 사용하면서 대시보드에 시계나 진행률 같은 위젯을 넣고 싶었는데, 기존 서비스들은 가입을 요구하거나 커스터마이징이 제한적이었다.

가입 없이 URL 쿼리 파라미터만으로 위젯을 커스터마이즈하고, Notion에 바로 임베드할 수 있는 서비스를 직접 만들기로 했다.

## 핵심 컨셉

**"URL = Single Source of Truth"** — 모든 위젯 설정이 URL 쿼리 파라미터에 저장된다. 별도의 가입이나 DB 저장 없이 URL 하나만 공유하면 누구든 같은 위젯을 볼 수 있다.

사용 흐름은 단순하다. **30초면 충분하다.**

1. 갤러리에서 위젯을 고른다
2. 색상, 테마, 언어, 표시 옵션을 커스터마이즈한다
3. 생성된 URL을 Notion의 `/embed` 블록에 붙여넣는다

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm
- **Deploy**: Vercel (한국 리전)

## 아키텍처

`Turborepo` 모노레포로 패키지를 분리하여 관리한다.

- `apps/web` — Next.js 앱 (랜딩, 갤러리, 커스터마이저, 임베드)
- `packages/widget-core` — 위젯 타입, 레지스트리, 파라미터 파싱, 공용 프리셋
- `packages/widgets` — 개별 위젯 구현체

위젯 추가 시 `registerWidget()`으로 등록하면 갤러리, 커스터마이저, 임베드 라우트가 자동 생성된다. 레지스트리 한 곳만 손대면 나머지가 따라오는 구조라, 출시 이후 위젯을 6종에서 **20종**까지 빠르게 늘릴 수 있었다.

## 위젯 갤러리

<img src="/projects/notion-widgets/gallery.png" alt="위젯 갤러리" style="width: 100%;" />

현재 **20종**의 위젯을 4개 카테고리로 제공한다.

- **시간** — 시계(디지털/플립), 세계 시계, 아날로그 시계, D-Day 카운트다운, 미니 캘린더, 기념일 카운터
- **생산성** — 라이프 프로그레스, 포모도로 타이머, 목표 링, 습관 히트맵, 포커스 워드, 오늘의 팁, 스타트업 원칙
- **라이프스타일** — 오늘의 명언, 날씨, 달의 위상, 오늘의 타로, 호흡 운동, 물 마시기 트래커
- **유틸리티** — 컬러 팔레트

카테고리 필터와 검색으로 원하는 위젯을 빠르게 찾을 수 있고, 각 카드의 미리보기는 실제 임베드와 동일하게 실시간으로 동작한다.

## 커스터마이저

<img src="/projects/notion-widgets/customizer.png" alt="커스터마이저" style="width: 100%;" />

좌측의 **라이브 프리뷰**는 실시간으로 동작하고, 우측 패널에서 옵션을 바꾸면 즉시 반영된다. 상단에는 위젯 ID와 권장 임베드 크기(예: `420 × 200`)를 함께 안내한다.

컨트롤은 위젯별로 다르게 구성되며 `color`, `select`, `toggle`, `date`, `text` 등의 컨트롤 타입을 조합한다. 예를 들어 시계 위젯은 **스타일**(미니멀 / 소프트 / 네온 / 글래스)과 **변형**(미니멀 / 플립), 시간 형식(12/24시간)까지 고를 수 있다.

언어와 날짜 형식은 공용 프리셋(`widget-core/presets.ts`)으로 관리하여 7개 언어(한국어, English, 日本語, 中文, Deutsch, Français, Español)를 모든 위젯에서 일관되게 지원한다.

하단의 임베드 URL을 복사해 Notion에 붙여넣으면 끝이다.

## 테마 시스템

<img src="/projects/notion-widgets/customizer-life-progress.png" alt="라이프 프로그레스 커스터마이저" style="width: 100%;" />

위젯별 옵션과 별개로, 모든 화면 우측 하단에 **테마 스위처**를 두어 강조 색상(6종)과 라이트/다크 모드를 한 번에 바꿀 수 있게 했다. 갤러리·커스터마이저·랜딩이 같은 토큰을 공유하므로, 고른 색상이 미리보기는 물론 사이트 전체에 즉시 반영된다.

위젯의 실제 임베드 모습은 이렇게 깔끔하다. 배경을 투명하게 처리해 Notion 페이지 어디에 붙여도 자연스럽게 녹아든다.

<img src="/projects/notion-widgets/widget-flip-clock.png" alt="플립 시계 위젯" style="width: 100%; max-width: 460px;" />

<img src="/projects/notion-widgets/widget-life-progress.png" alt="라이프 프로그레스 위젯" style="width: 100%; max-width: 420px;" />

## 다국어 지원과 검색 최적화

사이트 UI는 한국어/영어를 딕셔너리 패턴으로 지원한다. 외부 라이브러리 없이 `Dictionary` 타입과 `getDictionary()` 함수만으로 구현했고, 위젯 콘텐츠는 앞서 말한 공용 프리셋으로 7개 언어까지 확장된다.

검색엔진과 AI(ChatGPT, Perplexity, Google AI Overview)가 콘텐츠를 잘 수집할 수 있도록 구조화했다.

- `sitemap.xml`(hreflang) + `robots.txt` 자동 생성
- 각 라우트별 OG 메타태그 + `next/og` ImageResponse 동적 OG 이미지
- JSON-LD 구조화 데이터
- Google Search Console 등록

## 수익 모델

**"기능은 무료, 미학은 유료"** — 모든 위젯 기능은 무료로 제공하고, 워터마크 제거와 프리미엄 테마/폰트를 Pro(일회성 결제)로 제공할 예정이다.

## 결과

[widgets.doriri.dev](https://widgets.doriri.dev)

출시 시점 6종이던 위젯을 **20종**으로 늘리고 테마 시스템까지 더했다. "레지스트리에 등록만 하면 끝"이라는 초기 설계가 실제 확장에도 그대로 통했다.

`Turborepo` 모노레포 + `Next.js 16` 정적 생성으로 위젯·언어별 페이지를 미리 빌드하고, `Vercel` 한국 리전에 배포하여 빠른 응답 속도를 제공한다. 현재도 위젯 추가와 기능 개선을 이어가고 있다.

## 자주 묻는 질문

**가입이나 결제 없이 사용할 수 있나요?**
네. 모든 위젯 기능은 완전 무료다. 가입, 로그인, 신용카드 등록이 필요 없다.

**위젯 설정은 어디에 저장되나요?**
별도 DB나 서버에 저장되지 않는다. 모든 설정은 URL 쿼리 파라미터에 담겨 있어, URL 하나만 공유하면 동일한 위젯을 그대로 재현할 수 있다.

**Notion 외에 다른 서비스에도 사용할 수 있나요?**
embed URL을 지원하는 모든 서비스(Notion, Coda, 개인 웹사이트 등)에서 사용할 수 있다.

**몇 종의 위젯을 지원하나요?**
현재 시간, 생산성, 라이프스타일, 유틸리티 4개 카테고리에서 총 20종의 위젯을 제공한다.

**한국어 외 다른 언어를 지원하나요?**
한국어, English, 日本語, 中文, Deutsch, Français, Español 총 7개 언어를 지원한다.
