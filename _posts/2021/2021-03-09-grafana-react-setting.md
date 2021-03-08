---
layout: post
tags: [dev-blog, react]
image: /covers/react.png
title: Grafana Plugin With React 셋팅하기
author: minhyeong.jang
date: 2021-03-09 01:30
---

Grafana Plugin을 React로 개발하여 배포하는 방법을 설명한다.

#### 작업환경

```json
OS: Mac
node: >= 14.0
grafana: >= 7.0
```

## 시작하기

### Grafana 설치하기

[Grafana 설치 가이드 문서](https://grafana.com/docs/grafana/latest/installation/requirements/)  
Ubuntu, Docker 등 OS 별 설치방법 문서가 존재한다.

```bash
brew update
brew install grafana
```

### Grafana 프로젝트 생성

프로젝트 구조는 `grafana-toolkit`를 사용한다.  
grafana-toolkit은 creact-react-app 처럼 초기 프로젝트를 구축하기 위한 `CLI`이다.  
맨
설치하는 과정에서 plugin, author 등은 원하는 형태에 맞춰서 작성하면 되며, 플러그인 이름은 신중하게 입력해보자.

```bash
npm install -g @grafana/toolkit

npx @grafana/toolkit plugin:create [project-name]

cd graph-plugin
npm install
```

`( 프로젝트를 grafana에 연동하는 부분은 아래에서 진행한다. )`

### 실행하기

설치한 grafana 서비스를 실행한다.

```bash
brew services start grafana
```

기본적으로 `localhost:3000`로 포트가 열린다. 초기 계정은 `admin/admin` 이다.

## 개발셋팅

프로젝트를 생성했고 grafana service 가 동작한다면, 프로젝트를 플러그인에 연동해야한다.

### grafana ini 설정

grafana 설정파일에서 plugin path를 연결한다.

```bash
vim /usr/local/etc/grafana/grafana.ini

[paths]
plugins = [Grafana Project Path]
```

이때, `[paths] 아래에 추가`해야한다. 맨 상단 혹은 맨 하단에 작성 시 작동되지 않는다.

### 실행하기

설치한 grafana 서비스를 재실행한다.

```bash
brew services restart grafana
```

서비스를 재 실행한 이후 `localhost:3000/plugins`로 이동하여 npx로 생성 당시 입력한 플러그인 이름을 검색하여 정상적으로 보이는지 확인해보자.

## 본격적인 개발은?

이제 프로젝트를 생성하고 플러그인을 연동했다.  
yarn dev? yarn watch?? 아직 시작조차 하지 않았다.

다음 글에서 grafana 플러그인 개발을 시작한다.

## 참고자료

사실 엄청 많지만, 검색하다가 복붙하는걸 까먹었다..

[https://grafana.com/tutorials/build-a-panel-plugin/#1](https://grafana.com/tutorials/build-a-panel-plugin/#1)  
[https://grafana.com/blog/2019/03/26/writing-react-plugins/](https://grafana.com/blog/2019/03/26/writing-react-plugins/)  
[https://www.youtube.com/watch?v=Y31wnP_jDBY&feature=emb_title](https://www.youtube.com/watch?v=Y31wnP_jDBY&feature=emb_title)
