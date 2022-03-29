---
layout: post
tags: [develop, style]
image: /covers/css.jpg
title: CSS Flex 세로 정렬
author: minhyeong.jang
date: 2020-01-08 10:51
---

HTML에서 세로 정렬은 다들 까다로워하는 부분입니다. `vertical-align: middle;`으로 알고 사용하지만, 특정한 환경(Table 등)이 아니라면 세로 정렬이 되지 않는 문제 때문입니다.  
이번 글에서는 `CSS flex`와 `align-items`를 사용하여 쉽게 세로정렬하는 방법을 알아봅니다.

## 세로/가로 가운데 정렬

```html
<div class="login-page">
  <div class="center">
    <h3>Login</h3>
    <form>
      <input />
      <input />
      <input />
    </form>
  </div>
</div>
```

위 예제에서 로그인 페이지 내에 내용을 가로/세로 정렬을 진행합니다.

```scss
.login-page {
  display: flex; // flex 사용
  height: 100vh; // 세로 높이를 화면 크기에 맞춤
  align-items: center; // 세로 정렬
  justify-content: center; // 가운데 정렬( 아래서 추가 설명 )
  margin: 0 auto; // 가운데 정렬
}
```

> justify-content 속성은 flex-direction 속성의 `진행 축` 정렬에 영향을 받는데, `flex-direction: row | row-reverse` 인 경우 `x축 정렬`을 제어합니다. `flex-direction: column | column-reverse` 인 경우 `y축 정렬`을 제어합니다.
