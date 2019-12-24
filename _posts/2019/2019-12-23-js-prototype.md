---
layout: post
tags: [dev-blog, javascript]
image: /covers/js.png
title: Javascript Prototype 이해하기
author: minhyeong.jang
date: 2019-12-19 17:39
---

자바스크립트는 프로토타입 기반 객체지향 언어라고 불립니다. 그리고 여러분들은 한번 쯤은 `__proto__`라는 Object를 본 적이 있을 것이고 그냥 지나치는 경우가 대다수일 것 입니다.  
그러한 `__proto__`가 무엇이고 자바스크립트가 `prototype` 기반 언어라는 이유를 알아보도록 하겠습니다.

## Prototype

자바스크립트에서 모든 객체는 부모(객체 원형)와 연결되어 있습니다. 그리고 객체 지향에서 상속 개념과 동일하게 부모의 프로퍼티와 메소드를 상속받아 사용할 수 있게 됩니다. 여기서 부모 객체를 `Prototype 객체 또는 Prototype`이라고 부릅니다.

간단한 예제를 통해 알아봅니다.

```js
var item = {
  key: 'key'
};
console.log(item);
{
  key: "key"
  __proto__: {     // item 객체의 Prototype(부모 객체) 정보
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    ...
  }
}
console.log(item.hasOwnProperty('key')); // true
```

item 객체를 출력하여 `__proto__` 프로퍼티를 열어보면 자바스크립트의 Object 객체가 부모이며,
item 객체에서 선언하지 않은 hasOwnProperty 메소드를 상속받아 사용이 가능합니다.

## __proto__ ?

위에서 생각할 수 있는 부분은 '아 `__proto__` 프로퍼티를 통하여 부모 객체에 접근할 수 있구나'라는 것을 알 수 있습니다.

모든 객체에는 `인터널 슬롯(internal slot)`을 가지게 되는데, 인터널 슬롯이 바로 `__proto__` 프로퍼티 입니다.  
`__proto__` 프로퍼티는 Prototype Link라고도 불리며, 자신의 부모객체(프로토타입 객체)의 prototype을 가리키게 됩니다.

```js
var item = {};
console.log(item.__proto__ === Object.prototype); // true
```

> `__proto__` 프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환합니다.

## Prototype Object

모든 객체는 언제나 함수(Function)으로 시작됩니다. 일반적으로 사용하는 객체 또한 아래처럼 함수형태입니다.

```js
var item = {}; // literal 방식
var item = new Object();
```

그리고 함수가 정의될 때, 다음과 같은 일이 일어납니다.

1. Constructor(생성자) 자격 부여

Constructor의 자격이 부여되면 new를 통하여 객체를 만들어 낼 수 있습니다.

```js
function item() {}
console.log(item.constructor); // ƒ Function() { [native code] }
```

2. `Prototype Object` 생성

Constructor는 생성과 동시에 자신을 원형으로 하는 `Prototype Object` 라는 새로운 객체를 만들어냅니다.

`Prototype Object`이란 객체 자신을 이용할 자식 객체들이 프로토타입으로 사용할 객체입니다.  
그리고 자식 객체들은 `__proto__`로 접근할 수 있게 됩니다.

```js
var item = {};
console.log(item.__proto__ === Object.prototype); // true
```

item에서 프로토타입의 접근은 Object에서 생성된 `Prototype Object` 객체인 `Object.prototype`와 동일합니다.

## Prototype Chain

자바스크립트는 특정 객체의 프로퍼티나 메소드를 접근할 때 해당 객체에 접근하려는 대상이 없다면 `__proto__`가 가르키는 링크를 따라 프로토타입 객체를 차례대로 검색하게 됩니다. 이것을 프로토타입 체인이라고합니다.

```js
function item() {}
item.prototype.key = "itemKey";

var item2 = new item();
console.log(item2.key); // itemKey
```

> 자바스크립트의 모든 객체는 Object 객체의 프로토타입을 기반으로 확장되었기 때문에 모든 연결의 끝은 Object 객체의 프로토타입입니다.

## 어디다가 사용하지..?

개인적으로 상속을 활용한 코딩을 하면 좋을 것 같습니다.

```js
function test() {
  this.a = 1;
  this.b = 2;
  this.c = 3;
}
var A = new test();
var B = new test();
var C = new test();
```

위와 같이 선언한다면, new로 객체를 생성할 때 마다 내부 변수가 3개씩 할당됩니다.  
이를 prototype를 활용하여 아래와 같이 코딩하게되면 별다른 선언 없이 변수를 상속받아 사용이 가능합니다.

```js
function test() {}
test.prototype.a = 1;
test.prototype.b = 2;
test.prototype.c = 3;
var A = new test();
var B = new test();
var C = new test();
console.log(A); // test {}
console.log(A.a); // 1
console.log(B.a); // 1
console.log(C.C); // 3
```

A, B, C의 경우에는 test function의 prototype을 바라보고 있기 때문에 해당 데이터를 가져올 수 있게됩니다.

## 그리고..

prototype은 면접다니다보면 항상 나오는 질문입니다. 그만큼 자바스크립트의 동작 원리를 위한 필수 개념입니다.
현재 배운 부분은 매우 일부라고 생각하며 계속 배우면서 추가해야겠습니다.

## 참고자료

[Javascript 기초 - Object prototype 이해하기](http://insanehong.kr/post/javascript-prototype/)
[[Javascript ] 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
[[Javascript] 꼭 알아야 할 Prototype의 개념](https://velog.io/@afant/Javascript-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-Prototype%EC%9D%98-%EA%B0%9C%EB%85%90-)
[프로토타입](https://poiemaweb.com/js-prototype)