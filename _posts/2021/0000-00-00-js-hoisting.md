---
layout: post
tags: [dev-blog22, javascript]
image: /covers/js.png
title: Javascript 호이스팅(Hoisting) 이해하기
author: minhyeong.jang
date: 2019-12-27 17:39
---

많은 개발자들이 `변수의 선언을 위로 끌어올린다는 것이 호이스팅이다` 정도만 알고 왜 호이스팅이 발생하는지 모르고 있다.  
간단하게 호이스팅이 무엇인지, 왜 발생하는지를 이번 자료에서 설명한다.

## 호이스팅(Hoisting)?

호이스팅을 `변수 선언과 함수가 최상단으로 이동한다`라고 가르치고 배우는 개발자들은 많다.  
호이스팅으로 가장 많이 보는 예제이다.

```js
num = 6;
console.log(num + 7); // 13
var num;
```

위와 같이 작성해도 오류가 나지않고, 연산 또한 정상적으로 진행된다.  
사람들은 여기서 `var num;이 최상단으로 올라가서 그래`라고 말한다.

```js
var num; // 선언이 맨 상단으로 올라와 !
num = 6;
console.log(num + 7); // 13
```

물론 최상단으로 이동하는 것 처럼 볼수도 있지만, 자바스크립트의 실행 컨텍스트를 알면 다르다.

실행 컨텍스트란
