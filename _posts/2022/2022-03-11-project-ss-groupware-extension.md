---
layout: project
tags: [project]
image: /projects/ss-groupware-extension/banner.png
title: 그룹웨어 로그인 플러그인
author: minhyeong.jang
date: 2022-03-11 18:05
published: true
---

출퇴근 서비스를 만들었지만, 그룹웨어의 다른 기능들을 사용하려면 결국 그룹웨어 페이지에서 QR코드를 인증해야했다.

<img src="{{ site.image_url }}/projects/ss-groupware-extension/1.png" alt="그룹웨어 2차 인증" style="width: 50%;" />

나는 console에 스크립트를 입력하여 로그인하다보니 상관 없었지만, 다른 사람들에게 개발자 도구 켜서 스크립트 입력하세요라고 알려주기에는 비개발자들이 접근하기 어려웠다.

## 크롬 플러그인

처음에는 출퇴근 페이지에서 한번에 처리하는게 편하다고 생각했지만, CORS 이슈와 쿠키 셋팅하는 부분에서 우회하는 처리가 까다로웠다.

시간을 많이 소요하기에는 임펙트가 없다고 생각하기에 플러그인으로 CORS를 해결하고 API를 다이렉트로 호출하여 setCookie를 받으면 빠르게 작업 처리가 가능하다고 판단하여 크롬 플러그인 형태로 진행했다.

## 결과물

<img src="{{ site.image_url }}/projects/ss-groupware-extension/2.png" alt="그룹웨어 로그인 플러그인" style="width: 50%;" />
<img-info>그룹웨어 로그인 플러그인</img-info>
