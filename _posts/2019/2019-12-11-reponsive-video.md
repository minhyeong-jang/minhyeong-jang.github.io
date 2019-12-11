---
layout: post
tags: [dev-blog, react]
image: /covers/react.png
title: 동영상 비율에 맞춰 사이즈 변경하기
author: minhyeong.jang
date: 2019-12-11 18:20
---

동영상 플레이어 중 영상의 비율을 맞춰주기 위해 영상의 세로가 긴 화면은 양쪽에 검은색 여백이, 영상의 가로가 긴 화면은 상하단에 검은색 여백이 생성되는 플레이어들이 있습니다.

검은색 여백은 video 태그에 width: 100% or height:100% 중 어떤 속성인지로 적용됩니다.

여기서 `video 태그를 감싸고 있는 div보다 video 태그의 height가 높아지면 height를 100%로 고정`하여 양 옆에 여백을 생성하고, `width가 높아지면 width를 100%로 고정`하여 상하에 여백을 생성합니다.

## 동영상의 비율을 수정하자

useRef를 사용해도 무방합니다.

- `useLayoutEffect`를 사용하여 화면의 `resize를 감지`하고 함수를 실행합니다.
- updateSize 함수에서 `video 사이즈와 video-wrap 사이즈를 비교`하고 클래스를 적용합니다.
  - contains로 현재 클래스를 비교한 이유는 이미 적용되어있기 때문에 if문을 거쳐도 변화가 없기 때문입니다.

```jsx
import React, { useLayoutEffect } from "react";

const Video = () => {
  const updateSize = () => {
    const videoWrap = document.querySelector("#video-wrap");
    const video = document.querySelector("#video");
    if (!video.classList.contains("is-vertical") && video.offsetHeight > videoWrap.offsetHeight) {
      video.classList.add("is-vertical");
    } else if (video.classList.contains("is-vertical") && video.offsetWidth > videoWrap.offsetWidth) {
      video.classList.remove("is-vertical");
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div id="video-wrap">
      <video id="video" />
    </div>
  );
};

export default Video;
```

**CSS**

```css
video {
  width: 100%;
}
video.is-vertical {
  width: auto !important;
  height: 100%;
}
```
