---
layout: post
tags: [dev-blog, react]
image: /files/covers/react.png
title: React Github Pages 배포
author: minhyeong.jang
date: 2019-12-02 14:26
---

Github에서 리액트 앱을 공유할 때, 서버 없이 간단하게 Github Page로 공유가 가능합니다.

## gh-pages 모듈 설치

```bash
yarn add --dev gh-pages
```

## package.json 수정

gh-pages 모듈을 설치하면, scripts를 설정하라고 나타나는데, 아래 설정을 적용하면됩니다.

```json
{
  ...
  "scripts": {
    ...
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
  ...
}
```

## gh-pages 배포

```bash
yarn run deploy
```

## 확인
배포가 완료되면, gh-pages branch가 생성되어 있습니다.
Github에서 해당 프로젝트로 이동 후 `Settings -> 하단 GitHub Pages` 메뉴를 보시면 배포 된 깃헙 페이지 링크를 확인할 수 있습니다.