---
layout: post
tags: [dev-blog, javascript, react]
image: /covers/js.png
title: 스크롤 맨 하단으로 이동
author: minhyeong.jang
date: 2020-01-17 14:10
---

채팅과 같이 메시지가 도착하면 최하단으로 계속 이동해야하는 경우나 단순 최하단으로 이동하고 싶을 때, 구현하는 방법입니다.

## 자바스크립트에서 스크롤 하단으로 이동

엘리먼트의 height만큼 scroll 위치를 이동합니다.

```js
// overflow 스크롤이 걸려있는 엘리먼트
const ele = document.querySelector("ul");

ele.scrollTop = ele.scrollHeight;
```

## React에서 응용하기

React에서 채팅 레이아웃에서 메시지가 들어올 때마다 최하단으로 이동하는 코드입니다.

```tsx
import React, { useRef, useEffect } from 'react';
import { useMessages } from 'Hooks';
...
const messagesRef = useRef<HTMLUListElement>(null); // 메시지 엘리먼트를 저장
const { messages } = useMessages(); // Custom Hooks : 메시지 리스트

useEffect(() => {
  messagesRef.current!.scrollTop = messagesRef.current!.scrollHeight;
}, [messages]);
...
return (
  <ul className="messages" ref={messagesRef}>
    {messages.map(message => {
      return (
        <li key={message.key}>
          ...
        </li>
      );
    })}
  </ul>;
)
```

firebase를 사용하고 있으며, 메시지를 구독하면 useMessages에서 messages를 내려줍니다. 이후 messages가 업데이트될 때 마다, ul 엘리먼트를 최하단으로 이동합니다.

만일 특별하게 최하단으로 이동하기 싫으시다면, useEffect 내에 if문으로 조건을 설정하시면 됩니다.
