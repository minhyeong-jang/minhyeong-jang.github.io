---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/github.png
title: Github Page에 Google Adsense 등록하기
author: minhyeong.jang
date: 2021-03-10 19:40
---

홈페이지가 어느정도 정리되어 Google Adsense를 등록하려고 한다.  
등록하다보니 '어차피 광고 자동 삽입을 사용하지 않을거면 처음부터 진행할걸..'이라는 생각이 들었으나 지나간 이야기니까..

`다른 사람들은 처음부터 등록하고 시작하는걸 추천한다.`

참고로 자동광고를 사용하지 않으려는 이유는 본문 내에 광고를 넣을 경우 뜬금없이 튀어나와 본문의 가독성을 떨어트린다.  
예를들어 코드를 올리고 내용을 설명하는데, 코드와 내용 사이에 광고가 튀어나와 흐름도 끊기도 간격이 넓어져 읽기도 힘들게 된다.

서론이 길었고, 아무튼 Adsense를 등록해보자.

{% include adsense.content.html %}

## Adsense 등록하기

1. https://www.google.com/adsense/ 에 로그인한다.
2. 좌측 `사이트 탭`으로 이동하여 `사이트 추가` 버튼을 클릭하여 진행한다.
3. Adsense가 제공한 `스크립트 코드`를 삽입한다.

타이틀만 거창했고, 아무것도 없다.

이렇게 진행하면 몇일 뒤 메일도 오고 `준비됨` 상태로 변경된다.

준비됨으로 변경되면 `ads.txt`를 업로드 해달라고 하는데, Adsense에 올라온 파일을 다운로드 받거나 내용을 복사하여 `루트 디렉토리` 안에 추가한다.

{% include adsense.content.html %}
