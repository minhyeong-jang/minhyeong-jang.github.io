---
title: "Interv — 코로나 시대, 마음을 행성에 띄우는 감정 공유 서비스"
date: 2021-12-01 12:00
tags: ["project"]
image: /projects/interv/main.png
published: true
---

코로나로 사람들이 만나지 못하고, 소통하지 못하던 시절. 각자의 마음과 생각을 우주에 던지듯 하나의 행성으로 띄우는 서비스를 만들었다.

## 컨셉

"나만의 행성에 띄우는 코로나 일상 이야기" — 사용자가 자신의 감정과 일상을 글로 작성하면, 그 이야기가 하나의 행성이 되어 우주 공간에 떠다닌다. 다른 사람의 행성을 탐험하며 공감 이야기를 남길 수 있다.

직접 만나지 못하는 상황에서, 서로의 마음을 우주라는 공간 안에서 간접적으로 나누는 경험을 설계했다.

## 주요 화면

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 0 0 24px;">
  <img src="/projects/interv/main.png" alt="메인 — 우주정거장과 행성 탐험" style="width: 100%; border-radius: 8px;" />
  <img src="/projects/interv/write.png" alt="행성 만들기 — 감정 해시태그 선택" style="width: 100%; border-radius: 8px;" />
  <img src="/projects/interv/detail.png" alt="행성 상세 — 감정 해시태그와 공감 이야기" style="width: 100%; border-radius: 8px;" />
  <img src="/projects/interv/shared.png" alt="행성 공유 — SNS 공유와 이야기 복사" style="width: 100%; border-radius: 8px;" />
</div>

- **메인**: 우주정거장과 행성들이 보이고, "행성 탐험"으로 다른 사람의 행성을 둘러볼 수 있다
- **행성 만들기**: 3단계 스텝으로 감정 해시태그를 선택하고 이야기를 작성하면 나만의 행성이 생성된다
- **행성 상세**: 작성자의 이야기와 감정 해시태그, 공감 이야기(댓글)를 볼 수 있다
- **공유**: 트위터, 페이스북, 카카오톡, 링크 복사로 내 행성을 공유. 감정에 따라 행성의 색상과 텍스처가 다르게 생성된다

## 작업 범위

프론트엔드와 백엔드를 모두 담당했다.

- **프론트엔드**: React 기반 모바일 웹 페이지 개발
- **백엔드**: Node.js 서버 구축
- **기능**: 행성 만들기, 리스트/상세 보기, 이미지 다운로드 및 SNS 공유, 공감 이야기(댓글)

## 기술 스택

- **Frontend**: React
- **Backend**: Node.js
- **Deploy**: AWS
