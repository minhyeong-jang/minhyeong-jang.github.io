---
layout: post
tags: [dev-blog, react]
image: /covers/react.png
title: creact-react-app :: CSS Module 사용하기
author: minhyeong.jang
date: 2020-01-06 10:59
---

이전 프로젝트에서는 webpack을 eject하여 CSS module을 사용했지만, 이번 프로젝트에서는 eject 작업을 하지 않고 진행하기 때문에 방법을 찾아보았다.

## CSS Module 적응 전에는..?

Module을 적용하지 않는다면, 최상단 App.jsx 또는 컴포넌트에서 scss 파일을 호출합니다.

```jsx
// index.tsx or App.tsx
import './index.scss';
```

또한 클래스명이 기존 html처럼 class="container" 형태로 들어가기 때문에 css/scss 파일을 컴포넌트별로 생성했음에도 스타일 명이 충돌하는 불편함이 있습니다.

## 그렇다면 CRA에서 CSS Module은 어떻게 적용하지?

css/scss 파일명을 module.css, module.scss로 변경합니다.  
예를들어 index.scss는 `index.module.scss` 가 됩니다.

이후 컴포넌트에서는 다음과 같이 사용합니다.

```tsx
import React from "react";
import styles from "./index.module.scss";
...
  return (
   <div id={styles.container}>
      <div className={styles.messageWrap}>
      </div>
    </div>
  )
...
```

scss는 기존처럼 사용하시면 되며, `id, class`의 컴파일 결과를 확인하시면 scss 파일의 이름 혹은 폴더 이름으로 유니크하게 생성된 것을 확인할 수 있습니다.

아래는 컴파일 결과의 예시입니다.

```tsx
// components/Pages/index.module.scss 
#loginPage {
  display: block;
}

// components/Pages/LoginPage.tsx
import styles from "./index.module.scss"
...
return (
  <div id={styles.loginPage}>
);

=> <div class="Pages_LoginPage__2Jrev" />
```

감사합니다.