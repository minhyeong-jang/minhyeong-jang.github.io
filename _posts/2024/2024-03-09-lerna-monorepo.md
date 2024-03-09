---
layout: post
tags: [develop, dev-etc]
image: /covers/algorithm.jpg
title: Lerna 모노레포 환경 구성
author: minhyeong.jang
date: 2024-03-09 20:05
published: true
---

lerna를 사용한 간단한 모노레포 설정


### 1. lerna 환경 구성
```bash
npx lerna init
```

### 2. lerna.json 수정
yarn workspace 기반으로 작업하기 위해 useWorkspaces 사용

```json
{
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true,
  "packages": [
    "packages/*"
  ]
}
```

### 3. package.json에 workspaces 추가

```json
"workspaces": [
  "packages/*"
]
```

### 4. 각 패키지 생성
```bash
lerna create [PACKAGE_NAME]
```

### 5. 공통 패키지 설치

```bash
yarn add eslint prettier typescript --dev --ignore-workspace-root-check
yarn add dayjs --ignore-workspace-root-check
```

개별 패키지에 설치방식
```bash
yarn workspace frontend add dayjs
```

### 6. 각 workspace에 패키지 설치
```bash
npx lerna bootstrap
```

### 7. workspace 명령어 실행
```bash
lerna run dev
```