---
layout: post
tags: [develop, react]
image: /covers/react.png
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

gh-pages 모듈을 설치 후 package.json에서 아래 내용을 추가해주세요.

```json
{
  "homepage": ".",
  ...
  "scripts": {
    ...
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

## gh-pages 배포

```bash
yarn run deploy
```

만약 deploy 명령어로 배포 시 gh-pages 브랜치를 생성하는 과정에서 오류가 발생할 수도 있다.  
git branch로 조회해도 없는 gh-pages가 이미 존재한다는 오류는 새롭다..

이럴 때는 당황한 뒤에 gh-pages 브랜치를 직접 생성한 후 push 해보자.

```
git checkout -b gh-pages
git push --set-upstream origin gh-pages
yarn run deploy
```

## 확인

배포가 완료되면, gh-pages branch가 생성되어 있습니다.
Github에서 해당 프로젝트로 이동 후 `Settings -> 하단 GitHub Pages` 메뉴를 보시면 배포 된 깃헙 페이지 링크를 확인할 수 있습니다.
