---
layout: post
tags: [dev-blog, javascript]
image: /covers/js.png
title: Javascript Prototype 이해하기 ( 작성중 )
author: minhyeong.jang
date: 2019-12-19 17:39
---

Javascript를 하신다면 한번 쯤은 `__proto__`라는 Object를 본 적이 있을 것이고 그냥 지나치는 경우가 대다수 입니다.
그러한 `__proto__`가 무엇이고 자바스크립트가 `prototype` 기반 언어라는 이유를 알아보도록 하겠습니다.

## Prototype

자바스크립트는 프로토타입 기반 언어라고 불립니다.  
모든 객체는 자신을 생성한 부모(객체 원형)의 연결고리를 갖게 되는데, 이때 자신을 생성하기 위해 사용된 객체 원형을 프로토타입이란 한다.
자바스크립트의 모든 객체는 Object 객체의 프로토타입을 기반으로 확장 되었기때문에 이 연결의 끝은 Object 객체의 프로토타입 Object 다.

즉 어떠한 객체가 만들어지기 위해 그 객체의 모태가 되는 녀석을 프로토타입이라고 한다.


## Prototype Object

모든 객체의 Constructor는 생성과 동시에 자신을 원형으로 하는 `Prototype Object` 라는 새로운 객체를 만들어냅니다. 이후 자신을 원형으로 만들어질 다른 객체가 참조할 프로토타입이 됩니다.
즉 객체 자신을 이용할 다른 객체들이 프로토타입으로 사용할 객체가 `Prototype Object` 입니다.


__proto__라는 prototype 에 대한 link는 상위에서 물려받은 객체의 프로토타입에 대한 정보이며
prototype 프로퍼티는 자신을 원형으로 만들어질 새로운 객체들 즉 하위로 물려줄 연결에 대한 속성이다.

## Prototype Link

__proto__



## 참고자료

[http://insanehong.kr/post/javascript-prototype/](http://insanehong.kr/post/javascript-prototype/)
[https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
[https://velog.io/@afant/Javascript-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-Prototype%EC%9D%98-%EA%B0%9C%EB%85%90-](https://velog.io/@afant/Javascript-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-Prototype%EC%9D%98-%EA%B0%9C%EB%85%90-)