---
layout: post
tags: [dev-blog, react]
image: /covers/js.png
title: Grafana Plugin With React 개발/배포
author: minhyeong.jang
date: 2021-03-08 16:00
---

Grafana Plugin을 React로 개발하여 배포하는 방법을 설명한다.

## 개발환경

# Grafana 설치하기

[Grafana 설치 가이드 문서](https://grafana.com/docs/grafana/latest/installation/requirements/)  
Ubuntu, Docker 등 OS 별 설치방법 문서가 존재한다.

## grafana 설치 ( macOS )

```bash
brew update
brew install grafana
```

## 프로젝트 설치

프로젝트 구조는 grafana-toolkit를 사용한다.

grafana-toolkit은 creact-react-app처럼 초기 프로젝트를 구축하기 위한 CLI이다.

### @grafana/toolkit

```bash
npm install -g @grafana/toolkit

npx @grafana/toolkit plugin:create grafana-react
cd graph-plugin
npm install
```

# 실행하기

```bash
// grafana server 실행
brew services start grafana

```

설치하는 과정에서 plugin, author 등은 원하는 형태에 맞춰서 작성하면 된다.

## 참고자료

https://grafana.com/tutorials/build-a-panel-plugin/#1

https://grafana.com/blog/2019/03/26/writing-react-plugins/

https://www.youtube.com/watch?v=Y31wnP_jDBY&feature=emb_title
