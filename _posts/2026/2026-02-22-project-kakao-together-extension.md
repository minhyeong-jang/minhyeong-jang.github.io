---
layout: project
tags: [project]
image: /covers/github.png
title: 카카오같이가치 자동 참여 크롬 익스텐션
author: minhyeong.jang
date: 2026-02-22 18:00
published: true
---

카카오같이가치는 카카오가 운영하는 사회공헌 플랫폼으로, 좋아요와 댓글만으로도 기부에 참여할 수 있는 서비스다.

매일 접속해서 참여하면 좋겠지만, 수백 개에 달하는 기부 항목을 매번 수동으로 처리하는 것은 현실적으로 어렵다.  
자동화 기술을 활용하면 꾸준하게 참여할 수 있겠다는 생각에 크롬 익스텐션으로 개발하게 됐다.

## 기술 스택

- **Extension**: Chrome Manifest V3, Service Worker
- **Frontend**: React 18
- **Build**: Vite 5

## CORS 문제 해결

크롬 익스텐션 환경에서 카카오 API를 직접 호출하면 CORS 오류가 발생한다.  
Extension의 Origin이 `chrome-extension://...` 형태이기 때문에 카카오 서버에서 요청을 거부한다.

이를 해결하기 위해 `declarativeNetRequest API`를 활용하여 요청 헤더를 자동으로 교체했다.

```json
{
  "action": {
    "type": "modifyHeaders",
    "requestHeaders": [
      {
        "header": "Origin",
        "operation": "set",
        "value": "https://together.kakao.com"
      }
    ]
  },
  "condition": {
    "urlFilter": "*together*kakao.com*",
    "resourceTypes": ["xmlhttprequest"]
  }
}
```

`rules.json`을 통해 글로벌 규칙을 적용하니 fetch 호출 코드에서 헤더를 별도로 관리할 필요가 없어졌다.

## 자동화 로직

핵심 자동화는 Service Worker(`background.js`)에서 처리한다.

**실행 흐름:**

1. **기부 목록 수집**: 전체 페이지를 순회하며 진행 중인(`STATUS_FUNDING`) 항목 수집
2. **중복 필터링**: `chrome.storage`에 저장된 참여 기록과 비교하여 미참여 항목만 선별
3. **순차 처리**: 좋아요 → 댓글 순으로 처리, 항목 간 1~2초 랜덤 지연 적용
4. **기록 저장**: 완료된 항목 ID를 영구 저장소에 기록

스케줄링은 `chrome.alarms API`를 사용해 6시간마다 자동 실행되도록 설정했다.

이미 참여한 항목을 만나면 이후 항목들은 모두 처리된 것으로 판단하고 수집을 중단하는 **최적화 로직**도 넣었다.  
이 덕분에 매 실행마다 22페이지를 모두 순회하지 않아도 된다.

## UI 구성

팝업과 옵션 페이지를 각각 React 컴포넌트로 분리하여 개발했다.

- **팝업**: 현재 실행 상태, 마지막 실행 시간, 수동 즉시 실행 버튼
- **옵션 페이지**: 자동화 활성화 토글, 댓글 메시지 커스터마이징, 실행 로그 확인

댓글은 기본 5가지 메시지에서 랜덤 선택되며, 옵션 페이지에서 추가/삭제가 가능하다.

## 결과

총 200개 이상의 기부 항목에 자동 참여할 수 있게 됐다.  
처음 실행 시 전체 항목 처리에 약 10~15분이 소요되며, 이후 실행부터는 신규 항목만 처리해 훨씬 빠르게 동작한다.
